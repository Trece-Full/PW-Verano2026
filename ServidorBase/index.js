const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send('Bienvenido a mi primer servidor con express');
});

app.listen(PORT, () => {
    console.log("Servidor iniciado en http://localhost:" + PORT);
});

app.get("/pagina",(req,res) =>{

    res.send(

    `
        <style>

            h1{
                color: red;
                font-size: 50px;
            }
        </style> 

        <h1>mi pagina</h1>
        <p>Creada con express</p>
    `
    )
})

app.get("/saludo/:nombre",(req,res) => {
    const nombre = req.params.nombre
    res.send("Hola " + nombre);

})

//ejercicio 1 par o no par
app.get("/par/:numero",(req,res) =>{
    const numero = req.params.numero
    const par = (numero % 2 == 0) ? res.send("Par") : res.send("Impar")
});


//ejercicio 2 mayor o menor 
app.get("/par/:edad",(req,res) =>{
    const edad = req.params.edad
    const mayor = (edad >= 18) ? res.send("Mayor de edad") : res.send("Menor de edad")
});

//ejercicio 3 calculadora 
app.get("/calculadora/:operacion/:a/:b",(req,res) =>{
    const operacion = req.params.operacion
    const a = Number( req.params.a)
    const b = Number( req.params.b)
    let resu = 0

    if (operacion == "suma") {
        resu = a + b
    }else if(operacion == "resta"){

        resu = a - b
    }else if(operacion == "multi"){

        resu = a * b
    }else{

        resu = a / b
    }

    res.send("El resultado es: " + resu)
});


//ejercicio 4 tabla de multiplicar

app.get("/tabla/:numero",(req,res) => {

    const numero = Number(req.params.numero) 

    mensaje = []
    for (let index = 1; index <= 10; index++) {

        mensaje.push(numero + " * " + index + " = " + numero * index)
        
    }
    res.send(mensaje)
})


app.get("/calificacion/:nota",(req,res) =>{

    const nota = Number(req.params.nota)

    if (nota >= 90) {
        res.send("Excelente")
    } else if (nota >= 80) {
        res.send("Muy bien")
    }else if (nota >= 70) {
        res.send("Aprobado")
    }else {
        res.send("Reprobado")
    }
})

