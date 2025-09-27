validarPassword = function (password) {
    let errores = "";
    let longitud = password.length;
     let hayerroresLongitud=0;

    if (longitud <8 || longitud > 16) {
        hayerroresLongitud+1;
        errores=errores+"*la contrase;a tiene menos de 8 o mas de 16 caracteres\n";
    }else {
        errores="";
    }

    let letra;
    let hayMayusculas = 0;
    let hayDigito = 0;
    let hayCaracterEspecial = 0;
   
    for (let i = 0; i < password.length; i++) {
        letra = password.charAt(i);
        if (esMayuscula(letra)) {
            hayMayusculas = hayMayusculas + 1;
        }

        if (esDigito(letra)) {
            hayDigito = hayDigito + 1;
        }

        if (esCaracterEspecial(letra)) {
            hayCaracterEspecial = hayCaracterEspecial + 1;
        }


    }

    if (hayCaracterEspecial > 0 && hayDigito > 0 && hayMayusculas > 0 && hayerroresLongitud>0) {
        errores = "";
    }
    if (hayMayusculas == 0) {
        errores = errores + "*La contrase;a no tiene mayusculas\n"

    }
    if (hayDigito == 0) {
        errores = errores + "*La contrase;a no tiene digitos\n"

    }
    if (hayCaracterEspecial == 0) {
        errores = errores + "*La contrase;a no tiene un caracter especia (*,-,_)\n"

    }

    return errores;





}

ejecutarValidacion= function (){
    password=recuperarTexto("txtPassword");
    if(validarPassword(password)==""){
        mostrarTexto("lblErrores","Password Correcto");
        console.log("Password Correcto");

    }else{
        let errores=validarPassword(password);
        console.log(errores);
        mostrarTexto("lblErrores",errores);
    }
}


esMayuscula = function (caracter) {

    let codigoLetra = caracter.charCodeAt(0);

    if (codigoLetra >= 65 && codigoLetra <= 90) {

        return true;

    } else {
        return false;
    }

}

esDigito = function (caracter) {
    let codigoLetra = caracter.charCodeAt(0);

    if (codigoLetra >= 48 && codigoLetra <= 57) {

        return true;

    } else {
        return false;
    }

}

esCaracterEspecial = function (caracter) {
    let codigoLetra = caracter.charCodeAt(0);

    if (codigoLetra == 95 || codigoLetra == 45 || codigoLetra == 42) {

        return true;

    } else {
        return false;
    }

}
