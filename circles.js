// result_files/Population_Density_Afro-Eurasia_score_4288.615783.txt
// Score: 4288.62 (n=133, k=554, overlap=9.15, distance=50.04, angle=22.63)
const k = 554;
const circleData = `
-0.519931387857 5.941215031111 0.5695392874947230 HRV 0
4.122393719669 5.239856425949 0.6010407640085645 UZB 1
3.168540727235 4.068982611115 0.5279678020485709 BGR 2
-2.622002535294 -0.156391167127 0.1000000000000000 ESH 3
-1.349408235644 -2.694903214978 0.5261891294962288 GNQ 4
1.810057045553 6.070180334009 0.6082762530298207 SRB 5
-3.617205920551 -0.568952135277 0.6204836822995419 BFA 6
-1.632152355748 -4.122056716651 0.8681877677092635 TGO 7
4.782849311685 4.214678855710 0.2499999999999995 TKM 8
5.529299298915 6.622894376263 0.3648629879831597 LVA 9
-0.892631441913 9.179167359581 1.0392304845413272 DEU 10
8.993032880876 -1.469574964781 0.7976528066771921 THA 11
4.345336405385 3.141668253597 0.7553972464869031 AZE 12
6.653941972404 3.621383036380 0.8276472678623421 CHN 13
-0.698164951676 -2.837663202805 0.2076655965729516 GAB 14
7.511282955755 1.798828188208 1.1887493427968736 PAK 15
2.551616729344 -3.465055528415 1.6085707942145366 RWA 16
2.123104030667 1.811379813826 0.7570501964863351 SYR 17
0.079028814713 -4.867647686969 0.3544361719689447 ZMB 18
0.801821358763 9.956658854433 0.8181534085976792 DNK 19
6.638899850119 5.489199256440 0.9880536422684734 NPL 20
-1.742098443907 1.013170738996 0.6025985396596966 TUN 21
7.512156367065 -5.269758446451 2.4530593144072133 BGD 22
5.826806068292 4.526317753620 0.3984344362627299 KGZ 23
-0.628407569947 0.567824350389 0.7163274390947180 EGY 24
-2.079154036010 0.113130153631 0.2947456530637894 DZA 25
-1.428111571572 0.084403029476 0.3122498999199192 NER 26
5.603271845572 2.743668666051 0.5414101956926926 AFG 27
3.543130672714 -1.309950558905 0.5437140792732874 YEM 28
-6.546943213381 3.585700485120 0.7119515432949045 PRT 29
-0.027135836216 -2.846344806639 0.4520785330006270 COD 30
5.787078074044 0.632733705041 1.0467210707729147 KWT 31
-12.685143600461 -2.983683574006 4.6659672094861424 GIB 32
9.641740626932 -0.197855584909 0.6595452979136422 KHM 33
9.996581336942 -2.546045148616 0.8181534085976792 IDN 34
5.384418868786 3.759994801975 0.5755432216610650 TJK 35
-5.167743247810 -3.201212568772 0.7428828979051826 SLE 36
3.086068517427 2.725507121873 0.7044501401802687 TUR 37
4.829140233014 6.342989275748 0.4602988159880482 BLR 38
0.618141582416 6.186424551882 0.7097534783289209 HUN 39
2.295936173717 4.629904698016 0.6118619125260183 MKD 40
11.218662730896 -0.433930374621 0.6234981956669935 BRN 41
-0.202071933588 -6.357496595416 0.4749999999999989 ZAF 42
-0.663296650379 -0.675132812746 0.2561737691489896 TCD 43
-5.085552504875 8.234204853641 1.5935416530483244 SMR 44
-4.235429132536 6.289787085143 0.7318640584152212 FRA 45
0.468442729303 -5.477034431155 0.4415880433163916 MOZ 46
0.697705229207 0.056306415529 0.7123903424387493 ETH 47
1.296172639725 0.841492341655 0.3741657386773938 ERI 48
-5.164815341301 2.132649001653 0.8785641695402787 AND 49
0.568447394555 7.314072275933 0.5326818938165617 BIH 50
-0.734384384429 -3.419763193146 0.3648629879831597 AGO 51
5.457714085772 5.028113724300 0.2872281323269010 FIN 52
-0.253804677957 -0.317547201585 0.3418698582794332 SDN 53
6.289895990870 2.392788996021 0.3061862178478966 BTN 54
7.985423932963 0.229819286581 0.6154266812545588 MMR 55
5.593572953280 5.390742640645 0.1000000000000000 MNG 56
12.748553885002 1.221440670786 1.5502015997927450 KOR 57
-0.335008922578 -1.040018906681 0.2046338192968108 CAF 58
-3.121059661154 2.368311025561 1.3856406460550976 ISR 59
24.692902590106 1.477863225277 9.8454304121251788 MAC 60
10.104763515383 1.470842264279 1.1953033087881886 VNM 61
-2.829806466815 0.570121442078 0.6194755846681917 MAR 62
-2.633874659328 4.980715278035 1.5394804318340618 LBN 63
3.134053085887 -0.152240140603 0.2795084971874732 SAU 64
5.090367575244 1.949375543440 0.4987484335814991 IRN 65
1.693982481179 -0.535313998165 0.4710360920354185 DJI 66
4.879229026617 7.245608221357 0.4437059837324707 LTU 67
5.354800243251 5.612486704094 0.1999999999999995 RUS 68
-0.338523909233 -5.536043481740 0.4415880433163916 ZWE 69
-2.847619081707 -0.124876436853 0.1457737973711323 MRT 70
-0.355012967879 -5.002664031158 0.1457737973711323 BWA 71
4.719059421071 -2.183937814135 1.0347101043287426 QAT 72
-6.981674214109 -2.365978881713 1.1141139977578571 GMB 73
6.858498500694 -1.392458959762 1.4752118491931892 IND 74
-0.504269982417 -1.681514885890 0.5238081709939233 CMR 75
-7.893725487492 1.163321063666 2.3090853167434049 VAT 76
-4.110538120239 -3.997507686943 0.5049752469181031 LBR 77
-2.600505046909 -2.927759452440 0.8242420760917233 GHA 78
2.888908457808 5.585522051447 0.6259992012774428 ROU 79
3.836059040099 6.260633821990 0.5361902647381771 UKR 80
-2.021232960479 -6.264024828073 1.5280706789936116 BDI 81
2.451465476171 -1.404292535832 0.6623820649745851 KEN 82
-4.566150763188 -2.137556602324 0.5111262075065208 GIN 83
1.989879133283 -5.769995380964 1.0028085560065769 MWI 84
-1.379764925791 6.697003996134 0.6905613658466541 SVN 85
0.075696483942 -7.286581696529 0.5894913061275778 LSO 86
-3.931192587030 -2.971685849074 0.6412877669190307 CIV 87
2.660105836610 -0.497050027857 0.3622844186547354 SOM 88
0.038052082902 -0.803125409131 0.2817356917396154 SSD 89
11.331594451267 -3.204324237120 0.6437196594791845 TLS 90
-2.794529811283 9.056263429261 1.0585957679870044 LIE 91
-6.953625407305 6.356088547244 1.3221667822177323 BEL 92
-0.540304329331 -2.416093370395 0.2850438562747837 COG 93
0.493732733007 -4.119243554686 0.5873670062235343 TZA 94
0.675186403689 8.506065741299 0.7846177413237591 CZE 95
10.320612484253 -1.216779932364 0.6878408246098787 MYS 96
1.699816082092 7.511597369710 0.7314369419163906 SVK 97
0.923349482738 -1.684057713234 1.0476163419878444 UGA 98
8.496312588633 4.342495653935 0.9918417212438677 PRK 99
-5.914504580942 10.510726770035 1.0732543966832802 LUX 100
-3.479129504027 -1.799072210181 0.7420411039827922 BEN 101
2.212381985941 3.529750680239 0.6025985396596966 GRC 102
-4.027792169300 10.467124500541 1.0040542814011610 CHE 103
-4.711149693526 -0.927349361020 0.6466258578188754 SEN 104
2.245044230321 0.438246727181 0.7603453162872759 JOR 105
-1.119314034126 11.510915590299 1.5394804318340618 NLD 106
3.393754645412 -0.568998492929 0.2610076627227631 OMN 107
-2.842862104907 7.232413550412 0.9496709956611259 ITA 108
8.857975546257 0.496082583821 0.3872983346207409 LAO 109
4.033906408315 1.889476845673 0.6647367900154134 ARM 110
-0.080164741384 -16.057270906872 9.0661113494154293 MCO 111
4.382010432393 -0.248817004736 0.7790218225441405 ARE 112
-0.098795379228 2.987520598980 2.0101305927725144 PSE 113
4.902999209306 4.882629764064 0.3436931771216876 SWE 114
2.755814826901 6.771723991752 0.6878408246098787 MDA 115
-5.179077463212 3.532007637536 0.6562202374203315 ESP 116
-1.904160852158 -1.368911284178 1.0550473923004571 NGA 117
1.200594124570 5.061912809619 0.6841966091702002 ALB 118
0.765344376371 -6.496861074533 0.5645794895318113 SWZ 119
4.079403539606 4.246787894502 0.4930770730828997 GEO 120
-1.065844721321 -0.170253887070 0.1322875655532296 LBY 121
10.491647639501 -3.454992464420 0.3211308144666278 PNG 122
3.818585107688 7.575735378486 0.7790218225441405 POL 123
-0.535776883328 7.638676996256 0.7013380069552774 AUT 124
14.338797713027 -8.107378221172 5.6845184492619785 HKG 125
5.620950980369 7.289696577831 0.3741657386773938 EST 126
4.979469396628 5.426648213916 0.2610076627227631 NOR 127
0.171604931050 5.221535100795 0.4596194077712548 MNE 128
3.518849940427 0.772471653056 0.6892024376045077 IRQ 129
-5.523145922171 -1.851079525094 0.5884301147969913 GNB 130
-2.787292919872 -0.519533069653 0.2936835031117677 MLI 131
5.199188498498 4.505817849284 0.1820027472320128 KAZ 132
`
const edges = [
    {node0: 'AND', node1: 'FRA', target_angle: -1.6845883339386047},
    {node0: 'AND', node1: 'ESP', target_angle: 0.4198799572055518},
    {node0: 'ARE', node1: 'OMN', target_angle: 2.3561944901923448},
    {node0: 'ARE', node1: 'SAU', target_angle: -0.1106572211738956},
    {node0: 'AFG', node1: 'CHN', target_angle: -3.0916342578678506},
    {node0: 'AFG', node1: 'IRN', target_angle: 0.0831412318884412},
    {node0: 'AFG', node1: 'PAK', target_angle: 2.6011731533192091},
    {node0: 'AFG', node1: 'TJK', target_angle: -2.3561944901923448},
    {node0: 'AFG', node1: 'TKM', target_angle: -0.9505468408120752},
    {node0: 'AFG', node1: 'UZB', target_angle: -1.4464413322481351},
    {node0: 'ALB', node1: 'GRC', target_angle: 2.3561944901923448},
    {node0: 'ALB', node1: 'MNE', target_angle: -0.7853981633974483},
    {node0: 'ALB', node1: 'MKD', target_angle: -2.7610862764774295},
    {node0: 'ALB', node1: 'SRB', target_angle: -1.8925468811915389},
    {node0: 'ARM', node1: 'AZE', target_angle: -2.9441970937399127},
    {node0: 'ARM', node1: 'GEO', target_angle: -0.9272952180016122},
    {node0: 'ARM', node1: 'IRN', target_angle: 2.3561944901923448},
    {node0: 'ARM', node1: 'TUR', target_angle: 0.0996686524911620},
    {node0: 'AGO', node1: 'COG', target_angle: -1.2753554896511765},
    {node0: 'AGO', node1: 'COD', target_angle: -2.0503156187874927},
    {node0: 'AGO', node1: 'ZMB', target_angle: 2.9275319700259717},
    {node0: 'AUT', node1: 'CZE', target_angle: -2.2924511776596579},
    {node0: 'AUT', node1: 'DEU', target_angle: -0.7105383156866818},
    {node0: 'AUT', node1: 'HUN', target_angle: 3.0968464221351781},
    {node0: 'AUT', node1: 'ITA', target_angle: 1.4601391056210009},
    {node0: 'AUT', node1: 'LIE', target_angle: 0.0263097172529207},
    {node0: 'AUT', node1: 'SVK', target_angle: -2.9195107516843120},
    {node0: 'AUT', node1: 'SVN', target_angle: 2.4887460224890199},
    {node0: 'AUT', node1: 'CHE', target_angle: 0.0565434369448168},
    {node0: 'AZE', node1: 'GEO', target_angle: -0.3587706702705722},
    {node0: 'AZE', node1: 'IRN', target_angle: 2.1451011569695986},
    {node0: 'AZE', node1: 'RUS', target_angle: -2.7859567692890335},
    {node0: 'AZE', node1: 'TUR', target_angle: 0.1194289260183384},
    {node0: 'BIH', node1: 'HRV', target_angle: -0.4475199751571708},
    {node0: 'BIH', node1: 'MNE', target_angle: 2.0344439357957027},
    {node0: 'BIH', node1: 'SRB', target_angle: 3.1415926535897931},
    {node0: 'BGD', node1: 'IND', target_angle: 0.2984989315861793},
    {node0: 'BGD', node1: 'MMR', target_angle: 2.8966139904629289},
    {node0: 'BEL', node1: 'FRA', target_angle: 1.1760052070951348},
    {node0: 'BEL', node1: 'DEU', target_angle: -3.1016139664665028},
    {node0: 'BEL', node1: 'LUX', target_angle: 2.7149651604629170},
    {node0: 'BEL', node1: 'NLD', target_angle: -2.3847581480311040},
    {node0: 'BFA', node1: 'BEN', target_angle: 2.4468543773930902},
    {node0: 'BFA', node1: 'CIV', target_angle: 1.0303768265243125},
    {node0: 'BFA', node1: 'GHA', target_angle: 1.5707963267948966},
    {node0: 'BFA', node1: 'MLI', target_angle: -1.1071487177940904},
    {node0: 'BFA', node1: 'NER', target_angle: -2.8501358591119264},
    {node0: 'BFA', node1: 'TGO', target_angle: 2.1401095178955587},
    {node0: 'BGR', node1: 'GRC', target_angle: 0.9272952180016122},
    {node0: 'BGR', node1: 'MKD', target_angle: 0.3805063771123657},
    {node0: 'BGR', node1: 'ROU', target_angle: -1.5707963267948966},
    {node0: 'BGR', node1: 'SRB', target_angle: -0.2449786631268641},
    {node0: 'BGR', node1: 'TUR', target_angle: 2.7610862764774282},
    {node0: 'BDI', node1: 'COD', target_angle: -0.6107259643892086},
    {node0: 'BDI', node1: 'RWA', target_angle: -1.5707963267948966},
    {node0: 'BDI', node1: 'TZA', target_angle: 2.6779450445889870},
    {node0: 'BEN', node1: 'NER', target_angle: -2.2993452428595074},
    {node0: 'BEN', node1: 'NGA', target_angle: -3.0555983623955525},
    {node0: 'BEN', node1: 'TGO', target_angle: 0.9827937232473289},
    {node0: 'BRN', node1: 'MYS', target_angle: 0.7378150601204643},
    {node0: 'BTN', node1: 'CHN', target_angle: -2.6642472712161211},
    {node0: 'BTN', node1: 'IND', target_angle: 0.5070985043923369},
    {node0: 'BWA', node1: 'ZAF', target_angle: 1.5707963267948966},
    {node0: 'BWA', node1: 'ZMB', target_angle: -2.2794225989225669},
    {node0: 'BWA', node1: 'ZWE', target_angle: -2.8198420991931510},
    {node0: 'BLR', node1: 'LVA', target_angle: -0.9272952180016122},
    {node0: 'BLR', node1: 'LTU', target_angle: -0.6435011087932844},
    {node0: 'BLR', node1: 'POL', target_angle: 0.1243549945467614},
    {node0: 'BLR', node1: 'RUS', target_angle: -3.0446750257954300},
    {node0: 'BLR', node1: 'UKR', target_angle: 2.3561944901923448},
    {node0: 'COD', node1: 'CAF', target_angle: -1.0516502125483738},
    {node0: 'COD', node1: 'COG', target_angle: 0.0996686524911620},
    {node0: 'COD', node1: 'RWA', target_angle: 2.7610862764774282},
    {node0: 'COD', node1: 'SSD', target_angle: -2.1293956421384590},
    {node0: 'COD', node1: 'TZA', target_angle: 2.6011731533192091},
    {node0: 'COD', node1: 'UGA', target_angle: -2.9996955989856291},
    {node0: 'COD', node1: 'ZMB', target_angle: 1.8925468811915389},
    {node0: 'CAF', node1: 'CMR', target_angle: 0.1106572211738956},
    {node0: 'CAF', node1: 'TCD', target_angle: -1.3258176636680326},
    {node0: 'CAF', node1: 'COG', target_angle: 0.9272952180016122},
    {node0: 'CAF', node1: 'SSD', target_angle: -3.0309354324158977},
    {node0: 'CAF', node1: 'SDN', target_angle: -2.4149503129080676},
    {node0: 'COG', node1: 'CMR', target_angle: -1.1659045405098132},
    {node0: 'COG', node1: 'GAB', target_angle: 0.0000000000000000},
    {node0: 'CHE', node1: 'FRA', target_angle: 0.1651486774146268},
    {node0: 'CHE', node1: 'DEU', target_angle: -1.8157749899217608},
    {node0: 'CHE', node1: 'ITA', target_angle: 2.4227626539681686},
    {node0: 'CHE', node1: 'LIE', target_angle: -3.0090411212931172},
    {node0: 'CIV', node1: 'GHA', target_angle: 3.1415926535897931},
    {node0: 'CIV', node1: 'GIN', target_angle: -0.5404195002705842},
    {node0: 'CIV', node1: 'LBR', target_angle: 0.3217505543966422},
    {node0: 'CIV', node1: 'MLI', target_angle: -1.6814535479687922},
    {node0: 'CMR', node1: 'TCD', target_angle: -2.2318394956455836},
    {node0: 'CMR', node1: 'GNQ', target_angle: 1.1071487177940904},
    {node0: 'CMR', node1: 'GAB', target_angle: 1.5422326689561368},
    {node0: 'CMR', node1: 'NGA', target_angle: -0.7853981633974483},
    {node0: 'CHN', node1: 'HKG', target_angle: 2.1939956567289625},
    {node0: 'CHN', node1: 'IND', target_angle: 0.4918091759886986},
    {node0: 'CHN', node1: 'KAZ', target_angle: -0.3378781882402784},
    {node0: 'CHN', node1: 'PRK', target_angle: -2.9181160524491601},
    {node0: 'CHN', node1: 'KGZ', target_angle: -0.1973955598498807},
    {node0: 'CHN', node1: 'LAO', target_angle: 1.5707963267948966},
    {node0: 'CHN', node1: 'MAC', target_angle: 2.1569938781512574},
    {node0: 'CHN', node1: 'MNG', target_angle: -1.5707963267948966},
    {node0: 'CHN', node1: 'MMR', target_angle: 1.0768549578753155},
    {node0: 'CHN', node1: 'NPL', target_angle: 0.3217505543966422},
    {node0: 'CHN', node1: 'PAK', target_angle: 0.1418970546041639},
    {node0: 'CHN', node1: 'RUS', target_angle: -1.3734007669450159},
    {node0: 'CHN', node1: 'TJK', target_angle: -0.1171087445668643},
    {node0: 'CHN', node1: 'VNM', target_angle: 1.6233793884058383},
    {node0: 'CZE', node1: 'DEU', target_angle: -0.1825598531309072},
    {node0: 'CZE', node1: 'POL', target_angle: -2.6868733787688233},
    {node0: 'CZE', node1: 'SVK', target_angle: 2.8732264426838876},
    {node0: 'DEU', node1: 'DNK', target_angle: -1.7681918866447774},
    {node0: 'DEU', node1: 'FRA', target_angle: 0.6202494859828215},
    {node0: 'DEU', node1: 'LUX', target_angle: 0.4048917862850843},
    {node0: 'DEU', node1: 'NLD', target_angle: -0.4383365598579578},
    {node0: 'DEU', node1: 'POL', target_angle: -3.0509327663890482},
    {node0: 'DJI', node1: 'ERI', target_angle: -0.7188299996216245},
    {node0: 'DJI', node1: 'ETH', target_angle: 0.6107259643892086},
    {node0: 'DJI', node1: 'SOM', target_angle: 2.8966139904629289},
    {node0: 'DZA', node1: 'LBY', target_angle: 2.9304993203670469},
    {node0: 'DZA', node1: 'MLI', target_angle: 1.0040671092713902},
    {node0: 'DZA', node1: 'MRT', target_angle: 0.4899573262537283},
    {node0: 'DZA', node1: 'MAR', target_angle: -0.4636476090008061},
    {node0: 'DZA', node1: 'NER', target_angle: 1.9655874464946581},
    {node0: 'DZA', node1: 'TUN', target_angle: -2.3561944901923448},
    {node0: 'DZA', node1: 'ESH', target_angle: 0.2153576996977380},
    {node0: 'EST', node1: 'LVA', target_angle: 1.1071487177940904},
    {node0: 'EST', node1: 'RUS', target_angle: -3.1280799625764648},
    {node0: 'EGY', node1: 'ISR', target_angle: -2.3884413726275984},
    {node0: 'EGY', node1: 'LBY', target_angle: 0.1526493283952652},
    {node0: 'EGY', node1: 'PSE', target_angle: -2.3757998210495499},
    {node0: 'EGY', node1: 'SDN', target_angle: 1.5707963267948966},
    {node0: 'ESH', node1: 'MRT', target_angle: 1.7894652726688385},
    {node0: 'ESH', node1: 'MAR', target_angle: -2.3884413726275988},
    {node0: 'ERI', node1: 'ETH', target_angle: 1.4288992721907328},
    {node0: 'ERI', node1: 'SDN', target_angle: 0.0000000000000000},
    {node0: 'ESP', node1: 'FRA', target_angle: -2.3561944901923448},
    {node0: 'ESP', node1: 'GIB', target_angle: 1.2178059389679858},
    {node0: 'ESP', node1: 'MAR', target_angle: 1.4464413322481351},
    {node0: 'ESP', node1: 'PRT', target_angle: 0.1243549945467614},
    {node0: 'ETH', node1: 'KEN', target_angle: 1.5707963267948966},
    {node0: 'ETH', node1: 'SOM', target_angle: -2.9617391537973150},
    {node0: 'ETH', node1: 'SSD', target_angle: 0.0000000000000000},
    {node0: 'ETH', node1: 'SDN', target_angle: -0.7188299996216245},
    {node0: 'FIN', node1: 'NOR', target_angle: 0.1243549945467614},
    {node0: 'FIN', node1: 'RUS', target_angle: 3.0875911532138249},
    {node0: 'FIN', node1: 'SWE', target_angle: 0.1798534997924783},
    {node0: 'FRA', node1: 'ITA', target_angle: 2.8535372065391673},
    {node0: 'FRA', node1: 'LUX', target_angle: -2.4061528859142882},
    {node0: 'FRA', node1: 'MCO', target_angle: 2.7389380000379209},
    {node0: 'GAB', node1: 'GNQ', target_angle: -1.0303768265243123},
    {node0: 'GEO', node1: 'RUS', target_angle: -2.8331746424872968},
    {node0: 'GEO', node1: 'TUR', target_angle: 0.3392926144540447},
    {node0: 'GHA', node1: 'TGO', target_angle: 3.1415926535897931},
    {node0: 'GMB', node1: 'SEN', target_angle: -2.9516043656710775},
    {node0: 'GIN', node1: 'GNB', target_angle: -0.1973955598498807},
    {node0: 'GIN', node1: 'LBR', target_angle: 1.6814535479687922},
    {node0: 'GIN', node1: 'MLI', target_angle: -2.3561944901923448},
    {node0: 'GIN', node1: 'SEN', target_angle: -0.6435011087932844},
    {node0: 'GIN', node1: 'SLE', target_angle: 1.0303768265243125},
    {node0: 'GRC', node1: 'MKD', target_angle: -1.5707963267948966},
    {node0: 'GRC', node1: 'TUR', target_angle: 3.1415926535897931},
    {node0: 'GNB', node1: 'SEN', target_angle: -2.0344439357957027},
    {node0: 'HRV', node1: 'HUN', target_angle: -2.7610862764774291},
    {node0: 'HRV', node1: 'MNE', target_angle: 2.4009407216469603},
    {node0: 'HRV', node1: 'SRB', target_angle: 2.9267772531881340},
    {node0: 'HRV', node1: 'SVN', target_angle: -1.0121970114513326},
    {node0: 'HUN', node1: 'ROU', target_angle: 2.9441970937399127},
    {node0: 'HUN', node1: 'SRB', target_angle: 1.8925468811915389},
    {node0: 'HUN', node1: 'SVK', target_angle: -1.2847448850775789},
    {node0: 'HUN', node1: 'SVN', target_angle: 0.1973955598498807},
    {node0: 'HUN', node1: 'UKR', target_angle: -2.9764439761751662},
    {node0: 'IDN', node1: 'MYS', target_angle: -0.7853981633974483},
    {node0: 'IDN', node1: 'PNG', target_angle: 3.1045725377158631},
    {node0: 'IDN', node1: 'TLS', target_angle: 2.5620286682964704},
    {node0: 'ISR', node1: 'JOR', target_angle: 2.7468015338900327},
    {node0: 'ISR', node1: 'LBN', target_angle: -1.9809236673363881},
    {node0: 'ISR', node1: 'PSE', target_angle: -2.2455372690184561},
    {node0: 'ISR', node1: 'SYR', target_angle: -2.3114482587377299},
    {node0: 'IND', node1: 'MMR', target_angle: -3.0466409472470368},
    {node0: 'IND', node1: 'NPL', target_angle: -2.2896263264165211},
    {node0: 'IND', node1: 'PAK', target_angle: -0.9600703624056880},
    {node0: 'IRQ', node1: 'IRN', target_angle: 3.0309354324158977},
    {node0: 'IRQ', node1: 'JOR', target_angle: 0.2449786631268641},
    {node0: 'IRQ', node1: 'KWT', target_angle: 2.3561944901923453},
    {node0: 'IRQ', node1: 'SAU', target_angle: 1.6951513213416580},
    {node0: 'IRQ', node1: 'SYR', target_angle: -0.3217505543966422},
    {node0: 'IRQ', node1: 'TUR', target_angle: -0.5880026035475675},
    {node0: 'IRN', node1: 'PAK', target_angle: 3.0244839090229290},
    {node0: 'IRN', node1: 'TUR', target_angle: -0.3708912888126624},
    {node0: 'IRN', node1: 'TKM', target_angle: -2.2896263264165211},
    {node0: 'ITA', node1: 'SMR', target_angle: -1.1902899496825314},
    {node0: 'ITA', node1: 'SVN', target_angle: -2.1730836729298604},
    {node0: 'ITA', node1: 'VAT', target_angle: 1.1525719972156665},
    {node0: 'JOR', node1: 'PSE', target_angle: -0.8960553845713457},
    {node0: 'JOR', node1: 'SAU', target_angle: 2.5535900500422257},
    {node0: 'JOR', node1: 'SYR', target_angle: -2.0344439357957027},
    {node0: 'KEN', node1: 'SOM', target_angle: -2.4558631426835071},
    {node0: 'KEN', node1: 'SSD', target_angle: -0.7188299996216245},
    {node0: 'KEN', node1: 'TZA', target_angle: 1.1659045405098132},
    {node0: 'KEN', node1: 'UGA', target_angle: 0.0000000000000000},
    {node0: 'KGZ', node1: 'KAZ', target_angle: -0.7853981633974483},
    {node0: 'KGZ', node1: 'TJK', target_angle: 0.4636476090008061},
    {node0: 'KGZ', node1: 'UZB', target_angle: 0.0000000000000000},
    {node0: 'KHM', node1: 'LAO', target_angle: -1.5707963267948966},
    {node0: 'KHM', node1: 'THA', target_angle: -0.3805063771123649},
    {node0: 'KHM', node1: 'VNM', target_angle: -1.8925468811915389},
    {node0: 'PRK', node1: 'KOR', target_angle: 1.7359450042095235},
    {node0: 'PRK', node1: 'RUS', target_angle: -0.6375487981386927},
    {node0: 'KWT', node1: 'SAU', target_angle: 1.0101093318120906},
    {node0: 'KAZ', node1: 'RUS', target_angle: -2.7828219833192209},
    {node0: 'KAZ', node1: 'TKM', target_angle: 0.7853981633974483},
    {node0: 'KAZ', node1: 'UZB', target_angle: 1.0516502125483738},
    {node0: 'LAO', node1: 'MMR', target_angle: -0.5191461142465229},
    {node0: 'LAO', node1: 'THA', target_angle: 0.5404195002705842},
    {node0: 'LAO', node1: 'VNM', target_angle: 2.0344439357957027},
    {node0: 'LBN', node1: 'SYR', target_angle: -2.6422459319096627},
    {node0: 'LBR', node1: 'SLE', target_angle: -0.7853981633974483},
    {node0: 'LSO', node1: 'ZAF', target_angle: -0.1106572211738956},
    {node0: 'LTU', node1: 'LVA', target_angle: -2.3561944901923448},
    {node0: 'LTU', node1: 'POL', target_angle: 0.7853981633974483},
    {node0: 'LTU', node1: 'RUS', target_angle: -3.0890095919788516},
    {node0: 'LVA', node1: 'RUS', target_angle: -3.1016139664665032},
    {node0: 'LBY', node1: 'TCD', target_angle: 1.7681918866447774},
    {node0: 'LBY', node1: 'NER', target_angle: 0.7853981633974483},
    {node0: 'LBY', node1: 'SDN', target_angle: 2.4858970273482570},
    {node0: 'LBY', node1: 'TUN', target_angle: -0.8441539861131711},
    {node0: 'MDA', node1: 'ROU', target_angle: 0.2449786631268641},
    {node0: 'MDA', node1: 'UKR', target_angle: -2.5535900500422257},
    {node0: 'MNE', node1: 'SRB', target_angle: -2.3561944901923448},
    {node0: 'MKD', node1: 'SRB', target_angle: -1.1441688336680209},
    {node0: 'MLI', node1: 'MRT', target_angle: -0.3587706702705722},
    {node0: 'MLI', node1: 'NER', target_angle: 3.0584514217013519},
    {node0: 'MLI', node1: 'SEN', target_angle: 0.2914567944778671},
    {node0: 'MMR', node1: 'THA', target_angle: 1.8490959858000080},
    {node0: 'MNG', node1: 'RUS', target_angle: -1.2277723863741932},
    {node0: 'MRT', node1: 'SEN', target_angle: 1.2490457723982544},
    {node0: 'MWI', node1: 'MOZ', target_angle: 1.7804361726691091},
    {node0: 'MWI', node1: 'TZA', target_angle: -1.7033478590915707},
    {node0: 'MWI', node1: 'ZMB', target_angle: 0.3587706702705722},
    {node0: 'MYS', node1: 'THA', target_angle: -0.7853981633974483},
    {node0: 'MOZ', node1: 'SWZ', target_angle: 1.1717353782187627},
    {node0: 'MOZ', node1: 'ZAF', target_angle: 0.7762241088523384},
    {node0: 'MOZ', node1: 'TZA', target_angle: -1.5707963267948966},
    {node0: 'MOZ', node1: 'ZMB', target_angle: -0.5693131911006618},
    {node0: 'MOZ', node1: 'ZWE', target_angle: 0.3455555805817123},
    {node0: 'NER', node1: 'TCD', target_angle: 3.0509327663890482},
    {node0: 'NER', node1: 'NGA', target_angle: 1.5707963267948966},
    {node0: 'NGA', node1: 'TCD', target_angle: -2.7149651604629170},
    {node0: 'NOR', node1: 'RUS', target_angle: 3.1193740882630743},
    {node0: 'NOR', node1: 'SWE', target_angle: 3.1415926535897931},
    {node0: 'OMN', node1: 'SAU', target_angle: -0.3217505543966422},
    {node0: 'OMN', node1: 'YEM', target_angle: 0.5880026035475675},
    {node0: 'POL', node1: 'RUS', target_angle: -3.0419240010986313},
    {node0: 'POL', node1: 'SVK', target_angle: 1.4204248987877619},
    {node0: 'POL', node1: 'UKR', target_angle: 2.8966139904629289},
    {node0: 'QAT', node1: 'SAU', target_angle: 0.0804710112654608},
    {node0: 'ROU', node1: 'SRB', target_angle: 0.4636476090008061},
    {node0: 'ROU', node1: 'UKR', target_angle: -2.7367008673047097},
    {node0: 'RUS', node1: 'UKR', target_angle: 0.1603754439759507},
    {node0: 'RWA', node1: 'TZA', target_angle: 2.4668517113662407},
    {node0: 'RWA', node1: 'UGA', target_angle: -2.1587989303424640},
    {node0: 'SAU', node1: 'YEM', target_angle: 1.8622531212727638},
    {node0: 'SDN', node1: 'TCD', target_angle: 0.0000000000000000},
    {node0: 'SDN', node1: 'SSD', target_angle: 1.5707963267948966},
    {node0: 'SVK', node1: 'UKR', target_angle: -3.1175972599979236},
    {node0: 'SSD', node1: 'UGA', target_angle: 1.8490959858000080},
    {node0: 'SYR', node1: 'TUR', target_angle: -0.9272952180016122},
    {node0: 'SWZ', node1: 'ZAF', target_angle: 0.3217505543966422},
    {node0: 'TJK', node1: 'UZB', target_angle: -0.2782996590051113},
    {node0: 'TKM', node1: 'UZB', target_angle: -2.8966139904629289},
    {node0: 'TZA', node1: 'UGA', target_angle: -1.1659045405098132},
    {node0: 'TZA', node1: 'ZMB', target_angle: 1.0636978224025597},
    {node0: 'ZAF', node1: 'ZWE', target_angle: -2.1587989303424640},
    {node0: 'ZMB', node1: 'ZWE', target_angle: 1.5707963267948966},
];


