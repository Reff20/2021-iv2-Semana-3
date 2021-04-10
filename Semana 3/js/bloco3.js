// Calcular Área da base do cubo
var inputAB = document.querySelector('#inputAreaBaseCubo');
var respostaAB = document.querySelector('#h4AreaBase');

function ab(){
    if(inputAB.value > 0){
        respostaAB.innerHTML = "Resposta: Se aresta é " + inputAB.value + " então a área de uma face é de " + Math.pow(inputAB.value,2);
        inputAB.value = ""
    }else if(inputAB.value === 0){
        alert('Insira um valor maior que 0 (Zero)');
        inputAB.value =""
        respostaAB.innerHTML = ""
    }else{
        alert('Insira um número para podermos calcular!');
        inputAB.value = ""
        respostaAB.innerHTML = ""
    }
}

document.querySelector('#btnAreaBase').addEventListener("click",ab);

// Calcular Área total do cubo
var inputAT = document.querySelector('#inputAreaTotalCubo');
var respostaAT = document.querySelector('#h4AreaTotal');


function at(){
    if(inputAT.value > 0){
        respostaAT.innerHTML = "Resposta: Se aresta é " + inputAT.value + " então a área total do cubo será de " + Math.pow(inputAT.value,2)*6
    }else{
        alert('Insira um número para podermos calcular!')
        respostaAT.innerHTML = ""
        inputAT.value = ""
    }
}

document.querySelector('#btnAreaTotal').addEventListener("click",at)

// Calcular Volume do cubo
var inputVol = document.querySelector('#inputVolumeCubo');
var respostaVol = document.querySelector('#h4Volume');


function vol(){
    if(inputVol.value > 0){
        respostaVol.innerHTML = "Resposta: Se aresta é " + inputVol.value + " então o volume do cubo será de " + Math.pow(inputVol.value,3)
    }else{
        alert('Insira um número para podermos calcular!')
        respostaVol.innerHTML = ""
        inputVol.value = ""
    }
}

document.querySelector('#btnVolume').addEventListener("click",vol)