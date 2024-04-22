function fibonacci(){
    let limite = 15
    let n1 = 0
    let n2 = 1
    let S = n1 + n2
    while(S<limite){
        n1 = n2
        n2 = S 
        S = n1 + n2
        console.log(S)
    }
    
}

fibonacci()