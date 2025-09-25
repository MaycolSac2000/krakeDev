validarEstructura = function (placa) {

    let longituPlaca = placa.length;
    let mensaje;

    if (longituPlaca == 7) {
        let mensaje=esPlaca7(placa);
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
    let mensaje="";
    let errores=0;
    let primerCaracter = obtenerLetra(placa, 0);
    if (esMayuscula(primerCaracter)) {

       errores=errores + 1;
        

    }else{
        
        mensaje = mensaje + "Primer caracter debe ser mayuscula\n";
    }
     let segundoCaracter = obtenerLetra(placa, 1);
    if (esMayuscula(segundoCaracter)) {

        errores=errores + 1;
        

    }else{
        
        mensaje = mensaje + "Segundo caracter debe ser mayuscula\n";
    }
    
    let tercerCaracter = obtenerLetra(placa, 2);
    if (esMayuscula(tercerCaracter)) {

        errores=errores + 1;

    }else{
        
        mensaje = mensaje + "Tercer caracter debe ser mayuscula\n";
    }

    let cuartoCaracter = obtenerLetra(placa, 3);
    if (esGuion(cuartoCaracter)) {

        errores=errores + 1;

    }else{
        
        mensaje = mensaje + "Cuarto caracter debe ser un guion\n";
    }

    let quintoCaracter = obtenerLetra(placa, 4);
    if (esDigito(quintoCaracter)) {

        errores=errores + 1;

    }else{
        
        mensaje = mensaje + "Quinto caracter debe ser un digito\n";
    }
    let sextoCaracter = obtenerLetra(placa, 5);
    if (esDigito(sextoCaracter)) {

      errores=errores + 1;

    }else{
       
        mensaje = mensaje + "Sexto caracter debe ser un digito\n";
    }

    let septimoCaracter = obtenerLetra(placa, 6);
    if (esDigito(septimoCaracter)) {

       errores=errores + 1;

    }else{
        
        mensaje = mensaje + "Septimo caracter debe ser un digito\n";
    }

    if(errores == 7){
        return mensaje=null;
    }else{
        return mensaje;
    }

   



}

esPlaca8 = function (placa) {
    let mensaje ="";
    let errores = 0;

    let primerCaracter = obtenerLetra(placa, 0);
    if (esMayuscula(primerCaracter)) {

        errores = errores+1;
        

    }else{
        mensaje = mensaje + "Primer caracter debe ser mayuscula\n";
        
    }
     let segundoCaracter = obtenerLetra(placa, 1);
    if (esMayuscula(segundoCaracter)) {

         errores = errores+1;
        

    }else{
        
        mensaje = mensaje + "segundo caracter debe ser mayuscula\n";
        
    }
    
    let tercerCaracter = obtenerLetra(placa, 2);
    if (esMayuscula(tercerCaracter)) {

        errores = errores+1;

    }else{
        mensaje = mensaje + "tercer caracter debe ser mayuscula\n";
         
    }

    let cuartoCaracter = obtenerLetra(placa, 3);
    if (esGuion(cuartoCaracter)) {

         errores = errores+1;

    }else{
        mensaje = mensaje + "cuarto caracter debe ser un guion\n";
         
    }

    let quintoCaracter = obtenerLetra(placa, 4);
    if (esDigito(quintoCaracter)) {

       errores = errores+1;

    }else{
        mensaje = mensaje + "quinto caracter debe ser un digito\n";
    }
        
    let sextoCaracter = obtenerLetra(placa, 5);
    if (esDigito(sextoCaracter)) {

         errores = errores+1;

    }else{
        
        mensaje = mensaje + "sexto caracter debe ser un digito\n";
    }

    let septimoCaracter = obtenerLetra(placa, 6);
    if (esDigito(septimoCaracter)) {

        errores = errores+1;

    }else{
        
        mensaje = mensaje + "septimo caracter debe ser un digito\n";
    }

    let octavoCaracter = obtenerLetra(placa, 7);
    if (esDigito(octavoCaracter)) {

        errores = errores+1;

    }else{
        
        mensaje = mensaje + "octavo caracter debe ser un digito\n";
    }

    if( errores== 8){
        return mensaje = null;
    }else{
        return mensaje;
    }
    



}