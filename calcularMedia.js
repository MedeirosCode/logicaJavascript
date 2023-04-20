const notas = [2, 3, 4, 5, 6];

function media(notas) {
  const soma = notas.reduce((a, b) => a + b);
  return soma / notas.length;
}

console.log(media(notas));
