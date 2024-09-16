const express = require('express')
const routerContato = express.Router()
const data = require('../../database/config.js')

routerContato.get("/listar", (req, res) => {
    data.query("select * from contato", (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao carregar a seleção" })
        }
        res.status(200).send({ msg: "Ok", payload: result })
    })
})

routerContato.post("/cadastrar", (req, res) => {
    data.query(`insert into contato set ?`, req.body, (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao cadastrar" + error })
        }
        res.status(201).send({ msg: "Cadastrado", payload: result })
    })
})

module.exports = routerContato