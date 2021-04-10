// Variaveis calcular circuferencia
var inputCirc = document.querySelector('#inputCircunferencia');
var respostaCric = document.querySelector('#h4Circunferencia');
var respostaCric1 = document.querySelector('#h4Circunferencia1');

// Variaveis calcular area
var inputArea = document.querySelector('#inputAreaCirculo');
var respostaArea = document.querySelector('#h4AreaCirculo');
var respostaArea1 = document.querySelector('#h4AreaCirculo1');

// Função calcular circunferência
function circ() {
    if(inputCirc.value > 0){
        respostaCric.innerHTML = "Resposta: Se raio = " + inputCirc.value + " então a circunferência é " + 2*Math.PI*inputCirc.value;
        respostaCric1.innerHTML = "Considerando PI 3.14 = " + 2*3.14*inputCirc.value;
        inputCirc.value = ""
    }else{
        alert('Insira um número para podermos calcular!')
        inputCirc.value = ""
        respostaCric.innerHTML = ""
        respostaCric1.innerHTML = ""
    }
}

// Função calcular Área
function area() {
    if(inputArea.value > 0){
        respostaArea.innerHTML = "Resposta: Se raio = " + inputArea.value + " então a área será de " + Math.PI*Math.pow(inputArea.value,2);
        respostaArea1.innerHTML = "Considerando PI 3.14 = " + 3.14*Math.pow(inputArea.value,2);
        inputArea.value = ""
    }else{
        alert('Insira um número para podermos calcular!')
        inputArea.value = ""
        respostaArea.innerHTML = ""
        respostaArea1.innerHTML = ""
    }
}

// Botão Calcular Circunferência
document.querySelector('#btnCircunferencia').addEventListener("click", circ);

// Botão Calcular Área
document.querySelector('#bntAreaCirculo').addEventListener("click",area)
