const express = require('express')
const bcrypt = require('bcrypt')
const routerLogin = express.Router()
const data = require('../../database/config.js')

routerLogin.get("/listar", (req, res) => {
    data.query("select * from login", (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao carregar a seleção" })
        }
        res.status(200).send({ msg: "Ok", payload: result })
    })
})

routerLogin.post("/cadastrar", (req, res) => {
    data.query(`insert into login set ?`, req.body, (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao cadastrar" } + error)
        }
        res.status(201).send({ msg: "Cadastrado", payload: result })
    })
})

module.exports = routerLogin