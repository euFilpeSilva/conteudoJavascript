// 2) A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

// 2.1) Utilizando o map
// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]








// 2.2) Utilizando o filter

// Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat
//  e com mais de 18 anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]










// 2.3) Utilizando o find

// Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined






// 2.4) Unindo operações

// Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos:

// // Resultado:
// [
//  { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
//  { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
// ]















3) Converta as funções nos seguintes trechos de código em Arrow Functions:

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});
// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);
// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);
// 3.4
const promise = function() {
 return new Promise(function(resolve, reject) {
 return resolve();
 })
}