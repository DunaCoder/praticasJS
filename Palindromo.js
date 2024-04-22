function isPalindrome(x) {
    let palabra = x
   
    // Convertir a minúsculas
  palabra = palabra.toLowerCase();

  // Eliminar espacios en blanco
  palabra = palabra.trim();

    let invertido = ""
    for(let i = x.length -1; i>=0; i--){
        invertido += palabra[i]
    }
    if(invertido === palabra){
        return true
    } else{
        return false
    }

  }


  const texto = isPalindrome("BobA")

console.log(texto)

// 1. Eliminar espacios en blanco y convertir la palabra a minúsculas.
// 2. Invertir el orden de los caracteres de la palabra.
// 3. Comparar la palabra original con la palabra invertida.
// 4. Si las palabras son iguales, la palabra original es un palindromo.
// 5. Si las palabras no son iguales, la palabra original no es un palindromo.