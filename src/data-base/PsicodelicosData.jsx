const psicodelicos = [
    {
        id: 1,
        name: "LSD",
        image: "https://www.drsambola.com/wp-content/uploads/2011/07/download.jpeg",
        url: "lsd",
        info: 'La dietilamida de ácido lisérgico o LSD-25 fue sintetizado en 1938 por el químico suizo Albert Hofmann en el transcurso de un programa de investigación de los alcaloides del hongo cornezuelo del centeno.'
    },
    {
        id: 2,
        name: "PSILOCIBINA",
        image: "https://www.zamnesia.es/img/cms/CMS_Pages/808_everything_about_psilocybe_cubensis/Everything-about-Psilocybe-Cubensis-HEADER-800x400.jpg",
        info: 'también conocida como 4-PO-DMT o 4-fosforiloxi-N,N-dimetiltriptamina es un alcaloide triptamínico el cual se encuentra naturalmente en algunas especies de hongos como Psilocybe, Stropharia y Panaeolus.',
        url: 'psilocibina'
    },
    {
        id: 3,
        name: "CANNABIS",
        image: "https://medlineplus.gov/images/Marijuana_share.jpg",
        info: 'El principal compuesto psicotrópico del cannabis es el THC (tetrahidrocannabinol), que actúa sobre el sistema endocannabinoide del cuerpo para producir los efectos psicotrópicos.',
        url: 'cannabis'
    },
    {
        id: 4,
        name: "MDMA",
        image: "https://s1.eestatic.com/2018/08/06/ciencia/drogas-adicciones-ciencia_328229086_92367548_854x640.jpg",
        info: 'Sintetizado por primera vez en 1912 por el químico alemán Anton Köllisch y redescubierto por un psiquiatra estadounidense llamado Alexander Shulgin, quien lo utilizó en sesiones terapéuticas con sus pacientes y también promovió su uso en el ámbito de la psicoterapia.',
        url: 'mdma'
    },
    {
        id: 5, 
        name: "DMT",
        image: "https://www.allcitycanvas.com/wp-content/uploads/2020/06/dmt-psicodelia-eight.jpg",
        info: 'La Dimetiltriptamina es un compuesto natural psicoactivo que se encuentra en innumerables plantas, animales e incluso humanos.',
        url: 'dmt'
    },
    {
        id: 6,
        name: "AYAHUASCA",
        image: "https://www.ivanesalud.com/wp-content/uploads/2019/04/172-ayahuasca-la-droga-espiritual.jpg",
        info: 'Utilizada tradicionalmente por algunas culturas indígenas en ceremonias espirituales y religiosas durante siglos. La ayahuasca contiene el compuesto psicodélico DMT y también se ha utilizado en algunos contextos terapéuticos y de investigación científica.',
        url: 'ayahuasca'
    },
    {
        id: 7,
        name: "MESCALINA",
        image: "https://www.zamnesia.es/img/cms/Footer%20Text/308-mescaline-cactus/1-Peyote.jpg",
        info: 'Es un alcaloide del grupo de las feniletilaminas con propiedades alucinógenas, se encuentra principalmente en los cactus Peyote y Wachuma (San Pedro).',
        url: 'mescalina'
    },
    {
        id: 8,
        name: "SALVIA DIVINORUM",
        image: "https://www.iceers.org/wp-content/uploads/2019/09/Salvia_divinorum_0zz.jpeg",
        info: 'Su principio activo es la salvinorina-A y su estructura molecular es diterpénica, la cual a diferencia de los alucinógenos, no es un alcaloide, es decir, su molécula no contiene nitrógeno y de hecho se dice que es el primer agonista opioide no nitrogenado de origen natural.',
        url: 'salvia-divinorum'
    },
    {
        id: 9,
        name: "FLORIPONDIO",
        image: "https://miro.medium.com/max/1400/1*3ahvoVb7jlkQJcYzRsyqbw.jpeg",
        info: 'Brugmansia arborea, es una especie de planta arbustiva del género Brugmansia de la familia Solanaceae, contienen alcaloides tropánicos. Su ingestión, tanto en humanos como en otros animales, puede resultar fatal puesto que tiene efectos alucinógenos bastante potentes muy superiores a otras plantas alucinógenas',
        url: 'floripondio',
        peligro: 'Sustancia de alto riesgo'
    },
    {
        id: 10,
        name: "2C-B",
        image: "https://s1.eestatic.com/2021/09/19/alicante/613199550_208824817_1024x576.jpg",
        info: 'Conocido como "TUSI", es una feniletilamina psicodélica de la familia 2C. Fue sintetizado por primera vez en 1974 por Alexander Shulgin, y el rango de dosis varía entre 16 y 24 miligramos.',
        url: '2cb'
    },
    {
        id: 11,
        name: "NBOMe",
        image: "https://thump-images.vice.com/images/2016/06/22/nbome-cmo-ha-cambiado-el-mercado-de-cido-en-estos-tiempos-body-image-1466634504.png",
        info: 'Vendido habitualmente como LSD, el 25I-NBOME (2C-I-NBOME, Cimbi-5) mejor conocido como "Tripa", debido a su formato habitual de estampilla. Es TÓXICO y suele tener un sabor amargo, a diferencia del LSD que no tiene sabor.',
        url: '2cb',
        peligro: 'Sustancia de alto riesgo'  
    },
    {
        id: 12,
        name: "Ketamina",
        image: "https://static.elsevier.es/fotos/1/32415/la-ketamina-reduce-rapidamente-depresion-0_540.jpg",
        info: 'La ketamina es una droga disociativa con potencial alucinógeno, derivada de la fenciclidina, utilizada original y actualmente en medicina por sus propiedades sedantes, analgésicas y sobre todo, anestésicas. Fue sintetizada en 1962 por Calvin Stevens y usada por primera vez en la práctica clínica en 1965 por Corsen y Domino.',
        url: 'ketamina',
        peligro: ''   
    }
]

export default psicodelicos