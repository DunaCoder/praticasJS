// if(5 % 3 == 0){
//     console.log("Sí es múltiplo de 3")
//    } else{
//     console.log("No es multiplo de 3")
//    }

// //    function compararNúmeros(){
// //     for(let númeroAComparar = 1; númeroAComparar <= 100; númeroAComparar++){
// //      if(númeroAComparar % 3 == 0 && númeroAComparar % 5){
// //       console.log(`${númeroAComparar} FizzBuzz`)
// //      }
// //     }
// //    }
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else if (i % 15 === 0) {
//       console.log("FizzBuzz");
//     } else {
//       console.log(i);
//     }
//   }
  



function fizzBuzz(){
    //crear bucle for y imprirmir del 1 al 100 para probar recuerda el i++ al final
    for(let i = 1; i <100; i++){
        //usar if y else if primero recuerda usar % y == 0
        if(i % 5 == 0){
            //dicide priemro por 5 0 3
            console.log("Buzz")
            //copia y pega con el pirmer if
        } else if(i % 3 == 0){
            console.log("Fizz")
        }else{
            //else y listo.
            console.log("FizzBuzz")
        }
    }
}

fizzBuzz()
function fizzBuzz(){
        for(let i = 1; i <101; i++){
            if(i % 5 == 0){
                console.log("Buzz")
            } else if(i % 3 == 0){
                console.log("Fizz")
            }else{
                console.log("FizzBuzz")
            }
        }
    }
    
    fizzBuzz()

