const opcionesAccionPersonal = document.querySelectorAll(".opcion-acciones-personal");
const opcionesAccionColectiva = document.querySelectorAll(".opcion-acciones-colectiva");
const opcionesMitigacion = document.querySelectorAll(".opcion-acciones-adaptacion");

/*Interactividad acciones a nivel personal y familiar*/
const listaAP = document.querySelectorAll("#acciones-personales-lista ul li");
const imagenAP = document.getElementById("imagen-ap");
const accionesImagenesAP = [
    {src: "../images/reforestacion-areas-verdes.jpeg", acciones : [
        "Cultiva árboles en tu propiedad y/o participa en campañas de reforestación.",
            "Las zonas arboladas contribuyen a regular el clima y preservar fuentes hídricas."
        ]},
    {src: "../images/uso-eficiente-agua.jpg", acciones : [
            "Aprovecha el agua de la ducha o del lavado de alimentos para regar plantas o limpiar áreas del hogar.",
            "Revisa fugas y utiliza dispositivos que ahorren agua. "
        ]},
    {src: "../images/consumo-consciente.jpg", acciones : [
            "Opta por comprar solo los bienes que necesites.",
            "Reutiliza productos y no deseches los objetos dañados, más bien repáralos."
        ]},
    {src: "../images/gestion-adecuada-de-los-residuos.jpeg", acciones : [
            "Practica en casa el reciclaje y promuévelo.",
            "Evita prácticas contaminantes como la quema de basura o restos vegetales."
        ]},
    {src: "../images/movilidad-sostenible.png", acciones : [
            "Utiliza transporte público como el Metro de Panamá, el Metrobús, bicicleta o camina cuando sea posible.",
            "Dependiendo de tu economía, considera vehículos híbridos/eléctricos o compartidos para disminuir tu huella de carbono."
        ]}
];
opcionesAccionPersonal.forEach((opcion, index) => {
    opcion.addEventListener("mouseover", () => {
        if (!opcion.classList.contains("ap-seleccionada")) {
            opcion.style.cursor = "pointer";
            opcion.classList.add("opciones-acciones-hover");
        }
    })
    opcion.addEventListener("mouseout", () => {
        opcion.classList.remove("opciones-acciones-hover");
    })
    opcion.addEventListener("click", ()=> {
        let opcionAPSeleccionada = document.querySelector(".ap-seleccionada");
        if (!opcion.classList.contains("ap-seleccionada")) {
            imagenAP.src = accionesImagenesAP[index].src;
            listaAP[0].textContent = accionesImagenesAP[index].acciones[0];
            listaAP[1].textContent = accionesImagenesAP[index].acciones[1];
            opcionAPSeleccionada.classList.remove("ap-seleccionada");
            opcion.classList.add("ap-seleccionada");
        }
    })
});
const listaAC = document.querySelectorAll("#acciones-colectivas-lista ul li");
const imagenAC = document.getElementById("imagen-ac");
const accionesImagenesAC = [
    {src: "../images/limpieza-ecosistemas.jpg", acciones : [
            "Únete a voluntariados de limpieza en ríos, playas o quebradas.",
            "Participa en actividades para proteger cuerpos de agua en tu comunidad."
        ]},
    {src: "../images/creacion-espacios-verdes.jpg", acciones : [
            "Colabora en proyectos para establecer parques, jardines urbanos o áreas verdes.",
            "Apoya la conservación de zonas naturales protegidas."
        ]},
    {src: "../images/programas-ambientales.jpg", acciones : [
            "Infórmate sobre iniciativas comunitarias enfocadas en resiliencia climática, reciclaje o educación ambiental.",
            "Participa en programas como “Reduce Tu Huella” impulsado por el Gobierno de Panamá, orientados a mitigación y adaptación climática."
        ]}
];
opcionesAccionColectiva.forEach((opcion, index) => {
    opcion.addEventListener("mouseover", () => {
        if (!opcion.classList.contains("ac-seleccionada")) {
            opcion.style.cursor = "pointer";
            opcion.classList.add("opciones-acciones-hover");
        }
    })
    opcion.addEventListener("mouseout", () => {
        opcion.classList.remove("opciones-acciones-hover");
    })
    opcion.addEventListener("click", ()=> {
        let opcionACSeleccionada = document.querySelector(".ac-seleccionada");
        if (!opcion.classList.contains("ac-seleccionada")) {
            imagenAC.src = accionesImagenesAC[index].src;
            listaAC[0].textContent = accionesImagenesAC[index].acciones[0];
            listaAC[1].textContent = accionesImagenesAC[index].acciones[1];
            opcionACSeleccionada.classList.remove("ac-seleccionada");
            opcion.classList.add("ac-seleccionada");
        }
    })
});
const listaMitigacion = document.querySelectorAll("#acciones-mitigacion-lista ul li");
const imagenMitigacion = document.getElementById("imagen-mitigacion");
const accionesImagenesMitigacion = [
    {src: "../images/ante-calor-extremo.webp", acciones : [
            "Utilizar ropa suelta, colores claros y manga larga al aire libre.",
            "No hacer actividad física intensa bajo el sol.",
            "Comer alimentos frescos, frutas y verduras."
        ]},
    {src: "../images/cuarto-fresco.webp", acciones : [
            "Evitar tener sitios donde pueda quedar agua estancada.",
            "Mantener cuartos frescos usando cortinas o ventanas abiertas.",
            "Usar colores claros fuera de la casa porque estos reflejan más calor que los oscuros, lo que reduce la temperatura interior de tu hogar."
        ]},
    {src: "../images/fiesta-en-casa.jpg", acciones : [
            "Reducir la frecuencia de las quemas.",
            "Evitar fiestas cerca de ríos en temporada lluviosa.",
            "Mejorar la ubicación o diseño de las casas tradicionales frente a diferentes fenómenos ambientales."
        ]}
];
opcionesMitigacion.forEach((opcion, index) => {
    opcion.addEventListener("mouseover", () => {
        if (!opcion.classList.contains("mitigacion-seleccionada")) {
            opcion.style.cursor = "pointer";
            opcion.classList.add("opciones-acciones-hover");
        }
    })
    opcion.addEventListener("mouseout", () => {
        opcion.classList.remove("opciones-acciones-hover");
    })
    opcion.addEventListener("click", ()=> {
        let opcionMitigacionSeleccionada = document.querySelector(".mitigacion-seleccionada");
        if (!opcion.classList.contains("mitigacion-seleccionada")) {
            imagenMitigacion.src = accionesImagenesMitigacion[index].src;
            listaMitigacion[0].textContent = accionesImagenesMitigacion[index].acciones[0];
            listaMitigacion[1].textContent = accionesImagenesMitigacion[index].acciones[1];
            listaMitigacion[2].textContent = accionesImagenesMitigacion[index].acciones[2];
            opcionMitigacionSeleccionada.classList.remove("mitigacion-seleccionada");
            opcion.classList.add("mitigacion-seleccionada");
        }
    })
});

