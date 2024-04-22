function fizzBuzz(){
    //crear bucle for y imprirmir del 1 al 100 para probar recuerda el i++ al final
    for(let i = 1; i <100; i++){
        //usar if y else if primero recuerda usar % y == 0
        if(i % 5 == 0){
            //dicide primero por 5 0 3
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