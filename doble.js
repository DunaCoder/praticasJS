function maps(x){
    let duplicados = []
    for( let i = 0; i < x.length; i++){
        duplicados.push(x[i] * 2);
    }
    return duplicados
}

let arrayMap = maps([1, 2, 3])
console.log(arrayMap)