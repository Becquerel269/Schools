//Source https://get-information-schools.service.gov.uk/
const schooldata = [{
    "URN": 135691,
    "LA (code)": 938,
    "LA (name)": "West Sussex",
    "EstablishmentNumber": 6228,
    "EstablishmentName": "Seadown School",
    "SchoolCapacity": 30,
    "Postcode": "BN11 2BE"
}, {
    "URN": 112080,
    "LA (code)": 908,
    "LA (name)": "Cornwall",
    "EstablishmentNumber": 6084,
    "EstablishmentName": "St Ia School",
    "SchoolCapacity": 45,
    "Postcode": "TR26 2SF"
}, {
    "URN": 138457,
    "LA (code)": 304,
    "LA (name)": "Brent",
    "EstablishmentNumber": 4006,
    "EstablishmentName": "Wembley High Technology College",
    "SchoolCapacity": 1330,
    "Postcode": "HA0 3NT"
}, {
    "URN": 109018,
    "LA (code)": 803,
    "LA (name)": "South Gloucestershire",
    "EstablishmentNumber": 2179,
    "EstablishmentName": "Staple Hill Primary School",
    "SchoolCapacity": 315,
    "Postcode": "BS16 4NE"
}, {
    "URN": 134606,
    "LA (code)": 886,
    "LA (name)": "Kent",
    "EstablishmentNumber": 6107,
    "EstablishmentName": "Hythe House Education",
    "SchoolCapacity": 20,
    "Postcode": "ME12 2AP"
}, {
    "URN": 117802,
    "LA (code)": 810,
    "LA (name)": "Kingston upon Hull, City of",
    "EstablishmentNumber": 2441,
    "EstablishmentName": "Maybury Primary School",
    "SchoolCapacity": 210,
    "Postcode": "HU9 3LD"
}, {
    "URN": 134778,
    "LA (code)": 871,
    "LA (name)": "Slough",
    "EstablishmentNumber": 3366,
    "EstablishmentName": "Khalsa Primary School",
    "SchoolCapacity": 472,
    "Postcode": "SL2 5QR"
}, {
    "URN": 109196,
    "LA (code)": 800,
    "LA (name)": "Bath and North East Somerset",
    "EstablishmentNumber": 3093,
    "EstablishmentName": "High Littleton CofE VC Primary School",
    "SchoolCapacity": 140,
    "Postcode": "BS39 6HF"
}, {
    "URN": 118160,
    "LA (code)": 921,
    "LA (name)": "Isle of Wight",
    "EstablishmentNumber": 2007,
    "EstablishmentName": "Gurnard Primary School",
    "SchoolCapacity": 420,
    "Postcode": "PO31 8DS"
}, {
    "URN": 124217,
    "LA (code)": 860,
    "LA (name)": "Staffordshire",
    "EstablishmentNumber": 2421,
    "EstablishmentName": "Pye Green Valley Primary School",
    "SchoolCapacity": 420,
    "Postcode": "WS12 4RT"
}, {
    "URN": 142487,
    "LA (code)": 806,
    "LA (name)": "Middlesbrough",
    "EstablishmentNumber": 1102,
    "EstablishmentName": "River Tees High Academy",
    "SchoolCapacity": 40,
    "Postcode": "TS3 8RD"
}, {
    "URN": 145548,
    "LA (code)": 881,
    "LA (name)": "Essex",
    "EstablishmentNumber": 2170,
    "EstablishmentName": "Hadleigh Junior School",
    "SchoolCapacity": 360,
    "Postcode": "SS7 2DQ"
}, {
    "URN": 148528,
    "LA (code)": 851,
    "LA (name)": "Portsmouth",
    "EstablishmentNumber": 2014,
    "EstablishmentName": "Corpus Christi Catholic Primary School",
    "SchoolCapacity": 315,
    "Postcode": "PO2 9AX"
}, {
    "URN": 101932,
    "LA (code)": 307,
    "LA (name)": "Ealing",
    "EstablishmentNumber": 4035,
    "EstablishmentName": "Acton High School",
    "SchoolCapacity": 1400,
    "Postcode": "W3 8EY"
}, {
    "URN": 134906,
    "LA (code)": 889,
    "LA (name)": "Blackburn with Darwen",
    "EstablishmentNumber": 4799,
    "EstablishmentName": "Blackburn Central High School",
    "SchoolCapacity": 900,
    "Postcode": "BB2 3HJ"
}, {
    "URN": 110224,
    "LA (code)": 825,
    "LA (name)": "Buckinghamshire",
    "EstablishmentNumber": 2032,
    "EstablishmentName": "East Claydon School",
    "SchoolCapacity": 60,
    "Postcode": "MK18 2LS"
}, {
    "URN": 144496,
    "LA (code)": 840,
    "LA (name)": "County Durham",
    "EstablishmentNumber": 4007,
    "EstablishmentName": "Teesdale School and Sixth Form",
    "SchoolCapacity": 968,
    "Postcode": "DL12 8HH"
}, {
    "URN": 107560,
    "LA (code)": 381,
    "LA (name)": "Calderdale",
    "EstablishmentNumber": 3330,
    "EstablishmentName": "St Joseph's RC Primary School, Todmorden",
    "SchoolCapacity": 157,
    "Postcode": "OL14 5HP"
}, {
    "URN": 146024,
    "LA (code)": 936,
    "LA (name)": "Surrey",
    "EstablishmentNumber": 2961,
    "EstablishmentName": "The Vale Primary School",
    "SchoolCapacity": 210,
    "Postcode": "KT18 6HP"
}, {
    "URN": 105953,
    "LA (code)": 355,
    "LA (name)": "Salford",
    "EstablishmentNumber": 3516,
    "EstablishmentName": "St Mary's RC Primary School",
    "SchoolCapacity": 198,
    "Postcode": "M30 0FJ"
}, {
    "URN": 101068,
    "LA (code)": 212,
    "LA (name)": "Wandsworth",
    "EstablishmentNumber": 6158,
    "EstablishmentName": "Upper Tooting Independent High School",
    "SchoolCapacity": "",
    "Postcode": "SW17 7HL"
}, {
    "URN": 117518,
    "LA (code)": 919,
    "LA (name)": "Hertfordshire",
    "EstablishmentNumber": 4066,
    "EstablishmentName": "Barnwell School",
    "SchoolCapacity": 1800,
    "Postcode": "SG2 9SW"
}, {
    "URN": 131173,
    "LA (code)": 936,
    "LA (name)": "Surrey",
    "EstablishmentNumber": 6577,
    "EstablishmentName": "ACS Egham International School",
    "SchoolCapacity": 700,
    "Postcode": "TW20 0HS"
}, {
    "URN": 120802,
    "LA (code)": 926,
    "LA (name)": "Norfolk",
    "EstablishmentNumber": 2045,
    "EstablishmentName": "Cromer Junior School",
    "SchoolCapacity": 300,
    "Postcode": "NR27 0EX"
}, {
    "URN": 134706,
    "LA (code)": 807,
    "LA (name)": "Redcar and Cleveland",
    "EstablishmentNumber": 3395,
    "EstablishmentName": "Saint Benedict's Roman Catholic VA Primary School",
    "SchoolCapacity": 378,
    "Postcode": "TS10 1LS"
}, {
    "URN": 116607,
    "LA (code)": 850,
    "LA (name)": "Hampshire",
    "EstablishmentNumber": 7018,
    "EstablishmentName": "Heathfield Special School",
    "SchoolCapacity": "",
    "Postcode": "PO14 3BN"
}, {
    "URN": 111798,
    "LA (code)": 908,
    "LA (name)": "Cornwall",
    "EstablishmentNumber": 5201,
    "EstablishmentName": "St Buryan Primary School",
    "SchoolCapacity": 118,
    "Postcode": "TR19 6BB"
}, {
    "URN": 113724,
    "LA (code)": 837,
    "LA (name)": "Pre-LGR 2019 Bournemouth",
    "EstablishmentNumber": 2225,
    "EstablishmentName": "Kinson Primary School",
    "SchoolCapacity": 420,
    "Postcode": "BH11 9DG"
}, {
    "URN": 127735,
    "LA (code)": 380,
    "LA (name)": "Bradford",
    "EstablishmentNumber": 2119,
    "EstablishmentName": "Menston Junior School",
    "SchoolCapacity": "",
    "Postcode": "LS29 6LF"
}, {
    "URN": 125658,
    "LA (code)": 937,
    "LA (name)": "Warwickshire",
    "EstablishmentNumber": 3142,
    "EstablishmentName": "Bubbenhall CofE First School",
    "SchoolCapacity": "",
    "Postcode": "CV8 3BL"
}, {
    "URN": 121023,
    "LA (code)": 926,
    "LA (name)": "Norfolk",
    "EstablishmentNumber": 2421,
    "EstablishmentName": "Greenacre Primary & Nursery School",
    "SchoolCapacity": 451,
    "Postcode": "NR30 3DT"
}, {
    "URN": 400361,
    "LA (code)": 664,
    "LA (name)": "Flintshire",
    "EstablishmentNumber": 2084,
    "EstablishmentName": "Abermorddu C.P. School",
    "SchoolCapacity": "",
    "Postcode": "LL12 9DH"
}, {
    "URN": 111159,
    "LA (code)": 895,
    "LA (name)": "Cheshire East",
    "EstablishmentNumber": 2349,
    "EstablishmentName": "Rode Heath Primary School",
    "SchoolCapacity": 234,
    "Postcode": "ST7 3RY"
}, {
    "URN": 108063,
    "LA (code)": 383,
    "LA (name)": "Leeds",
    "EstablishmentNumber": 4045,
    "EstablishmentName": "John Smeaton Community College",
    "SchoolCapacity": 1066,
    "Postcode": "LS15 8TA"
}, {
    "URN": 130842,
    "LA (code)": 938,
    "LA (name)": "West Sussex",
    "EstablishmentNumber": 8003,
    "EstablishmentName": "Greater Brighton Metropolitan College",
    "SchoolCapacity": "",
    "Postcode": "BN12 6NU"
}, {
    "URN": 141108,
    "LA (code)": 801,
    "LA (name)": "Bristol, City of",
    "EstablishmentNumber": 4006,
    "EstablishmentName": "Steiner Academy Bristol",
    "SchoolCapacity": 624,
    "Postcode": "BS16 2JP"
}, {
    "URN": 116802,
    "LA (code)": 885,
    "LA (name)": "Worcestershire",
    "EstablishmentNumber": 3029,
    "EstablishmentName": "Defford-Cum-Besford CofE School",
    "SchoolCapacity": 60,
    "Postcode": "WR8 9BH"
}, {
    "URN": 146142,
    "LA (code)": 881,
    "LA (name)": "Essex",
    "EstablishmentNumber": 2178,
    "EstablishmentName": "Felmore Primary School",
    "SchoolCapacity": 420,
    "Postcode": "SS13 1QX"
}, {
    "URN": 108724,
    "LA (code)": 393,
    "LA (name)": "South Tyneside",
    "EstablishmentNumber": 3314,
    "EstablishmentName": "St Joseph's RC Voluntary Aided Primary School",
    "SchoolCapacity": 210,
    "Postcode": "NE32 4PJ"
}, {
    "URN": 104367,
    "LA (code)": 336,
    "LA (name)": "Wolverhampton",
    "EstablishmentNumber": 3020,
    "EstablishmentName": "St Jude's Church of England Primary School",
    "SchoolCapacity": 420,
    "Postcode": "WV6 0DT"
}, {
    "URN": 147650,
    "LA (code)": 878,
    "LA (name)": "Devon",
    "EstablishmentNumber": 4029,
    "EstablishmentName": "Avanti Hall School",
    "SchoolCapacity": 720,
    "Postcode": "EX4 5AD"
}, {
    "URN": 137451,
    "LA (code)": 925,
    "LA (name)": "Lincolnshire",
    "EstablishmentNumber": 5224,
    "EstablishmentName": "Westgate Academy",
    "SchoolCapacity": 480,
    "Postcode": "LN1 3BQ"
}, {
    "URN": 124783,
    "LA (code)": 935,
    "LA (name)": "Suffolk",
    "EstablishmentNumber": 3339,
    "EstablishmentName": "St Matthew's Church of England Voluntary Aided Primary School, Ipswich",
    "SchoolCapacity": 420,
    "Postcode": "IP1 2AX"
}, {
    "URN": 142318,
    "LA (code)": 865,
    "LA (name)": "Wiltshire",
    "EstablishmentNumber": 3159,
    "EstablishmentName": "Seagry Church of England Primary School",
    "SchoolCapacity": 90,
    "Postcode": "SN15 5EX"
}, {
    "URN": 148219,
    "LA (code)": 861,
    "LA (name)": "Stoke-on-Trent",
    "EstablishmentNumber": 2075,
    "EstablishmentName": "Co-Op Academy Clarice Cliff",
    "SchoolCapacity": 420,
    "Postcode": "ST4 3DP"
}, {
    "URN": 113791,
    "LA (code)": 838,
    "LA (name)": "Dorset",
    "EstablishmentNumber": 3210,
    "EstablishmentName": "Manor Park Church of England First School",
    "SchoolCapacity": 450,
    "Postcode": "DT1 2BH"
}, {
    "URN": 118644,
    "LA (code)": 886,
    "LA (name)": "Kent",
    "EstablishmentNumber": 3106,
    "EstablishmentName": "Eastchurch Church of England Primary School",
    "SchoolCapacity": 420,
    "Postcode": "ME12 4EJ"
}, {
    "URN": 117350,
    "LA (code)": 919,
    "LA (name)": "Hertfordshire",
    "EstablishmentNumber": 2449,
    "EstablishmentName": "Lannock Primary School",
    "SchoolCapacity": 210,
    "Postcode": "SG6 2PP"
}, {
    "URN": 124979,
    "LA (code)": 936,
    "LA (name)": "Surrey",
    "EstablishmentNumber": 2137,
    "EstablishmentName": "Shottermill Junior School",
    "SchoolCapacity": 294,
    "Postcode": "GU27 1JF"
}, {
    "URN": 105435,
    "LA (code)": 352,
    "LA (name)": "Manchester",
    "EstablishmentNumber": 2196,
    "EstablishmentName": "Old Hall Drive Junior School",
    "SchoolCapacity": "",
    "Postcode": "M18 7FU"
}, {
    "URN": 134665,
    "LA (code)": 860,
    "LA (name)": "Staffordshire",
    "EstablishmentNumber": 3493,
    "EstablishmentName": "Redbrook Hayes Community Primary School",
    "SchoolCapacity": 236,
    "Postcode": "WS15 1AU"
}, {
    "URN": 117010,
    "LA (code)": 885,
    "LA (name)": "Worcestershire",
    "EstablishmentNumber": 6004,
    "EstablishmentName": "Green Hill School",
    "SchoolCapacity": 81,
    "Postcode": "WR11 4NG"
}, {
    "URN": 112983,
    "LA (code)": 831,
    "LA (name)": "Derby",
    "EstablishmentNumber": 5209,
    "EstablishmentName": "Shelton Junior School",
    "SchoolCapacity": 300,
    "Postcode": "DE24 9EJ"
}, {
    "URN": 108663,
    "LA (code)": 393,
    "LA (name)": "South Tyneside",
    "EstablishmentNumber": 1016,
    "EstablishmentName": "Helen Gibson Nursery School",
    "SchoolCapacity": "",
    "Postcode": "NE36 0DL"
}, {
    "URN": 127429,
    "LA (code)": 353,
    "LA (name)": "Oldham",
    "EstablishmentNumber": 2050,
    "EstablishmentName": "Eustace Street Infant and Nursery School",
    "SchoolCapacity": "",
    "Postcode": ""
}, {
    "URN": 134806,
    "LA (code)": 384,
    "LA (name)": "Wakefield",
    "EstablishmentNumber": 6123,
    "EstablishmentName": "Translink Plus   (Pontefract Young Peoples Centre)",
    "SchoolCapacity": "",
    "Postcode": "WF8 3NW"
}, {
    "URN": 111531,
    "LA (code)": 807,
    "LA (name)": "Redcar and Cleveland",
    "EstablishmentNumber": 2016,
    "EstablishmentName": "Lingdale Primary School",
    "SchoolCapacity": 129,
    "Postcode": "TS12 3DU"
}, {
    "URN": 118905,
    "LA (code)": 886,
    "LA (name)": "Kent",
    "EstablishmentNumber": 5433,
    "EstablishmentName": "The Wildernesse School",
    "SchoolCapacity": 849,
    "Postcode": "TN13 3SN"
}, {
    "URN": 144522,
    "LA (code)": 908,
    "LA (name)": "Cornwall",
    "EstablishmentNumber": 2514,
    "EstablishmentName": "St Kew ACE Academy",
    "SchoolCapacity": 84,
    "Postcode": "PL30 3ER"
}, {
    "URN": 120551,
    "LA (code)": 925,
    "LA (name)": "Lincolnshire",
    "EstablishmentNumber": 3092,
    "EstablishmentName": "St Bartholomews CofE Primary School",
    "SchoolCapacity": 105,
    "Postcode": "PE11 3QJ"
}, {
    "URN": 137934,
    "LA (code)": 825,
    "LA (name)": "Buckinghamshire",
    "EstablishmentNumber": 7003,
    "EstablishmentName": "Alfriston School",
    "SchoolCapacity": 150,
    "Postcode": "HP9 2TS"
}, {
    "URN": 124940,
    "LA (code)": 936,
    "LA (name)": "Surrey",
    "EstablishmentNumber": 2013,
    "EstablishmentName": "Woodmansterne Primary School",
    "SchoolCapacity": 420,
    "Postcode": "SM7 3HU"
}, {
    "URN": 107417,
    "LA (code)": 380,
    "LA (name)": "Bradford",
    "EstablishmentNumber": 4104,
    "EstablishmentName": "Lower Fields Middle School",
    "SchoolCapacity": "",
    "Postcode": "BD4 8RG"
}, {
    "URN": 145845,
    "LA (code)": 352,
    "LA (name)": "Manchester",
    "EstablishmentNumber": 7001,
    "EstablishmentName": "Grange School",
    "SchoolCapacity": 220,
    "Postcode": "M12 4GR"
}, {
    "URN": 103254,
    "LA (code)": 330,
    "LA (name)": "Birmingham",
    "EstablishmentNumber": 2173,
    "EstablishmentName": "Slade Junior and Infant School",
    "SchoolCapacity": 210,
    "Postcode": "B23 7PX"
}, {
    "URN": 113425,
    "LA (code)": 878,
    "LA (name)": "Devon",
    "EstablishmentNumber": 3304,
    "EstablishmentName": "St Peter's Church of England Primary School",
    "SchoolCapacity": 300,
    "Postcode": "EX9 6QF"
}, {
    "URN": 130674,
    "LA (code)": 881,
    "LA (name)": "Essex",
    "EstablishmentNumber": 8006,
    "EstablishmentName": "Colchester Institute",
    "SchoolCapacity": "",
    "Postcode": "CO3 3LL"
}, {
    "URN": 139630,
    "LA (code)": 893,
    "LA (name)": "Shropshire",
    "EstablishmentNumber": 2077,
    "EstablishmentName": "Woodside Primary School",
    "SchoolCapacity": 504,
    "Postcode": "SY11 1DT"
}, {
    "URN": 131418,
    "LA (code)": 304,
    "LA (name)": "Brent",
    "EstablishmentNumber": 3602,
    "EstablishmentName": "St Mary's RC Primary School",
    "SchoolCapacity": 420,
    "Postcode": "NW6 5ST"
}, {
    "URN": 139107,
    "LA (code)": 384,
    "LA (name)": "Wakefield",
    "EstablishmentNumber": 3104,
    "EstablishmentName": "Knottingley St Botolphs C of E Academy",
    "SchoolCapacity": 354,
    "Postcode": "WF11 9BT"
}, {
    "URN": 148673,
    "LA (code)": 825,
    "LA (name)": "Buckinghamshire",
    "EstablishmentNumber": 3375,
    "EstablishmentName": "Our Lady's Catholic Primary School",
    "SchoolCapacity": 218,
    "Postcode": "HP6 5PL"
}, {
    "URN": 107220,
    "LA (code)": 380,
    "LA (name)": "Bradford",
    "EstablishmentNumber": 2057,
    "EstablishmentName": "Swain House Primary School",
    "SchoolCapacity": 420,
    "Postcode": "BD2 1JL"
}, {
    "URN": 104223,
    "LA (code)": 335,
    "LA (name)": "Walsall",
    "EstablishmentNumber": 3010,
    "EstablishmentName": "Holy Trinity Church of England Primary School",
    "SchoolCapacity": 208,
    "Postcode": "WS8 7EG"
}, {
    "URN": 101887,
    "LA (code)": 307,
    "LA (name)": "Ealing",
    "EstablishmentNumber": 2150,
    "EstablishmentName": "Hambrough Primary School",
    "SchoolCapacity": 520,
    "Postcode": "UB1 1SF"
}, {
    "URN": 105212,
    "LA (code)": 350,
    "LA (name)": "Bolton",
    "EstablishmentNumber": 3024,
    "EstablishmentName": "Scot Lane End CofE Primary School, Blackrod",
    "SchoolCapacity": 105,
    "Postcode": "BL6 5SN"
}, {
    "URN": 115829,
    "LA (code)": 851,
    "LA (name)": "Portsmouth",
    "EstablishmentNumber": 1000,
    "EstablishmentName": "The Brambles Nursery School and Children's Centre",
    "SchoolCapacity": "",
    "Postcode": "PO4 0DT"
}, {
    "URN": 141247,
    "LA (code)": 308,
    "LA (name)": "Enfield",
    "EstablishmentNumber": 6003,
    "EstablishmentName": "Focus 1st Academy",
    "SchoolCapacity": 25,
    "Postcode": "N11 1BA"
}, {
    "URN": 135240,
    "LA (code)": 850,
    "LA (name)": "Hampshire",
    "EstablishmentNumber": 6088,
    "EstablishmentName": "Fair Ways School",
    "SchoolCapacity": 35,
    "Postcode": "SO31 7HE"
}, {
    "URN": 100407,
    "LA (code)": 206,
    "LA (name)": "Islington",
    "EstablishmentNumber": 2279,
    "EstablishmentName": "Hanover Primary School",
    "SchoolCapacity": 341,
    "Postcode": "N1 8BD"
}, {
    "URN": 143563,
    "LA (code)": 330,
    "LA (name)": "Birmingham",
    "EstablishmentNumber": 2060,
    "EstablishmentName": "Cromwell Junior and Infant School",
    "SchoolCapacity": 326,
    "Postcode": "B7 5BA"
}, {
    "URN": 121262,
    "LA (code)": 926,
    "LA (name)": "Norfolk",
    "EstablishmentNumber": 7014,
    "EstablishmentName": "The Parkside School, Norwich",
    "SchoolCapacity": 170,
    "Postcode": "NR2 3JA"
}, {
    "URN": 134112,
    "LA (code)": 883,
    "LA (name)": "Thurrock",
    "EstablishmentNumber": 4029,
    "EstablishmentName": "The Gateway Community College",
    "SchoolCapacity": 1200,
    "Postcode": "RM16 2XN"
}, {
    "URN": 106532,
    "LA (code)": 359,
    "LA (name)": "Wigan",
    "EstablishmentNumber": 4035,
    "EstablishmentName": "Hawkley Hall High School",
    "SchoolCapacity": 940,
    "Postcode": "WN3 5NY"
}, {
    "URN": 117234,
    "LA (code)": 919,
    "LA (name)": "Hertfordshire",
    "EstablishmentNumber": 2251,
    "EstablishmentName": "The Reddings Primary School",
    "SchoolCapacity": 240,
    "Postcode": "HP3 8DX"
}, {
    "URN": 138291,
    "LA (code)": 925,
    "LA (name)": "Lincolnshire",
    "EstablishmentNumber": 2116,
    "EstablishmentName": "Boston West Academy",
    "SchoolCapacity": 420,
    "Postcode": "PE21 7QG"
}, {
    "URN": 111430,
    "LA (code)": 877,
    "LA (name)": "Warrington",
    "EstablishmentNumber": 4200,
    "EstablishmentName": "Culcheth High School",
    "SchoolCapacity": 1240,
    "Postcode": "WA3 5HH"
}, {
    "URN": 145008,
    "LA (code)": 336,
    "LA (name)": "Wolverhampton",
    "EstablishmentNumber": 4007,
    "EstablishmentName": "Ormiston SWB Academy",
    "SchoolCapacity": 1200,
    "Postcode": "WV14 0LN"
}, {
    "URN": 111272,
    "LA (code)": 896,
    "LA (name)": "Cheshire West and Chester",
    "EstablishmentNumber": 3151,
    "EstablishmentName": "Dodleston CofE Primary School",
    "SchoolCapacity": 84,
    "Postcode": "CH4 9NG"
}, {
    "URN": 127034,
    "LA (code)": 320,
    "LA (name)": "Waltham Forest",
    "EstablishmentNumber": 2026,
    "EstablishmentName": "Blackhorse Infant School",
    "SchoolCapacity": "",
    "Postcode": ""
}, {
    "URN": 103165,
    "LA (code)": 330,
    "LA (name)": "Birmingham",
    "EstablishmentNumber": 2018,
    "EstablishmentName": "The Oaks Primary School",
    "SchoolCapacity": 420,
    "Postcode": "B14 5RY"
}, {
    "URN": 147458,
    "LA (code)": 0,
    "LA (name)": "Does not apply",
    "EstablishmentNumber": 6188,
    "EstablishmentName": "Braeside School",
    "SchoolCapacity": "",
    "Postcode": ""
}, {
    "URN": 141903,
    "LA (code)": 855,
    "LA (name)": "Leicestershire",
    "EstablishmentNumber": 2076,
    "EstablishmentName": "Greystoke Primary School",
    "SchoolCapacity": 420,
    "Postcode": "LE19 2GX"
}, {
    "URN": 136776,
    "LA (code)": 881,
    "LA (name)": "Essex",
    "EstablishmentNumber": 5408,
    "EstablishmentName": "Saffron Walden County High School",
    "SchoolCapacity": 2050,
    "Postcode": "CB11 4UH"
}, {
    "URN": 101941,
    "LA (code)": 307,
    "LA (name)": "Ealing",
    "EstablishmentNumber": 5402,
    "EstablishmentName": "The Ellen Wilkinson School for Girls",
    "SchoolCapacity": 1416,
    "Postcode": "W3 0HW"
}, {
    "URN": 144545,
    "LA (code)": 822,
    "LA (name)": "Bedford",
    "EstablishmentNumber": 2211,
    "EstablishmentName": "Shackleton Primary School",
    "SchoolCapacity": 510,
    "Postcode": "MK42 9LZ"
}, {
    "URN": 112356,
    "LA (code)": 909,
    "LA (name)": "Cumbria",
    "EstablishmentNumber": 3550,
    "EstablishmentName": "Leven Valley CofE Primary School",
    "SchoolCapacity": 63,
    "Postcode": "LA12 8QF"
}, {
    "URN": 105455,
    "LA (code)": 352,
    "LA (name)": "Manchester",
    "EstablishmentNumber": 2254,
    "EstablishmentName": "Stanley Grove Junior School",
    "SchoolCapacity": "",
    "Postcode": "M12 4NL"
}, {
    "URN": 146844,
    "LA (code)": 856,
    "LA (name)": "Leicester",
    "EstablishmentNumber": 2071,
    "EstablishmentName": "Highfields Primary School",
    "SchoolCapacity": 288,
    "Postcode": "LE2 0UU"
}, {
    "URN": 146471,
    "LA (code)": 830,
    "LA (name)": "Derbyshire",
    "EstablishmentNumber": 2148,
    "EstablishmentName": "Kilburn Junior School",
    "SchoolCapacity": 170,
    "Postcode": "DE56 0LA"
}];

