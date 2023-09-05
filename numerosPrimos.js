function primos(num) {
    if(num<= 1){
        return "não é primo";
    }

    for (var i = 2; i < num; i++) {
         if(num % i === 0) {
            return "não é primo"
        } 
    
    } 
    return "é primo";
}
module.exports.primos = primos;
