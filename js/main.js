function calculadoraDeCostoTotal() {
    
    const cantidadDeProductos = parseInt(prompt("Ingrese la cantidad de productos"));
    
    let costoTotal = 0;

    for (let i = 1; i <= cantidadDeProductos; i++) {
        const precioProducto = parseFloat( prompt ("Ingrese el precio de producto:"));
    
        if (precioProducto >0){
            costoTotal += precioProducto
        }else if (precioProducto ==0) {
            console.log( "El precio ingresado es invalido. Intentelo nuevamente");
        }
    }
    if (costoTotal >0) {
        console.log("El costo total de los productos es: $" + costoTotal)
    }

}

calculadoraDeCostoTotal();

    
            
    
