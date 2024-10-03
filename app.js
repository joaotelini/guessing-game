const input = document.getElementById("input");

const dicas = document.getElementById("dicas");

const tentativasHTML = document.getElementById("tentativas");

const status = document.getElementById("status")

const tentativasSalva = document.getElementById("tentativasSalva")

const pNumeroTentados = document.getElementById("pNumeroTentados")

let numeroSecreto = Math.floor(Math.random() * 1001)

let li = document.createElement("li")

// console.log(numeroSecreto)

let tentativas = 0

let tentativasArray = []

function getInput() {
  const valorInput = parseInt(input.value)

  if (isNaN(valorInput)) {
    return console.error("Erro")
  }

  tentativas += 1
  verificarAcerto(valorInput)
  limparInput()
}

function limparInput() {
  input.value = ""
}

function limparText() {
  dicas.innerHTML = ""
  tentativasHTML.innerHTML = ""
  status.innerHTML = ""
}

function resetGame() {
  numeroSecreto = Math.floor(Math.random() * 1001)
  tentativas = 0
  tentativasArray = []
  limparInput()
  limparText()
  pNumeroTentados.innerHTML = ""
  li.innerHTML = ""
  // console.log(numeroSecreto)
}

function verificarAcerto(valorInput) {
  tentativasArray.push(valorInput)

  if (valorInput === numeroSecreto) {
    limparText()
    status.innerHTML = "Parabens você acertou! Número de tentativas: " + tentativas
    pNumeroTentados.innerHTML = "Números tentados: "
    li.innerHTML = tentativasArray.join(", ")
    tentativasSalva.appendChild(li)
  } 
  else {
    if (valorInput > numeroSecreto) {
      dicas.innerHTML = "O número digitado é maior que o número secreto ⬆"
    } 
    
    else {
      dicas.innerHTML = "O número digitado é menor que o número secreto ⬇"
    }
  }
}