const svgCanvas = document.getElementById('svgCanvas');
let lastTime = 0;
let lastScore = 0;
let selectedCircle = null;
let offset = { x: 0, y: 0 };
let circlePosition = { x: 0, y: 0 };

function calcRelativeDistance(circle1, circle2) {
    if (circle1 === circle2) return 0;
    const x1 = parseFloat(circle1.getAttribute('cx'));
    const y1 = parseFloat(circle1.getAttribute('cy'));
    const x2 = parseFloat(circle2.getAttribute('cx'));
    const y2 = parseFloat(circle2.getAttribute('cy'));
    const dist = Math.hypot(x1 - x2, y1 - y2);
    const R = parseFloat(circle1.getAttribute('r')) + parseFloat(circle2.getAttribute('r'));
    return dist < R ? 0 : (dist - R) / R;
}

function calcAngle(circle1, circle2) {
    if (circle1 === circle2) return 0;
    const x1 = parseFloat(circle1.getAttribute('cx'));
    const y1 = parseFloat(circle1.getAttribute('cy'));
    const x2 = parseFloat(circle2.getAttribute('cx'));
    const y2 = parseFloat(circle2.getAttribute('cy'));
    return Math.atan2(y2 - y1, x1 - x2); // y2 - y1 because y-axis is inverted in SVG
}

