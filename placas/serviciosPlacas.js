validarEstructura = function (placa) {

    let longituPlaca = placa.length;
    let mensaje;

    if (longituPlaca == 7) {
        let mensaje = esPlaca7(placa);
        return mensaje;

    } else if (longituPlaca == 8) {
        let mensaje = esPlaca8(placa);
        return mensaje;

    } else {
        return mensaje = "la placa no tiene 7 o 8 caracteres validos";
    }

}

obtenerLetra = function (placa, numeroCaracter) {

    let letra;
    letra = placa.charAt(numeroCaracter);
    return letra;
}

esPlaca7 = function (placa) {
    let mensaje = "";
    let errores = 0;
    let primerCaracter = obtenerLetra(placa, 0);
    if (esMayuscula(primerCaracter)) {

        errores = errores + 1;


    } else {

        mensaje = mensaje + "Primer caracter debe ser mayuscula\n";
    }
    let segundoCaracter = obtenerLetra(placa, 1);
    if (esMayuscula(segundoCaracter)) {

        errores = errores + 1;


    } else {

        mensaje = mensaje + "Segundo caracter debe ser mayuscula\n";
    }

    let tercerCaracter = obtenerLetra(placa, 2);
    if (esMayuscula(tercerCaracter)) {

        errores = errores + 1;

    } else {

        mensaje = mensaje + "Tercer caracter debe ser mayuscula\n";
    }

    let cuartoCaracter = obtenerLetra(placa, 3);
    if (esGuion(cuartoCaracter)) {

        errores = errores + 1;

    } else {

        mensaje = mensaje + "Cuarto caracter debe ser un guion\n";
    }

    let quintoCaracter = obtenerLetra(placa, 4);
    if (esDigito(quintoCaracter)) {

        errores = errores + 1;

    } else {

        mensaje = mensaje + "Quinto caracter debe ser un digito\n";
    }
    let sextoCaracter = obtenerLetra(placa, 5);
    if (esDigito(sextoCaracter)) {

        errores = errores + 1;

    } else {

        mensaje = mensaje + "Sexto caracter debe ser un digito\n";
    }

    let septimoCaracter = obtenerLetra(placa, 6);
    if (esDigito(septimoCaracter)) {

        errores = errores + 1;

    } else {

        mensaje = mensaje + "Septimo caracter debe ser un digito\n";
    }

    if (errores == 7) {
        return mensaje = null;
    } else {
        return mensaje;
    }





}

esPlaca8 = function (placa) {
    let mensaje = "";
    let errores = 0;

    let primerCaracter = obtenerLetra(placa, 0);
    if (esMayuscula(primerCaracter)) {

        errores = errores + 1;


    } else {
        mensaje = mensaje + "Primer caracter debe ser mayuscula\n";

    }
    let segundoCaracter = obtenerLetra(placa, 1);
    if (esMayuscula(segundoCaracter)) {

        errores = errores + 1;


    } else {

        mensaje = mensaje + "segundo caracter debe ser mayuscula\n";

    }

    let tercerCaracter = obtenerLetra(placa, 2);
    if (esMayuscula(tercerCaracter)) {

        errores = errores + 1;

    } else {
        mensaje = mensaje + "tercer caracter debe ser mayuscula\n";

    }

    let cuartoCaracter = obtenerLetra(placa, 3);
    if (esGuion(cuartoCaracter)) {

        errores = errores + 1;

    } else {
        mensaje = mensaje + "cuarto caracter debe ser un guion\n";

    }

    let quintoCaracter = obtenerLetra(placa, 4);
    if (esDigito(quintoCaracter)) {

        errores = errores + 1;

    } else {
        mensaje = mensaje + "quinto caracter debe ser un digito\n";
    }

    let sextoCaracter = obtenerLetra(placa, 5);
    if (esDigito(sextoCaracter)) {

        errores = errores + 1;

    } else {

        mensaje = mensaje + "sexto caracter debe ser un digito\n";
    }

    let septimoCaracter = obtenerLetra(placa, 6);
    if (esDigito(septimoCaracter)) {

        errores = errores + 1;

    } else {

        mensaje = mensaje + "septimo caracter debe ser un digito\n";
    }

    let octavoCaracter = obtenerLetra(placa, 7);
    if (esDigito(octavoCaracter)) {

        errores = errores + 1;

    } else {

        mensaje = mensaje + "octavo caracter debe ser un digito\n";
    }

    if (errores == 8) {
        return mensaje = null;
    } else {
        return mensaje;
    }




}

obtenerProvincia = function (placa) {
    let letra = obtenerLetra(placa, 0)
    let provincia;

    switch (letra) {
        case "A":
            provincia = "Azuay";
            break;
        case "B":

            provincia = "Bolívar";
            break;
        case "U":
           provincia = "Cañar";
            break;
        case "C":
            provincia = "Carchi";
            break;
        case "X":
            provincia = "Cotopaxi";
            break;
        case "H":
            provincia = "Chimborazo";
            break;
        case "O":
            provincia = "El Oro";
            break;
        case "E":
            provincia = "Esmeraldas";
            break;
        case "W":
            provincia = "Galapagos";
            break;
        case "G":
            provincia = "Guayas";
            break;
        case "I":
            provincia = "Imbabura";
            break;
        case "L":
            provincia = "Loja";
            break;
        case "R":
            provincia = "Los Rios";
            break;

        case "M":
            provincia = "Manabí";
            break;
        case "V":
            provincia = "Morona Santiago";
            break;
        case "N":
            provincia = "Napo";
            break;
        case "S":
            provincia = "Pastaza";
            break;
        case "P":
            provincia = "Pichincha";
            break;
        case "K":
            provincia = "Sucumbíos";
            break;
        case "Q":
            provincia = "Orellana";
            break;
        case "T":
            provincia = "Tungurahua";
            break;
        case "Z":
            provincia = "Zamora Chinchipe";
            break;
        case "Y":
            provincia = "Santa Elena";
            break;

        default:
            provincia = null;
    }
    return provincia;


    let A = "Azuay";
    let B = "Bolívar";
    let U = "Cañar";
    let C = "Carchi";
    let X = "Cotopaxi";
    let H = "Chimborazo";
    let O = "El Oro";
    let E = "Esmeraldas";
    let W = "Galápagos";
    let G = "Guayas";
    let I = "Imbabura";
    let L = "Loja";
    let R = "Los Ríos";
    let M = "Manabí";
    let V = "Morona Santiago";
    let N = "Napo";
    let S = "Pastaza";
    let P = "Pichincha";
    let K = "Sucumbíos";
    let Q = "Orellana";
    let T = "Tungurahua";
    let Z = "Zamora Chinchipe";
    let Y = "Santa Elena";





}


