const express = require(express);
const app = express()
const PORT = 3001


app.listen(PORT, () => {
    console.log("Servidor iniciado en http://localhost:" + PORT);
});


//ejercicio 1 par o no par
app.get("/par/:numero",(req,res) =>{
    const numero = req.params.numero
    (numero % 2 == 0) ? res.send("Par") : "Es impar"
});




