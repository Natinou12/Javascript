var btn = document.querySelector('#btn')

btn.addEventListener('click', calc)

function calc() {
    var num = document.querySelector('#num')
    var tab = document.querySelector('#tab')

    

    // Repetições

    for (d = 1; d <= 10; d++) {
        console.log(`${num} x ${d} = ${num * d}`)
    }
}