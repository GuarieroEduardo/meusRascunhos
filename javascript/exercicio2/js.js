var div = document.getElementById("id")
var botao = document.getElementsByClassName('botao')
var text = document.createElement("div")

var contar = 0 


botao[0].addEventListener('click', function(){
    text.innerHTML = "<p>clique: "+ `${contar}`+"</p>"
    div.appendChild(text)
    contar += 1

})