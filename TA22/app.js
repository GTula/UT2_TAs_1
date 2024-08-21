const tamaño = document.querySelector("#tamaño");
function mostrar() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    tamaño.textContent = "Tamaño: " + ancho + " x " + alto;
}
window.addEventListener("resize", mostrar);
mostrar();