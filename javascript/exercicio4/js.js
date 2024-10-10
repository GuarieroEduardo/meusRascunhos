var painel = document.getElementById("menu")
var botao = document.getElementsByClassName("add")
var rev = document.getElementsByClassName("rmv")
var cont = 1

botao[0].addEventListener("click", function(){
    var entrada = document.getElementsByClassName("entrada")
    var item = document.createElement("div")
    item.innerHTML = `<div>item ${cont}: ${entrada.value} <button class='rmv'>remover</button>`
    painel.appendChild(item)    
    cont+=1
    

})

rev.addEventListener("click", function(){
    item.remove()
})
