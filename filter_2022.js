// 2.2) Utilizando o filter

// Crie uma variável que tenha apenas os usuários que trabalham na Rocketseat
//  e com mais de 18 anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]


var usuarios= [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Leandro', idade: 29, empresa: 'Rocketseat' },
    { nome: 'Marcia', idade: 18, empresa: 'Logi' },
    { nome: 'RThiago', idade: 18, empresa: 'Rocketseat' },
    { nome: 'Andreia', idade: 25, empresa: 'Rocketseat' }
]

const filtro = usuarios.filter(function(filtrar) {
    return filtrar.idade > 18 && filtrar.empresa =="Rocketseat"
});

console.log(filtro);