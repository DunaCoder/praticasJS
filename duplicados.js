// Cuente el número de duplicados
// Escriba una función que devuelva el recuento de caracteres alfabéticos y dígitos numéricos distintos
// que no distinguen entre mayúsculas y minúsculas y que aparecen más de una vez en la cadena de entrada.
// Se puede suponer que la cadena de entrada contiene sólo
// alfabetos (tanto mayúsculas como minúsculas) y dígitos numéricos

// Ejemplo
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibilidad" -> 1 # 'i' occurs six times
// "Indivisibilidades" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice



function duplicateCount(text) {
  // Convertimos la cadena en un array
  text = text.split('');

  // Creamos un objeto para almacenar las letras y su frecuencia
  let letras = {};
  for (let i = 0; i < text.length; i++) {
    if (letras[text[i]] === undefined) {
      letras[text[i]] = 1;
    } else {
      letras[text[i]]++;
    }
  }

  // Contamos el número de letras que se repiten más de una vez
  let hayRepeticiones = 0;
  for (const letra in letras) {
    if (letras[letra] > 1) {
      hayRepeticiones++;
       // Mostramos el resultado
  if (!hayRepeticiones) {
    console.log(`0 # no characters repeats more than once`);
  } else {
    console.log(`${hayRepeticiones} # character "${letra}" repeats ${letras[letra]} times`);
  }
    }
  }
}

// Ejemplo de uso
const texto = "abcde";
duplicateCount(texto);

  // duplicateCount()