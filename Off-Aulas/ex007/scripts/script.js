async function pokemon() {
    try {

        // DOM

        const pokenome = document.querySelector('#pokenome').value.toLowerCase()
        const img = document.querySelector('#img')

        // API

        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokenome}`)
        const verificacao = (pokemon) => {

            if(!pokemon.ok) {
                throw new Error("O pokémon não foi encontrado.")
            }
            return pokemon.json()

        }

        const resultado = await verificacao(pokemon)

        const pokeSprite = resultado.sprites.front_default
        img.src = pokeSprite
        img.style.display = 'block'

    }

    catch(error) {
        console.error(error)
    }
}

function clicou() {
    pokemon()
}











/* "Async" intermediário

const andou = true
const piscou = true
const respirou = true

const acoes = () => (andou === true && piscou === true && respirou === true) ? console.log(`Você realizou as três ações.`) : console.log(`Você não realizou as três ações.`)

async function resultado() {
    try {
        const acoesRes = await acoes()
    }
    catch(erro) {
        console.log(erro)
    }
}

resultado()

*/

/* "Async" básico

const soma = (n1, n2) => {
    let somaRes = n1 + n2; 
    return somaRes
}

async function somaRes() {
    const somaRes = await soma()
    console.log(soma(3, 5))
}

somaRes()

*/