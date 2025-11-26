/*Manejo de imágenes del cambio climático*/
const ccLogoSelecionado = Array.from(document.querySelectorAll(".contenedor-imagenesCC "));
let ccLogoAnteriorSelecionado = document.querySelector(".logo-cc-seleccionado");
const definicionCC = document.getElementById("definicion-cc");
const definicionesCC = [
    "Es el cambio previsible en el clima terrestre provocado por la acción humana que da lugar al efecto invernadero y al calentamiento global.",
    "Se refiere a los cambios a largo plazo de las temperaturas y los patrones climáticos. Dichos cambios pueden ser naturales, debido a variaciones en la actividad solar o erupciones volcánicas grandes. Pero desde el siglo XIX, las actividades humanas han sido el principal motor del cambio climático, debido principalmente a la quema de combustibles fósiles como el carbón, el petróleo y el gas.",
    "Es la modificación del clima que ha tenido lugar respecto de su historial a escala regional y global. En general, se trata de cambios de orden natural, pero actualmente, se los encuentra asociados con el impacto humano sobre el planeta.  Se trata de un fenómeno complejo con numerosas variables como los ciclos del agua, vientos y manchas solares, posición de la Luna, impactos de meteoritos, entre otros."
];
for (let i = 0; i < ccLogoSelecionado.length; i++) {
    ccLogoSelecionado[i].addEventListener('mouseover', () => {
        ccLogoSelecionado[i].style.cursor = "pointer";
        if (!ccLogoSelecionado[i].classList.contains("logo-cc-seleccionado")) {
            ccLogoSelecionado[i].classList.add('logos-hover');
        }
    });
    ccLogoSelecionado[i].addEventListener('mouseout', () => {
        if (!ccLogoSelecionado[i].classList.contains("logo-cc-seleccionado")) {
            ccLogoSelecionado[i].classList.remove('logos-hover');
        }
    });
    ccLogoSelecionado[i].addEventListener("click", () => {
        ccLogoSelecionado[i].classList.remove("logos-hover");
        if (!ccLogoSelecionado[i].classList.contains("logo-cc-seleccionado")) {
            definicionCC.textContent = definicionesCC[i];
            ccLogoAnteriorSelecionado.classList.remove("logo-cc-seleccionado");
            ccLogoSelecionado[i].classList.add("logo-cc-seleccionado");
            ccLogoAnteriorSelecionado = ccLogoSelecionado[i];
        }
    });
}

/*Manejo de imágenes del calentamiento global*/
const contenedorImagenesCG = Array.from(document.querySelectorAll(".cuadro-imagen"));
const imagenesCG = Array.from(document.querySelectorAll(".cuadro-imagen img"));
const causasCG = Array.from(document.querySelectorAll(".texto-imagen h2"));
for (let i = 0; i < contenedorImagenesCG.length; i++) {
    contenedorImagenesCG[i].addEventListener("mouseover", () => {
        contenedorImagenesCG[i].style.cursor = "default";
        imagenesCG[i].classList.add("cambiar-opacidad-img");
        causasCG[i].classList.add("cambiar-color-texto-img");
    });
    contenedorImagenesCG[i].addEventListener("mouseout", () => {
        imagenesCG[i].classList.remove("cambiar-opacidad-img");
        causasCG[i].classList.remove("cambiar-color-texto-img");
    });
}

/*Manejo de las imágenes del efecto invernadero*/
const eiLogoSelecionado = Array.from(document.querySelectorAll(".logos-ei"));
let eiLogoAnteriorSelecionado = document.querySelector(".logo-ei-seleccionado");
const definicionEI = document.getElementById("definicion-ei");
const definicionesEI = [
    "Es un fenómeno natural que ayuda a mantener el nivel medio de temperatura en la superficie del planeta. Es el proceso mediante el cual la superficie terrestre absorbe aproximadamente el 70 % de la radiación solar y la devuelve a la atmósfera en forma de radiación infrarroja. Parte de esta radiación escapa al espacio, mientras que la porción restante es retenida por los gases de efecto invernadero.",
    "Es la forma en que el calor queda atrapado cerca de la superficie de la Tierra por los \"gases de efecto invernadero”. La Tierra es envuelta como en una manta que mantiene al planeta más cálido de lo que sería sin ella.",
    "El efecto invernadero se define como un fenómeno natural por el que unos gases determinados que componen la atmósfera retienen parte de la energía solar reflejada por el suelo, absorbiéndola y transformándola en un movimiento molecular interno que produce un aumento de la temperatura."
];
for (let i = 0; i < eiLogoSelecionado.length; i++) {
    eiLogoSelecionado[i].addEventListener('mouseover', () => {
        eiLogoSelecionado[i].style.cursor = "pointer";
        if (!eiLogoSelecionado[i].classList.contains("logo-ei-seleccionado")) {
            eiLogoSelecionado[i].classList.add('logos-hover');
        }
    });
    eiLogoSelecionado[i].addEventListener('mouseout', () => {
        if (!eiLogoSelecionado[i].classList.contains("logo-ei-seleccionado")) {
            eiLogoSelecionado[i].classList.remove('logos-hover');
        }
    });
    eiLogoSelecionado[i].addEventListener("click", () => {
        eiLogoSelecionado[i].classList.remove('logos-hover');
        if (!eiLogoSelecionado[i].classList.contains("logo-ei-seleccionado")) {
            definicionEI.textContent = definicionesEI[i];
            eiLogoAnteriorSelecionado.classList.remove("logo-ei-seleccionado");
            eiLogoSelecionado[i].classList.add("logo-ei-seleccionado");
            eiLogoAnteriorSelecionado = eiLogoSelecionado[i];
        }
    });
}

