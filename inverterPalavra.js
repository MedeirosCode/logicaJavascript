const palavra = "christian";

function reverterPalavraSimplificado(palavra) {
  return palavra.split("").reverse().join("");
}
console.log(reverterPalavraSimplificado(palavra));
