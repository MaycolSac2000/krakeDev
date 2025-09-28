//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta;

esMayuscula= function (caracter){
    
   let codigoLetra = caracter.charCodeAt(0);

   if(codigoLetra>= 65 && codigoLetra<=90){

    return true;

   }else {
    return false;
   }

}

guardarPalabra = function (){
    let palabra = recuperarTexto("txtSecreta");
    let hayMayusculas=0;
    let longitud = palabra.length;
    if(longitud == 5){
        for(let i=0;i<longitud;i++){
            let letra = palabra.charAt(i);
            if(esMayuscula(letra)){
                hayMayusculas = hayMayusculas+1;
            }
        }

        if(hayMayusculas == 5){
            palabraSecreta = palabra;
            console.log(palabraSecreta);
        }else{
            alert("La palabra debe estar en letras mayusculas");
        }

    }else{
        alert("La palabra debe ser de 5 letras");
    }

    

};