
class Caneta {
    //propriedades e funções da classe aqui
    constructor(param1,param2, param3) {
        this.modelo = param1;
        this.cor = param2;
        this.ponta = param3;
        this.estado = true;
    }
}

var c1 = new Caneta()
  c1.modelo = 'preto'
  c1.cor = 'amarelo';
  c1.ponta = 0.6;

  var c2 = new Caneta('branco', 'vermelho', 0.6, true)



// function estado() {
//     if(c1.estado == true) {
//         console.log('Tampada');
//     }else {
//         console.log('Destampada');
//     }
// }
// estado()

function cor() {
    if(c2.cor == 'amarelo') {
        console.log("é amarelo!");
    }else {
        console.log("Não é amarelo!");
    }
}
cor()












//   function escrever(){
//       if(c1.modelo == "branco"){
//           console.log("estou escrevendo");
//       }else{
//           console.log("ERRO");
//       }
//   }
//   escrever()