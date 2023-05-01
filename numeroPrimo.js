const numero = 4;

function verificarPrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(verificarPrimo(numero));
