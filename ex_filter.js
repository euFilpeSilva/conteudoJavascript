
// filter()
// Serve para filtrar os valores do array e retornar apenas os valores que satisfazem a condição que quisermos.
// Quando usar?
// Esse é mais óbvio, sempre que tivermos um array e quisermos fazer algum filtro, por exemplo, um array de 
// objetos que contém dados sobre pessoas, inclusive uma propriedade com a idade, com o filter podemos filtrar 
// quem tem mais de 18 anos, quem tem 20 anos, e por aí vai, sua imaginação (e os operadores de comparação) 
// é o limite.

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

// função que filtra os valores menores que 2, ou seja, apenas os maiores vão para o novo array
// Lembre-se que o filter retorna um novo array
let novoArrayA = numeros.filter(numero => numero > 2);
console.log(novoArray); // => [3, 4]

// função que filtra o array objeto pelo nome
// Lembre-se que o filter retorna um novo array
let novoArrayB = objetos.filter(objeto => objeto.nome === 'Gandalf');
console.log(novoArray) // => [ { nome: 'gandalf' } ]

// Resumindo, satisfaz a condição? Vai para o novo array.
// Não satisfaz? Adeus, aqui tu não entra.

// Repare bem que, o filter retornou o objeto, enquanto o map retorna as entradas mapeadas.
//  Da pra entender isso, já que no map, ele retorna os valores e no filter ele apenas filtra 
//  pela propriedade, mas retorna o objeto inteiro.