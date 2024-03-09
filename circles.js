// result_files/Population_Density_Afro-Eurasia_score_4288.615783.txt
// Score: 4288.62 (n=133, k=554, overlap=9.15, distance=50.04, angle=22.63)
// result_files/Population_Afro-Eurasia_score_13900.099423.txt
// Score: 13900.10 (n=133, k=554, overlap=0.60, distance=25.30, angle=18.10)
const k = 554;
const circleData = `
40.156941997656 130.532624292247 8.7971586321948205 HRV 0
236.443434140438 145.663790208466 26.0545581424824597 UZB 1
83.240622187916 132.962729443914 11.3626581397136128 BGR 2
-183.047561347502 21.628033196621 3.3674916480965460 ESH 3
-77.537897490799 -150.699698685182 5.7532599454570050 GNQ 4
60.556867698782 129.327690744681 11.7477657450257276 SRB 5
-180.998862332240 -80.166073732569 21.1865523386888057 BFA 6
-189.212040455062 -139.284305847755 13.2204387219183666 TGO 7
199.291522968383 144.407217817673 11.2156141160437528 TKM 8
178.109233245468 227.235544422550 5.9439044406854249 LVA 9
-10.032934299113 185.842847121768 40.0998753115268158 DEU 10
547.762238320642 -158.621456810261 37.2307668467895141 THA 11
175.965401511433 154.243065023592 14.1781522068286314 AZE 12
455.832630109328 80.286393633493 165.8993972261506542 CHN 13
-64.327015369430 -168.116954150145 6.8585712797928995 GAB 14
239.828476387831 -7.096606886216 68.1364806839918913 PAK 15
42.740561032790 -201.965913818777 16.4954539191863567 RWA 16
93.614108487811 27.926764287242 21.1754574921063004 SYR 17
5.835332480973 -236.993908963358 19.9273681152328770 ZMB 18
-25.602824385146 234.045764637552 10.6822282319748272 DNK 19
237.193826130693 -149.370797838257 24.4225305814118485 NPL 20
-80.943459094123 1.940461934493 15.5083848288595494 TUN 21
420.536596359614 -193.941581195185 57.7831290256939809 BGD 22
269.507806323237 162.947655147061 11.4030697621298476 KGZ 23
-18.558006783447 6.310981130732 46.6476151587624059 EGY 24
-132.489006731110 -4.795497629327 29.6720407117542671 DZA 25
-131.165055566829 -62.169337844240 22.9161515093612742 NER 26
263.247143771612 97.997226092211 28.5559100712969567 AFG 27
181.844177186834 -83.219277727457 25.7885633566510002 YEM 28
-158.921583284638 88.058605310634 14.0652052953378153 PRT 29
-9.782905350714 -171.399626183174 44.4318579399961919 COD 30
157.099616910058 -7.639596626485 9.1219515455849596 KWT 31
-99.002614167876 55.888817262722 0.7937253933193772 GIB 32
599.123033140579 -179.165280702389 18.0864590232582074 KHM 33
494.009289912048 -302.593979996274 73.1969944738170568 IDN 34
275.977023859012 138.498465532156 13.9935699519458137 TJK 35
-258.562941640133 -55.404461711293 13.0272790712412903 SLE 36
112.155450504148 90.042756976739 40.7023340854059086 TUR 37
172.475321730788 208.615925491109 13.5410487038486362 BLR 38
73.447504856618 156.452214767831 14.0024997768255588 HUN 39
73.561614095564 116.886650147816 6.3450768316861206 MKD 40
399.023743640411 -84.194066762089 2.9563490998188957 BRN 41
-16.710173288660 -313.560469010332 34.1511346810028797 ZAF 42
-81.695463233857 -73.271360043249 18.7848343085585512 TCD 43
-35.655508341833 94.836359869972 0.8062257748298547 SMR 44
-61.296703587142 120.269331635746 35.3571774891605415 FRA 45
56.136241635439 -311.118035364721 25.5810476720559841 MOZ 46
102.849219728607 -90.556867913203 49.4227680325576060 ETH 47
40.042914266511 -25.914324715592 8.5070558949615460 ERI 48
-70.033596944028 77.732141516555 1.2449899597988674 AND 49
47.521456228869 114.630651920731 7.8733728477698790 BIH 50
-42.316420444442 -234.075186035559 26.6118394704311854 AGO 51
192.492310363208 250.630551657282 10.3469802357982612 FIN 52
-32.645909446553 -69.343443639002 30.4753999153415265 SDN 53
307.153237727739 -121.112405964270 3.8987177379235805 BTN 54
556.504798897652 -89.679393477999 32.4596672811043732 MMR 55
315.551104948394 186.455886296585 8.1578183358052261 MNG 56
363.936497252609 261.245408919484 31.6178746913830473 KOR 57
-48.323821400548 -112.999061166357 10.5290075505719010 CAF 58
39.871274372742 19.152524808894 13.3082681067072031 ISR 59
351.246646202357 -126.277671717695 3.6864617182333550 MAC 60
631.654713635494 -105.493598476483 43.6860389598324659 VNM 61
-159.417596704019 46.524298418903 27.0277635034791714 MAR 62
50.345778506555 42.723349917591 10.1666120217110674 LBN 63
122.661164145907 -17.525638911027 26.7069279401431245 SAU 64
193.849553547050 91.815631714683 41.4907218544097915 IRN 65
53.862639927119 -29.615100455776 4.6840153714521451 DJI 66
163.347234822829 227.655306452003 7.2443081105099267 LTU 67
252.082168426919 230.112544583265 52.8062496301336850 RUS 68
16.201964517257 -273.378549697070 17.9368336113150200 ZWE 69
-196.683459923998 3.649391152618 9.6891692110314587 MRT 70
-6.719964621066 -260.969348377314 7.1867934435323821 BWA 71
142.619858655392 -44.734869714085 7.2415467960926678 QAT 72
-264.613584101545 -36.015487892402 7.3171032519706793 GMB 73
254.526220603617 -343.625084422404 166.0713099845966099 IND 74
-81.075438521974 -121.763221117024 23.5168025037418502 CMR 75
-28.664842363169 51.847861501759 0.1000000000000000 VAT 76
-256.336455352407 -78.512927367604 10.2274141404364691 LBR 77
-225.231123361002 -124.814413173387 25.6657359138599297 GHA 78
108.107309426634 151.421671444368 19.5966833928601432 ROU 79
144.327865716460 179.960171278084 26.6338130953868628 UKR 80
41.832365046611 -234.261640550475 15.9865568525558839 BDI 81
22.079403275808 -101.760144646916 32.6147206028198440 KEN 82
-240.763679295632 -31.800273210730 16.5514349831064074 GIN 83
59.150907128802 -265.699523161188 20.1019899512461109 MWI 84
52.067106032460 145.719616574029 6.3968742366877880 SVN 85
32.376973214202 -254.882675616865 6.7074585350935996 LSO 86
-224.107352015106 -68.274220568874 23.6091084117973935 CIV 87
47.143311990846 -52.024385457792 18.7152344361485881 SOM 88
-23.302023132325 -113.837971767349 14.6311311934518358 SSD 89
477.381593654516 -220.607834234087 5.1254268114957968 TLS 90
43.333346045682 149.538782014492 0.8717797887081344 LIE 91
-62.874348395202 170.653373156901 15.0199866844148424 BEL 92
-61.015747139797 -150.703564947383 10.8577161502776391 COG 93
92.237929543751 -220.421280180599 36.0817128196542143 TZA 94
66.205253344881 183.810395538173 14.2341139520519580 CZE 95
412.522010039563 -109.512498306275 25.7357727686580695 MYS 96
89.474141757651 175.290665617163 10.5773342577418852 SVK 97
63.938862758063 -159.958546218403 30.6248265301209095 UGA 98
326.931380408067 221.768289782050 22.4730950249404202 PRK 99
-41.382485248754 154.160324130482 3.5552777669262396 LUX 100
-170.944906740021 -116.190705817027 16.2705254985817547 BEN 101
55.597769759629 86.759116476997 14.1294019689440482 GRC 102
26.890204230398 147.802693330066 13.0315002973564287 CHE 103
-239.771148709351 3.199267253972 18.5180992545131673 SEN 104
65.666355753981 0.885338736928 14.7939176690963272 JOR 105
-84.192203610722 196.349215938034 18.4423425843899125 NLD 106
162.278294577870 -54.015029012613 9.4688964510126468 OMN 107
7.583847245893 103.371382560555 33.7120156620750819 ITA 108
595.950227956851 -148.164855948004 12.1396046064112202 LAO 109
167.265049163959 132.896223509875 7.3232506443518650 ARM 110
-26.019956513495 95.960640339922 0.8366600265340759 MCO 111
160.285747184381 -31.161091622532 13.5543350998859200 ARE 112
62.411127861513 25.593484772960 10.1828286836222404 PSE 113
177.392306316890 270.081629964709 14.3132805464016908 SWE 114
139.683748809353 140.467925426117 8.1443231762989328 MDA 115
-114.985087572444 82.590075038529 30.2881164815509436 ESP 116
-134.465297489853 -195.974905012764 65.7308907592160807 NGA 117
65.602814458851 105.726317986886 7.3945926189344533 ALB 118
39.718443248801 -284.582483978715 4.8342527861087330 SWZ 119
155.902077431529 143.810981044444 8.4835134231048368 GEO 120
-77.933926364141 -27.620565584580 11.5316954521006991 LBY 121
513.315353355850 -217.382328583457 14.1216146385602652 PNG 122
110.025370556654 222.749677376358 28.1426722256434410 POL 123
46.902036946425 164.524451721801 13.1510455858080455 AUT 124
462.445469816371 -97.676758716884 12.0262213516964636 HKG 125
187.991970747699 232.028743227930 5.0537115073973045 EST 126
173.165461037444 243.551984049607 10.2800778207171142 NOR 127
58.863330639857 114.226284040039 3.4770677301427355 MNE 128
150.084524759165 31.307529451802 29.6389945848370928 IRQ 129
-261.921028793773 -22.542669461616 6.4436014774348083 GNB 130
-179.436087860287 -25.321471333506 21.2058954067023535 MLI 131
203.390479104511 176.931729840095 19.4553334589772646 KAZ 132
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








