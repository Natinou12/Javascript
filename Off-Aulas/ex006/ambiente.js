// Classes, achei fácil até.

class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    mostrarProduto() {
        console.log(`Essa ${this.nome} custa R$${this.preco}.`)
    }

    calcularTotal(taxa) {
        return this.preco + (this.preco * taxa) // Preço + Taxa
    }
}

const taxa = 0.03

const produto1 = new Produto("camisa", 20.99)
const produto2 = new Produto("calça", 15)

produto1.mostrarProduto()

const total = produto1.calcularTotal(taxa)

console.log(`Preço final (com taxa) é de R$${total.toFixed(2)}.`)