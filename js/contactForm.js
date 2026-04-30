const form = document.getElementById("formContacto");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensajeUsuario = document.getElementById("mensaje").value.trim();
    
    const mensajeUI = document.getElementById("formMensaje");

    mensajeUI.textContent = "";
    mensajeUI.classList.remove("exito", "error");

    if (!nombre || !email || !mensajeUsuario) {
        mensajeUI.textContent = "Por favor completa todos los campos";
        mensajeUI.classList.add("error");
        return;

    }

    console.log({
        nombre: nombre,
        email: email,
        mensaje: mensajeUsuario,

    });

    mensajeUI.textContent = "Mensaje enviado correctamente!";
    mensajeUI.classList.add("exito");

     form.reset();
    

});

