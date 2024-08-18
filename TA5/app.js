function leapYears(year){
    let esBisiesto = false;
    if(year%4==0 || (year%100==0 && year%400==0)){
        esBisiesto = true;
    }
    console.log(esBisiesto);
}