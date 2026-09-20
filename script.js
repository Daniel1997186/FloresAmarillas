
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

// Compartir por WhatsApp
botonWhatsApp.addEventListener("click", function() {

    const mensaje = `🌻 Hola, preciosa 💛

Hoy quiero regalarte estas flores amarillas como un pequeño detalle para recordarte lo especial que eres.

Que nunca te falten motivos para sonreír y momentos bonitos.

Con cariño, Daniel 💛`;

    const enlace = "https://wa.me/?text=" + encodeURIComponent(mensaje);

    window.open(enlace, "_blank");

});