const contenedorCarousel = document.querySelector(".contenedor-carousel");
const imagenesCarousel = Object.values(document.getElementsByClassName("cuadros-carousel"));
console.log(imagenesCarousel);

imagenesCarousel.forEach(imagen => {
    imagen.addEventListener("mouseover", ()=> {
        contenedorCarousel.style.animationPlayState = "paused";
    })
    imagen.addEventListener("mouseout", ()=> {
        contenedorCarousel.style.animationPlayState = "running";
    })
})