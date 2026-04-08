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

    // Limpador do texto
    cam.innerHTML = ''
    cam.innerHTML = 'Caminho: <br>'

    // Condições

    if (vpas <= 0) {
        window.alert('[ERRO] Impossível contar! Considerando PASSO = 1.')
        vpas = 1
    }

    if (vini === '' || vfim === '') {
        cam.innerHTML = 'Impossível contar!'
    }

    if (vfim <= vini) {
        window.alert('[ERRO] Insira um valor válido!')
        cam.innerHTML = 'Insira os números...'
    } else {
        for (res = vini; res <= vfim; res+= vpas) {
        console.log(res) // Apenas para debuggar.
        cam.innerHTML += ` ${res} 👉 ` // Eu tenho raiva de você.
        }
        cam.innerHTML += `🏁`
    }
}

// Uhh eu queria falar que esse código deu certo então é ele que vai permanecer.