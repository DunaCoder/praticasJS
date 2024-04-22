// Obtienes una serie de números y devuelves la suma de todos los positivos.

// Ejemplo [1,-4,7,12]=>1 + 7 + 12 = 20

// Nota: si no hay nada que sumar, la suma predeterminada es 0.

//mi funcion
function positiveSum(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        suma += arr[i];
      }
    }
    return suma;
  }
  
  const numbers = [1, -4, 7, 12];
  const resultado = positiveSum(numbers);
  console.log(`Suma: ${resultado}`); // Salida: 20

  
  // Función para calcular la suma de números positivos en un array
function positiveSum(arr) {

    // **Comentario:** Se imprime el array recibido (opcional)
    console.log(arr);
  
    // Variable para almacenar la suma acumulada
    let suma = 0;
  
    // Recorrido del array
    for (let i = 0; i < arr.length; i++) {
  
      // **Error:** La condición debería ser `arr[i] > 0` para solo sumar positivos.
      if (arr[i] >= 0) {
        suma += arr[i];
      } else {
        // **Comentario:** No es necesario imprimir un 0 aquí.
        // console.log(0);
      }
  
      // **Comentario:** Se imprime cada elemento del array (opcional)
      // console.log(arr[i]);
    }
  
    // Impresión de la suma final
    console.log(`Suma: ${suma}`);
  
    // Retorno de la suma
    return suma;
  }
  
  // Llamada a la función sin argumentos
  positiveSum();
  