let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1751219948", nombre: "Mikael", apellido: "Altamirano", sueldo: 1000.0 }
]

let esNuevo = false

mostrarOpcionEmpleado = function () {

    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    deshabilitarComponentesEmpleado();
    mostrarEmpleados();
}


mostrarOpcionRol = function () {

    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {

    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");
}

mostrarEmpleados = function () {
    let cmpTablaEmpleados = document.getElementById("tablaEmpleados");
    let generandoTabla = "<table class='miDisenoTabla'><tr><th>Cedula</th><th>Nombre</th><th>Apellido</th><th>Sueldo</th></tr>";
    let empledoRecuperado;
    for (let i = 0; i < empleados.length; i++) {
        empledoRecuperado = empleados[i];

        generandoTabla += "<tr><td>" + empledoRecuperado.cedula + "</td>"
            + "<td>" + empledoRecuperado.nombre + "</td>"
            + "<td>" + empledoRecuperado.apellido + "</td>"
            + "<td>" + empledoRecuperado.sueldo + "</td>"
            + "</tr>";
    }

    generandoTabla += "</table>"
    cmpTablaEmpleados.innerHTML = generandoTabla;



}

ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}


buscarEmpleado = function (cedula) {

    let empleadoEncontrado;
    let empleadoExiste = null;
    for (let i = 0; i < empleados.length; i++) {

        empleadoEncontrado = empleados[i];

        if (empleadoEncontrado.cedula == cedula) {

            empleadoExiste = empleadoEncontrado;
            break;
        }

    }

    if (empleadoExiste == null) {
        return null;

    } else {
        return empleadoExiste;
    }

}

agregarEmpleado = function (empleado) {

    let empleadoExiste = buscarEmpleado(empleado.cedula);

    if (empleadoExiste == null) {

        return true;


    } else {
        return false;
    }

}

guardar = function () {

    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");

    let erroresCedula = validacionCedula(cedula);
    let erroresNombre = validacionNombreApellido(nombre);
    let erroresApellido = validacionNombreApellido(apellido)
    let erroresSueldo = validacionSueldo(sueldo);



    if (erroresCedula == "" && erroresNombre == "" && erroresApellido == "" && erroresSueldo == "") {

        if (esNuevo) {
            let empleado = {};
            empleado.cedula = cedula;
            empleado.nombre = nombre;
            empleado.apellido = apellido;
            empleado.sueldo = sueldo;
            let resultado = agregarEmpleado(empleado);
            if (resultado) {
                empleados.push(empleado);
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                limpiar();
                deshabilitarComponentesEmpleado();



                mostrarEmpleados();
            } else {
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + empleado.cedula);
                limpiar();

            }


        }



    } else {
        mostrarTexto("lblErrorCedula", erroresCedula);
        mostrarTexto("lblErrorNombre", erroresNombre);
        mostrarTexto("lblErrorApellido", erroresApellido);
        mostrarTexto("lblErrorSueldo", erroresSueldo);

    }

}


validacionCedula = function (cedula) {

    let letra;
    let digitos = 0;
    let mensaje;
    let longitud = cedula.length;

    if (cedula != "") {
        if (longitud == 10) {
            mensaje = "";

            for (i = 0; i < cedula.length; i++) {


                letra = cedula.charCodeAt(i);

                if (letra >= 48 && letra <= 57) {

                    digitos += 1;

                } else {
                    break;
                }
            }

            if (digitos == 10) {
                return mensaje = "";
            } else {
                return mensaje = "Cedula solo se reciben digitos\n";
            }


        } else {
            return mensaje = "La cedula no tiene los 10 digitos\n";
        }
    } else {
        return mensaje = "*Campos vacios";
    }



}

validacionNombreApellido = function (cadenaTexto) {

    let longitud = cadenaTexto.length;

    let letra;

    let esMayuscula = false;
    let mensaje;


    if (cadenaTexto != "") {
        if (longitud >= 3) {


            for (let i = 0; i < cadenaTexto.length; i++) {


                letra = cadenaTexto.charCodeAt(i);

                if (letra >= 65 && letra <= 90) {
                    esMayuscula = true;

                } else {
                    esMayuscula = false;
                    break;
                }

            }

            if (esMayuscula) {
                return mensaje = "";
            } else {
                return mensaje = "Todos los caracteres deben ser mayuscula";
            }

        } else {
            return mensaje = "Nombre minimo de 3 caracteres";

        }
    } else {
        return mensaje = "*Campos vacios";
    }


}

validacionSueldo = function (sueldo) {


    let mensaje;

    if (isNaN(sueldo)) {
        return mensaje = "*Campo vacio o No es un numero";
    } else {
        if (sueldo >= 400 && sueldo <= 5000) {


            return mensaje = "";

        } else {
            return mensaje = "Sueldo debe estar entre 400 a 5000";
        }
    }

}

limpiar = function () {

    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    mostrarTexto("lblErrorCedula", "");
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorApellido", "");
    mostrarTexto("lblErrorSueldo", "");
}


deshabilitarComponentesEmpleado = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}
