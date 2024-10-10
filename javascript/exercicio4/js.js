var painel = document.getElementById("menu")
var botao = document.getElementsByClassName("add")
var rev = document.getElementsByClassName("rmv")
var cont = 1
var x = 0


botao[0].addEventListener("click", function(){
    var entrada = document.getElementById("entrada")
    console.log(entrada.value)
    if (entrada.value != ""){
        var item = document.createElement("div")
        item.innerHTML = `<p><ul><li>item: ${cont}: ${entrada.value} <button class='rmv'>remover</button></li></ul></p>`
        painel.appendChild(item)    
        cont+=1
    }
    

    console.log(rev)
    rev[x].addEventListener("click", function(){
        painel.removeChild(item)
        x = x - 1
        
    })
    x +=1
    

})


