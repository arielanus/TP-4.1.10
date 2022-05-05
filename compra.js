var valorCompra= prompt("Ingrese el valor de la compra")
if (valorCompra>100){alert("El cliente abonará "+(valorCompra-(valorCompra*0.15))+ "$")}
else{alert("El cliente abonará "+valorCompra+" $")}