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