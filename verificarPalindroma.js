const palavras = ["reviver", "luz azul", "radar", "manhã", "arara"];

const resultado = [];
palavras.forEach((palavra) =>
  resultado.push(palavra === palavra.split("").reverse().join(""))
);
console.log(resultado.join("\n"));
