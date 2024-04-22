const lista = [0,1,2,3,3,4,4,5,6,7,7,7,7,7,7,8,9,10,10]

function moda(numeros) {


  let repiticiones = 0;
  let moda = numeros[0];
  let repiticionesActual = 0;

  for (let i = 0; i < numeros.length; i++) {
    // compara cada número de la lista con el número actual.
    for (const numero of numeros) {
      if (numero === numeros[i]) {
        //Si el número actual es igual a otro número de la lista, se incrementa la variable
        repiticionesActual++;
      }
    }
    //aqui se actualiza la variable moda
    if (repiticionesActual > repiticiones){
      moda = numeros[i];
      repiticiones = repiticionesActual;
    }

    repiticionesActual = 0;
  }

  console.log(`El número que más se repite es: ${moda}`);
}

moda(lista);
