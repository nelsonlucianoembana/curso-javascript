var agora = new Date()
var hora = agora.getHours()
console.log(`São ${hora} horas`)
if (hora <= 11 ) {
    console.log("Bom dia")
} else if (hora >= 12 && hora <= 18) {
    console.log("Boa tarde")
} else {
    console.log("Boa noite")
}