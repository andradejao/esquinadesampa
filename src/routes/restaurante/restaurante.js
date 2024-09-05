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
    where r.categoria = ? and r.situacao = 'ativo';`, req.params.categoria, (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao carregar a seleção" + error })
        }
        res.status(200).send({ msg: "Ok", payload: result })
    })
})

routerRestaurante.get("/listardestaque", (req, res) => {
    data.query(`select r.idrestaurante, r.nomerestaurante, f.fotocapa from restaurante r 
    inner join foto f on r.idfoto = f.idfoto 
    order by r.datacadastro desc limit 3;`, (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao carregar a seleção" + error })
        }
        res.status(200).send({ msg: "Ok", payload: result })
    })
})

routerRestaurante.get("/detalhes/:id", (req, res) => {
    data.query(`select r.idrestaurante, r.nomerestaurante, f.fotocapa, f.foto1, f.foto2, 
    r.descricao, r.categoria, r.cnpj, r.faixadepreco, r.horariofuncionamento, 
    c.telefoneresidencial, c.emailcontato, c.telefonecelular, c.website, 
    e.logradouro, e.numero, e.complemento, e.bairro, e.cep, 
    fb.nome, fb.opiniao, fb.datapostagem, fb.nota
    from restaurante r
    inner join foto f on r.idfoto = f.idfoto
    inner join contato c on r.idcontato = c.idcontato
    inner join endereco e on r.idendereco = e.idendereco
    left join feedback fb on r.idrestaurante = fb.idrestaurante
    where r.idrestaurante = 5 and r.situacao = 'ativo';`, req.params.id, (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao carregar a seleção" + error })
        }
        res.status(200).send({ msg: "Ok", payload: result })
    })
})

routerRestaurante.get("/buscar/:bairro", (req, res) => {
    data.query(`select r.idrestaurante, r.nomerestaurante, r.descricao, f.fotocapa
    from restaurante r
    inner join foto f on r.idfoto = f.idfoto
    inner join endereco e on r.idendereco = e.idendereco
    where e.bairro = ? and r.situacao = 'ativo';`, req.params.bairro, (error, result) => {
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