ejecutarPrueba1 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

recorrerCadena = function (cadena) {
    //0123
    //Juan
    let caracter;

    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);
    }
    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);

    }

}

ejecutarPrueba2 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    invertirCadena(mensaje);
}

invertirCadena = function (cadena) {
    let caracter;
    let resultado = "";
    let longitud = cadena.length - 1;
    //for(let i = cadena.length-1; i>=0 ; i--) esta tambien es una opcion
    for (let posicion = longitud; posicion >= 0; posicion--) {
        caracter = cadena.charAt(posicion);
        resultado = resultado + caracter;


    }
    mostrarTexto("lblCadenaInvertida", resultado);

}


buscarLetra = function (cadena, letra) {

    let letraIterada;
    let existeetra = false;
    for (let i = 0; i < cadena.length; i++) {
        letraIterada = cadena.charAt(i);
        if (letraIterada == letra) {
            existeetra = true;
        }

    }
    if (existeetra == true) {
        console.log("existe")
    } else {
        console.log("No existe")
    }



}

contarMayuscula = function (cadena){

    let letra;
    let contadorMayuscula = 0;

    for(let i=0; i<cadena.length;i++){
        letra = cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayuscula = contadorMayuscula+1;
        }
    }

    console.log(contadorMayuscula);

}