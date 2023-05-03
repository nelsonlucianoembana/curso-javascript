function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert("[ERRO] Insira um ano e tente novamente!")
    } else {
        var fsex = document.getElementsByName("mf")
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada ${idade}`
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "criancam.png")
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "jovemm.png")
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "mjm.png")
            } else {
                //Idoso
                img.setAttribute("src", "velhote.png")
            }

        } else if (fsex[1].checked) {
            genero = "Mulher"
        }

        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute("src", "criancaf.png")
        } else if (idade < 21) {
            //Jovem
            img.setAttribute("src", "jovemf.png")
        } else if (idade < 50) {
            //Adulto
            img.setAttribute("src", "mjf.png")
        } else {
            //Idoso
            img.setAttribute("src", "velhota.png")
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}