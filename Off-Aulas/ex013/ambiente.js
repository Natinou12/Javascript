const num = ["zero", "um", "dois", "três", "quatro", "cinco"]

let resposta = Number(prompt("Escolha um número [0 a 5]:"))

handleNum(resposta)

function handleNum (n) {
  if (n > 5 || isNaN(n) || n < 0 ) {
    console.error("Insira um valor válido")
  } else {
    console.log(`Seu número por extenso é: ${num[n]}`)
  }
}