import { soma } from "./math.js"

document.getElementById("teste").innerText = 'ola mundo'
document.getElementById("teste2").addEventListener("click", function(){
    alert(soma(1,2))
})
