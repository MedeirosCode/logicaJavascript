function fatorial(n) {
    if (!Number.isInteger(n) || n < 0) {
      return "Erro: o fatorial não pode ser calculado para números não inteiros ou negativos";
    }
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
  console.log(fatorial(20)); 
