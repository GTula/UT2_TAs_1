const people = [
    { name: "Paco"},
    { name: "Hugo"},
    { name: "Luis"},
];
// for(const person of people){
//     const nuevaPersona = document.createElement("li");
//     nuevaPersona.textContent=person["name"];
//     document.querySelector("#list").appendChild(nuevaPersona);
// }
const listElement = document.querySelector("#list");
function render(items){
    listElement.innerHTML = items.map(person => `<li>${person.name}</li>`).join('');
}
render(people);
document.querySelector("#buscador").addEventListener("input", () => {
    let valorBuscado = document.querySelector("#buscador").value.toLowerCase();
    let items = listElement.querySelectorAll('li');
    
    items.forEach(element => {
        if(element.textContent.toLowerCase().includes(valorBuscado)){
            element.style.display= "block";
        } else {
            element.style.display = "none";
        }
    })
});

