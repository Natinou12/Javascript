window.addEventListener('load', carregar)

function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'imagens/manha.png'

        document.body.style.background = '#db9756'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = 'imagens/tarde.png'

        document.body.style.background = '#ebd6d6'
    } else {
        // Boa noite!
        img.src = 'imagens/noite.png'
        
        document.body.style.background = '#0b0f15'
    }
}
