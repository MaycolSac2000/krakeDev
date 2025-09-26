let puntosUsuario=0;
let puntosComputadora=0;

jugar = function (seleccionado) {

    let elemento;
    elemento =generarElemento();

    mostrarImagen("imgComputadora",generarRuta(elemento));

    resultadoGanador=determinarGanador(elemento,seleccionado);
    if(resultadoGanador == 0){
        console.log("Empate");
        mostrarTexto("lblResultado",seleccionado+" vs "+elemento+"\nResultado\nEmpate\n Ningun jugador gano");
        

    }else if(resultadoGanador == 1){
        console.log("Perdiste la partida!!!");
        mostrarTexto("lblResultado",seleccionado+" vs "+elemento+"\nResultado\nPerdiste la partida!!!\n Ganador: Computadora");
        
    }else if(resultadoGanador == 2){
        console.log("Ganaste la partida!!!");
        mostrarTexto("lblResultado",seleccionado+" vs "+elemento+"\nResultado\nGanaste la partida!!!\n Ganador: Jugador 1");

    }
}

