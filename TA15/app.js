document.querySelector("#añadir").addEventListener("click", () => {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = document.querySelector("#text").value;
    document.querySelector("#lista").appendChild(nuevoElemento);
    
    document.querySelector("#text").value="";
});
document.querySelector("#eliminar").addEventListener("click", ()=>{
    const lista = document.querySelector("#lista");
    document.querySelector("#lista").removeChild(lista.lastChild);
})
