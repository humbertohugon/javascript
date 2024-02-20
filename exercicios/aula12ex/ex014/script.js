function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#FCE48E'
    } else {
        if (hora >= 12 && hora < 18) {
            // Boa Tarde
            img.src = 'fototarde.jpg'
            document.body.style.background = '#9E6749'
        } else {
            // Boa noite
            img.src = 'fotonoite.jpg'
            document.body.style.background = '#8264A0'
        }
    }
}

