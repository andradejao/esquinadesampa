require('dotenv').config()
const express = require('express')
const cors = require('cors')

// Importação dos rotas
const routerRestaurante = require('./routes/restaurante/restaurante.js')
const routerContato = require('./routes/contato/contato.js')
const routerEndereco = require('./routes/endereco/endereco.js')
const routerFeedback = require('./routes/feedback/feedback.js')
const routerFoto = require('./routes/foto/foto.js')
const routerLogin = require('./routes/login/login.js')

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/restaurante/", routerRestaurante)
app.use("/api/contato/", routerContato)
app.use("/api/endereco/", routerEndereco)
app.use("/api/feedback/", routerFeedback)
app.use("/api/foto/", routerFoto)
app.use("/api/login/", routerLogin)

app.listen(process.env.HOST_PORT, () => {
    console.log(`Servidor online em: ${process.env.HOST_NAME}:${process.env.HOST_PORT}`)
})