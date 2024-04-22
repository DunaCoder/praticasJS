
const entrada = document.getElementById("entrada");


// Escuchar el evento submit del formulario
document.querySelector("form").addEventListener("submit", (event) => {
    // Prevenir que el formulario se envíe por defecto
    event.preventDefault();
  
    // Obtener el valor del input
    const valorEntrada = entrada.value;
  
    // Pasar el valor del input a la función
    numeros(valorEntrada);
  });
  
//uso un  parametro para  cada numero que ponga el usuario 
function numeros(lista){
  
    //este es un onjecto vacio donde que se llenara de los elementos
    let numeros = []
    //se crea se llena la lista con elemntos del 0 al numero que ponga el usaurio
    for(let i = 0 ; i <= lista; i++){
        numeros.push(i)
    } 
    console.log(numeros)
  
}


 // mi html
// <form onsubmit="event.preventDefault(),numeros()">
// <input type="number" id="entrada" >
// <input type="submit">
// </form>
