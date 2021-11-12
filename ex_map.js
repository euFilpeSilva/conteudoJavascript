// map()
// Serve para mapear os dados do array para um novo conjunto.
// Quando usar?
// Quando quiser executar ações sobre os valores do array, sejam eles números, string, objetos, etc.
// Uso muito também no React em listas, em que posso mapear um array de dados vindo do servidor, por 
// exemplo, e exibi-los para o usuário.

// EXEMPLO:

// array de números
const numeros = [1, 2, 3, 4];

// array com objetos
const objetos = [
  {
    nome: 'Leo',
  },
  {
    nome: 'Gandalf',
  }
];

// função map usada para multiplicar os valores por 2
// Lembre-se que o map retorna um novo array
let novoArrayA = numeros.map(numero => numero * 2);
console.log(novoArray); // => [2, 4, 6, 8]

// função map usada para tranformar todos nomes para MAIÚSCULO
// Lembre-se que o map retorna um novo array
let novoArrayB = objetos.map(objeto => objeto.nome.toUpperCase());
console.log(novoArray) // => ['LEO', 'GANDALF']
