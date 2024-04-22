function stringToArray(string) {
    const array = [];
    let palabra = "";
    //un bulvce para recorer la variable texto
    for (let i = 0; i < string.length; i++) {
        //si el carater es un espacio en blanco se agrega la palabra actual 
      if (string[i] === " ") {
        array.push(palabra);
        palabra = "";
      } else {
        palabra += string[i];
      }
    }
  
    // Agregar la última palabra al array
    array.push(palabra);
  
    return array;
  }
  
  const texto = "I love arrays they are my favorite";
  const resultado = stringToArray(texto);
  
  console.log(resultado); 
  