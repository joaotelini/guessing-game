const input = document.getElementById('input')

const dicas = document.getElementById('dicas')

const tentativasHTML = document.getElementById('tentativas')

const status = document.getElementById('status')

let numeroSecreto = Math.floor(Math.random() * 1001)

console.log(numeroSecreto)

let tentativas = 0

function getInput() {
  // Converte o valor do input (object) para um número (number)
  const valorInput = parseInt(input.value)

  if (isNaN(valorInput)) {
    return console.error('Erro')

  }
  console.log("Você digitou: " + valorInput)
  tentativas += 1
  verificarAcerto(valorInput)
  limparInput()
}

function limparInput() {
  input.value = ""
}

function limparText() {
  dicas.innerHTML = ""
  tentativasHTML.innerHTML= ""
  status.innerHTML = ""
}

function verificarAcerto(valorInput) {
  if (valorInput === numeroSecreto) {
    limparText()
    status.innerHTML = 'Parabens você acertou! Numero de tentativas: ' + tentativas
    let recom = document.getElementsByTagName('body')
    recom.innerHTML = '<button>3</button>'
  } else {
    tentativasHTML.innerHTML = 'Voce errou! Número de tentativas: ' + tentativas
    if (valorInput > numeroSecreto) {
      dicas.innerHTML = "O número digitado é maior que o número secreto"
    }
    else {
      dicas.innerHTML = "O número digitado é menor que o número secreto"
    }
  }
}