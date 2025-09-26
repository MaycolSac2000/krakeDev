obtenerAleatorio= function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorRandomico;
    aleatorio= Math.random();
    numeroMultiplicado = aleatorio*3;
    numeroEntero= parseInt(numeroMultiplicado);/// entre 0 y 2
    valorRandomico = numeroEntero+1;
    return valorRandomico;
}

generarElemento = function (){
    let numeroRandomico=obtenerAleatorio();
    let cadena;
    if(numeroRandomico ==1){
        return cadena="piedra";
    }else if(numeroRandomico == 2){
        return cadena="papel";
    }else if(numeroRandomico == 3){
        return cadena="tijera";
    }
}

determinarGanador= function (eleccionJugador1,eleccionJugador2){
    let numero;
    if((eleccionJugador1 == "piedra" && eleccionJugador2=="piedra") ||(eleccionJugador1 == "papel" && eleccionJugador2=="papel") ||(eleccionJugador1 == "tijera" && eleccionJugador2=="tijera")){
        return numero = 0;
    }else if((eleccionJugador1 == "tijera" && eleccionJugador2=="papel") || (eleccionJugador1 == "piedra" && eleccionJugador2=="tijera") || (eleccionJugador1 == "papel" && eleccionJugador2=="piedra")){
        return numero = 1;
    }else if((eleccionJugador1 == "tijera" && eleccionJugador2=="piedra") || (eleccionJugador1 == "piedra" && eleccionJugador2=="papel")|| (eleccionJugador1 == "papel" && eleccionJugador2=="tijera")){
        return numero = 2;
    }

}

generarRuta= function (nombre){
    let ruta;
    if(nombre== "tijera"){
        ruta ="./imagenes/tijera.png"
    }else  if(nombre== "piedra"){
        ruta ="./imagenes/piegra.png"
    }else  if(nombre== "papel"){
        ruta ="./imagenes/papel.png"
    }

    return ruta;


}
