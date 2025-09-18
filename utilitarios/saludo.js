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

    mostrarTextoenCaja("txtNombre"," ");
}