//see https://www.getthedata.com/open-postcode-geo-api
function getcoordinates(postcode) {
    let url = "https://api.getthedata.com/postcode/" + postcode.replace(" ", "+");
    try {
        return fetch(url).then(function(response) {
            return response.json(); // Process it inside the `then`
        });
    } catch (error) {
        console.log(error);
    }
}
//svg setup
var svgns = "http://www.w3.org/2000/svg",
    container = document.getElementById('cont');

function drawcircle(easting, northing, size, label, identifier) {
    var xScale = (container.width.baseVal.value - 20) / (700000);
    var x = 10 + (xScale * easting);
    var yScale = (container.height.baseVal.value - 20) / (700000);
    var y = 10 + (yScale * (700000 - northing));
    var sizeScale = 100;
    var radius = size / sizeScale;

    //draw or update the svg circle
    var circle = document.getElementById("Circle_" + identifier);
    if (circle == null) {
        circle = document.createElementNS(svgns, 'circle');
    }
    circle.setAttributeNS(null, 'id', "Circle_" + identifier);
    circle.setAttributeNS(null, 'cx', x);
    circle.setAttributeNS(null, 'cy', y);
    circle.setAttributeNS(null, 'r', radius);
    circle.setAttributeNS(null, 'style', 'fill: #c6605e; stroke: none; stroke-width: 1px;');
    container.appendChild(circle);

    //draw or update the circle label
    var newText = document.getElementById("Circle_Label_" + identifier);
    if (newText == null) {
        newText = document.createElementNS(svgns, "text");
        var textNode = document.createTextNode(label);
        newText.appendChild(textNode);
    }
    newText.setAttributeNS(null, 'id', "Circle_Label_" + identifier);
    newText.setAttributeNS(null, "x", x);
    newText.setAttributeNS(null, "y", y);
    newText.setAttributeNS(null, "font-size", "10");
    var textNode = document.createTextNode(label);
    newText.replaceChild(textNode, newText.childNodes[0]);
    container.appendChild(newText);
}

