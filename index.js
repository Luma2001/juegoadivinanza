
//funciones

function saltarLinea(){
  document.write.respuesta("<br><br>");
}

function imprimir(frase){
  
  document.write("<big>" + frase + "</big>");
   saltarLinea();
}



function jugar(){
/**/
    const numeroPensado = Math.round(Math.random()*10);
    const intentos = 3;
    let contador = 1; 

        while(contador<=intentos){

                    let numeroLanzado = parseInt(prompt("Ingrese un número entre 0-10"));

                    if(numeroPensado == numeroLanzado){
                        alert("FELICITACIONES...has Acertado!!!!!! en el intento " + contador+".")
                        break;
                    }

                    if(numeroPensado != numeroLanzado){
                        alert("Lo siento, no adivinaste!!!!!!")
                        contador++;
                    }                
        if(contador==4){
            alert("Lo siento, no adivinaste!!!!!! El número que pensé era "+ numeroPensado + ".")
        }
                
    }            
            
        

        /*imprimir("FIN");*/
}
