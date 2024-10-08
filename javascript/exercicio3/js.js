var div = document.getElementById("meuId")
var click = document.getElementsByClassName("botao")
var nome = document.getElementsByClassName("nome")[0]
var senha = document.getElementsByClassName("senha")[0]
var entrada = document.createElement("div")

var login = {"usuario":'eduardin', "senha":"123456"}

click[0].addEventListener("click", function(){
    if (nome.value == login["usuario"] && senha.value == login["senha"]){
        entrada.innerHTML = "<p style='color: green;'>entrada permetida</p>"

        div.appendChild(entrada)
        
    }else{
        entrada.innerHTML = "<p style='color: red;'>usuario ou senha invalida</p>"
        div.appendChild(entrada)
    }
})