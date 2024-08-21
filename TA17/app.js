document.querySelector("#aumentar").addEventListener("click", ()=>{
    let cont = parseInt(document.querySelector("#contador").textContent);
    document.querySelector("#contador").textContent = cont +1;
})