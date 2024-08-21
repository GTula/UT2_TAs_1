const imagen = document.querySelector("#imagen");
document.querySelector("#imagen").addEventListener("mouseover", ()=>{
    imagen.src="https://upload.wikimedia.org/wikipedia/commons/d/dc/LogoUCU.png";
})
document.querySelector("#imagen").addEventListener("mouseout", ()=>{
    imagen.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE6sdIHfR54dn4BMXjk-xvTYHzj3QEcBsHxQ&s";
})