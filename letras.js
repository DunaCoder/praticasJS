function contarLetras(s){
   let  letras = 0
   for (let i = 0; i < s.length; i++) {
    letras++; // Incrementa el contador de letras en 1
  }
  
   return letras

    
}

let numerosLetra= contarLetras("esencia")

console.log(numerosLetra)