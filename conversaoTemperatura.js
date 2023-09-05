function conversaoCF(celsius) {
   return fahrenheit = (celsius * 9 / 5) + 32;

}
module.exports.conversaoCF = conversaoCF;

function conversaoFK(fahrenheit) {
    return kelvin = (fahrenheit - 32) * 5/9 + 273.15;

}
module.exports.conversaoFK = conversaoFK;

function conversaoKC(kelvin) {
    return celsius = kelvin - 273.15;

}
module.exports.conversaoKC = conversaoKC;