calcularTasaInteres = function(ingresoAnual){
    
    let valorTasa;

    if(ingresoAnual< 300000){
        valorTasa = 16;    
    }else if(ingresoAnual >= 300000 && ingresoAnual < 500000 ){
        valorTasa = 15;
    }else if(ingresoAnual >= 500000 && ingresoAnual < 1000000 ){
        valorTasa = 14;
    }else if(ingresoAnual >= 1000000 && ingresoAnual < 2000000 ){
        valorTasa = 13;
    }else if(ingresoAnual >= 2000000 ){
        valorTasa = 12;
    } 
     
    return valorTasa;
    
}

calcularCapacidadPago = function(edad, ingresos , egresos){

    let valorCuota;
    if(edad > 50 ){
        valorCuota=(ingresos-egresos)*0.30;
    }else if(edad <=50){
        valorCuota=(ingresos-egresos)*0.40;
    }
    return valorCuota;
}

calcularDescuento = function (precio, cantidad){
   let  valorPagar;
   let subtotal;
   let descuento;
    if(cantidad < 3 ){
        valorPagar = precio *cantidad;

    }else if (cantidad >= 3 && cantidad <= 5 ){
        subtotal = precio* cantidad;
        descuento = subtotal*0.02;
        valorPagar = subtotal-descuento;
    }else if (cantidad >= 6 && cantidad <= 11 ){
        subtotal = precio* cantidad;
        descuento = subtotal*0.03;
        valorPagar = subtotal-descuento;
    }else if (cantidad >= 12){
        subtotal = precio* cantidad;
        descuento = subtotal*0.04;
        valorPagar = subtotal-descuento;
    }
    return valorPagar;

}

determinarColesterolLDL = function(nivelColesterol){

    let mensaje;
    if (nivelColesterol>=130 && nivelColesterol<200){
        mensaje= "Colesterol Tolal";

    }else if (nivelColestero>=110 && nivelColesterol<130 ){
        mensaje="No-HDL";

    }else if (nivelColesterol>60 && nivelColesterol<110 ){
        mensaje="LDL";

    }else if (nivelColesterol>45 && nivelColesterol<=60 ){
        mensaje="HDL";

    }

    return mensaje;

}

validarClave= function (clave) {
    
    let caracteres = clave.length;
    if (caracteres >= 8 && caracteres<=16){
        return true;
    }else{
        return false;
    }


}

esMayuscula = function (caracter){

   let codigoLetra = caracter.charCodeAt(0);

   if(codigoLetra>= 65 && codigoLetra<=90){

    return true;

   }else {
    return false;
   }

}

esMinuscula = function (caracter){

   let codigoLetra = caracter.charCodeAt(0);

   if(codigoLetra>= 97 && codigoLetra<=122){

    return true;

   }else {
    return false;
   }

}

esDigito = function () {
    let codigoLetra = caracter.charCodeAt(0);

   if(codigoLetra>= 48 && codigoLetra<=57){

    return true;

   }else {
    return false;
   }

}

darPermiso = function (notaMatematica, notaFisica ,notaGeometria){

    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria >90){
        return true;
    }else {
        return false;
    }

}

otorgarPermiso = function (notaMatematica, notaFisica ,notaGeometria){

    if((notaMatematica > 90 || notaFisica > 90)  && notaGeometria >80){
        return true;
    }else {
        return false;
    }

}

dejarSalir = function (notaMatematica, notaFisica ,notaGeometria){

    if((notaMatematica > 90 || notaFisica > 90  || notaGeometria >90) && (notaFisica>notaMatematica)){
        return true;
    }else {
        return false;
    }

}

