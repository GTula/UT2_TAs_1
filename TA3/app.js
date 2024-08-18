function removeFromArray(array, item){
    array = array.filter(animal => animal != item);
    return array;
}
console.log(removeFromArray(['perro', 'gato', 'oso', 'pájaro', 'hormiga'], 'oso'))