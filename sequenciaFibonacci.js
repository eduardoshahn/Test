const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe um número inteiro: ', (numero) => {
  let fibonacci = [0, 1];

  while (fibonacci[fibonacci.length - 1] < numero) {
    let proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(proximo);
  }

  if (fibonacci.includes(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
  }

  rl.close();
});