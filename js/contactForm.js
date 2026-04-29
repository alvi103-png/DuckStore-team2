const form = document.getElementById("formContacto");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensajeUsuario = document.getElementById("mensaje").value;
    

    console.log({
        nombre: nombre,
        email: email,
        mensaje: mensajeUsuario,

    })

    const mensajeUI = document.getElementById("formMensaje");

    mensajeUI.textContent = "Mensaje enviado correctamente!";
    mensajeUI.classList.add("exito");

    if (!nombre || !email || !mensajeUsuario) {
        mensajeUI.textContent = "Por favor completa todos los campos";
        mensajeUI.classList.add("error");
        
        return;
    }


    form.reset();


});

