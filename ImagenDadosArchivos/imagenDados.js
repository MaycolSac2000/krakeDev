let puntos=0;
let lanzamientos=5;
let mensaje;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos(lanzamientos);


    console.log("......."+puntos);
    console.log("......."+lanzamientos);
    if (lanzamientos==0){
        limpiar();
    }

   
}

modificarPuntos= function(numero){


    puntos=puntos+numero;
    cambiarTexto("lblPuntos",puntos);
    //Si el jugador obtiene mas de 20 puntos 
    //mostrar en pantalla un mensaje ganaste!!
    //invocar a limpiar
    if(puntos >=20){
        mensaje="GANASTE!!!"
        cambiarTexto("lblResultado",mensaje);
        
        
    }
    

}

//no recibe parametros
//resta 1 a la variable lanzamientos, guarda el resultado en la misma variable
//y muestra en pantalla
modificarLanzamientos = function(){
//si lanzamientos llega a 0 
//mostrar en pantalla el mensaje  GAME OVER
//invoca a limpiar
    lanzamientos=lanzamientos-1;
    cambiarTexto("lblLanzamientos",lanzamientos);
    if(lanzamientos==0 && puntos<20){
        mensaje="Game Over!"
         cambiarTexto("lblResultado",mensaje);
        
    }



}

limpiar = function(){
//colocar puntaje en 0 y lanzamientos en 5
// en las variables y en pantalla
//quitar la imagens
    cambiarTexto("lblPuntos",0);
    
    cambiarTexto("lblLanzamientos",5);
    lanzamientos=5;
    puntos=0;
    cambiarImagen("imgDado","");
    

    

}
//funcion mostrarCara, recibe el numero que quiere mostrar
//muestra la imagen coprrespondiente al numero que recibe
//no retorna nada
mostrarCara = function (numero) {
    if(numero== 1 ){
        cambiarImagen("imgDado","./dados1.png");
    }else if(numero == 2){
        cambiarImagen("imgDado","./dados2.png");
    }else if(numero == 3){
        cambiarImagen("imgDado","./dados3.png");
    }else if(numero == 4){
        cambiarImagen("imgDado","./dados4.png");
    }else if(numero == 5){
        cambiarImagen("imgDado","./dados5.png");
    }else if(numero == 6){
        cambiarImagen("imgDado","./dados6.png");
    }

}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}