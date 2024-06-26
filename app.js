let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroSeleccionado = parseFloat(document.getElementById('numeroSeleccionado').value);
    if(numeroSecreto === numeroSeleccionado){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else{
        if(numeroSeleccionado > numeroSecreto){
            asignarTextoElemento('p', "El número secreto es menor");
        } else{
            asignarTextoElemento('p', "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja(){
    document.querySelector('#numeroSeleccionado').value = '';
}
function generarNumeroAleatorio(){
    let numeroSorteado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', "Ya se sortearon todos los números posibles");
    } else{
        if (listaNumerosSorteados.includes(numeroSorteado)){
            return generarNumeroAleatorio();
        } else{
            listaNumerosSorteados.push(numeroSorteado);
            return numeroSorteado;
        }    
    }
}
function condicionesGenerales(){
    asignarTextoElemento('h1', "Juego del número secreto");
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroAleatorio();
}
function reiniciarJuego(){
    // limpiar caja
    limpiarCaja();

    // Indicar mensaje de intervalo de numeros
    // Generar el numero aleatorio
    // Inicializar el numero de intentos
    condicionesGenerales();

    // Y bloquear el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesGenerales();
