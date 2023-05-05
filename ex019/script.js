function contar() {
    let ini = document.getElementById("ini")
    let fim = document.getElementById("fim")
    let pas = document.getElementById("pas")
    let res = document.getElementById("res")
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert("[ERRO] Complete o campo para poder contar!")
    } else {
       res.innerHTML = "Contando..."
    }
}