let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1751219948", nombre: "Mikael", apellido: "Altamirano", sueldo: 1000.0 }
]

let esNuevo = false

let roles = [];
//Rol
mostrarTotales = function () {

    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalPagar = 0;
    let rolIterado;

    for (let i = 0; i < roles.length; i++) {
        rolIterado = roles[i];
        totalEmpleado = totalEmpleado + rolIterado.aporteEmpleado;
        totalEmpleador = totalEmpleador + rolIterado.aporteEmpleador;
        totalPagar = totalPagar + rolIterado.valorPagar;
    }
    
    let totalNomina = totalEmpleado+totalEmpleador+totalPagar;
    mostrarTexto("infoTotalPago",totalPagar);
    mostrarTexto("infoAporteEmpresa",totalEmpleador);
    mostrarTexto("infoAporteEmpleado",totalEmpleado);
    mostrarTexto("totalNomina","Total Nomina: "+totalNomina);


}

mostrarRoles = function () {
    let componenteDiv = document.getElementById("tablaResumen");
    let generarTablaResumen = "<table class='miDisenoTabla'><tr><th>CEDULA</th><th>NOMBRE</th><th>VALOR A PAGAR</th><th>APORTE EMPLEADO</th><th>APORTE EMPLEADOR</th></tr>";
    let rol;
    for (let i = 0; i < roles.length; i++) {
        rol = roles[i];
        generarTablaResumen += "<tr><td>" + rol.cedula + "</td>"
            + "<td>" + rol.nombre + "</td>"
            + "<td>" + rol.valorPagar + "</td>"
            + "<td>" + rol.aporteEmpleado + "</td>"
            + "<td>" + rol.aporteEmpleador + "</td>"
            + "</tr>";
    }
    generarTablaResumen += "</table>";

    componenteDiv.innerHTML = generarTablaResumen;
    mostrarTotales();


}

buscarRol = function (cedula) {

    let cedulaRol;
    let cedulaRolEncontrada;
    for (let i = 0; i < roles.length; i++) {
        cedulaRol = roles[i];
        if (cedulaRol.cedula == cedula) {
            cedulaRolEncontrada = cedulaRol;
            break;
        }
    }
    if (cedulaRolEncontrada == null) {
        return null;
    } else {
        return cedulaRolEncontrada;
    }

}

agregarRol = function (rol) {

    let objetoRoles = buscarRol(rol.cedula);
    if (objetoRoles == null) {
        roles.push(rol);
        mostrarRoles();
        alert("SE AGREGO EL ROL CORRECTAMENTE");
        deshabilitarComponente("btnGuardarRol");


    } else {
        alert("NO SE PUEDE AGREGAR EL ROL");
    }
}

calcularAporteEmpleador = function (sueldo) {


    let valorPagoIEES = sueldo * 0.1115;
    return valorPagoIEES;

}

guardarRol = function () {

    let cedula = recuperarTextoDiv("infoCedula");
    let nombre = recuperarTextoDiv("infoNombre");
    let sueldo = recuperarTextoDiv("infoSueldo");
    let aporteIEES = recuperarFloatDiv("infoIESS");
    let pago = recuperarFloatDiv("infoPago");


    let aporteEmpleador = calcularAporteEmpleador(sueldo);

    let rol = {};
    rol.cedula = cedula;
    rol.nombre = nombre;
    rol.sueldo = sueldo;
    rol.valorPagar = pago;
    rol.aporteEmpleado = aporteIEES;
    rol.aporteEmpleador = aporteEmpleador;

    agregarRol(rol);


}



buscarPorRol = function () {
    let cedula = recuperarTexto("txtBusquedaCedulaRol");
    let empleadoBuscado = buscarEmpleado(cedula);

    if (empleadoBuscado != null) {
        mostrarTexto("infoCedula", empleadoBuscado.cedula);
        mostrarTexto("infoNombre", empleadoBuscado.nombre + " " + empleadoBuscado.apellido);
        mostrarTexto("infoSueldo", empleadoBuscado.sueldo);
    } else {
        alert("EL EMPLEADO NO EXISTE");
    }

}

calcularAporteEmpleado = function (sueldo) {
    let aporte = sueldo * 0.0945;
    return aporte;
}

calcularValorAPagar = function (sueldo, aporteIEES, descuento) {

    let valorPagar = sueldo - aporteIEES - descuento;
    return valorPagar;
}

calcularRol = function () {
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuentos = recuperarFloat("txtDescuentos");

    if (isNaN(descuentos)) {
        alert("No es un valor decimal");
    } else {
        if (descuentos >= 0 && descuentos <= sueldo) {
            let aporte = calcularAporteEmpleado(sueldo);
            mostrarTexto("infoIESS", aporte);
            let totalPagar = calcularValorAPagar(sueldo, aporte, descuentos);
            mostrarTexto("infoPago", totalPagar);
            habilitarComponente("btnGuardarRol");

        }
    }

}


// Empleados
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
    deshabilitarComponente("btnGuardarRol");
    mostrarRoles();
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
                esNuevo = false;
                limpiar();
                deshabilitarComponentesEmpleado();
                mostrarEmpleados();
            } else {
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + empleado.cedula);
                limpiar();

            }


        } else {
            let empleadoEncontrado = buscarEmpleado(cedula);
            empleadoEncontrado.nombre = nombre;
            empleadoEncontrado.apellido = apellido;
            empleadoEncontrado.sueldo = sueldo;
            alert("EMPLEADO MODIFICADO EXISTOSAMENTE");
            deshabilitarComponentesEmpleado();
            limpiar();
            mostrarEmpleados();




        }




    } else {
        mostrarTexto("lblErrorCedula", erroresCedula);
        mostrarTexto("lblErrorNombre", erroresNombre);
        mostrarTexto("lblErrorApellido", erroresApellido);
        mostrarTexto("lblErrorSueldo", erroresSueldo);

    }

}

ejecutarBusqueda = function () {
    let cedula = recuperarTexto("txtBusquedaCedula");
    let empleadoBuscado = buscarEmpleado(cedula);
    if (empleadoBuscado != null) {
        mostrarTextoEnCaja("txtCedula", empleadoBuscado.cedula);
        mostrarTextoEnCaja("txtNombre", empleadoBuscado.nombre);
        mostrarTextoEnCaja("txtApellido", empleadoBuscado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleadoBuscado.sueldo);
        deshabilitarComponente("txtCedula");
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");


    } else {
        alert("EMPLEADO NO EXISTE");
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
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
    esNuevo = false;
}


deshabilitarComponentesEmpleado = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}
