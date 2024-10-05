var div = document.getElementById("meuId")
var botao = document.getElementsByClassName('Button')
var text = document.createElement("div")


var mostrar = 0
if (mostrar == 0){
    botao[0].addEventListener('click', function(){
        text.innerHTML = "<p>eu tentei</p>"
        div.appendChild(text)
        mostrar +=1
    })
}
if (mostrar == 1){
    botao[0].addEventListener('click', function(){
        div.remove(text)
        mostrar -=1
    })
}
