/*Botones de impacto*/
const btn_panama = document.getElementById('btn_panama');
const btn_isla = document.getElementById('btn_isla');
const btn_mosquito = document.getElementById('btn_mosquito');

/*Contenedores de impacto*/
const contenedorCanal = document.getElementById('canal_panama');
const contenedorIsla = document.getElementById('isla_gardiSugdub');
const contenedorMosquitos = document.getElementById('mosquitos');

/*Que aparezca y desaparezca la información de impacto*/
btn_panama.addEventListener('click', () => {
    btn_panama.classList.add('impacto_activo');
    contenedorCanal.classList.remove('oculto');
    btn_isla.classList.remove('impacto_activo');
    contenedorIsla.classList.add('oculto');
    btn_mosquito.classList.remove('impacto_activo');
    contenedorMosquitos.classList.add('oculto');
});

btn_isla.addEventListener('click', () => {
    btn_panama.classList.remove('impacto_activo');
    contenedorCanal.classList.add('oculto');
    btn_isla.classList.add('impacto_activo');
    contenedorIsla.classList.remove('oculto');
    btn_mosquito.classList.remove('impacto_activo');
    contenedorMosquitos.classList.add('oculto');
});

btn_mosquito.addEventListener('click', () => {
    btn_panama.classList.remove('impacto_activo');
    contenedorCanal.classList.add("oculto");
    btn_isla.classList.remove('impacto_activo');
    contenedorIsla.classList.add("oculto");
    btn_mosquito.classList.add('impacto_activo');
    contenedorMosquitos.classList.remove("oculto");
});

/*Botones de acciones de Panamá*/
const btn_1 = document.querySelectorAll('.btn_1');
const btn_2 = document.querySelectorAll('.btn_2');
const btn_3 = document.querySelectorAll('.btn_3');

/*Contenedores de las acciones*/
const contenedorCCAC = document.getElementById('contenedor_CCAC');
const contenedorComite = document.getElementById('contenedor_Comite');
const contenedorFerrocarril = document.getElementById('contenedor_Ferrocarril'); 

btn_1.forEach(boton => {
    boton.addEventListener("click", () => {
        contenedorCCAC.classList.remove('oculto');
        contenedorComite.classList.add('oculto');
        contenedorFerrocarril.classList.add('oculto');
    });
});
btn_2.forEach(boton => {
    boton.addEventListener("click", () => {
        contenedorCCAC.classList.add('oculto');
        contenedorComite.classList.remove('oculto');
        contenedorFerrocarril.classList.add('oculto');
    });
});
btn_3.forEach(boton => {
    boton.addEventListener("click", () => {
        contenedorCCAC.classList.add('oculto');
        contenedorComite.classList.add('oculto');
        contenedorFerrocarril.classList.remove('oculto');
    });
});

/*Datos curiosos con la mascota*/
const imgMascota_Pensando = document.getElementById("mascota_pensando");

const datos_texto = [
    "Aunque pueda parecer poco, medio grado adicional en la temperatura promedio del planeta tiene un gran impacto en el planeta, como el aumento del mar, aumento de sequías, pérdida de biodiversidad, entre otros",
    "Los océanos han absorbido casi el 90 % del calor extra generado por el calentamiento global, lo que los convierte en el principal “sumidero térmico” del planeta.",
    "El hielo y la nieve tienen un albedo muy alto, por lo que reflejan gran parte de la radiación del sol. Cuando se derriten, dejan expuestas superficies más oscuras, como agua o roca, que absorben mucho más calor.",
    "Las ganaderías, especialmente las de vacas, generan más gases de efecto invernadero que algunos países, porque las vacas emiten grandes cantidades de metano durante su digestión, un gas que atrapa mucho más calor que el CO₂.",
    "Una molécula de dióxido de carbono puede permanecer en la atmósfera entre 300 y 1 000 años antes de desaparecer. Esto significa que parte del CO₂ que emitimos hoy seguirá calentando el planeta durante muchos siglos.",
    "Un estudio científico advierte que para 2050 varias ciudades costeras como Shanghái, Yakarta o Miami podrían quedar parcial o totalmente bajo el mar por el aumento del nivel oceánico provocado por el cambio climático.",
    "El calentamiento global está haciendo que los fenómenos meteorológicos extremos como olas de calor, sequías, huracanes e inundaciones ocurran con más fuerza y frecuencia, porque la atmósfera y los océanos cada vez contienen más energía.",
    "Cada año desaparecen más de 24.000 millones de toneladas de suelo fértil, para 2050 perderíamos 1,5 millones de km2 de tierras agrícolas, esenciales para mantener la biodiversidad y alimentar a la población.",
    "Panamá absorbe más CO₂ del que emite gracias a sus bosques. Solo tres países en el mundo tienen este estatus y Panamá es uno de ellos. Aun así, sigue siendo altamente vulnerable al cambio climático.",
    "Los bosques de Panamá, especialmente los del Darién y la Cordillera Central, son vitales para el ciclo hidrológico del país. Actúan como reguladores del clima y las lluvias, ayudando a mantener el equilibrio ecológico.",
    "El cambio climático está afectando a las tortugas marinas. A medida que aumentan las temperaturas, las playas de anidación se calientan, y esto provoca que nazcan más hembras que machos, alterando el equilibrio de la población.",
    "En 2025 se interrumpió por primera vez en décadas el afloramiento costero en el Golfo de Panamá, un proceso clave que enfría el mar y aporta nutrientes. Como resultado, la temperatura del agua no bajó de unos 23 °C, afectando la vida marina y la pesca.",
    "Según un estudio oficial de MiAmbiente, para 2050 el nivel del mar en Panamá podría subir entre 0,56 y 0,76 metros, lo que pondrá en riesgo muchas islas costeras, incluyendo todas las de la Comarca Guna Yala.",
    "Los manglares panameños almacenan más de 52 millones de toneladas de carbono en sus raíces, troncos, hojas y suelos, lo que convierte a estos ecosistemas en “sumideros azules” muy poderosos para combatir el cambio climático.",
    "El cambio climático está contribuyendo a la extinción de especies vulnerables, como el sapo dorado en Costa Rica, al alterar su entorno y favorecer el crecimiento de patógenos, lo que pone en peligro su supervivencia."
];

