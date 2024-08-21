document.querySelector("#boton").addEventListener("click", () => {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = document.querySelector("#text").value;
    document.querySelector("#lista").appendChild(nuevoElemento);
    document.querySelector("#text").value="";
});
