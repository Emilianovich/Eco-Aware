const ccLogoSelecionado = Array.from(document.querySelectorAll(".logos-cc "));
let ccLogoAnteriorSelecionado = document.querySelector(".logo-cc-seleccionado");
const definicionCC = document.getElementById("definicion-cc");
const flechaIzquierda = document.querySelector(".flecha-izquierda");
const flechaDerecha = document.querySelector(".flecha-derecha");
let ccInitialIndex = 1;
const definicionesCC = [
    "Es el cambio previsible en el clima terrestre provocado por la acción humana que da lugar al efecto invernadero y al calentamiento global.",
    "Se refiere a los cambios a largo plazo de las temperaturas y los patrones climáticos. Dichos cambios pueden ser naturales, debido a variaciones en la actividad solar o erupciones volcánicas grandes. Pero desde el siglo XIX, las actividades humanas han sido el principal motor del cambio climático, debido principalmente a la quema de combustibles fósiles como el carbón, el petróleo y el gas.",
    "Es la modificación del clima que ha tenido lugar respecto de su historial a escala regional y global. En general, se trata de cambios de orden natural, pero actualmente, se los encuentra asociados con el impacto humano sobre el planeta.  Se trata de un fenómeno complejo con numerosas variables como los ciclos del agua, vientos y manchas solares, posición de la Luna, impactos de meteoritos, entre otros."
];
const eiLogoSelecionado = Array.from(document.querySelectorAll(".logos-ei"));
let eiLogoAnteriorSelecionado = document.querySelector(".logo-ei-seleccionado");
const definicionEI = document.getElementById("definicion-ei");
const definicionesEI = [
    "Es un fenómeno natural que ayuda a mantener el nivel medio de temperatura en la superficie del planeta. Es el proceso mediante el cual la superficie terrestre absorbe aproximadamente el 70 % de la radiación solar y la devuelve a la atmósfera en forma de radiación infrarroja. Parte de esta radiación escapa al espacio, mientras que la porción restante es retenida por los gases de efecto invernadero.",
    "Es la forma en que el calor queda atrapado cerca de la superficie de la Tierra por los \"gases de efecto invernadero”. La Tierra es envuelta como en una manta que mantiene al planeta más cálido de lo que sería sin ella.",
    "El efecto invernadero se define como un fenómeno natural por el que unos gases determinados que componen la atmósfera retienen parte de la energía solar reflejada por el suelo, absorbiéndola y transformándola en un movimiento molecular interno que produce un aumento de la temperatura."
    ];
/*
flechaIzquierda.addEventListener("click", () => {
    if (ccInitialIndex !== 0) {
        ccInitialIndex--;
        if (!ccLogoSelecionado[ccInitialIndex].classList.contains("logo-cc-seleccionado")) {
            ccLogoAnteriorSelecionado.classList.remove("logo-cc-seleccionado");
            ccLogoSelecionado[ccInitialIndex].classList.add("logo-cc-seleccionado");
            definicionCC.textContent = definicionesCC[i];
            ccLogoAnteriorSelecionado = ccLogoSelecionado[ccInitialIndex];
        }
        else {

        }

    }
    if (ccInitialIndex === 0) {
        ccInitialIndex = 2;
        if (!ccLogoSelecionado[ccInitialIndex].classList.contains("logo-cc-seleccionado")) {
            ccLogoAnteriorSelecionado.classList.remove("logo-cc-seleccionado");
            ccLogoSelecionado[ccInitialIndex].classList.add("logo-cc-seleccionado");
            ccLogoAnteriorSelecionado = ccLogoSelecionado[ccInitialIndex];
        }
    }
});

flechaDerecha.addEventListener("click", () => {

});
*/

for (let i = 0; i < ccLogoSelecionado.length; i++) {
    ccLogoSelecionado[i].addEventListener("click", () => {
        if (!ccLogoSelecionado[i].classList.contains("logo-cc-seleccionado")) {
            definicionCC.textContent = definicionesCC[i];
            ccLogoAnteriorSelecionado.classList.remove("logo-cc-seleccionado");
            ccLogoSelecionado[i].classList.add("logo-cc-seleccionado");
            ccLogoAnteriorSelecionado = ccLogoSelecionado[i];
        }
    });
}

for (let i = 0; i < eiLogoSelecionado.length; i++) {
    eiLogoSelecionado[i].addEventListener("click", () => {
        if (!eiLogoSelecionado[i].classList.contains("logo-ei-seleccionado")) {
            definicionEI.textContent = definicionesEI[i];
            eiLogoAnteriorSelecionado.classList.remove("logo-ei-seleccionado");
            eiLogoSelecionado[i].classList.add("logo-ei-seleccionado");
            eiLogoAnteriorSelecionado = eiLogoSelecionado[i];
        }
    });
}



