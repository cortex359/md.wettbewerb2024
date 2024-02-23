import smtplib, ssl

port = 25
smtp_server = "smarthost-tls.rwth-aachen.de"
sender_email = "compute@tsunami.lfi.rwth-aachen.de"
receiver_email = "christian.thelen@rwth-aachen.de"

message = """\
Subject: Python Message

This message is sent from Python."""

context = ssl.create_default_context()
with smtplib.SMTP(smtp_server, port) as server:
    server.starttls(context=context)
    #server.login(sender_email)
    server.sendmail(sender_email, receiver_email, message)
