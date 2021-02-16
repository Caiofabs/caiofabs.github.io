
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

    resultado.innerHTML = `<p>${qtdCarne/1000}Kg de Carne 🥩🍗</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdCerveja/355)} latas de Cerveja 🍻 </p>`;
    resultado.innerHTML += `<p>${qtdBebidas/1000}L de Bebidas 🥤</p>`;
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