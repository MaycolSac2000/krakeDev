//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

esMayuscula= function (caracter){
    
   let codigoLetra = caracter.charCodeAt(0);

   if(codigoLetra>= 65 && codigoLetra<=90){

    return true;

   }else {
    return false;
   }

}

