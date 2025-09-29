probarAtributos = function (){
    let persona = {
            nombre: "Pedro",
            apellido: "Moraes",
            edad: 24,
            estaVivo: true
    }

    console.log(persona.nombre);
    console.log(persona.edad);

    if (persona.estaVivo=false) {
        console.log("No esta vivo");
    }else{
        console.log("Si esta vivo");
    }
}

crearProducto = function(){
    let producto1 = {
        nombre:"Arroz",
        precio: 1 ,
        stock: 35
    }

    let producto2 = {
        nombre:"Sal",
        precio: 3 ,
        stock: 25
    }

    console.log(producto1.nombre);
    console.log(producto2.nombre);

    if(producto1.stock>producto2.stock){
            console.log("Producto 1 tiene mayor stock");
    }else if (producto1.stock<producto2.stock){
        console.log("Producto 2 tiene mayor stock");

    }else if(producto1.stock==producto2.stock){
        console.log("Ambos tienen el mismo stock");
    }

}