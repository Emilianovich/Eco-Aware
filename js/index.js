const imagenLogoSinLlamas = document.getElementById("imagen-logo");

imagenLogoSinLlamas.addEventListener("mouseover", () => {
    if (imagenLogoSinLlamas.classList.contains("after-transicion-logo")) {
        imagenLogoSinLlamas.classList.remove("after-transicion-logo");
    }
    imagenLogoSinLlamas.classList.add("before-transicion-logo");
    imagenLogoSinLlamas.src = "../images/Logo_de_la_Tierra_en_Llamas.png";
});

imagenLogoSinLlamas.addEventListener("mouseout", () => {
    if (imagenLogoSinLlamas.classList.contains("before-transicion-logo")) {
        imagenLogoSinLlamas.classList.remove("before-transicion-logo");
    }
    imagenLogoSinLlamas.classList.add("after-transicion-logo");
    imagenLogoSinLlamas.src = "../images/Logo_de_la_Tierra_triste_sin_Llamas.png";
});

const logoHome = document.getElementById("imagen-home");
logoHome.addEventListener("mouseover", () => {
    logoHome.style.cursor = "pointer";
})
logoHome.addEventListener("click", () => {
    window.location.href = "../html/home.html";
});

/*Selección del nav*/
const opcionesNav = document.querySelectorAll("div.opciones-nav");
const opcionSeleccionada = document.getElementById("opcion-nav-seleccionada");
opcionesNav.forEach((opcion) => {
    opcion.addEventListener("mouseover", () => {
        if (opcion.id !== "opcion-nav-seleccionada") {
            opcion.style.cursor = "pointer";
            opcionSeleccionada.classList.remove("nav-selected");
        }
    })
    opcion.addEventListener("mouseout", () => {
        if (opcion.id !== "opcion-nav-seleccionada") {
            opcionSeleccionada.classList.add("nav-selected");
        }
    })
})