const datos_enlace = [
    "https://www.sostenibilidad.com/cambio-climatico/que-pasa-aumenta-temperatura-del-planeta-medio-grado",
    "https://climatica.coop/los-oceanos-han-absorbido-el-90-del-calentamiento-global-con-cambios-irreversibles/",
    "https://es.wikipedia.org/wiki/Albedo",
    "https://www.youtube.com/shorts/dLq9NZvsF-M?feature=share",
    "https://www.bbva.com/es/sostenibilidad/una-molecula-de-dioxido-de-carbono-sobrevive-entre-300-y-1-000-anos-antes-de-desaparecer/",
    "https://www.cronista.com/espana/actualidad-es/la-lista-de-10-ciudades-que-quedaran-bajo-el-mar-en-2050-segun-una-investigacion-china/",
    "https://www.iberdrola.com/sostenibilidad/fenomenos-meteorologicos-extremos",
    "https://www.alltech.com/es-es/blog/consecuencias-del-efecto-invernadero-en-la-agricultura-la-desertificacion",
    "https://www.swissinfo.ch/spa/panam%C3%A1-but%C3%A1n-y-surinam-los-%C3%BAnicos-pa%C3%ADses-del-mundo-carbono-negativo/46841290",
    "https://storymaps.arcgis.com/stories/62c3106a593a46a9bef51d1f4092d688",
    "https://maralliance.org/es/como-influye-el-cambio-climatico-en-las-tortugas-marinas/",
    "https://www.infobae.com/america/medio-ambiente/2025/09/03/alerta-en-el-golfo-de-panama-por-primera-vez-se-interrumpio-un-fenomeno-clave-para-la-vida-marina/",
    "https://miambiente.gob.pa/panama-perdera-zonas-costeras-e-islas-al-2050-por-efectos-del-cambio-climatico/",
    "https://lac.wetlands.org/medicion-carbono-los-manglares-panama-preguntas-respuestas-qa/",
    "https://www.teletica.com/nacional/cambio-climatico-fue-el-responsable-de-la-extincion-del-sapo-dorado-de-costa-rica_309282"
];

/*Creando el div de datos curiosos*/ 
imgMascota_Pensando.addEventListener('click', () => {
    let numDato = Math.floor(Math.random() * 15);
    imgMascota_Pensando.classList.add("oculto");
    const div = document.createElement('div');
    const titulo = document.createElement('h3');
    titulo.textContent = "Sabías que...";
    div.appendChild(titulo);
    let dato_curioso = document.createElement('p');
    dato_curioso.textContent = datos_texto[numDato];
    div.appendChild(dato_curioso);
    div.id = 'contenedor-datos_curiosos';
    let dato_enlace = document.createElement('a');
    dato_enlace.textContent = "Leer mas...";
    dato_enlace.href = datos_enlace[numDato];
    dato_enlace.id = 'enlace_dato_curioso';
    div.appendChild(dato_enlace);
    const imgMascota_hablando = document.createElement('img');
    imgMascota_hablando.id = "mascota_hablando";
    imgMascota_hablando.src = "../images/Polardi_hablando.png";
    document.body.appendChild(div);
    document.body.appendChild(imgMascota_hablando);
});


/*Borrando el div de datos curiosos*/ 
document.addEventListener('click', (e) => {
    const div = document.getElementById('contenedor-datos_curiosos');
    const imgMascota_hablando = document.getElementById('mascota_hablando');
    if(div && !div.contains(e.target) && e.target !== imgMascota_Pensando || imgMascota_hablando.contains(e.target)){
        div.remove();
        imgMascota_hablando.remove();
        imgMascota_Pensando.classList.remove("oculto");
    }
});