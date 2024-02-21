function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verfique os dados e tente novamente!')
    } else {
        var fsex= document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                // Criança
                img.setAttribute('src','homemcrianca.jpg')
            } else if (idade <= 30) {
                // Jovem
                img.setAttribute('src','homemjovem.jpg')
            } else if (idade <= 60) {
                // Adulto
                img.setAttribute('src','homemadulto.jpg')
            } else {
                // Idoso
                img.setAttribute('src','homemidoso.jpg')
            }
            
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                // Criança
                img.setAttribute('src','mulhercrianca.jpg')
            } else if (idade <= 30) {
                // Jovem
                img.setAttribute('src','mulherjovem.jpg')
            } else if (idade <= 60) {
                // Adulto
                img.setAttribute('src','mulheradulta.jpg')
            } else {
                // Idoso
                img.setAttribute('src','mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}