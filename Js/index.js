document.addEventListener("DOMContentLoaded", function() {
  const menuDesplegableBoton = document.querySelector(".menuDesplegable");
  const menuDesplegable = document.querySelector(".linksNav");

  menuDesplegableBoton.addEventListener("click", () => {
      menuDesplegable.classList.toggle("activo");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const botonBusqueda = document.querySelector(".buscarBoton");
  const barraDeBusqueda = document.querySelector(".barraDeBusqueda");
  const liBusqueda = document.querySelector(".libuscando")

  botonBusqueda.addEventListener("click", () => {
    barraDeBusqueda.classList.toggle("buscando");
    liBusqueda.classList.toggle("buscando");
    botonBusqueda.classList.toggle("buscando");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const BotonIz = document.querySelector(".prev");
  const BotonDe = document.querySelector(".next");
  const imagenes = document.querySelector(".carousel-items");
  const carousel = document.querySelector(".carousel-container");

  let indiceActual = 0
  const cantidadImagenes = imagenes.querySelectorAll("img").length;
  BotonIz.addEventListener("click", () =>{
    if(indiceActual > 0){
      indiceActual--;
      actualizarTransformacion();
    }else {
      indiceActual = cantidadImagenes - 1; // Ir a la última imagen si estamos en la primera
      actualizarTransformacion();
    }
  });
  BotonDe.addEventListener("click", () =>{
    if(indiceActual < imagenes.children.length - 1){
      indiceActual++;
      actualizarTransformacion();
    } else {
      indiceActual = 0; // Volver al inicio si estamos en la última imagen
      actualizarTransformacion();
    }
  });


  function actualizarTransformacion() {
    const desplazamiento = -indiceActual * 100/3; // Desplazamiento en porcentaje
    imagenes.style.transform = `translateX(${desplazamiento}%)`;
  }
});


