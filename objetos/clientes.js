let clientes = [
    { cedula: "1235", nombre: "Juan", edad: 20 },
    { cedula: "1645", nombre: "Mario", edad: 50 },
    { cedula: "21313", nombre: "Pepe", edad: 22 }
];


guardarCambios = function () {

    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarFloat("txtEdad");
      
    let datosCliente = {};
    datosCliente.cedula = valorCedula;
    datosCliente.nombre = valorNombre;
    datosCliente.edad = valorEdad;
    modificarCliente(datosCliente);

    mostrarClientes();
}
modificarCliente = function (cliente) {

    let clienteEncontrado = buscarCliente(cliente.cedula);
    if (clienteEncontrado != null) {
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.edad = cliente.edad;

    }



}

ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtCedulaBusqueda");
    let cliente = buscarCliente(valorCedula);
    if (cliente == null) {
        alert("cliente no encontrado");
    } else {
        mostrarTextoEnCaja("txtCedula", cliente.cedula);
        mostrarTextoEnCaja("txtNombre", cliente.nombre);
        mostrarTextoEnCaja("txtEdad", cliente.edad);
    }


}

crearCliente = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarFloat("txtEdad");
    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;

    agregarCliente(nuevoCliente);

}

agregarCliente = function (cliente) {
    let resultado = buscarCliente(cliente.cedula);
    if (resultado == null) {
        clientes.push(cliente);
        alert("Cliente agregado");
        mostrarClientes();
    } else {
        alert("ya existe el cliente con la cedula: " + cliente.cedula);
    }


}

buscarCliente = function (cedula) {

    let elementoCliente;
    let clienteEncontrado = null;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

mostrarClientes = function () {
    let cmpTable = document.getElementById("tablaClientes");
    let contenidoTabla = "<table><tr><th>Cedula</th><th>Nombre</th><th>Edad</th></tr>";
    let elementoCliente;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        contenidoTabla += "<tr> <td>" + elementoCliente.cedula + "</td>";
        contenidoTabla += "<td>" + elementoCliente.nombre + "</td>";
        contenidoTabla += "<td>" + elementoCliente.edad + "</td></tr>";

    }
    contenidoTabla += "</table";
    cmpTable.innerHTML = contenidoTabla;

}
