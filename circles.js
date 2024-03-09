// result_files/Area_Afro-Eurasia_score_25270.176527.txt
// Score: 25270.18 (n=133, k=554, overlap=4.95, distance=18.11, angle=12.12)
const k = 554;
const circleData = `
444.489703050695 810.783745644920 35.8640488511823960 HRV 0
1253.481533711622 626.320158391270 100.8373938576358455 UZB 1
599.325076072186 718.425444682374 50.1994023868810046 BGR 2
-681.208391541103 569.219083200449 77.7524919214811803 ESH 3
-170.610003736660 -393.626960752280 25.2491584018160609 GNQ 4
515.701613133059 752.538559081545 44.8129445584643307 SRB 5
-400.783178180845 14.286712539631 78.7642050680382795 BFA 6
-284.614478279280 -112.379242756339 35.9245041719436671 TGO 7
1057.541280596953 630.048867212263 105.3241662677658610 TKM 8
674.259848891749 1241.797752174829 38.3046994505896450 LVA 9
277.242052255544 1129.400469277464 90.0901215450395512 DEU 10
1767.342721334350 -3.887246896818 107.9899069357872605 THA 11
965.410267025226 738.511664277692 44.3641747359284793 AZE 12
1900.850947001495 764.832429250093 469.6943154861467065 CHN 13
-214.778795854329 -500.209920716348 77.9958973280004813 GAB 14
1444.175767532737 153.533483185504 141.5748918417387756 PAK 15
503.899357440174 -453.937343436686 24.4660989943226888 RWA 16
701.841025018100 490.543476622933 64.8740317846825434 SYR 17
380.437596755300 -817.583597611652 130.7853967383211966 ZMB 18
196.201175947654 1300.143493134093 31.2955268369139574 DNK 19
1587.826432842852 352.820196967758 57.8361478661917232 NPL 20
26.663110874828 694.324227858916 60.9787667963201656 TUN 21
1628.447038369279 108.817683879776 57.9125202352651129 BGD 22
1391.639414457024 722.311598459908 67.4117200492614046 KGZ 23
471.318354276206 339.990960129662 150.9402199547892280 EGY 24
-235.430958597545 564.929656423527 232.6595796437363219 DZA 25
-234.893745294948 182.482072786935 169.6922213891955380 NER 26
1432.639404439387 424.053940158388 121.7514270963587819 AFG 27
957.260039386460 -92.261604054509 109.5411794714662932 YEM 28
-457.219554834993 779.316607498099 45.7487704752816171 PRT 29
246.192052397080 -501.061399781586 230.8510991959970795 COD 30
900.105242389120 375.907180856084 20.1233694991668095 KWT 31
-354.944830634430 751.441868854678 0.3872983346207418 GIB 32
1935.481180944356 27.045122252129 64.1438227735141311 KHM 33
2016.801728035417 -391.174811411239 208.0520607924849230 IDN 34
1401.118040027106 598.285110467180 57.0286769967531555 TJK 35
-636.692325001027 -103.795854586616 40.3788310875884235 SLE 36
770.720553461035 685.296037373877 133.4474803059236478 TUR 37
726.151238741852 1154.243217306144 68.6890093100780490 BLR 38
484.032738158746 892.856886694431 45.9811918070855512 HUN 39
537.518543871114 684.079281657958 24.1741597578902763 MKD 40
1866.647507881757 -62.509051848069 11.4463968129713116 BRN 41
350.199776417326 -1235.852105231584 166.5858337314434152 ZAF 42
83.667948208981 125.181529329877 170.8268714225023928 TCD 43
190.240951582347 920.722290152830 1.1789826122551588 SMR 44
73.882786202408 1027.381718071033 111.9755330418211798 FRA 45
728.192966806324 -922.721488756692 134.9738863632516654 MOZ 46
769.685104048192 -287.048526630893 158.4226309590899291 ETH 47
776.246595343038 -86.778105971030 51.6984525880610732 ERI 48
-156.789659113242 939.485029320181 3.2619012860600161 AND 49
441.189629043309 743.618134687271 34.1150992963526534 BIH 50
-28.640845809831 -764.526259144791 168.3273299259515738 AGO 51
853.914098819535 1267.977798670504 87.7009121959401199 FIN 52
421.557673407724 3.378235359370 207.0390784368973982 SDN 53
1639.468340738072 287.764914474549 29.5396343917794724 BTN 54
1766.912704240581 216.629136082137 124.0031047998394911 MMR 55
2160.104612458882 1334.395020663966 188.5416399631650108 MNG 56
2362.518393767657 939.542434491618 47.7231599959600601 KOR 57
128.706301694403 -188.826756151789 118.9904618026166503 CAF 58
608.169063343852 430.594812305041 21.7267116701998333 ISR 59
1918.976239444111 307.526815223868 0.8660254037844380 MAC 60
2052.807033077405 109.721797601784 86.7614545751740991 VNM 61
-540.339930335511 663.881227714185 100.7415505141745484 MAR 62
595.348890598929 464.331741457942 15.4126571362630482 LBN 63
790.815348858338 174.395487061416 221.0352686790045027 SAU 64
1140.242897023271 358.259254086037 193.5432251462187878 IRN 65
834.989165136390 -127.467653713791 22.9623605058364610 DJI 66
608.253824101639 1112.975390207363 38.5238886926020712 LTU 67
1477.827925149350 1723.160441425929 623.3750155404039788 RUS 68
462.806934412201 -1014.979411915312 94.2382088115005558 ZWE 69
-831.018077393055 357.615268821448 153.0522786501389589 MRT 70
184.945883965361 -947.087989445008 115.0098691417392303 BWA 71
1007.080040365049 110.378317987982 16.2271377636353584 QAT 72
-814.258967295042 78.325035199472 15.5862118553546889 GMB 73
1489.606024966877 -239.673581611323 273.3458432096591650 IND 74
-36.925279304006 -326.191649501416 103.9495069733376909 CMR 75
201.685893931916 762.418329899604 0.1000000000000000 VAT 76
-595.960748910248 -192.100513319582 50.3101381433205077 LBR 77
-380.532739591406 -152.920271545580 73.6287987135467858 GHA 78
585.843358504953 840.706304462171 73.6069290216619834 ROU 79
703.122603018520 979.114305726009 117.1149435383887862 UKR 80
492.450258599600 -499.689530148091 25.1513419125103006 BDI 81
811.436617533400 -543.423752132393 114.8484218437500459 KEN 82
-636.184529738524 7.297326762585 74.7506521710680119 GIN 83
569.809136477738 -842.321095452366 51.8923886519015483 MWI 84
389.925869334960 896.486743872123 21.4650879336656288 SVN 85
577.216558666798 -1020.784237359408 26.2657571754555796 LSO 86
-517.829805459893 -89.208542434231 85.6078267449886283 CIV 87
1034.524020078062 -296.699437900879 120.3835536940157454 SOM 88
506.333857987529 -294.395855791018 118.6807060983375806 SSD 89
2214.611735589875 -305.345697947643 18.3861360812977708 TLS 90
301.239879435873 963.638190500049 1.9078784028338875 LIE 91
105.037118271432 1161.805146307413 26.3404631698077161 BEL 92
-57.033968929301 -508.509018136327 88.1630875139930765 COG 93
589.069017486761 -654.298617051426 146.5580089930259362 TZA 94
386.739289063947 1029.735344137077 42.3366271684459718 CZE 95
1839.302653661184 -174.390383064923 86.7078427825302498 MYS 96
481.742885729265 968.261116022368 33.3838284203594071 SVK 97
610.697504799055 -445.680931514927 74.0929821238152044 UGA 98
2300.035769777748 1059.581076427019 52.3402330908069047 PRK 99
130.271562837874 1141.603917468268 7.6661594035083738 LUX 100
-282.866823833382 -26.637273064432 50.5923907322038957 BEN 101
526.188212336809 598.037949775411 54.7701561071354703 GRC 102
254.566529518527 950.272969860525 30.6311932513246710 CHE 103
-737.807859833306 95.573337242254 66.8651628278881986 SEN 104
660.387164115317 394.453555139990 45.0610696721682373 JOR 105
117.633372295807 1214.796803468262 30.8405577122074668 NLD 106
1084.593052946428 40.344966980698 83.8694819347299330 OMN 107
281.818247709591 841.486100726651 82.7559665522673384 ITA 108
1962.679457569941 232.439853721924 73.3608887623370407 LAO 109
930.632881469503 661.591937772089 25.9996153817705071 ARM 110
113.534275746415 928.221549812623 0.2236067977499787 MCO 111
1041.733896522107 155.468661249918 43.5889894354066456 ARE 112
629.674284202787 454.558384279363 11.8894911581614782 PSE 113
699.181535783386 1372.035451968690 101.1631355781343444 SWE 114
683.262103795356 822.566740406142 27.7349959437530842 MDA 115
-257.696914567571 894.458979481780 107.2372136900245039 ESP 116
-112.966763887877 -102.212313116997 144.8955830934819176 NGA 117
493.164364158212 667.705105941544 25.5609076521158869 ALB 118
620.806890662949 -1025.642288373830 19.8655480669424485 SWZ 119
900.992561225428 786.119771598101 39.8006281357467628 GEO 120
165.465811579501 473.082073326721 199.9738732934884240 LBY 121
2238.698643576491 -152.959393997039 102.5626150212639374 PNG 122
496.504311477557 1079.144576545749 84.2991103155898998 POL 123
361.930706253318 951.727254423736 43.6595923022649970 AUT 124
1941.389815139829 310.333105394149 5.0089919145472752 HKG 125
741.677251411573 1248.956789810866 32.0607236350023328 EST 126
556.708286162396 1229.187542134074 85.7854299983393531 NOR 127
474.824256805746 705.290615767457 17.7175054677570358 MNE 128
863.590632467750 483.928881029444 99.8085667665856278 IRQ 129
-735.210593008247 -1.493364636359 28.6534465640697746 GNB 130
-555.875700181122 225.581977070578 167.8874027436248468 MLI 131
1164.786969389196 955.446134128607 248.8564847457263340 KAZ 132
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

function outputScore(scoreData) {
    console.log('Score Data:', scoreData);
    // write score to the UI
    document.getElementById('score').innerText = `Score: ${scoreData.totalScore.toFixed(2)}`;
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
        outputScore(scoreData);
        if (scoreData.totalScore > lastScore) {
            lastScore = scoreData.totalScore;
            bestState = outputCirclePositions(circleElements);
        }
    } else if (evt.type === 'mouseup' || evt.type === 'mouseleave') {
        saveState();
        selectedCircle = null;
        const scoreData = calcScore(circleElements, k);
        outputScore(scoreData);
        lastScore = scoreData.totalScore;
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
    outputScore(scoreData);
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
    } else if (event.key === 'b') {
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
    outputScore(scoreData)
    lastScore = scoreData.totalScore;

    saveState();
}

init();








