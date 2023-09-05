const numeros = [4,3,2,1];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
const media = soma / numeros.length;

module.exports.media = media;