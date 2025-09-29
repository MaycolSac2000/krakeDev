aleatoriosEnteros = function (){
    
    let aleatorios = Math.random();
    let aleatoriosR = aleatorios*100+1;
    let aleatoriosEnteros = parseInt(aleatoriosR);
    console.log(aleatoriosEnteros);
    return aleatoriosEnteros;

}

generarAleatorios = function (){

    let aleatorios = [];

    let numeroRecuperado =recuperarInt("txtNumero");

    if(numeroRecuperado >=5 && numeroRecuperado<=20){

        for(let i= 0 ;i<numeroRecuperado;i++){
            console.log(i);
            aleatorios.push(aleatoriosEnteros());
            
        }

        mostrarResultados(aleatorios);


    }
    
}



mostrarResultados = function (arregloNumeros){

    let cmpDiv = document.getElementById("divTabla");
    let tablaGenerada = "<table> <tr><th>Numeros</th </tr>";
    let numeroRecuperado;
    for(let i=0; i < arregloNumeros.length;i++){
        numeroRecuperado = arregloNumeros[i];
        tablaGenerada+= "<tr> <td> ";
        tablaGenerada+= numeroRecuperado;
        tablaGenerada+= "</td> </tr>";
       
    }
     tablaGenerada+= "</table>";

    cmpDiv.innerHTML = tablaGenerada;


}