//start of my code 
let schoolDataCopy = [];

function projectSchoolDataIntoSchoolDataCopy() {
    schoolDataCopy = [];
    for (var i = 0; i < schooldata.length; i++) {
        var obj = schooldata[i];
        if (isNaN(obj.SchoolCapacity) || obj.SchoolCapacity === "") {
            obj.SchoolCapacity = 0;
        }
        if (obj["LA (code)"] !== 0) {
            schoolDataCopy.push(obj);
        }
    }
}

//renamed to remove spaces to allow use of dot notation
function renameKeys() {
    renameKey("LA (code)", "LA_Code");
    renameKey("LA (name)", "LA_Name");
}

function sortSchoolDataCopy() {
    schoolDataCopy.sort((a, b) => (a.LA_Code > b.LA_Code) ? 1 : ((b.LA_Code > a.LA_Code) ? -1 : 0))
}

function renameKey(oldKey, newKey) {
    for (var i = 0; i < schoolDataCopy.length; i++) {
        var obj = schoolDataCopy[i];
        if (obj[oldKey] !== undefined) {
            obj[newKey] = obj[oldKey];
            obj[newKey].value = obj[oldKey].value;
            delete(obj[oldKey]);
            schoolDataCopy.push(obj);
        } else if (obj[newKey] === undefined) {
            //log that key was undefined
            console.log(`undefined key ${oldKey} for element`, obj);
        }
    }
}
//reduce elements in schoolDataCopy that have the same LA_Code into a single element
//add property for the sum of all school capacities
//sums all school capacities for that LA_Code and puts into the SumCapacity property
function collateSchoolCapacities() {
    const initialValue = [];
    //using different name to global LAData variable
    const laData = schoolDataCopy.reduce(function(processedItems, currentItems) {
        let index = processedItems.findIndex(x => x.LA_Code === currentItems.LA_Code)
        if (index === -1) {
            let obj = currentItems;
            obj["SumCapacity"] = currentItems.SchoolCapacity;
            processedItems.push(obj);
        } else {
            processedItems[index].SumCapacity += currentItems.SchoolCapacity;
        }
        return processedItems;
    }, initialValue);
    return laData;
}
//end of my code

//process schools data
projectSchoolDataIntoSchoolDataCopy();
renameKeys();
sortSchoolDataCopy();
var LAData = collateSchoolCapacities();
let LAs = LAData.reduce(function(allLAs, LA) {
    allLAs[LA.LA_Name] = {
        SumCapacity: LA.SumCapacity || 0,
        coordinates: []
    };
    getcoordinates(LA.Postcode).then(function(data) {
        allLAs[LA.LA_Name].coordinates.push([data.data.easting, data.data.northing]);
        drawcircle(data.data.easting, data.data.northing, LA.SumCapacity, LA.LA_Name, LA.URN);
    });
    return allLAs;
}, {});