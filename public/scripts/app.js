
let contador = 1;
let numeroPensado = null;
console.log(numeroPensado); 

//Primero capturo el número que el usuario ingresa
    const enterTextArea = document.querySelector("#numeroIngresado");

//segundo capturo el elemento que recibirá respuesta
    const exitTextArea = document.querySelector(".areaRespuesta");

//Defino número de intentos
    const intentos = 10;

//Creo 3 funciones:    
    function nuevo_numero(){
        numeroPensado = Math.round(Math.random()*100);
        console.log(numeroPensado);
    }//function nuevo_numero: Amira piensa en un nuevo número. Entre 0 y 100

    function iniciar(){
        document.getElementById('juegoActivo').style.display='block';
        nuevo_numero(); 
        contador=1;
        console.log(contador);
        enterTextArea.value="";
        exitTextArea.value ="";
    }//fin function iniciar: reinicia los valores y activa un nuevo juego.

    function jugar(){
        
    /**/
            //parseo de valor ingresado a entero para poder compararlo con el numeroPensado
            let numeroLanzado = parseInt(enterTextArea.value);
            

            if(numeroPensado == numeroLanzado){
                document.getElementById('juegoActivo').style.display='none';
                exitTextArea.value = `FELICITACIONES...era el ${numeroPensado}, has Acertado!!!!!! en el intento ${contador}.`;
                enterTextArea.value="";
                console.log(contador);  
                
            }else if(numeroPensado != numeroLanzado){
                
                if(contador==intentos){
                    document.getElementById('juegoActivo').style.display='none';
                    exitTextArea.value = `Lo siento... PERDISTE!!!!!! El número que pensé era ${numeroPensado}.`;
                    exitTextArea.style.color='black';
                    enterTextArea.value=="";
                    console.log(contador);  
                    
                } 

                if(isNaN(numeroLanzado) | numeroLanzado>100 | numeroLanzado<0){
                        exitTextArea.value = "Wow, lee bien las instrucciones!!!!!! Has perdido un intento. Concentrate más y vuelve a intentarlo. Te quedan: "+(intentos-contador)+".";
                        contador++;
                        enterTextArea.value="";
                        console.log(contador);
                }else{

                    
                    /*
                    //primera versión del juego sin pistas
                    exitTextArea.value = "Lo siento, no adivinaste!!!!!! Concentrate más y vuelve a intentarlo. Te quedan: "+(intentos-contador)+".";
                    contador++;
                    enterTextArea.value="";
                    console.log(contador);
                    */

                //Se agrega las pistas
                        if(numeroPensado<numeroLanzado){
                            exitTextArea.value = "Lo siento, no adivinaste!!!!!! Pensé en un número menor. Concentrate más y vuelve a intentarlo. Te quedan: "+(intentos-contador)+".";
                            contador++;
                            enterTextArea.value="";
                            console.log(contador);
                        } else{
                            exitTextArea.value = "Lo siento, no adivinaste!!!!!! Pensé en un número mayor. Concentrate más y vuelve a intentarlo. Te quedan: "+(intentos-contador)+".";
                            contador++;
                            enterTextArea.value="";
                            console.log(contador);
                        }
                }
            }    
    } //fin function jugar: lógica del juego       