
let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('result');

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdCerveja = cervejaPP(duracao) * adultos;
    let qtdBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<div class="carne"><img src="./images/meat.png" alt="meat" class="icons"><p>${qtdCarne/1000}Kg de Carne 🥩🍗</p></div>`;
    resultado.innerHTML += `<div class="cerveja"> <img src="./images/beer.png" alt="meat" class="icons"><p>${Math.ceil(qtdCerveja/355)} latas de Cerveja 🍻 </p></div>`;
    resultado.innerHTML += `<div class="bebidas"><img src="./images/drinks.png" alt="meat" class="icons"><p>${qtdBebidas/1000}L de Bebidas 🥤</p></div>`;
}
function carnePP(duracao){
    if (duracao >= 6){
        return 600;
    } else {
        return 400;
    }
}
function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}
function bebidasPP(duracao){
    if (duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}