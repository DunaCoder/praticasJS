function repeatStr(n, s) {
    //aqui se gurada el total en string
    let total = "";
  
    for (let i = 0; i < n; i++) {
      total += s;
    }
  
    return total;
  }
  
  const numero = 3;
  const texto = "Gato";
  
  const total = repeatStr(numero, texto);
  console.log(total); 
  