function calcAngleDifference(targetAngle, currentAngle) {
    const diff = Math.abs(targetAngle - currentAngle);
    return Math.min(diff, 2 * Math.PI - diff);
}

function calcMaxRelativeOverlap(circleElements) {
    let maxOverlap = 0;
    const circleArray = Object.values(circleElements).map(element => element.querySelector('circle'));

    for (let i = 0; i < circleArray.length; i++) {
        for (let j = i + 1; j < circleArray.length; j++) {
            const overlap = calcRelativeOverlap(circleArray[i], circleArray[j]);
            maxOverlap = Math.max(maxOverlap, overlap);
        }
    }

    return maxOverlap * 100;
}

function calcRelativeOverlap(circle1, circle2) {
    if (circle1 === circle2) return 0;
    const x1 = parseFloat(circle1.getAttribute('cx'));
    const y1 = parseFloat(circle1.getAttribute('cy'));
    const r1 = parseFloat(circle1.getAttribute('r'));
    const x2 = parseFloat(circle2.getAttribute('cx'));
    const y2 = parseFloat(circle2.getAttribute('cy'));
    const r2 = parseFloat(circle2.getAttribute('r'));
    const dist = Math.hypot(x1 - x2, y1 - y2);
    const R = r1 + r2;
    return dist >= R ? 0 : (R - dist) / R;
}

