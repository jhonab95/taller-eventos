// Agregar manejador de eventos para el clic en el div
document.addEventListener("DOMContentLoaded", function () {
    var contenedorBoton = document.getElementById("contenedorBoton");

    contenedorBoton.addEventListener("click", function (event) {
        alert("¡Hola! Soy el div");
        event.stopPropagation(); // Detiene la propagación del evento
    });

    document.getElementById("saludarBtn").addEventListener("click", function (event) {
        alert("¡Hola desde eventos.js!");
        event.stopPropagation(); // Detiene la propagación del evento
    });
});
