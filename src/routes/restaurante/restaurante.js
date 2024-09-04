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

routerRestaurante.get("/listar/:categoria", (req, res) => {
    data.query(`select r.idrestaurante, r.nomerestaurante, r.descricao, f.fotocapa from restaurante r 
    inner join foto f on r.idfoto = f.idfoto 
    where r.categoria = ? and r.situacao = "ativo";`, req.params.categoria, (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao carregar a seleção" + error })
        }
        res.status(200).send({ msg: "Ok", payload: result })
    })
})

routerRestaurante.get("/listardestaque/:", (req, res) => {
    data.query(`SELECT r.nomerestaurante, r.descricao, f.fotocapa FROM restaurante r 
    INNER JOIN foto f ON r.idfoto = f.idfoto 
    WHERE r.categoria = ? AND r.situacao = "ativo";`, req.params.categoria, (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao carregar a seleção" + error })
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