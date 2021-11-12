// reduce()
// Serve para reduzir um array a um único elemento.

// Quando usar?
// Quando quiser concatenar ou obter um valor cumulativos dos elementos, 
// por exemplo, somar o salário de todos empregados, somar a idade de todos 
// para obter a média depois ou concatenar os nome de todos usuário (vai saber 
//   pra que alguém vai querer isso, mas na hora da gambiarra a gente apela para
//    tudo).


// EXEMPLO:
// array de números
const numeros = [1, 2, 3, 4];

// array com objetos
const objetos = [
  {
    nome: 'Leo',
    idade: 23
  },
  {
    nome: 'Gandalf',
    idade: 1767
  }
];

// Explicando a sintaxe: 
// prevValue = valor anterior, ou seja,o valor que está sendo acumulado, pode dar o nome que quiser
//             desde que seja o primeiro parametro, e você use o mesmo nome dentro da função
// numero = o elemento do array
// 0 = valor inicial da contagem, no nosso caso zero
let soma = numeros.reduce( (prevValue, numero) => prevValue + numero, 0 )
console.log(soma) // => 10

// prevValue = valor anterior, ou seja,o valor que está sendo acumulado, pode dar o nome que quiser
//             desde que seja o primeiro parametro, e você use o mesmo nome dentro da função
// objeto = um elemento do array
// 10 = valor inicial da contagem, no nosso caso 10
let somaIdades = objetos.reduce( (prevValue, objeto) => prevValue + objeto.idade, 10)
console.log(somaIdades) // => 1800

// Já o reduce, retorna apenas o valor obtido.