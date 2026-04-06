var btn = document.querySelector('#btn')

btn.addEventListener('click', verificar)

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')
        img.style.display = 'block'
        img.style.margin = 'auto'

        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 13) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-m.jpg')
            } else if (idade >= 13 && idade < 18) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if (idade >= 18 && idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            } else if (idade >= 60) {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }
            } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 13) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-f.jpg')
            } else if (idade >= 13 && idade < 18) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            } else if (idade >= 18 && idade < 60) {
                // Adulta
                img.setAttribute('src', 'imagens/adulta-f.jpg')
            } else if (idade >= 60) {
                // Idosa
                img.setAttribute('src', 'imagens/idosa-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}