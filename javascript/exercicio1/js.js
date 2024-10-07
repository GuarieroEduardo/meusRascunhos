var div = document.getElementById("meuId")
var botao = document.getElementsByClassName('Button')
var text = document.createElement("div")

var mostrar = 0

botao[0].addEventListener('click', function(){
    if (mostrar == 0){
        text.innerHTML = "<p>eu tentei</p>"
        div.appendChild(text)
        mostrar = 1
    }else{
        text.remove()
        mostrar = 0
    }

})