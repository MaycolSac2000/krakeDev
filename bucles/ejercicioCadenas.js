ejecutarPrueba1 = function () {
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

recorrerCadena= function (cadena){
    //0123
    //Juan
    let caracter;

    for(let posicion=0; posicion<cadena.length;posicion++){
        caracter = cadena.charAt(posicion);
        console.log("Caracter "+caracter+" posicion "+posicion);
    }
    for(let posicion=0; posicion<=cadena.length-1;posicion++){
        caracter = cadena.charAt(posicion);
        console.log("Caracter "+caracter+" posicion "+posicion);

    }

}

ejecutarPrueba2 = function () {
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    invertirCadena(mensaje);
}

invertirCadena = function (cadena){
        let caracter;
        let resultado="";
        let longitud = cadena.length-1;

        for(let posicion=longitud;posicion>=0;posicion--){
            caracter = cadena.charAt(posicion);
            resultado = resultado+caracter;
        

        }
      mostrarTexto("lblCadenaInvertida",resultado);


}