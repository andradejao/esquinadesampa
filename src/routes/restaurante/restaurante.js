const express = require('express')
const routerRestaurante = express.Router()
const data = require('../../database/config.js')
const verificar = require('../../middleware/verificarToken.js')

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
    order by r.datacadastro desc limit 4;`, (error, result) => {
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
    where r.idrestaurante = ? and r.situacao = 'ativo';`, req.params.id, (error, result) => {
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
    // Cadastro dos campos de contato >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    data.query(`insert into contato (telefoneresidencial, emailcontato, telefonecelular, website) 
    values(?, ?, ?, ?)`, [req.body.telefoneresidencial, req.body.emailcontato, req.body.telefonecelular,
    req.body.website], (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao cadastrar o contato" + error })
        }
        const idContato = result.insertId
        // Final do cadastro de contato <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

        // Cadastro dos campos de endereço >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        data.query(`insert into endereco (logradouro, numero, complemento, bairro, cep) 
        values( ?, ?, ?, ?, ?)`, [req.body.logradouro, req.body.numero, req.body.complemento, req.body.bairro,
        req.body.cep], (error, result) => {
            if (error) {
                return res.status(500).send({ msg: "Erro ao cadastrar o endereço" + error })
            }
            const idEndereco = result.insertId
            // Final do cadastro de endereço <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

            // Cadastro dos campos de foto >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            data.query(`insert into foto (fotocapa, foto1, foto2) values (?, ?, ?)`,
                [req.body.fotocapa, req.body.foto1, req.body.foto2], (error, result) => {
                    if (error) {
                        return res.status(500).send({ msg: "Erro ao cadastrar a foto" + error })
                    }
                    const idFoto = result.insertId
                    // Final do cadastro de foto <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

                    // Cadastro dos campos de endereço >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    data.query(`insert into restaurante (nomerestaurante, categoria, cnpj, descricao, faixadepreco,
                horariofuncionamento, idcontato, idendereco, idfoto, situacao) 
                values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                        [req.body.nomerestaurante, req.body.categoria, req.body.cnpj, req.body.descricao,
                        req.body.faixadepreco, req.body.horariofuncionamento,
                            idContato, idEndereco, idFoto, req.body.situacao], (error, result) => {
                                if (error) {
                                    return res.status(500).send({ msg: "Erro ao cadastrar o restaurante" + error })
                                }
                                res.status(201).send({ msg: "Cadastrado", payload: result })
                            })
                })
        })
    })

})

module.exports = routerRestaurante