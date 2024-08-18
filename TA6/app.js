function convertToCelsius(temp){
    temp = (temp-32)*(5/9);
    temp = temp.toFixed(1);
    return temp;
}

function convertToFahrenheit(temp){
    temp = (temp*(9/5))+32;
    temp = temp.toFixed(1);
    return temp;
}