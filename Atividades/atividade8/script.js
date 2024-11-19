let x = parseFloat(prompt('Digite um numero: '))
let y = parseFloat(prompt('Digite outro numero: '))
let z = parseFloat(prompt('Digite outro numero: '))

let a = [x,y,z]

alert(Math.max(...a))