function calcScore(circleElements, k) {
    const edges = svgCanvas.querySelectorAll('line');
    const n = Object.keys(circleElements).length;
    const overlap = calcMaxRelativeOverlap(circleElements);

    const distances = Array.from(edges).map(edge => parseFloat(edge.getAttribute('data-relative-distance')));
    const angleDiffs = Array.from(edges).map(edge => parseFloat(edge.getAttribute('data-angle-difference')));

    const distanceAvg = distances.reduce((sum, val) => sum + val, 0) / distances.length * 100;
    const angleDiffAvg = angleDiffs.reduce((sum, val) => sum + val, 0) / angleDiffs.length * 100 / Math.PI;

    const totalScore = 1000.0 * (n + k) / (1 + 0.1 * (overlap ** 2) + 0.05 * (distanceAvg ** 2) + 0.05 * (angleDiffAvg ** 2));

    return {
        nodeCount: n,
        maxOverlap: overlap,
        averageDistance: distanceAvg,
        averageAngleDifference: angleDiffAvg,
        totalScore: totalScore
    };
}


function updateEdgeInfo(edge, circle1, circle2) {
    const currentAngle = calcAngle(circle1, circle2);
    const targetAngle = parseFloat(edge.getAttribute('data-target-angle'));
    const relativeDistance = calcRelativeDistance(circle1, circle2);
    const angleDifference = calcAngleDifference(targetAngle, currentAngle);

    // Update the edge with new data attributes for angle and distance
    edge.setAttribute('data-current-angle', currentAngle);
    edge.setAttribute('data-relative-distance', relativeDistance);
    edge.setAttribute('data-angle-difference', angleDifference);
}

