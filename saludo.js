function greet(name, owner) {
    //
  if (name === jefe) {
    //poner el return
    return 'Hello boss';
  } else {
    return name === owner ? 'Hello boss' : 'Hello guest'; 
  }
}

const jefe = "jorge";

const saludo = greet("jorge", jefe); // Llama a la función con ambos parámetros
console.log(saludo); // Salida: Hello boss
