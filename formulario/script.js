const form = document.getElementById("form")
const usuario = document.getElementById("usuario")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const senha2 = document.getElementById("senha2")

form.addEventListener("submit", function(event){
    event.preventDefault()
    let  isValid =  ckeckEquired([usuario, email, senha, senha2])
    if (isValid){
        isValid = ckeckSize(usuario, 15,3) && isValid
        isValid = ckeckSize(senha, 15,3) && isValid
        isValid = ckeckPassoword(senha, senha2) && isValid


        if(isValid){
            const dados = { 
            usuarioNome: usuario.value,
            usuarioEmail: email.value,
            usuarioSenha: senha.value
            }
            console.log(JSON.stringify(dados))
            window.location.href = "./home.html"
    }
    }

    
})

function ckeckEquired(listaInput){
    let valido = true
    listaInput.forEach(function(input){
        if(input.value == ""){
            ShowError(input, "Campo Obrigatorio")
            valido = false
        }else{
            ShowSucesso(input)
        }
    });
    return valido
}

function ckeckSize(input, max, min){
    let valido = true
    if (input.value.length < min){
        ShowError(input, `minino ${min} caracteres`)
        valido = false
    }else if(input.value.length > max){
        ShowError(input, `máximo ${max} caracteres`)
        valido = false
    }
    return valido
}

function ckeckPassoword(senha, senha2){
    if(senha.value !== senha2.value){
        ShowError(senha2, "Senhas não são iguais")
        return false
    }
    return true
}

function ShowError(input, mensagem){
    const FormControl = input.parentElement
    FormControl.classList.add("erro")
    // FormControl.className = "form-control erro"
    const small = FormControl.querySelector("small")
    small.innerHTML = mensagem 
}

function ShowSucesso(input){
    const FormControl = input.parentElement
    FormControl.classList.add("sucesso")

}

