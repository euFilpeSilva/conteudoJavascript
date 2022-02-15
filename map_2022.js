   // 2) A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
   
   const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];
 
//     // 2.1) Utilizando o map
//     // Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
 
 let idades = usuarios.map((n) => n.idade);
 
 console.log(idades);
