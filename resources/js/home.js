const contenedorCarousel = document.getElementById("carousel-cambio-climatico");
const imagenesCarousel = Object.values(document.getElementsByClassName("cuadros-carousel"));
const pausarAnimacion = document.createElement("style");
const urlImagenesCC = [
    "https://elpais.com/clima-y-medio-ambiente/2025-11-06/cientos-de-delfines-muertos-por-los-41-grados-de-record-en-las-aguas-amazonicas-estaba-tan-caliente-que-no-tenian-refugio.html",
    "https://elpais.com/clima-y-medio-ambiente/2025-08-27/la-extraordinaria-oleada-de-incendios-de-agosto-ha-afectado-a-160000-hectareas-de-espacios-protegidos.html",
    "https://elpais.com/planeta-futuro/2024-11-12/no-puedo-olvidar-aquella-noche-nuestra-casa-se-inundo-en-minutos-60000-personas-huyen-de-su-hogar-cada-dia-por-la-crisis-climatica-segun-acnur.htm",
    "https://www.infobae.com/america/mundo/2025/10/05/el-deshielo-de-permafrost-en-alaska-revela-riesgos-invisibles-para-infraestructuras-y-clima-global/",
    "https://dndial.org/es/releases/2025/el-cambio-climatico-agravara-los-brotes-de-enfermedades-desatendidas-la-adaptacion-es-urgente/"
];
//Yo, el programador más ineficiente
imagenesCarousel.forEach((imagen,index) => {
    imagen.addEventListener("mouseover", ()=> {
        imagen.style.cursor = "pointer";
        pausarAnimacion.textContent = "#carousel-cambio-climatico > div {\n" +
            "    animation-play-state: paused;\n" +
            "}";
        contenedorCarousel.append(pausarAnimacion);
        imagen.addEventListener("click", ()=> {
            window.location.href = urlImagenesCC[index];
        })
    });
    imagen.addEventListener("mouseout", ()=> {
        pausarAnimacion.remove();
    });
})

const iconosRedes = document.querySelectorAll(".nuestras-redes");
const linkRedes = [
    "https://github.com/Shack66",
    "https://pa.linkedin.com/in/samuel-arosemena",
    "mailto:samuelarosemena@gmail.com",
    "https://github.com/Emilianovich",
    "www.linkedin.com/in/emiolafagbemi",
    "mailto:emiolafagbemi02@gmail.com",
    "https://github.com/Eloy-ai",
    "https://pa.linkedin.com/in/eloy-tulipano",
    "mailto:eloytulipano@gmail.com"
];
iconosRedes.forEach((icono, index) => {
    icono.addEventListener("click", ()=> {
        console.log(linkRedes[index], "_blank");
        window.open(linkRedes[index]);
    })
});
