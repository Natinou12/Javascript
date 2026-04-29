// .find e Arrow functions

const usuarios = [
    {
        nome: "Lucas"
    }, 
    {
        nome: "Joana"
    }, 
    {
        nome: "Pedro"
    }
]

// Jeito legal

// const usuario = usuarios.find((usuario) => usuario.nome === "Joana")

// console.log(usuario)

// Jeito nada haver

// let nome = "José"

// const usuario = usuarios.find(function (usuario) {
//     return usuario.nome === nome
// })

// if (usuario) {
//     console.log(`Usuário ${usuario.nome} foi encontrado.`)
// } else {
//     console.log(`Usuário não foi encontrado.`)
// }

// Jeito chato

// function buscar(nome) {
//     const unome = []

//     for ( let i = 0; i < usuarios.length; i++) {
//         unome.push(usuarios[i].nome)
//     }

//     if (unome.indexOf(nome) !== -1) {
//         console.log(`Usuário ${nome} foi encontrado.`)
//     } else {
//         console.log(`Usuário ${nome} não foi encontrado.`)
//     }
// }

// buscar("")