generarSaludo = function (nombre, apellido) {

    let mensaje;
    mensaje = "Hola "+nombre+" "+apellido;

   return mensaje;
     

}
probar = function(){
    let resultado1;
    let resultado2;

    resultado1 = document.getElementById("txtNombre")

    let nombre = resultado1.value;
    resultado2 = document.getElementById("txtApellido")

    let apellido = resultado2.value;


    let mensaje = generarSaludo(nombre,apellido);
    console.log(mensaje);
}