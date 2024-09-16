const express = require('express')
const routerEndereco = express.Router()
const data = require('../../database/config.js')

routerEndereco.get("/listar", (req, res) => {
    data.query("select * from endereco", (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao carregar a seleção" })
        }
        res.status(200).send({ msg: "Ok", payload: result })
    })
})

routerEndereco.post("/cadastrar", (req, res) => {
    data.query(`insert into endereco set ?`, req.body, (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao cadastrar" + error })
        }
        res.status(201).send({ msg: "Cadastrado", payload: result })
    })
})

module.exports = routerEndereco