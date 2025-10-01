let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1751219948", nombre: "Mikael", apellido: "Altamirano", sueldo: 1000.0 }
]

mostrarOpcionEmpleado = function () {

    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
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
    for(let i=0;i<empleados.length; i++){
        empledoRecuperado = empleados[i];

        generandoTabla += "<tr><td>"+empledoRecuperado.cedula+"</td>"
        +"<td>"+empledoRecuperado.nombre+"</td>"
        +"<td>"+empledoRecuperado.apellido+"</td>"
        +"<td>"+empledoRecuperado.sueldo+"</td>"
        +"</tr>";
    }
    
    generandoTabla += "</table>"
    cmpTablaEmpleados.innerHTML = generandoTabla;



}