function updateAllConnectedEdges(circle, circleElements) {
    const name = circle.getAttribute('data-name');
    const connectedEdges = svgCanvas.querySelectorAll(`line[data-node0="${name}"], line[data-node1="${name}"]`);

    connectedEdges.forEach(edge => {
        const name1 = edge.getAttribute('data-node0');
        const name2 = edge.getAttribute('data-node1');
        // the order Circle1, Circle2 must be identical to node0, node1 in edges, since it is relevant for the angel calculation
        const circle1 = circleElements[name1].querySelector('circle');
        const circle2 = circleElements[name2].querySelector('circle');
        updateEdgeInfo(edge, circle1, circle2);
    });
}


function createSVGElement(type, attributes) {
    const element = document.createElementNS('http://www.w3.org/2000/svg', type);
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    return element;
}

function drawCircles(data) {
    const circleElements = {};
    data.trim().split('\n').forEach(line => {
        const [x, y, radius, name, index] = line.split(' ');
        const circleGroup = createSVGElement('g', { class: 'draggable', 'data-name': name, 'data-index': index });
        circleGroup.append(
            createSVGElement('circle', { cx: x, cy: -y, r: radius, fill: 'rgba(0, 0, 255, 0.5)', 'data-name': name, 'data-index': index })
        );
        svgCanvas.appendChild(circleGroup);
        circleElements[name] = circleGroup;
    });
    return circleElements;
}

