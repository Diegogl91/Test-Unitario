const sum = (a,b) => {
    return a + b;
}
console.log(sum(7,3))

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInEuro = valueInDollar / 1.2;
    let valueInYen = valueInEuro * 127.9;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen / 127.9;
    let valueInPounds = valueInEuro * 0.8;
    return valueInPounds
}


module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
