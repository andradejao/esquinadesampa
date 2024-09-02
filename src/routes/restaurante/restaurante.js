const express = require('express')
const routerRestaurante = express.Router()
const data = require('../../database/config.js')

routerRestaurante.get("/listar", (req, res) => {
    data.query("select * from restaurante", (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao carregar a seleção" })
        }
        res.status(200).send({ msg: "Ok", payload: result })
    })
})

routerRestaurante.post("/cadastrar", (req, res) => {
    data.query(`insert into restaurante set ?`, req.body, (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao cadastrar" } + error)
        }
        res.status(201).send({ msg: "Cadastrado", payload: result })
    })
})

module.exports = routerRestaurante