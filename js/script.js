var botaoNumero = document.querySelectorAll('.numeros')
let numeroAtual = ""
let numeros = []
let operacaoSelecionada = ""

var botoesOperacao = document.querySelectorAll('.teclasOperacoes')
var display = document.querySelector('#display')
var resultado = document.querySelector('.teclaResultado')
var limparCalc = document.querySelector('.teclaLimpar')

const operacoesFunc = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "x": (a, b) => a * b,
    "/": (a, b) => a / b
};

botaoNumero.forEach(function (botaoN) {
    botaoN.addEventListener("click", function () {
        numeroAtual += botaoN.textContent
        display.textContent = numeroAtual
    })
})

botoesOperacao.forEach(function (botaoOP) {
    botaoOP.addEventListener("click", function () {
        if (numeroAtual !== "") {
            numeros.push(Number(numeroAtual))
        }

        operacaoSelecionada = botaoOP.textContent
        numeroAtual = ""
        display.textContent = operacaoSelecionada
    })
})

resultado.addEventListener("click", function () {
    if (numeroAtual !== "") {
        numeros.push(Number(numeroAtual))
    }

    if (!operacoesFunc[operacaoSelecionada]) {
        display.textContent = "[Erro] ao fazer o calculo!"
        return
    }

    if (numeros.length === 0) {
        display.textContent = "[Erro] Nenhum número para calcular!"
        return
    }

    if (numeros.length === 1) {
        display.textContent = numeros[0]
        numeroAtual = ""
        numeros = []
        operacaoSelecionada = ""
        return
    }

    let operacao = operacoesFunc[operacaoSelecionada];

    let primeiroNumero = numeros[0]
    let restoNumeros = numeros.slice(1)

    let resultadoFinal = restoNumeros.reduce(function(acc, val) {
        return operacao(acc, val)
    }, primeiroNumero)

    display.textContent = resultadoFinal
})

function limparTudo() {
    numeroAtual = ""
    numeros = []
    operacaoSelecionada = ""
    display.textContent = "0"
}

limparCalc.addEventListener("click", limparTudo)