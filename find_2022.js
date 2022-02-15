// 2.3) Utilizando o find

// Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined


var usuarios= [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Leandro', idade: 29, empresa: 'Rocketseat' },
    { nome: 'Marcia', idade: 18, empresa: 'Logi' },
    { nome: 'RThiago', idade: 18, empresa: 'Rocketseat' },
    { nome: 'Andreia', idade: 25, empresa: 'Rocketseat' }
]

let retorne = usuarios.find(function(n) {
  return  n.empresa == "Google"
});

console.log(retorne);
