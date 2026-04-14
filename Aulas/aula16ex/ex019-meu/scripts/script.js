var btn = document.querySelector('#btn')
var btn2 = document.querySelector('#btn2')

var rarray = [] // Real

btn.addEventListener('click', adicionar)
btn2.addEventListener('click', analisar)

function adicionar() {

    // Variáveis
    var txtnum = document.querySelector('#txtnum')
    var num = Number(txtnum.value)
    var p = document.querySelector('#p')
    var array = document.querySelector('#array') // Falso
    var varray = document.createElement('option') // Valor

    // Condições

    if (num <= 0) {
        window.alert('Insira um valor acima de 0!')
    } else if (num > 100) {
        window.alert('Insira um valor menor do que 101!')
    } else {
        // Array
        rarray.push(num)
        rarray.sort((a, b) => a - b) // Tava dando erro, coloquei a fórmula do VS Code e funcionou kkkk

        array.appendChild(varray)

        varray.innerHTML = `Valor ${num} foi adicionado.`
    }

    
}

function analisar() {
    var tarray = rarray.length // Tamanho
    var uarray = rarray[rarray.length - 1] // Último do array
    var sarray = 0 // Soma

    for (i = 0; i < rarray.length; i++) {
        sarray += rarray[i]
    }

    var marray = sarray / tarray

    p.innerHTML = `Ao todo, temos <strong>${tarray}</strong> números cadastrados. <br>
    O maior valor informado foi <strong>${uarray}</strong>. <br>
    A soma de todos os números é <strong>${sarray}</strong>. <br>
    A média dos valores digitados é <strong>${marray}. `
}