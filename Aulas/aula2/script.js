//instanciando

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade
    }

    apresentar(){
        return `ola, meu nome é ${this.nome} e minha idade é ${this.idade}`
    }
}

const pesseoal = new Pessoaal('igor', 26)
console.log(pesseoal.apresentar())



class ContaBancaria {
    constructor(saldo) {
      // Propriedade "privada" (convencionalmente com _)
      this._saldo = saldo;
    }
  
    get saldo() {
      return this._saldo;
    }
  
    depositar(valor) {
      this._saldo += valor;
    }
  
    sacar(valor) {
      if (valor <= this._saldo) {
        this._saldo -= valor;
      } else {
        console.log("Saldo insuficiente!");
      }
    }
  }
  
  const minhaConta = new ContaBancaria(1000);
  minhaConta.depositar(500);
  console.log(minhaConta.saldo); // 1500
  minhaConta.sacar(2000); // Saldo insuficiente!
  