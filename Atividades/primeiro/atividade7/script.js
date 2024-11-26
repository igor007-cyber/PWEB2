function reverseString(str) {
    return str.split("").reverse().join(""); // aqui faz o reverso da palavra
}

let texto = prompt('Digite um qualquer coisa')
alert(reverseString(texto))