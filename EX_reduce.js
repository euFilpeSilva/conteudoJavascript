// reduce()
// Quando usar?
// Quando quiser concatenar ou obter um valor cumulativo, 
// por exemplo, somar o salário de todos empregados; somar a idade de todos 
// para obter a média depois concatenar .

// EXEMPLO:
// array de números
const numeros = [1, 2, 3, 4];



// Explicando a sintaxe: 
// prevValue = valor anterior, ou seja,o valor que está sendo acumulado, pode dar o nome que quiser
// desde que seja o primeiro parametro, e você use o mesmo nome dentro da função
// numero = o elemento do array
// 0 = valor inicial da contagem
let soma = numeros.reduce( (prevValue, numero) => prevValue + numero, 0 )
console.log(soma) // => 10



// objeto = um elemento do array
// 1 = valor inicial da contagem
let somaIdades = objetos.reduce( (prevValue, objeto) => prevValue + objeto.idade, 0)
console.log(somaIdades) // => 1790

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
