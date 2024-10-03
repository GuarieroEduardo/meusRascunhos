let dataNascimento = new Date("2000/01/01")
let dataAtual = new Date()

function contadorDeIdades(dataNascimento){
    let idade = 0
    if (dataAtual.getFullYear() >= dataNascimento.getFullYear()){
        idade = idade + (dataAtual.getFullYear() - dataNascimento.getFullYear())
    }
    if (dataAtual.getMonth()<dataNascimento.getMonth()){
        idade -=1

    }
    if (dataAtual.getDate()<dataNascimento.getDate()){ 
        idade -= 1

    }
    return idade
    
}

console.log(`Idade do usuário: ${contadorDeIdades(dataNascimento)}`)