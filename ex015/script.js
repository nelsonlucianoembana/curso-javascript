function carregar (){
    var msg = document.getElementById("msg")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora  são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        document.body.style.background = "rgb(72, 75, 74)"
    } else if (hora >= 12 && hora <= 18) {
        document.body.style.background = "rgb(158, 158, 63)"
    } else {
        document.body.style.background = "rgb(34, 36, 36)"
    } 

}
