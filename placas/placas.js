validarPlaca = function(){
    
    let placa = recuperarTexto("txtPlaca");

    let erroresEstructura =validarEstructura(placa) 

    let mensaje;

    if(erroresEstructura == null){
        mensaje = "Esctructura valida"
        mostrarTexto("lblEstado",mensaje);
        mostrarTexto("lblErrores","");
        console.log(mensaje);
    }else{
        mensaje =erroresEstructura;
        mostrarTexto("lblEstado","Estructura Invalida");
        mostrarTexto("lblErrores",mensaje);
        console.log(mensaje);
        
    }
}