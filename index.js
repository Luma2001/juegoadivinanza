
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
                        alert("FELICITACIONES...era el "+ numeroPensado + ", has Acertado!!!!!! en el intento " + contador+".")
                        break;
                    }

                    if(numeroPensado != numeroLanzado){
                        alert("Lo siento, no adivinaste!!!!!! Concentrate más y vuelve a intentarlo")
                        contador++;
                    }                
        if(contador==4){
            alert("Lo siento, no adivinaste!!!!!! El número que pensé era "+ numeroPensado + ".")
        }
                
    }            
            
        

        /*imprimir("FIN");*/
}
/*
const exitTextArea = document.getElementsByClassName("areaRespuesta");
if(numeroPensado == numeroLanzado){
exitTextArea.value= "FELICITACIONES...has Acertado!!!!!! en el intento " + contador+".";
}
if(contador==4){
    exitTextArea.value="Lo siento, no adivinaste!!!!!! El número que pensé era "+ numeroPensado + ".";
}
*/