function drawEdges(data, circleElements) {
    data.forEach(edgeInfo => {
        const { node0, node1, target_angle } = edgeInfo;

        const circle1 = circleElements[node0].childNodes[0];
        const circle2 = circleElements[node1].childNodes[0];

        if (circle1 && circle2) {
            const x1 = circle1.getAttribute('cx');
            const y1 = circle1.getAttribute('cy');
            const x2 = circle2.getAttribute('cx');
            const y2 = circle2.getAttribute('cy');

            const edge = createSVGElement('line', {
                x1: x1,
                y1: y1,
                x2: x2,
                y2: y2,
                stroke: 'black',
                'stroke-width': "0.1%",
                'data-node0': node0,
                'data-node1': node1,
                'data-target-angle': target_angle
            });
            svgCanvas.insertBefore(edge, svgCanvas.firstChild); // Draw edges below the circles

            // Calculate and set initial edge information
            updateEdgeInfo(edge, circle1, circle2);
        }
    });
}

function initDragAndDrop() {
    ['mousedown', 'mousemove', 'mouseup', 'mouseleave'].forEach(event => svgCanvas.addEventListener(event, handleDrag));
}

let bestState = '';
function handleDrag(evt) {
    if (evt.type === 'mousedown') {
        let target = evt.target.closest('.draggable');
        if (target) {
            selectedCircle = target;
            const circle = selectedCircle.querySelector('circle');
            const matrix = target.getScreenCTM();
            const point = svgCanvas.createSVGPoint();
            point.x = evt.clientX;
            point.y = evt.clientY;
            const transformedPoint = point.matrixTransform(matrix.inverse());
            offset.x = transformedPoint.x - parseFloat(circle.getAttribute('cx'));
            offset.y = transformedPoint.y - parseFloat(circle.getAttribute('cy'));
            circlePosition.x = parseFloat(circle.getAttribute('cx'));
            circlePosition.y = parseFloat(circle.getAttribute('cy'));
        }
    } else if (evt.type === 'mousemove' && selectedCircle) {
        const currentTime = Date.now();
        if (currentTime - lastTime < 16) return; // Throttle to 60fps
        lastTime = currentTime;
        const point = svgCanvas.createSVGPoint();
        point.x = evt.clientX;
        point.y = evt.clientY;
        const matrix = selectedCircle.getScreenCTM();
        const transformedPoint = point.matrixTransform(matrix.inverse());
        circlePosition.x = transformedPoint.x - offset.x;
        circlePosition.y = transformedPoint.y - offset.y;
        requestAnimationFrame(updateCirclePosition);

        const scoreData = calcScore(circleElements, k);
        console.log('Score Data:', scoreData);
        if (scoreData.totalScore > lastScore) {
            lastScore = scoreData.totalScore;
            bestState = outputCirclePositions(circleElements);
        }
    } else if (evt.type === 'mouseup' || evt.type === 'mouseleave') {
        saveState();
        selectedCircle = null;
        const scoreData = calcScore(circleElements, k);
        lastScore = scoreData.totalScore;
        console.log('After transformation Score:', scoreData);
    }
}

