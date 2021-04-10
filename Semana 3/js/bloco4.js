// Calcular Log Natural
var inputLog = document.querySelector('#inputLog');
var respostaLog = document.querySelector('#h4LogNatural');

function log() {
    if(inputLog.value > 0){
        respostaLog.innerHTML = "Resposta: O log natural (LN) de " + inputLog.value + " é " + Math.log(inputLog.value)
        inputLog.value = ""
    }else{
        alert('Insira um número para podermos calcular!')
        inputLog.value = ""
        respostaLog.value = ""
    }
}

document.querySelector('#btnLogNatural').addEventListener("click",log)

// Calcular Log na base 10
var inputLog10 = document.querySelector('#inputLogBase10');
var respostaLog10 = document.querySelector('#h4LogBase10');

function log10() {
    if(inputLog10.value > 0){
        respostaLog10.innerHTML = "Resposta: O valor de log de " + inputLog10.value + " na base 10 é " + Math.log10(inputLog10.value)    
        inputLog10.value = ""
    }else{
        alert('Insira um número para podermos calcular!')
        inputLog10.value = ""
        respostaLog10 = ""
    }
}

document.querySelector('#btnLogBase10').addEventListener("click",log10)