let notas = [];

agregarElementos = function () {
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerArreglo =function (){
    let notaR;
    for(let indice=0;indice<notas.length;indice++){
       
        notaR = notas[indice];
        console.log(notaR);

    }
}

probarAgregar = function (){
    let notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);

}

agregarNota = function (nota){  

    notas.push(nota);
    mostrarNotas();

}

calcularPromedio = function () {

    let sumaNotas = 0;
    let promedio = 0;
    let notaR=0;


    for(let indice=0;indice<notas.length;indice++){
        notaR = notas[indice];
        sumaNotas = sumaNotas + notaR;

    }
    promedio = sumaNotas / (notas.length);
    return promedio;
    

}

ejecutarPromedio = function (){

    let promedio=calcularPromedio();
    mostrarTexto("lblPromedio",promedio);
}

generarTabla = function (){

    let contenidoTabla = "";
    let cmpTbla = document.getElementById("divTabla");
    contenidoTabla+="<table><tr><td>UNO</td</tr>"+
    "<tr><td>DOS</td</tr></table>";
    cmpTbla.innerHTML = contenidoTabla;


}

mostrarNotas = function (){
let cmpTabla = document.getElementById("divTabla");
let contenidoTabla = "<table><tr><th>Notas</th></tr>";
let miNota;
for(let i=0; i<notas.length;i++){
miNota= notas[i];
contenidoTabla+="<tr><td>";
contenidoTabla += miNota;
contenidoTabla+="</td></tr>"
}
contenidoTabla += "</table>"
cmpTabla.innerHTML = contenidoTabla;
}