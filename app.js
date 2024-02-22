const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))



const fromDollarToYen = (dollar) => {
    return dollar * 150.37
}
const fromEuroToDollar = (euro) => {
    return euro * 1.07
}
const fromYenToPound = (yen) => {
    return yen * 0.87
}
console.log(fromEuroToDollar(3.5))
console.log(fromYenToPound(3.5));
module.exports= { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
