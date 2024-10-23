const form = document.getElementById("card2");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let isValid = checkRequired([usuario, senha]);
    if (isValid) {
        isValid = checkSize(usuario, 15, 4) && isValid;
        isValid = checkSize(senha, 15, 4) && isValid;

        if (isValid) {
            const dados = { 
                usuarioNome: usuario.value,
                usuarioSenha: senha.value
            };
            console.log(JSON.stringify(dados));
            window.location.href = "home.html";
        }
    }
});

function checkRequired(listaInput) {
    let valido = true;
    listaInput.forEach(function(input) {
        if (input.value.trim() === "") {
            showError(input, "Campo obrigatório");
            valido = false;
        } else {
            showSuccess(input);
        }
    });
    return valido;
}

function checkSize(input, max, min) {
    if (input.value.length < min) {
        showError(input, `Mínimo de ${min} caracteres`);
        return false;
    } else if (input.value.length > max) {
        showError(input, `Máximo de ${max} caracteres`);
        return false;
    }
    return true;
}

function showError(input, mensagem) {
    const formControl = input.parentElement;
    formControl.classList.add("erro");
    const small = formControl.querySelector("small");
    small.innerHTML = mensagem;
    small.style.visibility = "visible";  
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove("erro");
    formControl.classList.add("sucesso");
    const small = formControl.querySelector("small");
    small.style.visibility = "hidden";  
}
