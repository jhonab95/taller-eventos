// Agregar manejador de eventos para el clic en el div
document.addEventListener("DOMContentLoaded", function () {
    var contenedorBoton = document.getElementById("contenedorBoton");

    contenedorBoton.addEventListener("click", function () {
        alert("¡Hola! Soy el div");
    });
});
