mostrarNumeros = function () {

    console.log("antes del for ");
    for (let i = 0; i < 4; i++) {
        console.log(i);
    }

    console.log("Despues del for");
}

mostrarNumeros2 = function () {
    console.log("antes del for ");

    for(let indice= 1; indice <= 5 ;indice++){
        console.log(indice);
    }

    console.log("Despues del for");


}

mostrarPares = function (){
    console.log("antes del for ");

    for(let x =2 ;x<=10; x+=2 ){

        console.log(x);

    }


    console.log("Despues del for");

}

mostrarInverso = function (){
     console.log("antes del for ");
    
     for(let i=10;i>0 ;i--){
        console.log(i);
 
     }


     console.log("Despues del for");

}

hackearNasaPelis = function (){

    //hakeando nasa 0% ... 100%
    for(let porcentaje=0;porcentaje <= 100 ;porcentaje+=10){

        console.log("Hackeando nasa "+porcentaje+"%");
    }

    console.log("La nasa a sido hackeada XD");


}

mostrarImpares = function (){
     console.log("antes del for ");
        for(let impares= 1; impares<=21;impares+=2 ){

            console.log(impares);
        }

     console.log("Despues del for");

}