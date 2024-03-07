let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = []
let numeroMaximo =10;


console.log();

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {

        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos == 1 ? "vez" : 'veces' }`);
        console.log(numeroSecreto);
        document.getElementById('reiniciar').removeAttribute("disabled");

    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','el numero es menor');
        }else{
            asignarTextoElemento('p','el numero es mayor');
        }

        intentos++;
        limpiarCaja();
    
    }
    return;

}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = "";
    
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
   console.log(numeroGenerado);
   console.log(listaNumeroSorteado);
   //si ya solteamos todos los numeros 

   if(listaNumeroSorteado.length == numeroMaximo){
    asignarTextoElemento('p', 'ya se sotearon todos los numeros posible');

   }else{
    //si el numero generado esta incluido en la lista
    if(listaNumeroSorteado.includes(numeroGenerado)){
        return generarNumeroSecreto()

    }else{
    
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
   }
   
   

   

}

function condicionesIniciales(){

    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos= 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();