function updateCirclePosition() {
    if (selectedCircle) {
        const circle = selectedCircle.querySelector('circle');
        circle.setAttribute('cx', circlePosition.x);
        circle.setAttribute('cy', circlePosition.y);

        // Update the positions of the edges connected to this circle
        updateEdgePositions(circle, circleElements);

        // Update edge information for all connected edges
        updateAllConnectedEdges(circle, circleElements);
    }
}

function updateEdgePositions(circle, circleElements) {
    // Extract the name of the circle being updated
    const name = circle.getAttribute('data-name');

    // Find all edges connected to the circle
    const connectedEdges = svgCanvas.querySelectorAll(`line[data-node0="${name}"], line[data-node1="${name}"]`);

    connectedEdges.forEach(edge => {
        // Determine which end of the edge needs to be updated
        const name1 = edge.getAttribute('data-node0');
        const name2 = edge.getAttribute('data-node1');
        const targetName = name === name1 ? name2 : name1;
        const targetCircle = circleElements[targetName].querySelector('circle');

        // Update the position of the edge
        if (name === name1) {
            edge.setAttribute('x1', circle.getAttribute('cx'));
            edge.setAttribute('y1', circle.getAttribute('cy'));
        } else {
            edge.setAttribute('x2', circle.getAttribute('cx'));
            edge.setAttribute('y2', circle.getAttribute('cy'));
        }

        // If the target circle is also being moved, update both ends of the edge
        if (selectedCircle && selectedCircle.getAttribute('data-name') === targetName) {
            edge.setAttribute('x2', targetCircle.getAttribute('cx'));
            edge.setAttribute('y2', targetCircle.getAttribute('cy'));
        }
    });
}

