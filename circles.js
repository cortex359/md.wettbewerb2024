// result_files/GNI_per_capita_Afro-Eurasia_score_10881.106966.txt
// Score: 10881.11 (n=126, k=534, overlap=7.14, distance=28.60, angle=16.52)
const k = 534;
const circleData = `
-2.941130179000 1.628142971000 0.6406246951218770 HRV 0
2.853354652000 1.773249083000 0.3283291031876400 UZB 1
-0.180488256600 2.033577681000 0.5607138307550460 BGR 2
-2.489626428000 -2.040452839000 0.4054626986542660 GNQ 3
-1.185418424000 2.068187723000 0.5102940328869220 SRB 4
-2.569677802000 -0.733864990400 0.1697056274847710 BFA 5
-2.316807237000 -1.417393984000 0.1720465053408520 TGO 6
2.370216623000 2.302871433000 0.4211887937730550 TKM 7
1.610892439000 4.269243135000 0.6684309986827360 LVA 8
-3.047630069000 6.001470046000 0.8618584570566100 DEU 9
3.680166589000 -0.165410953300 0.4816637831516910 THA 10
2.119710415000 1.541581991000 0.4406812907306140 AZE 11
4.479923315000 1.747356053000 0.4882622246293470 CHN 12
-1.720241781000 -2.112540063000 0.4266145801540300 GAB 13
2.903684062000 0.981728770200 0.2509980079602220 PAK 14
-0.869838588100 -1.490315028000 0.1737814719698270 RWA 15
1.099145823000 0.578215817600 0.2387467277262660 SYR 16
-0.601598442300 -2.084895538000 0.2092844953645630 ZMB 17
-1.310220512000 7.127082166000 0.9067524469225320 DNK 18
3.344967498000 1.049515702000 0.2297825058615210 NPL 19
-2.887757627000 0.642637322500 0.3738983819167990 TUN 20
-0.930424741300 -0.585792116200 0.3997499218261330 EGY 21
3.813796457000 1.911287603000 0.2493992782667980 KGZ 22
3.722644068000 0.741152771000 0.2731300056749530 BGD 23
-2.743906602000 -0.049883478680 0.3836665218650160 DZA 24
-2.277200868000 -0.797501860600 0.1296148139681570 NER 25
3.036458161000 1.343224352000 0.1574801574802360 AFG 26
1.874985843000 -2.469776402000 0.1341640786499870 YEM 27
-6.597956559000 1.426291168000 0.6720119046564580 PRT 28
-1.140414301000 -1.449816291000 0.1208304597359460 COD 29
2.437071175000 -0.466312190400 0.8489994110716440 KWT 30
4.331383736000 -0.353773655300 0.2357965224510320 KHM 31
4.100540300000 -2.138145158000 0.3952214569073890 IDN 32
3.381104716000 1.678949172000 0.2489979919597740 TJK 33
-3.329072496000 -0.875161098700 0.1483239697419130 SLE 34
0.478041572600 1.122080296000 0.6502307282803550 TUR 35
0.736440808600 3.616363988000 0.5067543783727960 BLR 36
-1.433762027000 3.134574605000 0.6682813778641450 HUN 37
-0.753016873200 1.271649989000 0.4656178690729110 MKD 38
5.487265460000 -0.828853798200 0.9372299611087990 BRN 39
-0.367317595000 -3.119683908000 0.4199999999999980 ZAF 40
-1.631570615000 -1.092208156000 0.1363818169698580 TCD 41
-3.948790410000 4.502504095000 0.8468766143896040 SMR 42
-5.123594307000 5.468617334000 0.7910752176626430 FRA 43
-0.050232074710 -2.179419493000 0.1280624847486570 MOZ 44
-0.283809745400 -1.241548703000 0.1794435844492640 ETH 45
-0.521085039600 -1.043121311000 0.1536229149573720 ERI 46
-6.874356567000 2.845258578000 0.8348652585896710 AND 47
-2.077018590000 2.166394978000 0.4556314299957800 BIH 48
-1.034118201000 -1.877831044000 0.2727636339397170 AGO 49
4.325100084000 3.723971992000 0.8207313811473280 FIN 50
-1.162189467000 -1.113026792000 0.2204540768504860 SDN 51
3.819699131000 1.320024448000 0.3586084215408210 BTN 52
4.181374588000 0.904540714300 0.2289104628451920 MMR 53
4.151081869000 2.567012066000 0.3797367509209500 MNG 54
-1.379394382000 -1.339030699000 0.1148912529307600 CAF 55
0.034046551490 -0.123381575100 0.7520638270785250 ISR 56
4.690452716000 0.063439564270 0.3274141108748970 VNM 57
-3.711825403000 0.591523575000 0.3152776554086890 MAR 58
1.056799898000 0.021246938640 0.3602776706930370 LBN 59
1.318274015000 -1.731661345000 0.7924645102463560 SAU 60
2.295648024000 0.759782421000 0.4207136793592530 IRN 61
0.099280579170 -1.092902312000 0.2615339366124400 DJI 62
1.181391065000 5.483702910000 0.7187489130426540 LTU 63
2.396734517000 3.291939160000 0.6082762530298210 RUS 64
-0.336468919000 -2.392030996000 0.2275961335348210 ZWE 65
-3.310011461000 0.185427378400 0.2630589287593180 MRT 66
-1.008688762000 -2.570693777000 0.4696807426326950 BWA 67
1.603871418000 -3.589511718000 1.0894035065117100 QAT 68
-3.676354926000 -0.290279321200 0.1720465053408520 GMB 69
3.217216927000 0.574752637700 0.2996664812754340 IND 70
-1.737517883000 -1.434811882000 0.2222611077089280 CMR 71
-3.249677936000 -1.123728653000 0.1326649916142160 LBR 72
-2.735131035000 -1.453433636000 0.2796426290821910 GHA 73
-0.219237044700 3.147460653000 0.6395310782127790 ROU 74
1.391721763000 3.051373842000 0.4249705872175140 UKR 75
-0.714960519600 -1.691936354000 0.1000000000000000 BDI 76
-0.079365314550 -1.580689157000 0.2469817807045690 KEN 77
-3.170145358000 -0.610794488100 0.1838477631085020 GIN 78
-0.231973566800 -1.991706581000 0.1414213562373090 MWI 79
-2.782018009000 3.019131726000 0.7357988855658860 SVN 80
0.236426140100 -3.220718264000 0.1918332609325080 LSO 81
-2.909291928000 -0.977078765800 0.2664582518894840 CIV 82
0.242520558100 -1.424576182000 0.1174734012447070 SOM 83
-0.863696545000 -1.233185532000 0.1019803902718560 SSD 84
4.626159349000 -2.488585839000 0.2465765601187590 TLS 85
-7.589539284000 4.857529202000 1.4142135623730900 LIE 86
-4.433141306000 6.954780601000 0.8440379138403660 BEL 87
-1.398432767000 -1.629423815000 0.1984943324127920 COG 88
-0.450813426500 -1.745886599000 0.1902629759044040 TZA 89
-1.343501318000 5.567289444000 0.7264984514780470 CZE 90
4.074711335000 -1.143136615000 0.6026607669327750 MYS 91
-0.931707317400 4.253624549000 0.6465291950097830 SVK 92
-0.555034799100 -1.424119461000 0.1726267650163200 UGA 93
-6.280999757000 6.873516832000 1.0737783756436901 LUX 94
-2.470538896000 -1.077466447000 0.2154065922853800 BEN 95
-1.165823781000 0.343287912200 0.6284902544988270 GRC 96
-5.506869207000 3.892601933000 0.9548821916864910 CHE 97
-3.298321372000 -0.256999213400 0.2135415650406260 SEN 98
1.276972037000 -0.617932932600 0.3676955262170040 JOR 99
-2.897734976000 7.733549020000 0.8732697177848320 NLD 100
3.176775658000 -3.441455205000 0.6071243694664220 OMN 101
-4.174714703000 3.013185250000 0.7639371701913700 ITA 102
4.181541067000 0.389992119500 0.3237282811247740 LAO 103
1.473384442000 1.066164672000 0.4233202097703350 ARM 104
2.879253534000 -2.051554336000 0.9232551110067010 ARE 105
0.677734068400 -0.905066235400 0.2993325909419150 PSE 106
4.792344540000 5.340372225000 0.8615103017375920 SWE 107
0.662065092700 2.598986973000 0.4501110973970740 MDA 108
-5.450323470000 2.211470090000 0.7227724399837060 ESP 109
-2.034236263000 -1.105159732000 0.2553429066960740 NGA 110
-2.151056290000 0.458758861600 0.4386342439892270 ALB 111
0.141849049600 -2.611673356000 0.3234192325759250 SWZ 112
1.322928071000 1.923591033000 0.4469899327725400 GEO 113
-1.775452633000 -0.494611716700 0.4569463863518330 LBY 114
4.671526940000 -1.932635834000 0.2336664289109580 PNG 115
0.246023428800 4.594428246000 0.6708203932499360 POL 116
-2.369978262000 4.437399227000 0.8546344247688580 AUT 117
5.563696441000 0.933692197700 0.9234717104492151 HKG 118
2.367738768000 6.112645158000 0.7198610977126070 EST 119
3.032494013000 4.723033106000 0.9385094565320030 NOR 120
-1.801073169000 1.290145817000 0.5327288240746880 MNE 121
1.648450312000 0.350350812300 0.3687817782917140 IRQ 122
-3.487025984000 -0.549427523800 0.1612451549659710 GNB 123
-2.833706995000 -0.556978080700 0.1702938636592640 MLI 124
3.270626058000 2.499683984000 0.5711392124517440 KAZ 125
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
    {node0: 'CHN', node1: 'KGZ', target_angle: -0.1973955598498807},
    {node0: 'CHN', node1: 'LAO', target_angle: 1.5707963267948966},
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
    {node0: 'EST', node1: 'LVA', target_angle: 1.1071487177940904},
    {node0: 'EST', node1: 'RUS', target_angle: -3.1280799625764648},
    {node0: 'EGY', node1: 'ISR', target_angle: -2.3884413726275984},
    {node0: 'EGY', node1: 'LBY', target_angle: 0.1526493283952652},
    {node0: 'EGY', node1: 'PSE', target_angle: -2.3757998210495499},
    {node0: 'EGY', node1: 'SDN', target_angle: 1.5707963267948966},
    {node0: 'ERI', node1: 'ETH', target_angle: 1.4288992721907328},
    {node0: 'ERI', node1: 'SDN', target_angle: 0.0000000000000000},
    {node0: 'ESP', node1: 'FRA', target_angle: -2.3561944901923448},
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








