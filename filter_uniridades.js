// 2.4) Unindo operações

// Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos:

// // Resultado:
usuarios =[
 { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
 { nome: 'Juliana', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Marcos', idade: 20, empresa: 'Rocketseat' }
]

// Object.assign: copia os dados e sobrescreve os iguais.

let resultado = usuarios.filter(function(n) {
    return n.idade * 2 <= 50? Object.assign(n, {idade: n.idade * 2}): null;
});

console.log(resultado);
