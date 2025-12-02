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