calcularValorDescuento = function (monto,porcentajeDescuento){

    let valorDescuento;
    valorDescuento=(monto*porcentajeDescuento)/100;
    return valorDescuento;

}

calcularIva = function (monto){
    let valorIva;
    valorIva=monto*12; 
    
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