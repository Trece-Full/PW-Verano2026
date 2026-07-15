
/*
let n1 = Math.random() 

let n2 = Math.random() 

console.log("Numero 1: ",n1)
console.log("Numero 2: ",n2)

if(n1 == n2){
    console.log("Son iguales")
}else{
    if(n1 > n2){
        console.log("n1 es mayor")
    }else{
        console.log("n2 es mayor")
    }
    
}
*/

/*
Ejercicio 2
function ejercicio2(){

    let n1
    while(true){

        n1 = Math.floor(Math.random() * 6)
        console.log(n1)

        if (n1 === 0) {
            break
        }
    }   
}

ejercicio2()
*/



/*Ejercicio 3
function ejercicio3(){

    let n1 = parseInt((Math.random() *9) + 2)
    console.log(n1)

    for (let index = 0; index < 10; index++) {
        console.log( "n: " + n1 + " x " + index +"  =  " + n1*index)
        
    }
}

ejercicio3()

*/

/*ejercicio 4
function ejercicio4(){
    let par = 0
    let impar = 0

    for (let index = 0; index < 10; index++) {
            var n = 1

            do {
                n = Number(prompt("Ingresa un numero del 1 al 100: "))
                if(n % 2 == 0){
                    par += 1

                }else{
                    impar += 1

                }

            } while (n> 100  || n< 1);

        
    }
    console.log("Cantidad de pares: ", par )
    console.log("Cantidad de impares: ", impar )
}

ejercicio4()

*/

/*ejercicio5

*/

function calcularComision() {
    let ventas;

    while (true) {
        let entrada = prompt("Ingrese las ventas del empleado (entre $5,000 y $30,000):");
        
        if (entrada === null) {
            console.log("Operación cancelada.");
            return;
        }

        ventas = Number(entrada);

        if (!isNaN(ventas) && ventas >= 5000 && ventas <= 30000) {
            break; 
        } else {
            alert("Error: Debe ingresar un número válido entre 5,000 y 30,000.");
        }
    }
    let comision;
    
    if (ventas < 10000) {
        comision = ventas * 0.10;
    } else {
        comision = ventas * 0.15;
    }

    console.log(`Ventas totales: $${ventas.toFixed(2)}`);
    console.log(`Comisión a recibir: $${comision.toFixed(2)}`);
    alert(`La comisión a recibir es: $${comision.toFixed(2)}`);
}
calcularComision();




