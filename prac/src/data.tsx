import image1 from './images/img/1.png';
import image2 from './images/img/2.png';
import image3 from './images/img/3.png';
import image4 from './images/img/4.png';
import image5 from './images/img/5.png';
import image6 from './images/img/6.png';
import image7 from './images/img/7.png';
import image8 from './images/img/8.png';
import image9 from './images/img/9.png';
import image10 from './images/img/10.png';
import image11 from './images/img/11.png';
import image12 from './images/img/12.png';
import image13 from './images/img/13.png';
import image14 from './images/img/14.png';
import image15 from './images/img/15.png';
import image16 from './images/img/16.png';
import image17 from './images/img/17.png';
import image18 from './images/img/18.png';
import image19 from './images/img/19.png';
import image20 from './images/img/20.png';
import image21 from './images/img/21.png';
import image22 from './images/img/22.png';
import image23 from './images/img/23.png';
import image24 from './images/img/24.png';
import image25 from './images/img/25.png';
import image26 from './images/img/26.png';
import image27 from './images/img/27.png';
import image28 from './images/img/28.png';
import image29 from './images/img/29.png';
import image30 from './images/img/30.png';
import image31 from './images/img/31.png';
import image32 from './images/img/32.png';
import image33 from './images/img/33.png';
import image34 from './images/img/34.png';
import image35 from './images/img/35.png';
import image36 from './images/img/36.png';
import image37 from './images/img/37.png';
import image38 from './images/img/38.png';
import image39 from './images/img/39.png';
import image40 from './images/img/40.png';
import image41 from './images/img/41.png';
import image42 from './images/img/42.png';
import image43 from './images/img/43.png';
import image44 from './images/img/44.png';
import image45 from './images/img/45.png';
import image46 from './images/img/46.png';
import image47 from './images/img/47.png';
import image48 from './images/img/48.png';
import image49 from './images/img/49.png';
import image50 from './images/img/50.png';

const images = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15,
    image16, image17, image18, image19, image20,
    image21, image22, image23, image24, image25,
    image26, image27, image28, image29, image30,
    image31, image32, image33, image34, image35,
    image36, image37, image38, image39, image40,
    image41, image42, image43, image44, image45,
    image46, image47, image48, image49, image50
];

