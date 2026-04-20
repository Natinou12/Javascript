// Spread Operator, Destructuring

const usuarios = [
  {
    nome: "Rosé",
    idade: 21,
  },
  {
    nome: "Guilherme",
    idade: 16,
  },
  {
    nome: "Roberto",
    idade: 19,
  },
];

// Spread Operator
let usualt = usuarios.map(function (usuario) {
    if (usuario.nome === "Roberto") {
        return {...usuario, idade: 20}
    }
    return usuario
})


// Destructuring
const [{ nome: rNome}] = usuarios

console.log(rNome)