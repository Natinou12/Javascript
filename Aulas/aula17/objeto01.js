let amigo = {
    nome: 'José', 
    sexo: 'M', 
    peso: 85.4, 
    engordar(p=0) {
       this.peso += p
       
       return this.peso
    }}

let pesoNovo = amigo.engordar(10)

console.log(`${amigo.nome} pesa ${pesoNovo}Kg`)

if (pesoNovo > 0) {
  console.log("Engordou!")
}

// Só alterei por nada mesmo