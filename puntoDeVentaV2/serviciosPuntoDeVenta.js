calcularValorDescuento = function (monto,porcentajeDescuento){

    let valorDescuento;
    valorDescuento=(monto*porcentajeDescuento)/100;
    return valorDescuento;

}

calcularIva = function (monto){
    let valorIva;
    valorIva=monto*0.12; 
    
    return valorIva;
}

calcularSubtotal = function (precio, cantidad){ 

    let totalPagar;

    totalPagar=precio*cantidad;

    return totalPagar;
}

calcularTotal = function (subtotal,descuento,iva){

    let valorTotal;
    valorTotal =(subtotal-descuento)+iva; 
    
    return valorTotal;

}

calcularDescuentoPorVolumen = function (subtotal,cantidad){

    let valorDescuento;

    if(cantidad < 3 ){
        valorDescuento=0;
    }else if (cantidad >= 3 && cantidad <=5){
        valorDescuento=subtotal*0.03;
    }else if (cantidad >= 6 && cantidad <=11){
        valorDescuento=subtotal*0.04;
    }else if(cantidad >=12){
        valorDescuento=subtotal*0.05;
    }
    return valorDescuento

}