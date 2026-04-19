// Uso do "this" e "const"

const pessoa1 = {
    nome: 'Rodrigo',
    sobrenome: 'Faro',
    digaOi: function() {
        console.log(`Oi, meu nome é ${this.nome}, e meu sobrenome é ${this.sobrenome}.`)
    }
}

pessoa1.digaOi()

// Deixando claro essas pastas não possuem correlação com o CursoemVídeo, sendo essa seção uma parte de coisas que EU aprendi.