/*Galería de imágenes - Consecuencias del calentamiento global*/
const flechaIzquierdaCG = document.getElementById("flecha-izquierda-consecuencias");
const flechaDerechaCG = document.querySelector("div #flecha-derecha-consecuencias");
const contenedorImagenCG = document.getElementById("contenedor-imagen-impacto-cc");
const ImagenCG = document.getElementById("imagen-impacto-cc");
const nombreTituloConsecuencia = document.getElementById("nombre-titulo-consecuencia-cg");
const textoConsecuencia = document.getElementById("texto-consecuencia");
const circulosCG = Array.from(document.querySelectorAll(".circulo"));
let indexCG = 0;
const infoConsecuenciasCG = [
    {   titulo: "Derretimiento de polos",
        imagen : "../images/derretimiento-de-polos.jpg",
        alt : "Imagen de un oso polar sobre un pedazo de hielo que se está derritiendo",
        texto : "El derretimiento de polos es el fenómeno en el que el hielo ubicado en las zonas polares se derrite progresivamente. Esto provoca efectos importantes, entre ellos la elevación del nivel del mar, variaciones en las corrientes del océano, la disminución de los lugares donde viven especies como los osos polares y modificaciones en el clima de todo el planeta."
    },
    {   titulo: "Olas de calor",
        imagen : "../images/olas-de-calor.jpg",
        alt : "Imagen de personas en una ciudad en el atardecer con un sol fuerte y mucho fogaje",
        texto : "Las olas de calor son periodos en los que las temperaturas se mantienen anormalmente elevadas durante varios días y sobrepasan los valores máximos establecidos por cada nación. Su definición toma en cuenta la duración, el área afectada y sus efectos, de acuerdo con instituciones meteorológicas y entidades internacionales."
    },
    {   titulo: "Refugiados climáticos",
        imagen : "../images/refugiados-climaticos.jpg",
        alt : "Imagen de un hombre en el aire mirando los restos de una ciudad inundada",
        texto : "Los refugiados climáticos son personas o comunidades que deben abandonar sus hogares porque los efectos del cambio climático deterioran gravemente sus condiciones de vida. Estos cambios, como el aumento del nivel del mar o fenómenos extremos, los obligan a migrar en busca de seguridad, estabilidad y medios para subsistir."
    },
    {   titulo: "Pérdida de biodiversidad",
        imagen : "../images/perdida-de-biodiversidad.jpg",
        alt : "Imagen que muestra especies como el oso polar y canguros que han tenido que migrar por actividades humanas",
        texto : "La pérdida de biodiversidad es la reducción de la variedad de vida en el planeta, reflejada en la desaparición de especies, ecosistemas y diversidad genética, causada principalmente por actividades humanas y el cambio climático."
    },

    {   titulo: "Desertificación",
        imagen : "../images/desertificacion.jpg",
        alt : "Imagen que muestra un campo desértico con un árbol sin hojas en el centro seco",
        texto : "La desertificación es la pérdida permanente de bosques y selvas por actividades humanas como la agricultura, ganadería o tala indiscriminada, amenaza la biodiversidad, acelera el cambio climático y reduce la capacidad de absorción de dióxido de carbono (CO2) de los bosques, esenciales para la salud del planeta."
    }
];

function moverGaleria(indice) {
    ImagenCG.src = infoConsecuenciasCG[indice].imagen;
    ImagenCG.alt = infoConsecuenciasCG[indice].alt;
    nombreTituloConsecuencia.textContent = infoConsecuenciasCG[indice].titulo;
    textoConsecuencia.textContent = infoConsecuenciasCG[indice].texto;
    circulosCG[indice].classList.add("circulo-seleccionado");
}

/*Lógica para la galería - Flecha izquierda*/
flechaIzquierdaCG.addEventListener("click", () => {
    if (circulosCG[indexCG].classList.contains("circulo-seleccionado")) {
        circulosCG[indexCG].classList.remove("circulo-seleccionado");
    }
    if (indexCG === 0) {
        indexCG = infoConsecuenciasCG.length - 1;
        moverGaleria(indexCG);
    }
    else {
        indexCG--;
        moverGaleria(indexCG);
    }
})

/*Lógica para la galería - Flecha derecha*/
flechaDerechaCG.addEventListener("click", () => {
    if (circulosCG[indexCG].classList.contains("circulo-seleccionado")) {
        circulosCG[indexCG].classList.remove("circulo-seleccionado");
    }
    if (indexCG === infoConsecuenciasCG.length - 1) {
        indexCG = 0;
        moverGaleria(indexCG);
    }
    else {
        indexCG++;
        moverGaleria(indexCG);
    }
});

/*Manejo del hover para la galería de imágenes de consecuencias del calentamiento global*/
contenedorImagenCG.addEventListener("mouseover", () => {
    contenedorImagenCG.style.cursor = "default";
    ImagenCG.classList.add("cambiar-opacidad-img");
    nombreTituloConsecuencia.classList.add("cambiar-color-texto-img");
});

contenedorImagenCG.addEventListener("mouseout", () => {
    ImagenCG.classList.remove("cambiar-opacidad-img");
    nombreTituloConsecuencia.classList.remove("cambiar-color-texto-img");
});
