const numeros = [1,2,3,4,5,6,7,8,9,10];

function fakeBin(x) {
  let resultado = "";
  for (let i = 0; i < x.length; i++) {
    // Accedemos al elemento actual de la lista
    const lista = x[i];

    // Comparamos el elemento actual con 5
    if (lista < 5) {
      resultado += "0";
    } else {
      resultado += "1";
    }
  }
  return resultado;
}

const resultado = fakeBin(numeros);
console.log(resultado); 
