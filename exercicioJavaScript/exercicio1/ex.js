var arr1 = [1, 2, 3, 4 , 5]
var arr2 = [5, 6, 7 ,8, 9, 10]
var arr3 = []

function interseccao(arr1, arr2){
    var arr3 = []
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] in arr3){
            arr3.push(arr1[i])
        }

    }
    for (let j = 0; j < arr2.length; j++){
        if (arr2[j] in arr3){
            arr3.push(arr2[j])
        }

    }
    return arr3
} 

console.log(interseccao(arr1, arr2))