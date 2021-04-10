// Variaveis da primeira Section
var input = document.querySelector('#inputArredondado');
var btn = document.querySelector('#btnArredondado');
var resposta = document.querySelector('#h4Arredondado');

// Variaveis da segunda Section
var input2 = document.querySelector('#inputPotencia');
var resposta2 = document.querySelector('#h4Potencia');
var resposta3 = document.querySelector('#h4Potencia2');

function pot () {
    if(input2.value >= 1){
        resposta2.innerHTML ="Resposta: " + Math.round(input.value) + " elevado a " + input2.value + "ª potência é igual a " + Math.pow(Math.round(input.value),input2.value)
        resposta3.innerHTML ="Arredondado = " + Math.round(Math.pow(Math.round(input.value),input2.value));
        input2.value = ""
        input.value = ""
    }else{
        alert('Caso não tenha colocado nada, o valor do exponente será considerado = 0 (Zero)')
        resposta2.innerHTML ="Resposta: " + Math.round(input.value) + " elevado a 0 (Zero) é igual a " + Math.pow(Math.round(input.value),input2.value)
        resposta3.innerHTML ="Arredondado = " + Math.round(Math.pow(Math.round(input.value),input2.value));
        input2.value = ""
        input.value = ""
    }
}

function func (){  
    
    if(input.value > 0){
        resposta.innerHTML = "Resposta: Se arredondarmos "+ input.value +" temos " + Math.round(input.value)
    }else{
        alert('Insira um número para podermos calcular!')
        input.value = ""
        resposta.innerHTML = ""
        resposta2.innerHTML = ""
        resposta3.innerHTML = ""
    }
}


btn.addEventListener("click",func);