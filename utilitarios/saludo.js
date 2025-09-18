saludar = function(){
    //recuperar el valor de la caja de texto nombre
    let nombre;
    let apellido;
    let edad;
    let estatura;
    nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto apellido
    apellido=recuperarTexto("txtApellido")

    edad=recuperarInt("txtEdad"); 

    estatura =recuperarFloat("txtEstatura");

    let mensajeBienvenida = "Bienvenido "+nombre+" "+apellido; 
    
    mostrarTexto("lblResultado",mensajeBienvenida);
    mostrarImagen("imgSaludo","./imagenes/saludo.gif");

}

recuperarInt = function (idComponente){

    let valorCaja=recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function (idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante= parseFloat(valorCaja);
    return valorFlotante;
}

mostrarTexto = function(idComponente,mensaje){
    let  componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}


recuperarTexto = function (idComponente){

    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

mostrarImagen = function (idComponente,rutaImagen){
    let componente;
    componente= document.getElementById(idComponente);
    componente.src = rutaImagen;
}