/*Intersection observer*/
const contenedorIntroAyuda = document.getElementById("contenedor-intro-ayuda");
const contenedorTextoAP = document.getElementById("texto-accion-personal");
const contenedorImagenAccionesAP = document.getElementById("contenedor-imagen-acciones-lista");
const contenedorTextoAC = document.getElementById("texto-accion-colectiva");
const contenedorImagenAccionesAC= document.getElementById("imagen-opciones-lista-colectiva");
const contenedorTituloMitigacion = document.getElementById("titulo-mitigacion");
const contenedorTextoMitigacion = document.getElementById("texto-accion-mitigacion");
const contenedorImagenMitigacion = document.getElementById("imagen-opciones-lista-mitigacion");
const elementosObservables = [contenedorIntroAyuda,
                                            contenedorTextoAP,
                                            contenedorImagenAccionesAP,
                                            contenedorTextoAC,
                                            contenedorImagenAccionesAC,
                                            contenedorTituloMitigacion,
                                            contenedorTextoMitigacion,
                                            contenedorImagenMitigacion];
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("transicion-entrada");
        }
        else {
            entry.target.classList.remove("transicion-entrada");
        }
    })
}, {
    threshold: 0.1,
});


elementosObservables.forEach(elemento => {
    observer.observe(elemento);
})
