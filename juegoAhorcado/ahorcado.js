//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta;
let intentos=0;
let coincidencias=0;
let errores=0;
esMayuscula = function (caracter) {

    let codigoLetra = caracter.charCodeAt(0);

    if (codigoLetra >= 65 && codigoLetra <= 90) {

        return true;

    } else {
        return false;
    }

}

guardarPalabra = function () {
    let palabra = recuperarTexto("txtSecreta");
    let hayMayusculas = 0;
    let longitud = palabra.length;
    if (longitud == 5) {
        for (let i = 0; i < longitud; i++) {
            let letra = palabra.charAt(i);
            if (esMayuscula(letra)) {
                hayMayusculas = hayMayusculas + 1;
            }
        }

        if (hayMayusculas == 5) {
            palabraSecreta = palabra;
            console.log(palabraSecreta);
        } else {
            alert("La palabra debe estar en letras mayusculas");
        }

    } else {
        alert("La palabra debe ser de 5 letras");
    }
}

mostrarLetra = function (letra, posicion) {



    switch (posicion) {

        case 0:
            mostrarTexto("div0", letra);
            break;
        case 1:
            mostrarTexto("div1", letra);
            break;
        case 2:
            mostrarTexto("div2", letra);
            break;
        case 3:
            mostrarTexto("div3", letra);
            break;
        case 4:
            mostrarTexto("div4", letra);
            break;
        default:

    }
}

validar = function(letra){

    let letrasEncontradas=0;

    for(let i=0;i<palabraSecreta.length;i++){
        let letraIterada = palabraSecreta.charAt(i);
        if(letra==letraIterada){
            mostrarLetra(letra,i);
            letrasEncontradas =letrasEncontradas+1;
            coincidencias=coincidencias+1;
        }

    }
    if(letrasEncontradas==0){
       alert("La letra no es parte de la palabra");
       errores=errores+1;
       mostrarAhorcado();
    }



}

ingresarLetra = function (){
    intentos = intentos+1;
    let letra= recuperarTexto("txtLetra");
    if(esMayuscula(letra)){
        validar(letra);
        if(coincidencias == 5){
            alert("HA GANADO");
            mostrarImagen("ahorcadoImagen","./ganador.gif");

        }else if(intentos == 10 ){
            alert("HA PERDIDO");
             mostrarImagen("ahorcadoImagen","./gameOver.gif");
        }

    }else{
        alert("Solo se aceptan mayusculas");
    }

}

mostrarAhorcado = function(){
    switch(errores){
        case 1:
        mostrarImagen("ahorcadoImagen","./Ahorcado_01.png");
        break;
         case 2:
        mostrarImagen("ahorcadoImagen","./Ahorcado_02.png");
        break;
         case 3:
        mostrarImagen("ahorcadoImagen","./Ahorcado_03.png");
        break;
         case 4:
        mostrarImagen("ahorcadoImagen","./Ahorcado_04.png");
        break;
         case 5:
        mostrarImagen("ahorcadoImagen","./Ahorcado_05.png");
        break;
         case 6:
        mostrarImagen("ahorcadoImagen","./Ahorcado_06.png");
        break;
         case 7:
        mostrarImagen("ahorcadoImagen","./Ahorcado_07.png");
        break;
         case 8:
        mostrarImagen("ahorcadoImagen","./Ahorcado_08.png");
        break;
         case 9:
        mostrarImagen("ahorcadoImagen","./Ahorcado_09.png");
        break;
        
        default:
    }
}


