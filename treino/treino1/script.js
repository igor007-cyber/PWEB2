//Prototipagem
const jogador = {
    atacante: function (){
        console.log('atacar');
    }
}

const pessoa = Object.create(jogador)
pessoa.atacante()


//class
class Pessoa {
    constructor(name,idade){
        this.name = name
        this.idade = idade
    }

    apresentar(){
        return `ola meu nome é ${this.name} e eu tenho ${this.idade} anos`
    }
}

//Constructor
const pessoa1 = new Pessoa('Ana', 23);
console.log(pessoa1.apresentar());

class Produto{
    constructor(nome, preco){
        if(preco < 0){
            throw new Error('Preço nao pode ser negativo')
        }
        this.nome = nome
        this.preco = preco
    }
    exibirDetalhe(){
        return `Produto: ${this.nome} - Preço R$${this.preco.toFixed(2)}`
    }
}

try {
    const produto1 = new Produto('Notebook', 3000)
    console.log(produto1.exibirDetalhe())
    const produto2 = new Produto('Ipad', -555)

} catch (error) {
    console.error(error.message)
}

// Encapsulamento
class ContaBancaria{
    constructor(saldo){
        this._saldo = saldo
    }

    get saldo(){
        return this._saldo
    }

    depositar(valor){
        this._saldo += valor
    }
    
    sacar(valor){
        if(valor <= this._saldo){
            this._saldo -= valor
        }else{
            console.log('saldo insuficiente')
        }
    }


}

const minhaConta = new ContaBancaria(1000)
minhaConta.depositar(500)
console.log(minhaConta.saldo)
minhaConta.sacar(2000)


class Conta{
    #saldo
    constructor(saldoInicial){
        this.#saldo = saldoInicial
    }

    get saldo(){
        return this.#saldo
    }

    depositar(valor){
        this.#saldo += valor
    }
    
    sacar(valor){
        if(valor <= this.#saldo){
            this.#saldo -= valor
        }else{
            console.log('saldo insuficiente')
        }
    }


}

const minhaConta1 = new Conta(1000)
minhaConta1.depositar(500)
console.log(minhaConta1.saldo)
minhaConta1.sacar(2000)


class Operacao{
    #logOperacao(tipo, valor){
        console.log(`Operacao: ${tipo} - Valor: ${valor}`)
    }

    realizarOperacao(valor){
        this.#logOperacao('realizar', valor)
    }

}

const operacao = new Operacao()
operacao.realizarOperacao(100)


//HERANÇA
class Animal{
    constructor(nome){
        this.nome = nome
    }

    fazerSom(){
        console.log(`${this.nome} está fazendo som`)
    }
}

class Cachorro extends Animal{
    fazerSom(){
        console.log(`${this.nome} está latindo`)
    }
}

const MeuCachorro = new Cachorro('Rex')
MeuCachorro.fazerSom()




class Animalg {
    constructor(name){
        this.name = name
    }

    fazerSom() {
        console.log(`${this.name} esta fazendo som`)
    }

}

class Gato extends Animalg{
    constructor(name, cor){
        super(name)
        this.cor = cor
    }

    detalhes(){
        console.log(`O meu gato ${this.name} e ele tem a cor ${this.cor}`)
    }
}

const gato = new Gato("mingau", 'branco')
gato.fazerSom()
gato.detalhes()


class Casa{
    fazerCasa(){
        console.log("fazendo a casa")
    }
}

class Pessoa1 extends Casa{
    fazerCasa(){
        super.fazerCasa()
        console.log("Pessoa fazendo a casa")
    }
}

const pessoa4 = new Pessoa1()
pessoa4.fazerCasa()


//MIXINS
const Voar = {
    voar(){
        console.log('eu sei voar')
    }
}

const Nadar = {
    nada(){
        console.log('eu sei voar')
    }
}

class Pato{
    constructor(nome){
        this.nome = nome
    }
}

Object.assign(Pato.prototype, Voar, Nadar)

const pato = new Pato('Donald')
pato.voar()
pato.nada()



// SET e o GET
class Saudacao {
    constructor(nome) {
        this._nome = nome; // Atributo privado com convenção de "_"
    }

    // Getter para acessar o nome
    get nome() {
        return this._nome;
    }

    // Setter para modificar o nome com validação
    set nome(novoNome) {
        if (novoNome.trim() === "") {
            console.error("Nome não pode ser vazio.");
        } else {
            this._nome = novoNome;
        }
    }

    // Método para gerar a saudação
    gerarSaudacao() {
        return `oi, ${this.nome}！tudo bem`; // Aqui usamos o getter
    }
}

// Criando uma instância da classe Saudacao
const saudacao = new Saudacao("igor");
console.log(saudacao.gerarSaudacao()); // Saída: 你好, 小明！你也是。

// Alterando o nome usando o setter
saudacao.nome = "igor"; 
console.log(saudacao.gerarSaudacao()); // Saída: 你好, 张伟！你也是。

// Tentando definir um nome inválido
saudacao.nome = ""; // Exibe erro no console: Nome não pode ser vazio.

// Exibindo o nome atual usando o getter
console.log(saudacao.nome); // Saída: 张伟

class Animal5 {}
class Cachorro1 extends Animal5 {}

const rex = new Cachorro1();

console.log(rex instanceof Cachorro1); // true (rex é um Cachorro)
console.log(rex instanceof Animal5);  // true (rex herda de Animal)
console.log(rex instanceof Object);  // true (todos os objetos herdam de Object)

const objeto = {};
console.log(objeto instanceof Cachorro1); // false (objeto não é um Cachorro)