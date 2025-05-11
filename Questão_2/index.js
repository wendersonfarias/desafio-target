function ehFibonacci(num) {
  let primeiro = 0;
  let segundo = 1;

  while (primeiro <= num) {
    if (primeiro === num) {
      return true;
    }

    const proximo = primeiro + segundo;
    primeiro = segundo;
    segundo = proximo;
  }

  return false;
}

// Número para verificar
const numero = 34;

if (ehFibonacci(numero)) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
}
