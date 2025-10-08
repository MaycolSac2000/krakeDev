personas = [{ nombre: "Marcos", edad: 18 },
{ nombre: "Roberto", edad: 15 },
{ nombre: "Kate", edad: 25 },
{ nombre: "Diana", edad: 12 },
{ nombre: "Benja", edad: 5 },

]

mostrarArreglo = function () {
    console.log(personas);


}

agregarPersona = function () {
    let nombre = recuperarTexto("txtNombre");
    let edad = recuperarInt("txtEdad");

    let erroresNombre = validarNombre(nombre);
    let erroresEdad = validarEdad(edad);


    if (erroresNombre == null && erroresEdad == null) {

        let nuevaPersona = {};
        nuevaPersona.nombre = nombre;
        nuevaPersona.edad = edad;
        personas.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE");
        mostrarPersonas();
    } else {
        mostrarTexto("lblErrorNombre", erroresNombre);
        mostrarTexto("lblErrorEdad", erroresEdad);
    }

}

mostrarPersonas = function () {
    let generarTabla = "<table class='miDisenoTabla'><tr><th>EDAD</th> <th>NOMBRE</th></tr>"
    let personaEncontrada;
    let componenteTabla = document.getElementById("tablaPersonas");
    for (let i = 0; i < personas.length; i++) {
        personaEncontrada = personas[i];

        generarTabla += "<tr> <td>" + personaEncontrada.edad + "</td>"
            + "<td>" + personaEncontrada.nombre + "</td></tr>";

    }
    generarTabla += "</table>"
    componenteTabla.innerHTML = generarTabla;



}
determinarMayor = function () {

    let mayor = encontrarMayor();
    
    mostrarTexto("lblMayor",mayor.nombre+ "\n"+mayor.edad);



}
determinarMenor = function () {

    let menor = encontrarMenor();
    
    mostrarTexto("lblMenor",menor.nombre+ "\n"+menor.edad);



}

encontrarMayor = function () {
    let personaMayor = personas[0];
    let elementoPersona;

    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        console.log("Persona a comparar-----> " + elementoPersona.nombre + " " + elementoPersona.edad);

        if (elementoPersona.edad > personaMayor.edad) {
            personaMayor = elementoPersona;
            console.log("Persona mayor nueva-----> " + personaMayor.nombre + " " + personaMayor.edad);
        } else {
            personaMayor = personaMayor;
            console.log("Persona mayor nueva-----> " + personaMayor.nombre + " " + personaMayor.edad);
            
        }

    }
    return personaMayor;

}

encontrarMenor = function () {
    let personaMenor = personas[0];
    let elementoPersona;

    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        console.log("Persona a comparar-----> " + elementoPersona.nombre + " " + elementoPersona.edad);

        if ( elementoPersona.edad < personaMenor.edad) {
            personaMenor = elementoPersona;
            console.log("Persona menor nueva-----> " + personaMenor.nombre + " " + personaMenor.edad);
        } else {
            personaMenor = personaMenor;
            console.log("Persona menor nueva-----> " + personaMenor.nombre + " " + personaMenor.edad);
            
        }

    }
    return personaMenor;

}



//Validaciones
validarNombre = function (nombre) {
    let longitud = nombre.length;
    let error = null;
    if (longitud >= 3) {
        error = null;

    } else {
        error = "Tiene que tener almenos 3 caracteres";

    }
    return error;
}

validarEdad = function (edad) {

    let error = null;
    if (isNaN(edad)) {
        error = "No es un numero";

    } else {

        error = null;
        if (edad >= 0 && edad <= 100) {
            error = null;
        } else {
            error = "Edad debe ir entre 0 y 100 anios"
        }

    }
    return error;

}