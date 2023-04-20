const palavras = ["reviver", "luz azul", "radar", "manhã"];
const verificarPalavras = palavras => palavras === palavras.split('').reverse().join('');
const resultados = palavras.map(verificarPalavras)
console.log(resultados)