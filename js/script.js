var botaoNumero = document.querySelectorAll('.numeros')
let numeroAtual = ""
var numerosOP = 0

var operacao = document.querySelectorAll('.teclasOperacoes')
var display = document.querySelector('#display')
var resultado = document.querySelector('.teclaResultado')
var limparCalc = document.querySelector('.teclaLimpar')

botaoNumero.forEach(function (botaoN) {
    botaoN.addEventListener("click", function () {
        numeroAtual += botaoN.textContent
        display.textContent = numeroAtual
        numerosOP = Number(numeroAtual)
    })
})

operacao.forEach(function (botaoOP) {
    botaoOP.addEventListener("click", function () {
        operacao = botaoOP.textContent
        display.textContent = operacao
        numeroAtual = ""
        console.log(numerosOP)
    })
})