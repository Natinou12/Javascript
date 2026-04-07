var btn = document.querySelector('#btn')
var cam = document.querySelector('#cam')

btn.addEventListener('click', passos)

function passos() {
    // Campos
    var ini = document.querySelector('#ini')
    var fim = document.querySelector('#fim')
    var pas = document.querySelector('#pas')
    // Valores dos campos
    var vini = Number(ini.value)
    var vfim = Number(fim.value)
    var vpas = Number(pas.value)
    // Repeats
    while (vini < vfim) {
        vini += vpas
    }
    cam.innerHTML = `${vini}`
}