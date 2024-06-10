//Variables iniciales
    let contador = 1;
    let numeroPensado = null;
    console.log(numeroPensado); 

//Primero capturo el número que el usuario ingresa
    const enterTextArea = document.querySelector("#numeroIngresado");

//Segundo capturo el elemento que recibirá respuesta
    const exitTextArea = document.querySelector(".salida");

//Tercero creo elemento donde aparecerá la respuesta
    const msj = document.createElement("p");

//Cuarto defino número de intentos
    const intentos = 10;


//Creo 4 funciones:    
    function nuevo_numero(){
        numeroPensado = Math.round(Math.random()*100);
        console.log(numeroPensado);
    }//function nuevo_numero: Amira piensa en un nuevo número. Entre 0 y 100.

    function mensaje(texto){
        msj.className="mensaje"
        msj.textContent=texto;
        exitTextArea.appendChild(msj);
    }//fin function mensaje: lógica para enviar mensajes al jugador.

    function iniciar(){
        document.getElementById('juegoActivo').style.display='block';
        nuevo_numero(); 
        contador=1;
        console.log(contador);
        enterTextArea.value="";
        if(exitTextArea.lenght!=0){
            exitTextArea.removeChild(msj);
        }
    }//fin function iniciar: reinicia los valores y activa un nuevo juego.

    function jugar(){
        
    /**/
            //parseo de valor ingresado a entero para poder compararlo con el numeroPensado
            let numeroLanzado = parseInt(enterTextArea.value);
            

            if(numeroPensado == numeroLanzado){
                document.getElementById('juegoActivo').style.display='none';
                const texto = `FELICITACIONES... era el ${numeroPensado}, has Acertado!!!!!! en el intento ${contador}.`;
                mensaje(texto);
                enterTextArea.value="";
                console.log(contador);  
                
            }else if(numeroPensado != numeroLanzado){
                
                if(contador==intentos){
                    document.getElementById('juegoActivo').style.display='none';
                    texto = `Lo siento... PERDISTE!!!!!! El número que pensé era ${numeroPensado}.`;
                    msj.style.color='black';
                    mensaje(texto);
                    enterTextArea.value=="";
                    console.log(contador);  
                    
                } 

                if(isNaN(numeroLanzado) | numeroLanzado>100 | numeroLanzado<0){
                        texto = "Wow, lee bien las instrucciones!!!!!! Has perdido un intento. Concentrate más y vuelve a intentarlo. Te quedan: "+(intentos-contador)+".";
                        mensaje(texto);
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
                            texto = "Lo siento, no adivinaste!!!!!! Pensé en un número menor. Concentrate más y vuelve a intentarlo. Te quedan: "+(intentos-contador)+".";
                            mensaje(texto);
                            contador++;
                            enterTextArea.value="";
                            console.log(contador);
                        } else{
                            texto = "Lo siento, no adivinaste!!!!!! Pensé en un número mayor. Concentrate más y vuelve a intentarlo. Te quedan: "+(intentos-contador)+".";
                            mensaje(texto);
                            contador++;
                            enterTextArea.value="";
                            console.log(contador);
                        }
                }
            }    
    } //fin function jugar: lógica del juego.       

    