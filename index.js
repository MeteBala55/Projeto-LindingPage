var SetaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style ="display:none"
    Bruna.style ="display:flex"
    SetaDireita.style ="display:none"
    SetaEsquerda.style ="display:flex"
}

function RolarParaEsquerda() {
    Bruna.style ="display:none"
    leonardo.style ="display:flex"
    SetaEsquerda.style ="display:none"
    SetaDireita.style ="display:flax"
}