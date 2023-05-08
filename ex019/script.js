function contar() {
    let ini = document.getElementById("ini")
    let fim = document.getElementById("fim")
    let pas = document.getElementById("pas")
    let res = document.getElementById("res")
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert("[ERRO] Complete o campo para poder contar!")
    } else {
       res.innerHTML = "Contando:"
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(pas.value)
       if (i < f) {
        //contagem crescente
        for (let c = 1; c <= f; c += p ) {
        res.innerHTML += ` ${c} ` 
       }

       } else {
         //contagem regressiva
        for (let c = 1; c >= f; c -= p){
         res.innerHTML += ` ${c}`
        }
      
       }
        res.innerHTML += "<strong>Fim</strong>"
    }
}