saludar = function(){
    //recuperar el valor de la caja de texto nombre
    let nombre;
    let apellido;
    nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto apellido
    apellido=recuperarTexto("txtApellido")

}

recuperarTexto = function (idComponente){

    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}