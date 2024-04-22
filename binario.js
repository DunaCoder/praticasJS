function binario(n) { // Función que convierte un número decimal (n) a binario
    // Declarar una lista vacía para almacenar los bits binarios
    let binario = [];
  
    // Variable para almacenar el cociente de la división por 2
    let cociente = n;
  
    // Bucle while para iterar hasta que el cociente sea 0
    while (cociente > 0) {
      // Calcular el residuo de la división por 2
      let resto = cociente % 2;
  
      // Agregar el residuo (0 o 1) al principio de la lista binario
      binario.unshift(resto); // "unshift" agrega al inicio de la lista
  
      // Calcular el nuevo cociente dividiendo por 2
      cociente = Math.floor(cociente / 2);
    }
  
    // Devolver la lista binario como cadena de caracteres
    return binario.join(""); // "join" convierte la lista en cadena
  }
  
  // Ejemplo de uso: convertir 23 a binario
  console.log(binario(23)); // Resultado: 10111
  