jugar = function () {
    let aleatorio;
    let mensaje;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);

    if(aleatorio>3){

       
        mensaje="Es mayor a 3\n GANASTE";
        cambiarTexto("lblMensaje",mensaje);

    }else{
       
        mensaje="Es menor a 3\n ESTAS DE MALAS";
        cambiarTexto("lblMensaje",mensaje);

    }
    
}

//Crear una funcion llaamda lanzarDado
//No recibe parametros
//retorna un numero aleatorio de 1 y 6
lanzarDado = function() {

    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio= Math.random();
    numeroMultiplicado = aleatorio*6;
    numeroEntero= parseInt(numeroMultiplicado);/// entre 0 y 5
    valorDado = numeroEntero+1;
    return valorDado;
}

