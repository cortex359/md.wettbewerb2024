import re
import time
from Team import Team, get_page
from colorama import Fore, Back, Style
import locale
import os
from datetime import datetime
from notification import send_notification

groups = ['tau', 'tetris-for-the-win', 'phoenix', 'fabsch-225', 'nullptr', 'code-mates', 'koeln', 'map-maniac', 'horst', 'arli']
ignore_groups = ['md-demo']

save_path = './data/'

def create_team_list(no_cache=False) -> (dict[str, Team], list[Team]):
    teams: dict[str, Team] = {}
    ranking: list[Team] = []

    # <tr><td>1.</td><td><a href="groups/koeln/" target="_top">koeln</td><td align=right>50</td><td align=right>7876</td></tr>\n<tr>
    matches = re.findall(r'groups/([0-9a-z_-]+)/"(?:[^>]+>){3}([0-9]+|&nbsp;)(?:[^>]+>){2}([0-9]+)(?:</td></tr>)', get_page("", no_cache=no_cache))

    for g in matches:
        group_name = g[0]
        bonus = 0 if g[1] == '&nbsp;' else int(g[1])
        score = int(g[2])

        if group_name in ignore_groups:
            continue
        if group_name not in groups:
            print(f'{Fore.BLUE}[INFO] New group seen: {Style.BRIGHT}{g}{Style.RESET_ALL}')

        _team = Team(name=group_name, score=score, bonus=bonus)
        teams[group_name] = _team
        ranking.append(_team)

    return teams, sorted(ranking, reverse=True)

def read_score_log() -> list[list[str]]:
    with open(os.path.join(save_path, 'scores.log'), 'r') as f:
        return sorted([line.split() for line in f.readlines() if line.strip() != ''], reverse=True, key=lambda x: float(x[0]))

def append_score_log(team: Team, date: datetime):
    with open(os.path.join(save_path, 'scores.log'), 'a') as f:
        f.write(f'{date.timestamp()} {team.name} {team.score} {team.bonus}\n')

def get_last_score(scores: list[list[str]], team: Team) -> (datetime, int, int):
    for s in scores:
        if s[1] == team.name:
            return datetime.fromtimestamp(float(s[0])), int(s[2]), int(s[3])
    return 0, 0, 0

def get_max_score(scores: list[list[str]], team: Team) -> (datetime, int):
    max_score = 0
    on_date: datetime = datetime.now()
    for s in scores:
        if s[1] == team.name:
            if int(s[2]) > max_score:
                max_score = int(s[2])
                on_date = datetime.fromtimestamp(float(s[0]))
    return on_date, max_score

def refresh_scores(last_modified_time: datetime):
    teams, ranking = create_team_list(no_cache=True)
    score_log = read_score_log()

    mail_subject = ""
    prepare_mail = "Scores from " + last_modified_time.strftime('%Y-%m-%d %H:%M:%S') + ":\n\n"
    tetris_updated = False
    send_mail = False
    for team in ranking:
        last_score_date, last_score, last_bonus = get_last_score(score_log, team)

        if last_score != team.score or last_bonus != team.bonus:
            append_score_log(team, last_modified_time)
            if last_score == 0:
                print(f'{Fore.GREEN}[SCORE] Team {Style.BRIGHT}{team.name}{Style.NORMAL} hinzugefügt mit score {team.score} (+{team.bonus})!{Style.RESET_ALL}')
                send_mail = True
            elif last_score < team.score or last_bonus < team.bonus:
                print(f'{Fore.GREEN}[SCORE] {team.name} {last_score}+{last_bonus} -> {team.score}+{team.bonus} :: total score ↑ {team.score + team.bonus - last_score - last_bonus}{Style.RESET_ALL}')
                send_mail = True
            elif last_score > team.score:
                print(f'{Fore.RED}[SCORE] {team.name} {last_score}+{last_bonus} -> {team.score}+{team.bonus} :: score ↓ {team.score + team.bonus - last_score - last_bonus}{Style.RESET_ALL}')

            max_score_date, max_score = get_max_score(score_log, team)
            if max_score > team.score:
                print(f'{Fore.BLUE}[SCORE] {team.name} max score {max_score} was on {max_score_date}{Style.RESET_ALL}')

            if team.name == "tetris-for-the-win" and team.score != last_score:
                tetris_updated = True

            prepare_mail = f"{prepare_mail}{team.name:>18s}: {last_score + last_bonus:9,d} -> {team.score + team.bonus:9,d}\n"
        else:
            prepare_mail = f"{prepare_mail}{team.name:>18s}: {team.score + team.bonus:9,d}\n"

    mail_subject = f'Platz 1: {ranking[0].name} mit {ranking[0].score + ranking[0].bonus:,d} Punkten'
    if tetris_updated:
        mail_subject = f'Tetris neuer Score ist {teams["tetris-for-the-win"].score + teams["tetris-for-the-win"].bonus:,d}, lol.'
    if ranking[0].name == "tau":
        mail_subject = f'Platz 1: {ranking[0].name} mit {ranking[0].score + ranking[0].bonus:,d} Punkten. =D'
    mail_subject = mail_subject.replace(",", ".")

    if send_mail:
        print(f'{Fore.GREEN}[MAIL] Sending mail with Subject "{mail_subject}".{Style.RESET_ALL}')
        send_notification(mail_subject, prepare_mail.replace(",", "."))


if __name__ == "__main__":
    score_log = read_score_log()
    teams, ranking = create_team_list()
    for team in ranking:
        bonus_str = f'{team.bonus:,d}' if team.bonus > 0 else ''
        score_str = f'{team.score:,d}'

        # format with . as thousands separator
        bonus_str = f'{bonus_str.replace(",", "."):>7}'
        score_str = f'{score_str.replace(",", "."):>7}'

        last_score_date, last_score, last_bonus = get_last_score(score_log, team)
        if team.score > last_score:
            score_str = f'{Fore.GREEN}{score_str}{Style.RESET_ALL}'
        elif team.score < last_score:
            score_str = f'{Fore.RED}{score_str}{Style.RESET_ALL}'
        if team.bonus > last_bonus:
            bonus_str = f'{Fore.GREEN}{bonus_str}{Style.RESET_ALL}'
        elif team.bonus < last_bonus:
            bonus_str = f'{Fore.RED}{bonus_str}{Style.RESET_ALL}'

        max_score_info = ''
        max_score_date, max_score = get_max_score(score_log, team)
        if max_score > team.score:
            max_score_str = f'{max_score:,d}'.replace(',', '.')
            max_score_info = f'{Fore.BLUE} (max {max_score_str} on {max_score_date}){Fore.RESET}'

        print(f'{team.name:>18s} {score_str} {bonus_str} {max_score_info}')
