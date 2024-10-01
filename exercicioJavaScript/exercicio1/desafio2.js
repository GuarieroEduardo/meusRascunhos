var arr1 = [1, 2, 3, 4, 5];
var arr2 = [5, 6, 7, 8, 9, 10];

function uniao(arr1, arr2) {
    var arr3 = arr1.concat(arr2); 

    for (let i = 0; i < arr3.length; i++) {
        for (let j = i + 1; j < arr3.length; j++) { 
            if (arr3[i] == arr3[j]) {
                arr3.splice(j, 1);  
                j = j - 1;  
            }
        }
    }
    return arr3;
}

console.log(uniao(arr1, arr2));
