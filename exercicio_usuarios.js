// Crie uma classe usuário que deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los em propriedades da classe.
// Crie uma classe com nome "Admin", essa classe deve extender uma segunda classe chamada "Usuario".
// A classe "Admin" por sua vez não recebe parâmetros próprios apenas e-mail e senha da classe pai (super). Deve ser criada uma propriedade interna this.admin = true em seu construtor.
// Agora com suas classes formatadas, adicione um método(função) na classe Usuario chamado isAdmin que retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não. (Realizando um if).


class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
        this.isAdmin = () => {
            if (this.admin == true) {
                console.log("é um admin");
                return true;
            } else {
                console.log("não é um admin");
                return false;
            }
        }
    }

}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha)
        this.admin = true;
    }
}

const user1 = new Usuario('eusouUsuario@gmail.com', 'soueu123');
const adm = new Admin('eusouAdmin@gmail.com', 'soueu283');

user1.isAdmin();
adm.isAdmin();