function fitToView() {
    const bounds = Array.from(svgCanvas.querySelectorAll('circle')).reduce((bounds, circle) => {
        const cx = parseFloat(circle.getAttribute('cx'));
        const cy = parseFloat(circle.getAttribute('cy'));
        const r = parseFloat(circle.getAttribute('r'));
        return {
            xMin: Math.min(bounds.xMin, cx - r),
            yMin: Math.min(bounds.yMin, cy - r),
            xMax: Math.max(bounds.xMax, cx + r),
            yMax: Math.max(bounds.yMax, cy + r)
        };
    }, { xMin: Infinity, yMin: Infinity, xMax: -Infinity, yMax: -Infinity });
    svgCanvas.setAttribute('viewBox', `${bounds.xMin} ${bounds.yMin} ${bounds.xMax - bounds.xMin} ${bounds.yMax - bounds.yMin}`);
}

svgCanvas.addEventListener('wheel', function(event) {
    event.preventDefault();
    const zoomSpeed = 0.1;
    const direction = event.deltaY < 0 ? -1 : 1;
    const scaleChange = 1 + zoomSpeed * direction;

    const viewBox = svgCanvas.getAttribute('viewBox').split(' ').map(Number);
    const pt = svgCanvas.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;
    const cursorPt = pt.matrixTransform(svgCanvas.getScreenCTM().inverse());

    viewBox[0] += (cursorPt.x - viewBox[0]) * (1 - scaleChange);
    viewBox[1] += (cursorPt.y - viewBox[1]) * (1 - scaleChange);
    viewBox[2] *= scaleChange;
    viewBox[3] *= scaleChange;

    svgCanvas.setAttribute('viewBox', viewBox.join(' '));
});

let isDraggingViewBox = false;
let viewBoxDragStart = { x: 0, y: 0 };
let viewBoxStart = { x: 0, y: 0 };

svgCanvas.addEventListener('mousedown', function(event) {
    if (event.target === svgCanvas || event.target.tagName === 'svg') {
        isDraggingViewBox = true;
        viewBoxDragStart.x = event.clientX;
        viewBoxDragStart.y = event.clientY;
        const viewBox = svgCanvas.getAttribute('viewBox').split(' ').map(Number);
        viewBoxStart.x = viewBox[0];
        viewBoxStart.y = viewBox[1];
    }
});

svgCanvas.addEventListener('mousemove', function(event) {
    if (isDraggingViewBox) {
        event.preventDefault();
        const dx = event.clientX - viewBoxDragStart.x;
        const dy = event.clientY - viewBoxDragStart.y;
        const scale = svgCanvas.viewBox.baseVal.width / svgCanvas.clientWidth;
        const viewBox = svgCanvas.getAttribute('viewBox').split(' ').map(Number);
        viewBox[0] = viewBoxStart.x - dx * scale;
        viewBox[1] = viewBoxStart.y - dy * scale;
        svgCanvas.setAttribute('viewBox', viewBox.join(' '));
    }
});

svgCanvas.addEventListener('mouseup', function(event) {
    isDraggingViewBox = false;
});

svgCanvas.addEventListener('mouseleave', function(event) {
    isDraggingViewBox = false;
});

/* Undo/Redo History */
let history = [];
let currentIndex = -1; // Start with -1 because no action has been taken yet
function saveState() {
    // Save the current state of the circles
    const state = outputCirclePositions(circleElements);
    // If we're in the middle of the history, remove all future states
    if (currentIndex < history.length - 1) {
        history = history.slice(0, currentIndex + 1);
    }
    // Add the new state to the history and increment the current index
    history.push(state);
    currentIndex++;
}

function undo() {
    if (currentIndex > 0) {
        currentIndex--;
        const prevState = history[currentIndex];
        restoreState(prevState);
    }
}

function redo() {
    if (currentIndex < history.length - 1) {
        currentIndex++;
        const nextState = history[currentIndex];
        restoreState(nextState);
    }
}

function restoreState(state) {
    // Clear the current circles and edges
    while (svgCanvas.firstChild) {
        svgCanvas.removeChild(svgCanvas.firstChild);
    }
    // Draw the circles from the saved state
    circleElements = drawCircles(state);
    // Redraw the edges
    drawEdges(edges, circleElements);
    // Update the score
    const scoreData = calcScore(circleElements, k);
    console.log('Score Data:', scoreData);
    lastScore = scoreData.totalScore;
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'z') {
        if (event.shiftKey) {
            redo();
        } else {
            undo();
        }
    } else if (event.ctrlKey && event.key === 'y') {
        redo();
    } else if (event.ctrlKey && event.key === 'b') {
        restoreState(bestState);
    }
});

/* Save Positions */
function outputCirclePositions(circleElements) {
    // Create an array to store the formatted circle data
    const circles = [];

    // Iterate over each circle element and extract the necessary attributes
    Object.keys(circleElements).forEach(key => {
        const circleElement = circleElements[key].querySelector('circle');
        const name = circleElement.getAttribute('data-name');
        const index = circleElement.getAttribute('data-index');
        const x = parseFloat(circleElement.getAttribute('cx')).toFixed(9);
        const y = parseFloat(circleElement.getAttribute('cy')).toFixed(9) * -1.0; // transform y-axis back
        const radius = circleElement.getAttribute('r');

        // Push the formatted string into the circles array
        circles.push(`${x} ${y} ${radius} ${name} ${index}`);
    });

    // Sort the circles array by id (index) in ascending order
    circles.sort((a, b) => {
        const indexA = parseInt(a.split(' ')[4], 10);
        const indexB = parseInt(b.split(' ')[4], 10);
        return indexA - indexB;
    });

    // Join the array into a single string with newlines between each circle's data
    return circles.join('\n');
}

let circleElements = {}
function init() {
    circleElements = drawCircles(circleData);
    drawEdges(edges, circleElements);
    initDragAndDrop();
    fitToView();

    const scoreData = calcScore(circleElements, k);
    lastScore = scoreData.totalScore;
    console.log('Score Data:', scoreData);

    saveState();
}

init();








