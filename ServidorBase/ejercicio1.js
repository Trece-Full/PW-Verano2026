const express = require(express);
const app = express()
const PORT = 3000


app.listen(PORT, () => {
    console.log("Servidor iniciado en http://localhost:" + PORT);
});


app.get("/par/:numero",(req,res) =>{
    const numero = req.params.numero
    const par = (numero % 2 == 0) ? res.send("Par") : "Es impar"
});



