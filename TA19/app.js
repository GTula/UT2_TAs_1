const botonEnviar = document.querySelector("#enviar");
botonEnviar.style.display = "none";

function validacion() {
    const valorNombre = document.querySelector("#nombre").value;
    const valorContraseña = document.querySelector("#contraseña").value;
    const valorCorreo = document.querySelector("#correo").value;

    if (valorNombre && valorContraseña.length >= 8 && valorCorreo.includes("@")) {
        botonEnviar.style.display = "block";
    } else {
        botonEnviar.style.display = "none";
    }
}

document.querySelector("#nombre").addEventListener("input", validacion);
document.querySelector("#contraseña").addEventListener("input", validacion);
document.querySelector("#correo").addEventListener("input", validacion);


document.querySelector("#enviar").addEventListener("click", ()=>{
    const datosFormulario = {
        nombre: document.querySelector("#nombre").value,
        contrasena: document.querySelector("#contraseña").value,
        correo: document.querySelector("#correo").value
    };
    document.querySelector("#nombre").value ="";
    document.querySelector("#contraseña").value ="";
    document.querySelector("#correo").value ="";
})
botonEnviar.style.display = "none";
