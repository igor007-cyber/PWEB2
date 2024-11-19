function soma(x, y) {
    return x + y;
}
function subtracao(x, y) {
    return x - y
}
function divisao(x, y) {
    return x / y
}
function multiplicacao(x, y) {
    return x * y
}

let num1 = parseFloat(prompt('Digite um numero'))
let num2 = parseFloat(prompt('Digite outro numero'))

let key = prompt('Digite se voce quer Soma, Subtracao, Divisao, Multiplicacao')

switch (key) {
    case "Soma":
        alert(soma(num1, num2))
        break;

    case "Subtracao":
        alert(subtracao(num1, num2))
        break;

    case "Divisao":
        alert(divisao(num1, num2))
        break;

    case "Multiplicacao":
        alert(multiplicacao(num1, num2))
        break;

    default:
        alert('está tudo errado')
        break;
}

