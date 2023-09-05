
let contador = 1;

function jugar(){
    //Primero capturo el numero que el usuario ingresa
    const enterTextArea = document.querySelector("#numeroIngresado");

    //segundo captura el elemento que recibirá respuesta
    const exitTextArea = document.querySelector(".areaRespuesta");
    const intentos = 3;
     


    
    const numeroPensado = Math.round(Math.random()*10);
           

    let numeroLanzado = parseInt(enterTextArea.value);
     

   /**/
    if(numeroPensado == numeroLanzado){
        exitTextArea.value = "FELICITACIONES...era el "+ numeroPensado + ", has Acertado!!!!!! en el intento " + contador+".";
        contador=1;
    }

    if(numeroPensado != numeroLanzado){
        exitTextArea.value = "Lo siento, no adivinaste!!!!!! Concentrate más y vuelve a intentarlo. Te quedan: "+(3-contador)+".";
        
        if(contador==3){
           exitTextArea.value = "Lo siento, no adivinaste!!!!!! El número que pensé era "+ numeroPensado + ".";
            contador=1;
        }
    }   

    contador++;
            



}
                
                
    /*
      <input type="text" id="country_code" name="country_code"
  pattern="[A-Za-z]{3}" title="Three letter country code">
    
  */