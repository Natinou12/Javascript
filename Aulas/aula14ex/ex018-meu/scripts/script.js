var btn = document.querySelector('#btn')

btn.addEventListener('click', calc)

function calc() {
    var num = document.querySelector('#num')
    var tab = document.querySelector('#tab')

    // Valores

    var vnum = Number(num.value)

    // Limpar

    tab.innerHTML = ''

    // Repetições

    for ( var d = 1; d <= 10; d++) {
        tab.innerHTML += `${vnum} x ${d} = ${vnum * d} <br>`
    }
}

// Esse foi realmente mais fácil!