const express = require('express')
const routerFeedback = express.Router()
const data = require('../../database/config.js')

routerFeedback.get("/listar", (req, res) => {
    data.query("select * from feedback", (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao carregar a seleção" })
        }
        res.status(200).send({ msg: "Ok", payload: result })
    })
})

routerFeedback.post("/cadastrar", (req, res) => {
    data.query(`insert into feedback set ?`, req.body, (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao cadastrar" } + error)
        }
        res.status(201).send({ msg: "Cadastrado", payload: result })
    })
})

routerFeedback.get("/listarmedia/:id", (req, res) => {
    data.query(`select avg(nota) as media_notas
    from feedback where idrestaurante = ?`, req.params.id, (error, result) => {
        if(error){
            return res.status(500).send({msg: "Erro ao carregar a seleção"})
        }
        res.status(201).send({msg: "Ok", payload: result})
    })
})

module.exports = routerFeedback