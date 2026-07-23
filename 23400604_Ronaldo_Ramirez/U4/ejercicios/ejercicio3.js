//ejercicio1

/*

function potencia(base, exponente) {

    let res = 1;

    for (let i = 0; i < exponente; i++) {
        res *= base;
    }

    console.log(base + " elevado a " + exponente + " es: " + res);
}

potencia(2, 3);
*/





//ejercicio2

/*
var saldo = 5000
while (true) {
    console.log("1. Consultar saldo 2. Depositar 3.Retirar 4. Salir")
    
    var op = Number(prompt("Opcion: "))
    if (op == 4) {
        break
        
    }

    switch (op) {
        case 1:
            console.log("Tu saldo es de: " + saldo)
            break;
        case 2:
            var deposito = Number(prompt("Cuanto quieres depositar?: "))
            saldo += deposito
            break;
        case 3:
            var retiro = Number(prompt("Cuanto quieres retirar?: "))
            saldo = saldo - retiro
            break;
    }
    
}
*/

/*
ejercicio3

function lanzarDados() {

    while (true) {
        var dado1 = Math.floor((Math.random() * 6) + 1)
        var dado2 = Math.floor((Math.random() * 6) + 1)

        console.log(dado1 + " - " + dado2)
        if (dado1 == dado2) {
            break
        }
        
    }
    
}

lanzarDados()

*/

/*
ejercicio4
function adivinarNumeros() {
    var nRandom = Math.floor((Math.random() * 100) + 1)
    console.log(nRandom)

    for (let index = 0; index < 7; index++) {

        var n1 = Number(prompt("Cual es el numero?: "))
        if (n1 == nRandom) {

            console.log("Felicidades")
            break
        } else if (nRandom > n1) {

            console.log("El el numero random es mayor")
        } else {
            console.log("El el numero random es menor")
            
        }
    }
    
    
}

adivinarNumeros()
*/

/*

Ejercicio 5
let ventas = [];
let cantidadVentas = parseInt(prompt("¿Cuantas ventas deseas registrar?"));

for (let i = 0; i < cantidadVentas; i++) {

    let vendedor = prompt("Nombre del vendedor:");
    let producto = prompt("Nombre del producto:");
    let cantidad = parseInt(prompt("Cantidad vendida:"));
    let precio = parseFloat(prompt("Precio unitario:"));

    let venta = {
        vendedor: vendedor,
        producto: producto,
        cantidad: cantidad,
        precio: precio
    };  

    ventas.push(venta);
}
let totalIngresos = ventas.reduce((total, venta) => {
    return total + (venta.cantidad * venta.precio);
}, 0);

let productos = {};

ventas.forEach(venta => {

    if (productos[venta.producto]) {
        productos[venta.producto] += venta.cantidad;
    } else {
        productos[venta.producto] = venta.cantidad;
    }

});

let vendedores = {};

ventas.forEach(venta => {

    let totalVenta = venta.cantidad * venta.precio;

    if (vendedores[venta.vendedor]) {
        vendedores[venta.vendedor] += totalVenta;
    } else {
        vendedores[venta.vendedor] = totalVenta;
    }

});

let mejorVendedor = "";
let mayorVenta = 0;

for (let nombre in vendedores) {

    if (vendedores[nombre] > mayorVenta) {
        mayorVenta = vendedores[nombre];
        mejorVendedor = nombre;
    }

}
console.log("Total de ventas realizadas:", ventas.length);
console.log("Total de ingresos: $" + totalIngresos.toFixed(2));

console.log("\nUnidades vendidas por producto:");

for (let producto in productos) {
    console.log(producto + ": " + productos[producto] + " unidades");
}

console.log("\nVendedor con más ventas:");
console.log(mejorVendedor + " ($" + mayorVenta.toFixed(2) + ")");
*/









ventas.reduce((total,venta) =>{

    return total + (venta.cantidad * venta.precio)
},0)

let productos = []

ventas.forEach(venta => {
    if (productos[venta.producto]) {
        productos[venta.producto] += venta.cantidad
    }else{
        productos[venta.producto] = venta.cantidad
    }
    
});










