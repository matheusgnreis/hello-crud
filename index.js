const express = require('express')

const app = express()

app.use(express.json())

const usuarioMatheus = {
    id: 1,
    nome: "Matheus",
    idade: 26
}

const port = 3000

const usuarios = [
    usuarioMatheus
]

app.get('/usuarios', (req, res) => {
    res.json(usuarios)
})

app.listen(port, () => {
    console.log(`Servidor está pronto e rodando na porta ${port}`)
})