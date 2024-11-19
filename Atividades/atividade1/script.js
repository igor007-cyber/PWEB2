// let nome = prompt("Digite o seu nome:")
// let num = parseInt(prompt("Digite um número:"))

// if (num >= 18){
//     alert(`Seja bem vindo ${nome} e voce é maior de idade, ${num} anos`)
// }
// else if (num < 18){
//     alert(`Seja bem vindo ${nome} e voce é menor de idade, ${num} anos`)
// }


let res = document.getElementById('resultado').value
let botao = document.getElementById('verificar');

botao.addEventListener('click', () => {
    let nome = document.getElementById('nome').value
    let num = document.getElementById('numero').value

    if (num >= 18){
        document.getElementById('resultado').innerText = `Seja bem vindo ${nome} e voce é maior de idade, ${num} anos`
    }
    else if (num < 18){ 
        document.getElementById('resultado').innerText = `Seja bem vindo ${nome} e voce é menor de idade, ${num} anos`
    }
});