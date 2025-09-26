let puntosUsuario = 0;
let puntosComputadora = 0;

jugar = function (seleccionado) {

    let elemento;
    elemento = generarElemento();

    mostrarImagen("imgComputadora", generarRuta(elemento));

    resultadoGanador = determinarGanador(elemento, seleccionado);
    if (resultadoGanador == 0) {
        console.log("Empate");
        mostrarTexto("lblResultado", seleccionado + " vs " + elemento + "\nResultado\nEmpate\n Ningun jugador gano");


    } else if (resultadoGanador == 1) {
        console.log("Perdiste la partida!!!");
        mostrarTexto("lblResultado", seleccionado + " vs " + elemento + "\nResultado\nPerdiste la partida!!!\n Ganador: Computadora");
        puntosComputadora = puntosComputadora + 1;
        mostrarTexto("lblComputadora", "Puntos Computadora: " + puntosComputadora)

        if (puntosComputadora == 5) {

            mostrarTexto("lblComputadora", "");
            mostrarTexto("lblPuntosJugador", "");
            mostrarTexto("lblMensajeGanador", "EL COMPUTADOR TE HA VENCIDO");
            let btn1 = document.getElementById("imgPiedra");
            btn1.onclick = null;

            let btn2 = document.getElementById("imgPapel");
            btn2.onclick = null;

            let btn3 = document.getElementById("imgTijera");
            btn3.onclick = null;

            puntosUsuario = 0;
            puntosComputadora = 0;
        }


    } else if (resultadoGanador == 2) {
        console.log("Ganaste la partida!!!");
        mostrarTexto("lblResultado", seleccionado + " vs " + elemento + "\nResultado\nGanaste la partida!!!\n Ganador: Jugador 1");
        puntosUsuario = puntosUsuario + 1;
        mostrarTexto("lblPuntosJugador", "Puntos Jugador: " + puntosUsuario)
        if (puntosUsuario == 5) {

            mostrarTexto("lblComputadora", "")
            mostrarTexto("lblPuntosJugador", "")
            mostrarTexto("lblMensajeGanador", "HAS GANADO EL JUEGO");
            let btn1 = document.getElementById("imgPiedra");
            btn1.onclick = null;

            let btn2 = document.getElementById("imgPapel");
            btn2.onclick = null;

            let btn3 = document.getElementById("imgTijera");
            btn3.onclick = null;
            puntosUsuario = 0;
            puntosComputadora = 0;
        }


    }
}

limpiar = function () {

    let btn1 = document.getElementById("imgPiedra");
    btn1.onclick = () => jugar("piedra");

    let btn2 = document.getElementById("imgPapel");
    btn2.onclick = () => jugar("papel");


    let btn3 = document.getElementById("imgTijera");
    btn3.onclick = () => jugar("tijera");



    mostrarTexto("lblResultado", "");
    mostrarImagen("imgComputadora", "");
    mostrarTexto("lblComputadora", "Puntos Computador: 0")
    mostrarTexto("lblPuntosJugador", " Puntos Jugador: 0")
    mostrarTexto("lblMensajeGanador", "");
    puntosUsuario = 0;
    puntosComputadora = 0;



}

