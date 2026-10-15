
/* RESTAURAR LA PÁGINA */
const boton = document.getElementById("botonRecuperar");

if (boton) {
    boton.addEventListener("click", function () {
        document.getElementById("pantallaError").style.display = "none";
        document.getElementById("contenido").hidden = false;
    });
}


/* MOSTRAR Y OCULTAR EL CHATBOT */
const chat = document.getElementById("chatBoton");
const panel = document.getElementById("chatPanel");

if (chat) {
    chat.addEventListener("click", function () {
        panel.hidden = !panel.hidden;
    });
}


/* RESPUESTAS DEL CHATBOT */
const chatForm = document.getElementById("chatForm");

if (chatForm) {
    chatForm.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const pregunta = document.getElementById("pregunta").value.toLowerCase();

        let respuesta = "Disculpa, no entendí tu pregunta. Puedes consultarme sobre productos, precios, horarios o pedidos.";

        if (pregunta.includes("hola") || pregunta.includes("buenas")) {
            respuesta = "¡Hola! Bienvenido a Dulce Luna. ¿Te gustaría conocer nuestros postres?";
        }

        else if (pregunta.includes("precio") || pregunta.includes("cuanto") || pregunta.includes("costo")) {
            respuesta = "Nuestros bizcochos comienzan desde RD$1,800. Puedes consultar los demás precios en Servicios.";
        }

        else if (pregunta.includes("postre") || pregunta.includes("menu") || pregunta.includes("venden")) {
            respuesta = "Ofrecemos bizcochos, cupcakes, brownies, cheesecake, macarons y galletas artesanales.";
        }

        else if (pregunta.includes("horario") || pregunta.includes("abren")) {
            respuesta = "Atendemos de lunes a sábado, de 9:00 a. m. a 6:00 p. m.";
        }

        else if (pregunta.includes("pedido") || pregunta.includes("encargar") || pregunta.includes("comprar")) {
            respuesta = "Puedes solicitar información sobre tu pedido desde nuestro formulario de Contacto.";
        }

        else if (pregunta.includes("ubicacion") || pregunta.includes("donde") || pregunta.includes("direccion")) {
            respuesta = "Estamos ubicados en Santo Domingo, República Dominicana.";
        }

        else if (pregunta.includes("gracias")) {
            respuesta = "¡Con mucho gusto! Esperamos endulzar tu día.";
        }

        document.getElementById("respuestaBot").textContent = respuesta;
        document.getElementById("pregunta").value = "";
    });
}


/* FORMULARIO DE CONTACTO */
const formulario = document.getElementById("contactoForm");

if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        document.getElementById("respuestaFormulario").textContent =
            "Gracias por escribirnos. Nos pondremos en contacto contigo lo antes posible.";

        formulario.reset();
    });
}


/* MODO OSCURO */
const botonOscuro = document.getElementById("modoOscuro");

// Recuperar el modo oscuro guardado
if (localStorage.getItem("modoOscuro") === "si") {
    document.body.classList.add("oscuro");
}

// Cambiar y guardar el modo oscuro
if (botonOscuro) {
    botonOscuro.addEventListener("click", function () {
        document.body.classList.toggle("oscuro");

        if (document.body.classList.contains("oscuro")) {
            localStorage.setItem("modoOscuro", "si");
        } else {
            localStorage.setItem("modoOscuro", "no");
        }
    });
}
