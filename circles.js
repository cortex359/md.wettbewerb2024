// result_files/Area_Afro-Eurasia_score_38597.358456.txt
// Score: 38597.36 (n=133, k=554, overlap=3.79, distance=12.63, angle=12.16)
const k = 554;
const circleData = `
438.753017800000 811.696949300000 35.8640488511824032 HRV 0
1253.744326000000 626.166218800000 100.8373938576360018 UZB 1
598.124140400000 716.186273300000 50.1994023868809975 BGR 2
-509.733737500000 719.487086800000 77.7524919214811945 ESH 3
-146.219417800000 -410.366771300000 25.2491584018160999 GNQ 4
510.986387200000 743.976759300000 44.8129445584643022 SRB 5
-402.027367000000 -1.015480948000 78.7642050680382937 BFA 6
-283.451922300000 -116.608184200000 35.9245041719437026 TGO 7
1055.259786000000 628.128965600000 105.3241662677660031 TKM 8
680.859341100000 1196.560137000000 38.3046994505896023 LVA 9
267.058106300000 1094.513648000000 90.0901215450395938 DEU 10
1766.356472000000 -7.038628645000 107.9899069357870047 THA 11
958.046693700000 734.392070200000 44.3641747359285006 AZE 12
1903.033192000000 771.093805300000 469.6943154861469907 CHN 13
-224.350351600000 -478.780892000000 77.9958973280004955 GAB 14
1429.994641000000 177.995529100000 141.5748918417390030 PAK 15
519.395052400000 -459.807713900000 24.4660989943226994 RWA 16
692.886313900000 496.544221400000 64.8740317846825008 SYR 17
377.457069900000 -825.753060600000 130.7853967383209977 ZMB 18
287.146671600000 1213.424865000000 31.2955268369140001 DNK 19
1594.180040000000 353.636804800000 57.8361478661917019 NPL 20
12.671887540000 690.126840200000 60.9787667963202011 TUN 21
1632.136156000000 93.938191800000 57.9125202352650987 BGD 22
1387.336239000000 725.914185400000 67.4117200492614046 KGZ 23
470.794180200000 340.892799600000 150.9402199547890007 EGY 24
-244.094538700000 564.420343900000 232.6595796437360093 DZA 25
-242.746726700000 177.293318700000 169.6922213891959927 NER 26
1441.122966000000 434.816189300000 121.7514270963589951 AFG 27
959.879480500000 -97.069769930000 109.5411794714659948 YEM 28
-244.090331100000 888.698218100000 45.7487704752816029 PRT 29
242.793999600000 -504.728472800000 230.8510991959969942 COD 30
906.578194200000 376.424498800000 20.1233694991667988 KWT 31
-182.968471100000 850.597819600000 0.3872983346207420 GIB 32
1934.906852000000 27.032391800000 64.1438227735141027 KHM 33
2021.186153000000 -397.827756800000 208.0520607924850083 IDN 34
1403.811846000000 602.729919500000 57.0286769967531981 TJK 35
-728.333425600000 -61.813995020000 40.3788310875884022 SLE 36
772.606217200000 687.841482600000 133.4474803059239889 TUR 37
765.105759500000 1137.403327000000 68.6890093100780064 BLR 38
472.796925400000 886.125628100000 45.9811918070856009 HUN 39
534.758148800000 681.750141000000 24.1741597578903011 MKD 40
1912.379647000000 -112.115983400000 11.4463968129712992 BRN 41
346.003834600000 -1246.509831000000 166.5858337314429889 ZAF 42
82.022122730000 134.158544300000 170.8268714225019949 TCD 43
229.753723200000 906.230346800000 1.1789826122551601 SMR 44
123.365814600000 952.561146700000 111.9755330418209951 FRA 45
730.313838000000 -924.398585600000 134.9738863632520065 MOZ 46
776.169867300000 -290.088798600000 158.4226309590899859 ETH 47
774.538880200000 -87.876552450000 51.6984525880611017 ERI 48
8.362890632000 949.993265200000 3.2619012860600201 AND 49
434.823574900000 744.481990400000 34.1150992963527031 BIH 50
-33.641952540000 -771.344698900000 168.3273299259520002 AGO 51
821.938385800000 1369.857813000000 87.7009121959401057 FIN 52
419.937058100000 0.051917206890 207.0390784368970003 SDN 53
1597.281490000000 171.570832100000 29.5396343917795008 BTN 54
1767.061579000000 216.303930000000 124.0031047998389937 MMR 55
2124.396081000000 1428.850836000000 188.5416399631650108 MNG 56
1962.977222000000 1268.466284000000 47.7231599959601027 KOR 57
133.160020800000 -185.947609300000 118.9904618026170056 CAF 58
610.529372600000 430.746618300000 21.7267116701998013 ISR 59
1936.144086000000 299.952779600000 0.8660254037844380 MAC 60
2055.343096000000 109.791241700000 86.7614545751740991 VNM 61
-394.129584600000 855.304039400000 100.7415505141750032 MAR 62
595.348890600000 464.331741500000 15.4126571362630003 LBN 63
793.300342400000 173.915732800000 221.0352686790049859 SAU 64
1148.185542000000 356.009697500000 193.5432251462189868 IRN 65
835.647102500000 -125.996491000000 22.9623605058365001 DJI 66
620.749026800000 1129.056939000000 38.5238886926020996 LTU 67
1383.008060000000 1761.336887000000 623.3750155404039788 RUS 68
464.144924300000 -1024.643571000000 94.2382088115005985 ZWE 69
-631.059562500000 526.126676900000 153.0522786501389874 MRT 70
182.548502000000 -959.678064500000 115.0098691417390029 BWA 71
1011.302776000000 106.205132700000 16.2271377636354011 QAT 72
-830.333479200000 84.305087470000 15.5862118553546996 GMB 73
1463.364114000000 -220.468990700000 273.3458432096589945 IND 74
-41.726044770000 -333.767993600000 103.9495069733380035 CMR 75
252.461528700000 770.513972000000 0.1000000000000000 VAT 76
-657.996065000000 -115.861672000000 50.3101381433205006 LBR 77
-381.398796700000 -155.548966300000 73.6287987135468001 GHA 78
581.435602900000 834.433330900000 73.6069290216619976 ROU 79
706.957724400000 968.283979400000 117.1149435383889994 UKR 80
507.339387100000 -507.229159000000 25.1513419125103006 BDI 81
814.462412300000 -550.205995000000 114.8484218437500033 KEN 82
-638.830865100000 3.524412429000 74.7506521710679976 GIN 83
559.552224600000 -849.471652500000 51.8923886519014985 MWI 84
405.642504400000 873.827743400000 21.4650879336656004 SVN 85
538.416936800000 -1265.924975000000 26.2657571754556010 LSO 86
-524.836690400000 -100.854460600000 85.6078267449885999 CIV 87
1044.232349000000 -301.571574800000 120.3835536940160011 SOM 88
509.734050500000 -300.189540000000 118.6807060983380069 SSD 89
2209.303852000000 -520.465330600000 18.3861360812977992 TLS 90
315.654155600000 957.280341400000 1.9078784028338900 LIE 91
125.269966000000 1088.932705000000 26.3404631698076983 BEL 92
-64.290096920000 -517.275163000000 88.1630875139931049 COG 93
586.921559500000 -660.422841100000 146.5580089930259930 TZA 94
385.913160200000 1029.768612000000 42.3366271684460003 CZE 95
1840.829725000000 -178.972024600000 86.7078427825301929 MYS 96
443.401555700000 968.287745400000 33.3838284203594000 SVK 97
618.429159800000 -450.480777900000 74.0929821238152044 UGA 98
1868.733321000000 1293.389760000000 52.3402330908068976 PRK 99
156.870486300000 1074.392379000000 7.6661594035083702 LUX 100
-281.703434900000 -32.913563370000 50.5923907322039028 BEN 101
526.188212300000 598.037949800000 54.7701561071354988 GRC 102
283.491181600000 958.263692500000 30.6311932513246994 CHE 103
-751.620094100000 98.852526820000 66.8651628278881986 SEN 104
663.820998600000 394.842690700000 45.0610696721682018 JOR 105
157.485129900000 1135.148604000000 30.8405577122074988 NLD 106
1090.029616000000 35.934212860000 83.8694819347299045 OMN 107
287.305094600000 845.689591900000 82.7559665522672958 ITA 108
1960.951798000000 231.992504900000 73.3608887623369981 LAO 109
930.210847200000 663.519948400000 25.9996153817705000 ARM 110
220.181517900000 895.548195200000 0.2236067977499790 MCO 111
1047.120588000000 151.251197000000 43.5889894354066030 ARE 112
630.960078700000 455.951600100000 11.8894911581614995 PSE 113
644.594788500000 1330.243363000000 101.1631355781340034 SWE 114
683.079050100000 830.776556800000 27.7349959437530984 MDA 115
-93.855364700000 908.126337900000 107.2372136900250013 ESP 116
-107.318239300000 -103.377443300000 144.8955830934820028 NGA 117
488.675527700000 668.483524700000 25.5609076521159011 ALB 118
621.363196900000 -1026.002423000000 19.8655480669423987 SWZ 119
901.795088500000 793.310806600000 39.8006281357467984 GEO 120
163.822668900000 481.456002900000 199.9738732934879977 LBY 121
2317.038487000000 -313.622052700000 102.5626150212639942 PNG 122
508.630514500000 1067.850889000000 84.2991103155898998 POL 123
360.075479900000 948.635050900000 43.6595923022649970 AUT 124
2047.057959000000 318.168365000000 5.0089919145472797 HKG 125
735.934131500000 1240.317561000000 32.0607236350022973 EST 126
706.312972900000 1499.190823000000 85.7854299983393958 NOR 127
463.293275200000 703.537231300000 17.7175054677570003 MNE 128
850.315093000000 477.303938300000 99.8085667665855993 IRQ 129
-738.747077800000 7.856485641000 28.6534465640697995 GNB 130
-564.062926400000 224.691562100000 167.8874027436249889 MLI 131
1165.013501000000 950.876765800000 248.8564847457259930 KAZ 132
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
let bestScore = { totalScore: 0 };
let bestState = '';
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

function updateBestScore(scoreData, circleElements) {
    if (scoreData.totalScore > bestScore.totalScore) {
        bestScore = scoreData;
        bestState = outputCirclePositions(circleElements);
        document.getElementById('bestScore').innerText = `Best Score: ${bestScore.totalScore.toFixed(2)}`;
    }
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

        // Add event listeners for mouse enter and leave
        circleGroup.addEventListener('mouseenter', function(event) {
            highlightEdges(circleGroup.querySelector('circle'));
        });
        circleGroup.addEventListener('mouseleave', function(event) {
            unhighlightEdges(circleGroup.querySelector('circle'));
        });
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
        updateBestScore(scoreData, circleElements);
    } else if (evt.type === 'mouseup' || evt.type === 'mouseleave') {
        saveState();
        selectedCircle = null;
        const scoreData = calcScore(circleElements, k);
        outputScore(scoreData);
        updateBestScore(scoreData, circleElements);
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





function highlightEdges(circle) {
    // Extract the name of the circle being hovered
    const name = circle.getAttribute('data-name');

    // Find all edges connected to the circle
    const connectedEdges = svgCanvas.querySelectorAll(`line[data-node0="${name}"], line[data-node1="${name}"]`);

    // Highlight each connected edge
    connectedEdges.forEach(edge => {
        edge.classList.add('highlight');
    });
}

function unhighlightEdges(circle) {
    // Extract the name of the circle being unhovered
    const name = circle.getAttribute('data-name');

    // Find all edges connected to the circle
    const connectedEdges = svgCanvas.querySelectorAll(`line[data-node0="${name}"], line[data-node1="${name}"]`);

    // Unhighlight each connected edge
    connectedEdges.forEach(edge => {
        edge.classList.remove('highlight');
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
    updateBestScore(scoreData, circleElements);
    saveState();
}

init();








