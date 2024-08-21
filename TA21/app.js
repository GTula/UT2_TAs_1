const campo = document.querySelector("#text");
campo.addEventListener("focus", ()=>{
    campo.classList.add("foco");
})
campo.addEventListener("blur", ()=>{
    campo.classList.remove("foco");
})