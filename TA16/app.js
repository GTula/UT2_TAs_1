document.querySelector("#boton").addEventListener("click", ()=>{
    if(document.querySelector("#texto").style.display === "none"){
        document.querySelector("#texto").style.display = "block";
    }
    else{
        document.querySelector("#texto").style.display = "none";
    }
    
})