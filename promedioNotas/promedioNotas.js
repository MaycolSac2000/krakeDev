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

    if(promedio2Decimales>7){
        cambiarImagen("imgResultado","./imagenes/exito.gif");
    }else{
        cambiarImagen("imgResultado","./imagenes/reprobado.gif");
    }


}