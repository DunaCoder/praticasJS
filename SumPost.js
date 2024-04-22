const numeros = [1,-4,7,12]

function positiveSum(arr) {
    let suma = 0
    for(let i = 0; i <arr.length; i++ ){
        if (arr[i] > 0){
            suma+= arr[i]
        }
    }
    return suma
}

const total = positiveSum(numeros)
console.log(total)