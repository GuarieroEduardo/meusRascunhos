var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function somarPares(a){
    var soma = 0
    for (let i = 0; i < a.length; i++ ){
        if (a[i] % 2 == 0){
            soma += a[i]
        }
    }
    return soma

}

console.log(`soma dos pares dos numemos [1, 10]: ${somarPares(a)}!`)
