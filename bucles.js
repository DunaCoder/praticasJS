for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }

  for (let i = 0; i < array.length; i++) {
    // Código para procesar el elemento actual del array
    console.log(array[i]);
  }

  for (const elemento of array) {
    // Código para procesar el elemento actual del array
    console.log(elemento);
  }

  
  // Definimos la lista
const lista = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4"];

// Recorremos la lista con un bucle for
for (let i = 0; i < lista.length; i++) {
  // Accedemos al elemento actual de la lista
  const elementoActual = lista[i];

  // Imprimimos el elemento actual
  console.log(elementoActual);
}

let numero;

do {
  numero = parseInt(prompt("Introduzca un número positivo: "));
} while (numero <= 0);

console.log("El número introducido es:", numero);

let cara = false;
let tiradas = 0;

while (!cara) {
  tiradas++;
  cara = Math.random() >= 0.5;
}

console.log("Salieron", tiradas, "tiradas para obtener cara");

let opcion;

do {
  opcion = prompt(
    "Elija una opción:\n1. Ver lista de tareas\n2. Agregar tarea\n3. Eliminar tarea\n4. Salir"
  );

  switch (opcion) {
    case "1":
      // Mostrar lista de tareas
      break;
    case "2":
      // Agregar tarea
      break;
    case "3":
      // Eliminar tarea
      break;
    case "4":
      console.log("¡Hasta pronto!");
      break;
    default:
      console.log("Opción no válida");
  }
} while (opcion !== "4");

