validarPlaca = function () {

    let placa = recuperarTexto("txtPlaca");

    let erroresEstructura = validarEstructura(placa)

    let mensaje;


    if (erroresEstructura == null) {
        mensaje = "Esctructura valida"
        mostrarTexto("lblEstado", mensaje);
        mostrarTexto("lblErrores", "");
        console.log(mensaje);



        let provincia = obtenerProvincia(placa);

        if (provincia != null) {
            mostrarTexto("lblProvincia", "Provincia: " + provincia);
            let dia = obtenerDiaPicoYPlaca(placa);
            mostrarTexto("lblDiaPico", "Dia Pico y Placa: " + dia);

        } else {
            mostrarTexto("lblProvincia", "Provincia Incorrecta");

        }


    } else {
        mensaje = erroresEstructura;
        mostrarTexto("lblEstado", "Estructura Invalida");
        mostrarTexto("lblErrores", mensaje);
        mostrarTexto("lblProvincia", "");
        console.log(mensaje);


    }
}

