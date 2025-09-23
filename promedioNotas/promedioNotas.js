calcularPromedioNotas = function(){
    //Recuperar como float todas las notas y almacenarlas en variables
    let n1;
    let n2;
    let n3;
    n1=recuperarFlotante("txtNota1");
    n2=recuperarFlotante("txtNota2");
    n3=recuperarFlotante("txtNota3");
    
    //calcular el promedio con la funcion de calcularPromedio 

    let promedio = calcularPromedio(n1,n2,n3);
    let promedio2Decimales=promedio.toFixed(2);

    //mostrar el promedio  con 2 decimales 
    
    
    cambiarTexto("lblPromedio","PROMEDIO: "+promedio2Decimales);

    if(promedio2Decimales<5 && promedio2Decimales>0){
        cambiarTexto("lblEstado","REPROBADO");
        cambiarImagen("imgResultado","./imagenes/reprobado2.gif");
    }else if(promedio2Decimales>=5 && promedio2Decimales<=8){
        cambiarTexto("lblEstado","BUEN TRABAJO");
        cambiarImagen("imgResultado","./imagenes/buenTrabajo.gif");
    }else if(promedio2Decimales>8 && promedio2Decimales<=10){
        cambiarTexto("lblEstado","Excelente");
        cambiarImagen("imgResultado","./imagenes/exelente.gif");
    } else {
        
        cambiarTexto("lblEstado","Datos incorrectos");
        cambiarImagen("imgResultado","./imagenes/error.gif");
    }


}