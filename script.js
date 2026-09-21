
const botonMensaje = document.getElementById("botonMensaje");
const mensajeEspecial = document.getElementById("mensajeEspecial");
const botonWhatsApp = document.getElementById("botonWhatsApp");

// Mostrar mensaje especial
botonMensaje.addEventListener("click", function() {

    mensajeEspecial.classList.toggle("oculto");

    if (mensajeEspecial.classList.contains("oculto")) {
        botonMensaje.textContent = "💛 Tengo algo más que decirte";
    } else {
        botonMensaje.textContent = "💛 Ocultar mensaje";
    }

});




const parametros = new URLSearchParams(window.location.search);
const nombre = parametros.get("nombre");

if (nombre) {
    document.getElementById("nombre").textContent = nombre;
}



