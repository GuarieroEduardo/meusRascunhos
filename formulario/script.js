const form = document.getElementById("form")
const usuario = document.getElementById("usuario")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const senha2 = document.getElementById("senha2")

form.addEventListener("submit", function(event){
    event.preventDefault()

    ckeckEquired([usuario, email, senha, senha2])
})

function ckeckEquired(listaInput){
    listaInput.forEach(function(input){
        if(input.value == ""){
            ShowError(input, "Campo Obrigatorio")
        }
    });
}

function ShowError(input, mensagem){
    const FormControl = input.parentElement
    FormControl.className = "form-control erro"
    const small = FormControl.querySelector("small")
    small.innerHTML = mensagem 
}