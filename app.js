let numero_secreto = 0;
let intentos = 0;
let lista_generados = [];
let numero_Maximo = 10;

function condicionesInicio(){
    numero_secreto = generarNumeroSecreto();
    intentos = 1;
    asignarTextoElemento('h1', 'Juego del numero Secreto');
    asignarTextoElemento('p', 'Indica un numero del 1 al ' + numero_Maximo + ' manito');
}

function limpiar(){
    document.getElementById('ValorUsuario').value = '';
}




function asignarTextoElemento(elemento, texto) {
    let elemento_HTML = document.querySelector(elemento);
    elemento_HTML.innerHTML = texto;
    return;
}

function verificarIntento () {
    let numero_usuario = parseInt(document.getElementById('ValorUsuario').value);
    if (numero_usuario == numero_secreto){
        asignarTextoElemento('p', 'Acertaste el numero canijito jeje, en tan solo = ' + intentos +  (intentos === 1 ? ' vez' : ' veces'));
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (numero_usuario > numero_secreto){
        asignarTextoElemento('p', 'El numero secreto es menor'); 
        }
        if (numero_usuario < numero_secreto){
        asignarTextoElemento('p', 'El numero secreto es mayor'); 
        }
        intentos++;
        limpiar();
    }
}

function reiniciarJuego(){
    limpiar();
    condicionesInicio();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

function generarNumeroSecreto () {
    let numero_generado =  Math.floor(Math.random()*numero_Maximo)+1;
    if (lista_generados.length == numero_Maximo){
        asignarTextoElemento('p', 'LLEGASTE AL MAXIMO MANITO'); 
    } else {
        if (lista_generados.includes(numero_generado)){
            return generarNumeroSecreto();
        } else {
            lista_generados.push(numero_generado);
            return numero_generado;
        }
    }
}

condicionesInicio();