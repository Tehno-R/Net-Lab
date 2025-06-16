const gpus = [
    {
        "gpuName": "GeForce RTX 3090 Ti",
        "G3Dmark": 29094,
        "price": 2099.99,
        "powerPerformance": 64.65,
        "releaseYear": 2022,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "GeForce RTX 3080 Ti",
        "G3Dmark": 26887,
        "price": 1199.99,
        "powerPerformance": 76.82,
        "releaseYear": 2021,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "GeForce RTX 3090",
        "G3Dmark": 26395,
        "price": 1749.99,
        "powerPerformance": 75.41,
        "releaseYear": 2020,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "Radeon RX 6900 XT",
        "G3Dmark": 25458,
        "price": 1120.31,
        "powerPerformance": 84.86,
        "releaseYear": 2020,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "GeForce RTX 3080",
        "G3Dmark": 24853,
        "price": 999,
        "powerPerformance": 77.66,
        "releaseYear": 2020,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "GeForce RTX 3070 Ti",
        "G3Dmark": 23367,
        "price": 749.99,
        "powerPerformance": 80.58,
        "releaseYear": 2021,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "Radeon RX 6800 XT",
        "G3Dmark": 23364,
        "price": 859,
        "powerPerformance": 77.88,
        "releaseYear": 2020,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "RTX A5000",
        "G3Dmark": 22867,
        "price": 2631.2,
        "powerPerformance": 99.42,
        "releaseYear": 2021,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "RTX A6000",
        "G3Dmark": 22122,
        "price": 4999.99,
        "powerPerformance": 73.74,
        "releaseYear": 2020,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "GeForce RTX 3070",
        "G3Dmark": 22093,
        "price": 719.99,
        "powerPerformance": 100.42,
        "releaseYear": 2020,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "GeForce RTX 2080 Ti",
        "G3Dmark": 21796,
        "price": 998.59,
        "powerPerformance": 87.18,
        "releaseYear": 2018,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "RTX A4500",
        "G3Dmark": 21546,
        "price": 2134.64,
        "powerPerformance": 107.73,
        "releaseYear": 2021,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "Radeon RX 6800",
        "G3Dmark": 20667,
        "price": 758.99,
        "powerPerformance": 82.67,
        "releaseYear": 2020,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "GeForce RTX 3060 Ti",
        "G3Dmark": 20206,
        "price": 599.99,
        "powerPerformance": 101.03,
        "releaseYear": 2020,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "TITAN RTX",
        "G3Dmark": 20169,
        "price": 2794.99,
        "powerPerformance": 72.03,
        "releaseYear": 2018,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "Quadro RTX 6000",
        "G3Dmark": 19692,
        "price": 6300,
        "powerPerformance": 66.75,
        "releaseYear": 2018,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "GeForce RTX 2080 SUPER",
        "G3Dmark": 19519,
        "price": 683.99,
        "powerPerformance": 78.08,
        "releaseYear": 2019,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "TITAN Xp",
        "G3Dmark": 19508,
        "price": 1645,
        "powerPerformance": 78.03,
        "releaseYear": 2017,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "GeForce RTX 3080 Ti Laptop GPU",
        "G3Dmark": 19507,
        "price": 1999.99,
        "powerPerformance": 130.05,
        "releaseYear": 2021,
        "category": "Mobile",
        "subCategory": "Gaming"
    },
    {
        "gpuName": "Quadro RTX 8000",
        "G3Dmark": 19126,
        "price": 4741.49,
        "powerPerformance": 73.56,
        "releaseYear": 2018,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "Radeon RX 6700 XT",
        "G3Dmark": 18993,
        "price": 529.99,
        "powerPerformance": 82.58,
        "releaseYear": 2021,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "RTX A4000",
        "G3Dmark": 18988,
        "price": 1233.98,
        "powerPerformance": 135.63,
        "releaseYear": 2021,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "TITAN V",
        "G3Dmark": 18816,
        "price": 1999.99,
        "powerPerformance": 75.26,
        "releaseYear": 2017,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "Radeon PRO W6800",
        "G3Dmark": 18802,
        "price": 2194.99,
        "powerPerformance": 75.21,
        "releaseYear": 2021,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "GeForce RTX 2080",
        "G3Dmark": 18732,
        "price": 633.03,
        "powerPerformance": 74.93,
        "releaseYear": 2018,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "TITAN Xp COLLECTORS EDITION",
        "G3Dmark": 18721,
        "price": 1999.99,
        "powerPerformance": 74.89,
        "releaseYear": 2017,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "GeForce RTX 3070 Ti Laptop GPU",
        "G3Dmark": 18490,
        "price": 1499.99,
        "powerPerformance": 147.92,
        "releaseYear": 2021,
        "category": "Mobile",
        "subCategory": "Gaming"
    },
    {
        "gpuName": "GeForce GTX 1080 Ti",
        "G3Dmark": 18284,
        "price": 604.15,
        "powerPerformance": 73.14,
        "releaseYear": 2017,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "NVIDIA TITAN Xp",
        "G3Dmark": 18280,
        "price": 1645,
        "powerPerformance": 73.12,
        "releaseYear": 2017,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "GeForce RTX 2070 SUPER",
        "G3Dmark": 18168,
        "price": 613.8,
        "powerPerformance": 84.5,
        "releaseYear": 2019,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "Quadro GV100",
        "G3Dmark": 17675,
        "price": 8999,
        "powerPerformance": 70.7,
        "releaseYear": 2017,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "TITAN V CEO Edition",
        "G3Dmark": 16988,
        "price": 2499.99,
        "powerPerformance": 67.95,
        "releaseYear": 2017,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "GeForce RTX 3060",
        "G3Dmark": 16958,
        "price": 329,
        "powerPerformance": 99.76,
        "releaseYear": 2021,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "Radeon RX 5700 XT",
        "G3Dmark": 16892,
        "price": 694.94,
        "powerPerformance": 75.08,
        "releaseYear": 2019,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "Radeon Pro VII",
        "G3Dmark": 16853,
        "price": 1799.99,
        "powerPerformance": 67.41,
        "releaseYear": 2020,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "Radeon VII",
        "G3Dmark": 16767,
        "price": 1899.95,
        "powerPerformance": 55.89,
        "releaseYear": 2019,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "Radeon RX 5700 XT 50th Anniversary",
        "G3Dmark": 16650,
        "price": 799.99,
        "powerPerformance": 70.85,
        "releaseYear": 2019,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "GeForce RTX 3080 Laptop GPU",
        "G3Dmark": 16522,
        "price": 1799.99,
        "powerPerformance": 143.67,
        "releaseYear": 2021,
        "category": "Mobile",
        "subCategory": "Gaming"
    },
    {
        "gpuName": "GeForce RTX 2060 SUPER",
        "G3Dmark": 16514,
        "price": 528.89,
        "powerPerformance": 94.37,
        "releaseYear": 2019,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "RTX A4000 Laptop GPU",
        "G3Dmark": 16297,
        "price": 1499.99,
        "powerPerformance": 116.41,
        "releaseYear": 2021,
        "category": "Mobile",
        "subCategory": "Professional"
    },
    {
        "gpuName": "RTX A5000 Laptop GPU",
        "G3Dmark": 16273,
        "price": 1999.99,
        "powerPerformance": 98.62,
        "releaseYear": 2021,
        "category": "Mobile",
        "subCategory": "Professional"
    },
    {
        "gpuName": "Quadro RTX 5000",
        "G3Dmark": 16260,
        "price": 2499.99,
        "powerPerformance": 70.7,
        "releaseYear": 2018,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "Tesla V100-SXM2-16GB",
        "G3Dmark": 16235,
        "price": 7999.99,
        "powerPerformance": 85.42,
        "releaseYear": 2017,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "Quadro GP100",
        "G3Dmark": 16203,
        "price": 4999.99,
        "powerPerformance": 68.95,
        "releaseYear": 2016,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "GeForce RTX 2070",
        "G3Dmark": 16079,
        "price": 627.44,
        "powerPerformance": 91.88,
        "releaseYear": 2018,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "Radeon RX 6600 XT",
        "G3Dmark": 15853,
        "price": 399.99,
        "powerPerformance": 99.08,
        "releaseYear": 2021,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "Quadro P6000",
        "G3Dmark": 15811,
        "price": 3250,
        "powerPerformance": 63.25,
        "releaseYear": 2016,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "Quadro RTX 4000",
        "G3Dmark": 15515,
        "price": 899,
        "powerPerformance": 96.97,
        "releaseYear": 2018,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "GeForce GTX 1080",
        "G3Dmark": 15265,
        "price": 442.79,
        "powerPerformance": 84.8,
        "releaseYear": 2016,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "GeForce RTX 3070 Laptop GPU",
        "G3Dmark": 15231,
        "price": 1299.99,
        "powerPerformance": 132.44,
        "releaseYear": 2021,
        "category": "Mobile",
        "subCategory": "Gaming"
    },
    {
        "gpuName": "GeForce RTX 2080 (Mobile)",
        "G3Dmark": 15107,
        "price": 1499.99,
        "powerPerformance": 100.71,
        "releaseYear": 2018,
        "category": "Mobile",
        "subCategory": "Gaming"
    },
    {
        "gpuName": "Radeon Pro W5700",
        "G3Dmark": 15085,
        "price": 1649.99,
        "powerPerformance": 73.59,
        "releaseYear": 2019,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "Quadro RTX 5000 (Mobile)",
        "G3Dmark": 14832,
        "price": 1999.99,
        "powerPerformance": 134.84,
        "releaseYear": 2019,
        "category": "Mobile",
        "subCategory": "Professional"
    },
    {
        "gpuName": "Radeon RX 5700",
        "G3Dmark": 14729,
        "price": 899.95,
        "powerPerformance": 81.83,
        "releaseYear": 2019,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "Radeon RX Vega 64",
        "G3Dmark": 14636,
        "price": 799.99,
        "powerPerformance": 49.62,
        "releaseYear": 2017,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "GeForce GTX 1070 Ti",
        "G3Dmark": 14500,
        "price": 389,
        "powerPerformance": 80.56,
        "releaseYear": 2017,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "GeForce RTX 2070 Super with Max-Q Design",
        "G3Dmark": 14261,
        "price": 1499.99,
        "powerPerformance": 178.27,
        "releaseYear": 2019,
        "category": "Mobile",
        "subCategory": "Gaming"
    },
    {
        "gpuName": "Radeon PRO W6600",
        "G3Dmark": 14212,
        "price": 899.99,
        "powerPerformance": 85.42,
        "releaseYear": 2021,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "Radeon Pro WX 8200",
        "G3Dmark": 14110,
        "price": 1599.39,
        "powerPerformance": 61.35,
        "releaseYear": 2018,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "GeForce RTX 2080 Super with Max-Q Design",
        "G3Dmark": 14020,
        "price": 1499.99,
        "powerPerformance": 175.24,
        "releaseYear": 2019,
        "category": "Mobile",
        "subCategory": "Gaming"
    },
    {
        "gpuName": "GeForce RTX 2060",
        "G3Dmark": 13953,
        "price": 389.99,
        "powerPerformance": 87.2,
        "releaseYear": 2019,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "Quadro RTX 5000 with Max-Q Design",
        "G3Dmark": 13893,
        "price": 1999.99,
        "powerPerformance": 173.66,
        "releaseYear": 2019,
        "category": "Mobile",
        "subCategory": "Professional"
    },
    {
        "gpuName": "GeForce GTX 980 Ti",
        "G3Dmark": 13864,
        "price": 719.4,
        "powerPerformance": 55.45,
        "releaseYear": 2015,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "Radeon RX 5600 XT",
        "G3Dmark": 13836,
        "price": 545,
        "powerPerformance": 92.24,
        "releaseYear": 2020,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "Radeon Vega Frontier Edition",
        "G3Dmark": 13748,
        "price": 1679.99,
        "powerPerformance": 39.28,
        "releaseYear": 2017,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "RTX A2000 12GB",
        "G3Dmark": 13688,
        "price": 899.99,
        "powerPerformance": 95.42,
        "releaseYear": 2021,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "GeForce RTX 2080 with Max-Q Design",
        "G3Dmark": 13681,
        "price": 2099.99,
        "powerPerformance": 152.01,
        "releaseYear": 2018,
        "category": "Mobile",
        "subCategory": "Gaming"
    },
    {
        "gpuName": "NVIDIA TITAN X",
        "G3Dmark": 13660,
        "price": 608.1,
        "powerPerformance": 54.64,
        "releaseYear": 2016,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "Radeon RX Vega 56",
        "G3Dmark": 13636,
        "price": 752.99,
        "powerPerformance": 64.93,
        "releaseYear": 2017,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "Quadro RTX 4000 with Max-Q Design",
        "G3Dmark": 13622,
        "price": 1499.99,
        "powerPerformance": 170.27,
        "releaseYear": 2019,
        "category": "Mobile",
        "subCategory": "Professional"
    },
    {
        "gpuName": "GeForce GTX 1070",
        "G3Dmark": 13482,
        "price": 342.55,
        "powerPerformance": 89.88,
        "releaseYear": 2016,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "RTX A3000 Laptop GPU",
        "G3Dmark": 13263,
        "price": 999.99,
        "powerPerformance": 102.02,
        "releaseYear": 2021,
        "category": "Mobile",
        "subCategory": "Professional"
    },
    {
        "gpuName": "Radeon Pro WX 9100",
        "G3Dmark": 13241,
        "price": 1499.99,
        "powerPerformance": 57.57,
        "releaseYear": 2017,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "GeForce GTX TITAN X",
        "G3Dmark": 13173,
        "price": 1096.99,
        "powerPerformance": 52.69,
        "releaseYear": 2015,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "RTX A2000",
        "G3Dmark": 13128,
        "price": 845.99,
        "powerPerformance": 95.42,
        "releaseYear": 2021,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "GeForce GTX 1660 SUPER",
        "G3Dmark": 12732,
        "price": 329.99,
        "powerPerformance": 101.85,
        "releaseYear": 2019,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "GeForce RTX 3060 Laptop GPU",
        "G3Dmark": 12674,
        "price": 479.99,
        "powerPerformance": 110.21,
        "releaseYear": 2021,
        "category": "Mobile",
        "subCategory": "Gaming"
    },
    {
        "gpuName": "GeForce RTX 2070 (Mobile)",
        "G3Dmark": 12354,
        "price": 1199.99,
        "powerPerformance": 107.43,
        "releaseYear": 2018,
        "category": "Mobile",
        "subCategory": "Gaming"
    },
    {
        "gpuName": "Quadro P5200",
        "G3Dmark": 12144,
        "price": 1999.99,
        "powerPerformance": 85.42,
        "releaseYear": 2017,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "GeForce RTX 2070 with Max-Q Design",
        "G3Dmark": 12062,
        "price": 1499.99,
        "powerPerformance": 150.77,
        "releaseYear": 2018,
        "category": "Mobile",
        "subCategory": "Gaming"
    },
    {
        "gpuName": "Quadro P5000",
        "G3Dmark": 11976,
        "price": 1868.99,
        "powerPerformance": 66.54,
        "releaseYear": 2016,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "GeForce GTX 1660 Ti",
        "G3Dmark": 11794,
        "price": 349.99,
        "powerPerformance": 98.29,
        "releaseYear": 2019,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "GeForce GTX 1660",
        "G3Dmark": 11695,
        "price": 399.99,
        "powerPerformance": 97.46,
        "releaseYear": 2019,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "GeForce GTX 1080 with Max-Q Design",
        "G3Dmark": 11507,
        "price": 999.99,
        "powerPerformance": 104.61,
        "releaseYear": 2017,
        "category": "Mobile",
        "subCategory": "Gaming"
    },
    {
        "gpuName": "Quadro P4000",
        "G3Dmark": 11422,
        "price": 556.19,
        "powerPerformance": 108.78,
        "releaseYear": 2017,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "Quadro M6000",
        "G3Dmark": 11397,
        "price": 1099.98,
        "powerPerformance": 45.59,
        "releaseYear": 2015,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "GeForce RTX 2060 (Mobile)",
        "G3Dmark": 11355,
        "price": 999.99,
        "powerPerformance": 141.93,
        "releaseYear": 2019,
        "category": "Mobile",
        "subCategory": "Gaming"
    },
    {
        "gpuName": "GeForce GTX 980",
        "G3Dmark": 11237,
        "price": 247.35,
        "powerPerformance": 68.1,
        "releaseYear": 2014,
        "category": "Desktop",
        "subCategory": "High-End"
    },
    {
        "gpuName": "Quadro RTX 3000",
        "G3Dmark": 11122,
        "price": 999.99,
        "powerPerformance": 139.03,
        "releaseYear": 2019,
        "category": "Mobile",
        "subCategory": "Professional"
    },
    {
        "gpuName": "Tesla T4",
        "G3Dmark": 11113,
        "price": 4853.98,
        "powerPerformance": 95.42,
        "releaseYear": 2018,
        "category": "Workstation",
        "subCategory": "Professional"
    },
    {
        "gpuName": "GeForce GTX 1060",
        "G3Dmark": 10070,
        "price": 279.99,
        "powerPerformance": 83.92,
        "releaseYear": 2016,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "GeForce GTX 1650 SUPER",
        "G3Dmark": 10032,
        "price": 441.05,
        "powerPerformance": 100.32,
        "releaseYear": 2019,
        "category": "Desktop",
        "subCategory": "Mid-Range"
    },
    {
        "gpuName": "GeForce GTX 1050 Ti",
        "G3Dmark": 6314,
        "price": 189.42,
        "powerPerformance": 84.18,
        "releaseYear": 2016,
        "category": "Desktop",
        "subCategory": "Entry-Level"
    },
    {
        "gpuName": "GeForce GTX 1050",
        "G3Dmark": 5090,
        "price": 203.1,
        "powerPerformance": 67.86,
        "releaseYear": 2016,
        "category": "Desktop",
        "subCategory": "Entry-Level"
    },
    {
        "gpuName": "GeForce GT 1030",
        "G3Dmark": 2545,
        "price": 109.99,
        "powerPerformance": 84.82,
        "releaseYear": 2017,
        "category": "Desktop",
        "subCategory": "Entry-Level"
    }
];