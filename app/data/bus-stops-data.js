export function renderBusStopNames(state, val) {
  return state.stop_name.toLowerCase().indexOf(val.toLowerCase()) !== -1;
}

/*
Content : Static data 
Source : Delhi Transport Corporation
Courtesy : IIID Remote Bus api
Content : List of Bus stop names and Bus IDs
*/
export function BusStopsData() {
  return [
    {
      stop_id: 3,
      stop_name: "Kidwai Nagar",
    },
    {
      stop_id: 8,
      stop_name: "National Archives",
    },
    {
      stop_id: 74,
      stop_name: "APS Colony",
    },
    {
      stop_id: 77,
      stop_name: "Kewal Park",
    },
    {
      stop_id: 93,
      stop_name: "Sir Chhotu Ram Polytechnic",
    },
    {
      stop_id: 107,
      stop_name: "ISBT Kashmere Gate",
    },
    {
      stop_id: 151,
      stop_name: "Shiv Enclave Dichau",
    },
    {
      stop_id: 163,
      stop_name: "Tikri Hospital",
    },
    {
      stop_id: 168,
      stop_name: "Kapashera Border",
    },
    {
      stop_id: 196,
      stop_name: "Seemapuri Old",
    },
    {
      stop_id: 327,
      stop_name: "Dichau Kalan School",
    },
    {
      stop_id: 334,
      stop_name: "Tikri Piyau / Azad Hind Gram",
    },
    {
      stop_id: 335,
      stop_name: "Mahipal Pur Crossing",
    },
    {
      stop_id: 375,
      stop_name: "T B Hospital",
    },
    {
      stop_id: 406,
      stop_name: "AIR Force Camp",
    },
    {
      stop_id: 421,
      stop_name: "Bakkar Garh Xing",
    },
    {
      stop_id: 434,
      stop_name: "Kapashera Crossing",
    },
    {
      stop_id: 451,
      stop_name: "FCI Ghevra",
    },
    {
      stop_id: 486,
      stop_name: "Exchange Store / Civil Lines Metro Station",
    },
    {
      stop_id: 487,
      stop_name: "Mall Road",
    },
    {
      stop_id: 537,
      stop_name: "Subroto Park (Arjun Path)",
    },
    {
      stop_id: 595,
      stop_name: "Ghevra Village",
    },
    {
      stop_id: 607,
      stop_name: "Kair Depot",
    },
    {
      stop_id: 611,
      stop_name: "Prithvi Raj Road Crossing",
    },
    {
      stop_id: 655,
      stop_name: "Kanjhawala Depot (Narela Road)",
    },
    {
      stop_id: 660,
      stop_name: "Mata DanKaur Public School",
    },
    {
      stop_id: 681,
      stop_name: "Balak Ram Hospital",
    },
    {
      stop_id: 718,
      stop_name: "IIT Gate (Aurobindo Marg)",
    },
    {
      stop_id: 731,
      stop_name: "Samaspur Khalsa",
    },
    {
      stop_id: 737,
      stop_name: "Vidhan Sabha Metro Station",
    },
    {
      stop_id: 740,
      stop_name: "Kanjhawala Haryana Shakti C-School",
    },
    {
      stop_id: 755,
      stop_name: "Yusuf Sarai",
    },
    {
      stop_id: 811,
      stop_name: "Claridges Hotel",
    },
    {
      stop_id: 817,
      stop_name: "Ajmeri Gate / Kamla Market",
    },
    {
      stop_id: 847,
      stop_name: "DDA Flats Lado Sarai",
    },
    {
      stop_id: 889,
      stop_name: "J  and  K Pocket Dilshad Garden",
    },
    {
      stop_id: 894,
      stop_name: "Kanjhawala Village",
    },
    {
      stop_id: 897,
      stop_name: "Indian Oil Bhawan",
    },
    {
      stop_id: 907,
      stop_name: "Tikari Village",
    },
    {
      stop_id: 932,
      stop_name: "ISTM",
    },
    {
      stop_id: 936,
      stop_name: "I P College",
    },
    {
      stop_id: 955,
      stop_name: "Mitraon School",
    },
    {
      stop_id: 1022,
      stop_name: "Sewa Kutir",
    },
    {
      stop_id: 1093,
      stop_name: "S.K.V.Dhansa",
    },
    {
      stop_id: 1100,
      stop_name: "Mehrauli Terminal",
    },
    {
      stop_id: 1202,
      stop_name: "Surehra Crossing",
    },
    {
      stop_id: 1267,
      stop_name: "Kapashera Village",
    },
    {
      stop_id: 1347,
      stop_name: "Nityanand Marg",
    },
    {
      stop_id: 1349,
      stop_name: "Dhansa Village",
    },
    {
      stop_id: 1395,
      stop_name: "Nirmal Vihar",
    },
    {
      stop_id: 1423,
      stop_name: "Kanjhawala Chowk",
    },
    {
      stop_id: 1427,
      stop_name: "Vasant Vihar Depot",
    },
    {
      stop_id: 1428,
      stop_name: "Shani Mandir / Vasant Village",
    },
    {
      stop_id: 1430,
      stop_name: "Indian Oil Corporation",
    },
    {
      stop_id: 1454,
      stop_name: "Qadipur",
    },
    {
      stop_id: 1459,
      stop_name: "PS Kamla Market",
    },
    {
      stop_id: 1488,
      stop_name: "Shankar Vihar / National Highway 8",
    },
    {
      stop_id: 1496,
      stop_name: "Ram Prastha Temple",
    },
    {
      stop_id: 1508,
      stop_name: "Padmani Enclave",
    },
    {
      stop_id: 1517,
      stop_name: "Timarpur",
    },
    {
      stop_id: 1654,
      stop_name: "SJ Airport",
    },
    {
      stop_id: 1661,
      stop_name: "Dichau Kalan Depot",
    },
    {
      stop_id: 1685,
      stop_name: "Mori Gate Terminal",
    },
    {
      stop_id: 1746,
      stop_name: "Safdurjung Hospital / AIIMS",
    },
    {
      stop_id: 1760,
      stop_name: "Surya Nagar",
    },
    {
      stop_id: 1763,
      stop_name: "Nehru Vihar",
    },
    {
      stop_id: 1863,
      stop_name: "Dilshad Garden Depot Cluster",
    },
    {
      stop_id: 1952,
      stop_name: "Old Secretariat (Postal Account Office)",
    },
    {
      stop_id: 1972,
      stop_name: "Desu Sub Station",
    },
    {
      stop_id: 2028,
      stop_name: "Banarsi Daas Estate Timarpur",
    },
    {
      stop_id: 2036,
      stop_name: "INS Hostel",
    },
    {
      stop_id: 2052,
      stop_name: "Samalkha Village",
    },
    {
      stop_id: 2075,
      stop_name: "ISBT Kashmere Gate Terminal",
    },
    {
      stop_id: 2102,
      stop_name: "The Uppal Hotel",
    },
    {
      stop_id: 2113,
      stop_name: "Jaffarpur RTRM Hospital",
    },
    {
      stop_id: 2135,
      stop_name: "National Museum",
    },
    {
      stop_id: 2155,
      stop_name: "Rangpuri",
    },
    {
      stop_id: 2177,
      stop_name: "Anand Vihar ISBT",
    },
    {
      stop_id: 2231,
      stop_name: "BBM Cluster Depot",
    },
    {
      stop_id: 2299,
      stop_name: "Qutub Minar",
    },
    {
      stop_id: 2302,
      stop_name: "Green Park/Metro Station",
    },
    {
      stop_id: 2316,
      stop_name: "Police Station Timarpur",
    },
    {
      stop_id: 2325,
      stop_name: "Dichau Village",
    },
    {
      stop_id: 2396,
      stop_name: "Ludlow Castle",
    },
    {
      stop_id: 2450,
      stop_name: "Dhansa Border",
    },
    {
      stop_id: 2451,
      stop_name: "Civil Line Metro Station",
    },
    {
      stop_id: 2465,
      stop_name: "Shadhara Bordar Road No 62",
    },
    {
      stop_id: 2508,
      stop_name: "Munirka Family Planning",
    },
    {
      stop_id: 2541,
      stop_name: "Vishwa Vidyalaya Metro Station",
    },
    {
      stop_id: 2547,
      stop_name: "Kair Village",
    },
    {
      stop_id: 2551,
      stop_name: "GPO",
    },
    {
      stop_id: 2580,
      stop_name: "Azadpur Terminal",
    },
    {
      stop_id: 2586,
      stop_name: "Dichau Chowk",
    },
    {
      stop_id: 2643,
      stop_name: "Ram Prastha Crossing",
    },
    {
      stop_id: 2784,
      stop_name: "Arjun Path",
    },
    {
      stop_id: 2801,
      stop_name: "Udaseen Ashram",
    },
    {
      stop_id: 2802,
      stop_name: "Old Delhi Railway Station",
    },
    {
      stop_id: 2806,
      stop_name: "Issapur Xing",
    },
    {
      stop_id: 2834,
      stop_name: "R K Puram Sec-5",
    },
    {
      stop_id: 2852,
      stop_name: "S J Madrasa",
    },
    {
      stop_id: 2853,
      stop_name: "Vivekanand Marg",
    },
    {
      stop_id: 2918,
      stop_name: "Hauz Khas",
    },
    {
      stop_id: 2919,
      stop_name: "New Seema Puri Depot Cluster",
    },
    {
      stop_id: 2939,
      stop_name: "PVC Market / Sarvodya Kanya Vidhyalaya",
    },
    {
      stop_id: 2943,
      stop_name: "Shivaji Park",
    },
    {
      stop_id: 2945,
      stop_name: "GTB Nagar / Haqiqat Nagar",
    },
    {
      stop_id: 2946,
      stop_name: "Prithvi Raj Road",
    },
    {
      stop_id: 2987,
      stop_name: "Guru Govind Singh University (Kashmere Gate)",
    },
    {
      stop_id: 3065,
      stop_name: "Kouria Bridge",
    },
    {
      stop_id: 3094,
      stop_name: "Nehru Vihar Xing",
    },
    {
      stop_id: 3103,
      stop_name: "Rawta Crossing",
    },
    {
      stop_id: 3111,
      stop_name: "Khyber Pass",
    },
    {
      stop_id: 3118,
      stop_name: "Swami Malai Mandir",
    },
    {
      stop_id: 3173,
      stop_name: "Mitraon Village (Kair Village Road)",
    },
    {
      stop_id: 3178,
      stop_name: "Mukundpur (Changeover Point)",
    },
    {
      stop_id: 3183,
      stop_name: "Kalyan Vihar Terminal",
    },
    {
      stop_id: 3221,
      stop_name: "Windsor Place",
    },
    {
      stop_id: 3278,
      stop_name: "Munirka DDA Flats",
    },
    {
      stop_id: 3377,
      stop_name: "NCERT",
    },
    {
      stop_id: 3448,
      stop_name: "Sanskrit Vidyapeeth",
    },
    {
      stop_id: 3469,
      stop_name: "Shiv Murti (NH-8)",
    },
    {
      stop_id: 3474,
      stop_name: "Western Court",
    },
    {
      stop_id: 3524,
      stop_name: "Adhchini Village",
    },
    {
      stop_id: 3763,
      stop_name: "FAI",
    },
    {
      stop_id: 3824,
      stop_name: "Qutub Hotel",
    },
    {
      stop_id: 3843,
      stop_name: "PTS",
    },
    {
      stop_id: 3904,
      stop_name: "Samalkha Crossing",
    },
    {
      stop_id: 3925,
      stop_name: "Ber Sarai",
    },
    {
      stop_id: 3928,
      stop_name: "Mothers International School",
    },
    {
      stop_id: 4177,
      stop_name: "School Of Physical Science",
    },
    {
      stop_id: 4192,
      stop_name: "IIT Gate",
    },
    {
      stop_id: 4232,
      stop_name: "Katwaria Sarai",
    },
    {
      stop_id: 4248,
      stop_name: "MMTC",
    },
  ];
}
