// Métodos, array de objetos

const frutas = [{
    nome: 'Maçã',
    cor: 'Vermelho',
    id: 0
}, {
    nome: 'Laranja',
    cor: 'Laranja',
    id: 1
}, {
    nome: 'Banana',
    cor: 'Amarelo',
    id: 2
}, {
    nome: 'Uva',
    cor: 'Roxo',
    id: 3
},]

// Pushes
frutas.push({nome: 'Pêra', cor: 'Verde', id: 4})
frutas.push({nome: 'Rocambole', cor: 'Amarelo', id: 5})

/*
const maiorID = frutas.reduce(function (maior, atual) {
    if (atual.id > maior.id) {
        return atual
    } else {
        return maior
    }
}, frutas[0])
/*

/* Splice
frutas.splice(1, 1)
*/

/* For Each
frutas.forEach(function (fruta){
    console.log(`Essa fruta é a ${fruta.nome}`)
})
*/

/* Map
const frutasNome = frutas.map(function (fruta) {
    return fruta.nome
})

const frutasCor = frutas.map(function (fruta) {
    return fruta.cor
})

console.log(`A cor da ${frutasNome} é${frutasCor}.`)
*/


/* Filter e Map
const corAmarelas = frutas.filter(function (fruta) {
    return fruta.cor === 'Amarelo'
})

const frutaAmarela = corAmarelas.map(function (fruta) {
    return fruta.nome
})
*/
/* Filter e Map
const corAmarelas = frutas.filter(function (fruta) {
    return fruta.cor === 'Amarelo'
})

const frutaAmarela = corAmarelas.map(function (fruta) {
    return fruta.nome
})
*/