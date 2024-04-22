const numeros = [42, 54, 65, 87, 0]  

var min = function(list){
    let minimo = list[0];
    for (let i = 0; i < list.length; i++) {
      if (list[i] < minimo) {
        minimo = list[i];
      }
    }
    return minimo; 
}


var max = function(list) {
    let maximo = list[0];
    for (let i = 0; i < list.length; i++) {
      if (list[i] > maximo) {
        maximo = list[i];
      }
    }
    return maximo; 
  };
  
let resultadoMax = max(numeros)
let resultadoMin = min(numeros)

console.log("El número más grande es:", resultadoMax);
console.log("El número más pequeño es:", resultadoMin);

  