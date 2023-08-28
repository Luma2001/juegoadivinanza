//Primero capturo el numero que el usuario ingresa
const enterTextArea = document.querySelector(".numeroIngresado");

//segundo captura el elemento que recibirá respuesta
const exitTextArea = document.querySelector(".areaRespuesta");



function jugar(){
    const intentos = 3;
    let contador = 1; 


    /**/
    const numeroPensado = Math.round(Math.random()*10);
            
    while(contador<=intentos){

                let numeroLanzado = parseInt(enterTextArea.value);
                let respPositiva = "FELICITACIONES...has Acertado!!!!!! en el intento " + contador+".";
                if(numeroPensado == numeroLanzado){
                    exitTextArea.value = respPositiva;
                    break;
                }

                if(numeroPensado != numeroLanzado){
                    exitTextArea.value = "Lo siento, no adivinaste!!!!!! Concentrate más y vuelve a intentarlo";
                    contador++;
                }                
    if(contador==4){
        let respNegativa = "Lo siento, no adivinaste!!!!!! El número que pensé era "+ numeroPensado + ".";
        exitTextArea.value = respNegativa;
    }
            
}
document.write(exitTextArea.value)
return ;

}
                
                
      