const structures = [
    {
        img: images[0],
        title: "NVIDIA GeForce RTX 4090 Ti",
        description: "Флагманская игровая видеокарта с 24 ГБ GDDR6X памяти." +
            " Оснащена 18432 CUDA-ядрами с частотой до 2520 МГц, демонстрирует исключительную производительность в 4K/8K." +
            " Поддерживает DLSS 3 и трассировку лучей. Потребляет 450W, требует БП от 1000W." +
            " Идеальна для профессионального рендеринга и игр в ультра-настройках." +
            " Рекомендуем с Intel Core i9-13900K или AMD Ryzen 9 7950X."
    },
    {
        img: images[1],
        title: "AMD Radeon RX 7900 XTX",
        description: "Топовая AMD карта с 24 ГБ GDDR6 памяти на архитектуре RDNA 3." +
            " Частота до 2500 МГц, 96 вычислительных блоков, поддержка FSR 3." +
            " Потребляет 355W, отлично подходит для мультимониторных конфигураций и VR." +
            " Особенно рекомендуется для систем с Ryzen 9 7900X/7950X. Лучший выбор для стримеров и 4K гейминга."
    },
    {
        img: images[2],
        title: "Intel Arc A770 16GB",
        description: "Флагман Intel с 16 ГБ GDDR6 памяти. Частота до 2100 МГц, 32 Xe-ядра, поддержка XeSS и AV1 кодирования." +
            " Потребляет 225W, хороша для 1440p. Оптимальна для бюджетных рабочих станций и творческих задач." +
            " Лучше всего работает с Intel Core i5-13600K и выше."
    },
    {
        img: images[3],
        title: "NVIDIA RTX 4080 Super",
        description: "Мощная карта с 20 ГБ GDDR6X памяти. 9728 CUDA-ядер, частота до 2505 МГц, поддержка DLSS 3." +
            " Потребляет 320W. Идеальна для 4K игр и профессиональных приложений." +
            " Рекомендуется с Ryzen 7 7800X3D или Core i7-13700K. Отличный баланс цены и производительности."
    },
    {
        img: images[4],
        title: "AMD Radeon RX 7800 XT",
        description: "16 ГБ GDDR6 памяти, архитектура RDNA 3. Частота 2425 МГц, поддержка FSR 3. Потребляет 263W, отлично справляется с 1440p/4K." +
            " 60 вычислительных блоков обеспечивают плавный геймплей. Лучший выбор для киберспорта и стриминга. Совместима с Ryzen 7 7700X."
    },
    {
        img: images[5],
        title: "NVIDIA RTX 4070 Ti Super",
        description: "16 ГБ GDDR6X памяти, 7680 CUDA-ядер, частота до 2610 МГц." +
            " Потребляет 285W, поддерживает DLSS 3. Отличный вариант для 1440p ультра-настроек и VR. Рекомендуем для монтажа видео и 3D-рендеринга." +
            " Оптимально сочетается с Core i5-13600KF."
    },
    {
        img: images[6],
        title: "AMD Radeon RX 7700 XT",
        description: "12 ГБ GDDR6 памяти, частота до 2540 МГц. Потребляет 245W, 54 вычислительных блока." +
            " Отличная производительность в 1440p. Поддержка FSR 3. Идеальна для киберспортивных игр." +
            " Лучше всего работает с Ryzen 5 7600X."
    },
    {
        img: images[7],
        title: "NVIDIA RTX 4060 Ti 16GB",
        description: "16 ГБ GDDR6 памяти, 4352 CUDA-ядра, частота до 2535 МГц. Потребляет 160W, поддерживает DLSS 3." +
            " Оптимальна для 1080p/1440p гейминга. Отличный вариант для апгрейда без замены БП. Рекомендуем с Core i5-13400F или Ryzen 5 7600."
    },
    {
        img: images[8],
        title: "AMD Radeon RX 7600 XT",
        description: "8 ГБ GDDR6 памяти, частота до 2755 МГц. Потребляет 190W, 32 вычислительных блока." +
            " Отличный бюджетный вариант для 1080p игр. Поддержка FSR 3. Совместима с Ryzen 5 5600. Лучший выбор для начинающих геймеров."
    },
    {
        img: images[9],
        title: "Intel Arc A750",
        description: "8 ГБ GDDR6 памяти, 28 Xe-ядер, частота до 2050 МГц. Потребляет 225W." +
            " Хороша для 1080p игр и офисных задач. Поддержка XeSS. Рекомендуем для бюджетных сборок с Core i3-12100F."
    },
    {
        img: images[10],
        title: "NVIDIA RTX 3090 Ti",
        description: "24 ГБ GDDR6X памяти, 10752 CUDA-ядра, частота до 1860 МГц." +
            " Потребляет 450W. Все еще мощное решение для 4K и профессиональных задач. Поддержка DLSS 2. Рекомендуем с Ryzen 9 5900X или Core i9-12900K."
    },
    {
        img: images[11],
        title: "AMD Radeon RX 6950 XT",
        description: "16 ГБ GDDR6 памяти, частота до 2310 МГц. Потребляет 335W." +
            " Отличная производительность в 4K. Поддержка FSR 2. Идеальна для геймеров, переходящих на AM5 платформу. Совместима с Ryzen 7 5800X3D."
    },
    {
        img: images[12],
        title: "NVIDIA RTX 3080 12GB",
        description: "12 ГБ GDDR6X памяти, 8960 CUDA-ядер, частота до 1710 МГц." +
            " Потребляет 350W. Отличный выбор для 1440p ультра-настроек. Поддержка DLSS 2. Рекомендуем с Ryzen 7 5700X или Core i7-12700F."
    },
    {
        img: images[13],
        title: "AMD Radeon RX 6800 XT",
        description: "16 ГБ GDDR6 памяти, частота до 2250 МГц. Потребляет 300W." +
            " Мощное решение для 1440p/4K игр. Поддержка FSR 2. Лучше всего работает с Ryzen 9 5900X. Отличный вариант для энтузиастов."
    },
    {
        img: images[14],
        title: "NVIDIA RTX 3070 Ti",
        description: "8 ГБ GDDR6X памяти, 6144 CUDA-ядер, частота до 1770 МГц." +
            " Потребляет 290W. Идеальна для 1440p гейминга. Поддержка DLSS 2. Рекомендуем с Ryzen 5 5600X или Core i5-12600KF."
    },
    {
        img: images[15],
        title: "AMD Radeon RX 6700 XT",
        description: "12 ГБ GDDR6 памяти, частота до 2581 МГц. Потребляет 230W." +
            " Отличная карта для 1440p игр. Поддержка FSR 2. Лучший выбор для сборок на Ryzen 5 5600. Оптимальное соотношение цены и качества."
    },
    {
        img: images[16],
        title: "NVIDIA RTX 3060 Ti GDDR6X",
        description: "8 ГБ GDDR6X памяти, 4864 CUDA-ядер, частота до 1665 МГц." +
            " Потребляет 225W. Отличный вариант для 1080p ультра-настроек. Поддержка DLSS 2. Рекомендуем с Ryzen 5 5500 или Core i3-12100F."
    },
    {
        img: images[17],
        title: "AMD Radeon RX 6600 XT",
        description: "8 ГБ GDDR6 памяти, частота до 2589 МГц. Потребляет 160W." +
            " Идеальна для 1080p гейминга. Поддержка FSR 2. Лучший бюджетный вариант для киберспортивных игр. Совместима с Ryzen 5 3600."
    },
    {
        img: images[18],
        title: "NVIDIA RTX 3050",
        description: "8 ГБ GDDR6 памяти, 2560 CUDA-ядер, частота до 1777 МГц." +
            " Потребляет 130W. Хороший выбор для начинающих геймеров. Поддержка DLSS 2. Рекомендуем с Ryzen 3 3100 или Core i3-10100F."
    },
    {
        img: images[19],
        title: "AMD Radeon RX 6400",
        description: "4 ГБ GDDR6 памяти, частота до 2321 МГц. Потребляет 53W." +
            " Бюджетное решение для офисных ПК и нетребовательных игр. Не требует дополнительного питания. Совместима с любыми современными процессорами."
    },
    {
        img: images[20],
        title: "NVIDIA TITAN RTX",
        description: "24 ГБ GDDR6 памяти, 4608 CUDA-ядер, частота до 1770 МГц." +
            " Потребляет 280W. Профессиональное решение для сложных вычислений и рендеринга. Поддержка NVLink. Рекомендуем для рабочих станций."
    },
    {
        img: images[21],
        title: "AMD Radeon Pro W6800",
        description: "32 ГБ GDDR6 памяти, частота до 2321 МГц. Потребляет 250W. Профессиональная карта для 3D-моделирования и CAD. Поддержка ECC памяти. Идеальна для инженеров и дизайнеров."
    },
    {
        img: images[22],
        title: "NVIDIA RTX A6000",
        description: "48 ГБ GDDR6 памяти, 10752 CUDA-ядра, частота до 1860 МГц. Потребляет 300W. Флагманская профессиональная карта. Поддержка NVLink и ECC. Рекомендуем для сложных симуляций и рендеринга."
    },
    {
        img: images[23],
        title: "AMD Radeon RX 5700 XT",
        description: "8 ГБ GDDR6 памяти, частота до 1905 МГц. Потребляет 225W. Все еще актуальна для 1080p/1440p игр. Поддержка FSR 1.0. Лучший выбор для апгрейда старых систем."
    },
    {
        img: images[24],
        title: "NVIDIA GTX 1660 Super",
        description: "6 ГБ GDDR6 памяти, 1408 CUDA-ядер, частота до 1785 МГц. Потребляет 125W. Бюджетное решение для 1080p игр. Отличный вариант для офисных ПК с игровым потенциалом."
    },
    {
        img: images[25],
        title: "AMD Radeon RX 5600 XT",
        description: "6 ГБ GDDR6 памяти, частота до 1750 МГц. Потребляет 150W. Хороша для 1080p гейминга. Поддержка FSR 1.0. Лучший выбор для бюджетных игровых сборок."
    },
    {
        img: images[26],
        title: "NVIDIA GTX 1650 GDDR6",
        description: "4 ГБ GDDR6 памяти, 896 CUDA-ядер, частота до 1590 МГц. Потребляет 75W. Энергоэффективное решение для нетребовательных игр. Не требует дополнительного питания."
    },
    {
        img: images[27],
        title: "AMD Radeon RX 5500 XT",
        description: "8 ГБ GDDR6 памяти, частота до 1845 МГц. Потребляет 130W. Бюджетная карта для 1080p игр на средних настройках. Поддержка FSR 1.0. Оптимальна для офисных ПК."
    },
    {
        img: images[28],
        title: "NVIDIA RTX 2080 Ti",
        description: "11 ГБ GDDR6 памяти, 4352 CUDA-ядер, частота до 1545 МГц. Потребляет 250W. Все еще мощное решение для 1440p игр. Поддержка DLSS 1.0. Рекомендуем для апгрейда старых систем."
    },
    {
        img: images[29],
        title: "AMD Radeon VII",
        description: "16 ГБ HBM2 памяти, частота до 1750 МГц. Потребляет 300W. Уникальное решение для творческих задач. Поддержка профессиональных драйверов. Идеальна для монтажа видео."
    },
    {
        img: images[30],
        title: "NVIDIA GTX 1080 Ti",
        description: "11 ГБ GDDR5X памяти, 3584 CUDA-ядер, частота до 1582 МГц. Потребляет 250W. Легендарная карта, все еще актуальная для 1080p/1440p. Отличный вариант б/у рынка."
    },
    {
        img: images[31],
        title: "AMD Radeon RX Vega 64",
        description: "8 ГБ HBM2 памяти, частота до 1546 МГц. Потребляет 295W. Мощное решение для 1440p игр. Поддержка FreeSync 2. Лучший выбор для старых систем с мощным БП."
    },
    {
        img: images[32],
        title: "NVIDIA TITAN Xp",
        description: "12 ГБ GDDR5X памяти, 3840 CUDA-ядер, частота до 1582 МГц. Потребляет 250W. Профессиональная карта для творческих задач. Поддержка профессиональных драйверов."
    },
    {
        img: images[33],
        title: "AMD Radeon RX 580",
        description: "8 ГБ GDDR5 памяти, частота до 1340 МГц. Потребляет 185W. Классика бюджетного гейминга. Поддержка FreeSync. Идеальна для 1080p игр на средних настройках."
    },
    {
        img: images[34],
        title: "NVIDIA GTX 1070",
        description: "8 ГБ GDDR5 памяти, 1920 CUDA-ядер, частота до 1683 МГц. Потребляет 150W. Проверенное временем решение для 1080p игр. Отличный вариант б/у рынка."
    },
    {
        img: images[35],
        title: "AMD Radeon RX 480",
        description: "8 ГБ GDDR5 памяти, частота до 1266 МГц. Потребляет 150W. Бюджетное решение для нетребовательных игр. Поддержка FreeSync. Оптимальна для офисных ПК."
    },
    {
        img: images[36],
        title: "NVIDIA GTX 1060 6GB",
        description: "6 ГБ GDDR5 памяти, 1280 CUDA-ядер, частота до 1708 МГц. Потребляет 120W. Классика 1080p гейминга. Отличный вариант для начинающих геймеров."
    },
    {
        img: images[37],
        title: "AMD Radeon R9 390X",
        description: "8 ГБ GDDR5 памяти, частота до 1050 МГц. Потребляет 275W. Старое, но мощное решение. Требует качественного охлаждения. Подходит для апгрейда старых систем."
    },
    {
        img: images[38],
        title: "NVIDIA GTX 980 Ti",
        description: "6 ГБ GDDR5 памяти, 2816 CUDA-ядер, частота до 1075 МГц. Потребляет 250W. Все еще способна на 1080p ультра. Лучший выбор для бюджетных сборок."
    },
    {
        img: images[39],
        title: "AMD Radeon R9 Fury X",
        description: "4 ГБ HBM памяти, частота до 1050 МГц. Потребляет 275W. Уникальное решение с HBM памятью. Поддержка FreeSync. Интересный вариант для энтузиастов."
    },
    {
        img: images[40],
        title: "NVIDIA GTX 970",
        description: "4 ГБ GDDR5 памяти, 1664 CUDA-ядер, частота до 1178 МГц. Потребляет 145W. Проверенная временем карта для 1080p игр. Оптимальна для офисных ПК."
    },
    {
        img: images[41],
        title: "AMD Radeon R9 290X",
        description: "4 ГБ GDDR5 памяти, частота до 1000 МГц. Потребляет 250W. Требует хорошего охлаждения. Подходит для апгрейда старых игровых систем."
    },
    {
        img: images[42],
        title: "NVIDIA GTX 960",
        description: "2 ГБ GDDR5 памяти, 1024 CUDA-ядер, частота до 1178 МГц. Потребляет 120W. Бюджетное решение для нетребовательных игр. Не требует мощного БП."
    },
    {
        img: images[43],
        title: "AMD Radeon R7 370",
        description: "2 ГБ GDDR5 памяти, частота до 975 МГц. Потребляет 110W. Базовое решение для офисных задач и простых игр. Оптимальна для HTPC."
    },
    {
        img: images[44],
        title: "NVIDIA GTX 750 Ti",
        description: "2 ГБ GDDR5 памяти, 640 CUDA-ядер, частота до 1085 МГц. Потребляет 60W. Энергоэффективное решение. Не требует дополнительного питания."
    },
    {
        img: images[45],
        title: "AMD Radeon HD 7970",
        description: "3 ГБ GDDR5 памяти, частота до 925 МГц. Потребляет 250W. Легендарная карта своего времени. Подходит для апгрейда очень старых систем."
    },
    {
        img: images[46],
        title: "NVIDIA GTX 680",
        description: "2 ГБ GDDR5 памяти, 1536 CUDA-ядер, частота до 1058 МГц. Потребляет 195W. Классика 2012 года. Интересна только коллекционерам."
    },
    {
        img: images[47],
        title: "AMD Radeon HD 7870",
        description: "2 ГБ GDDR5 памяти, частота до 1000 МГц. Потребляет 175W. Устаревшее решение. Может использоваться в офисных ПК."
    },
    {
        img: images[48],
        title: "NVIDIA GTX 580",
        description: "1.5 ГБ GDDR5 памяти, 512 CUDA-ядер, частота до 772 МГц. Потребляет 244W. Историческая ценность. Практически не пригодна для современных задач."
    },
    {
        img: images[49],
        title: "AMD Radeon HD 6970",
        description: "2 ГБ GDDR5 памяти, частота до 880 МГц. Потребляет 250W. Устаревшая архитектура. Интересна только как экспонат компьютерного музея."
    }
];

export default structures;