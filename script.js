let imputAdultos = document.getElementById("adultos");
let imputCriancas = document.getElementById("criancas");
let imputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando....")

    let adultos = imputAdultos.value;
    let criancas = imputCriancas.value;
    let duracao = imputDuracao.value;

    let qtdTotalCarne = carnePPes(duracao) * adultos + (carnePPes(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPPes(duracao) * adultos;
    let qtdTotalBebidas = bebidasPPes(duracao) * adultos + (bebidasPPes(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne}g de Carne<p/>`
    resultado.innerHTML += `<p>${qtdTotalCerveja}ml de Cerveja<p/>`
    resultado.innerHTML += `<p>${qtdTotalBebidas}ml de Bebida<p/>`
}

function carnePPes(){
    if(duracao >= 6){
        return 650;
    } else{
        return 400;
    }
}

function cervejaPPes(){
    if(duracao >= 6){
        return 2000;
    } else{
        return 1200;
    }
}

function bebidasPPes(){
    if(duracao >= 6){
        return 1700;
    } else{
        return 1200;
    }
}