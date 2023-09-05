const conversaoCF = require('./conversaoTemperatura');

const resultadoCF = conversaoCF.conversaoCF(10);

console.log(resultadoCF, "°F");

const conversaoFK = require('./conversaoTemperatura');

const resultadoFK = conversaoFK.conversaoFK(10);

console.log(resultadoFK, "K");

const conversaoKC = require('./conversaoTemperatura');

const resultadoKC = conversaoKC.conversaoKC(10);

console.log(resultadoKC, "°C");