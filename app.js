//código assíncrono
//const fs = require('fs');

//fs.readFile('exemplo.txt', 'utf8', function(err, data){
    //if(err) {
        //console.error(err);
        //return;
    //}
    //console.log(data);
//});
//console.log('Final do código');

const matematica = require('./matematica');

const resultado = matematica.somar(5,10);

console.log('o resultado da soma é:', resultado);