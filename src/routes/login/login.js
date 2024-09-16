require('dotenv').config()
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const routerLogin = express.Router()
const data = require('../../database/config.js')

const salt = Number(process.env.SALT)

routerLogin.get("/listar", (req, res) => {
    data.query("select * from login", (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao carregar a seleção" })
        }
        res.status(200).send({ msg: "Ok", payload: result })
    })
})

routerLogin.post("/cadastrar", (req, res) => {
    let sh = req.body.senha
    bcrypt.hash(sh, salt, (error, crypt) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao tentar cadastrar" })
        }
        req.body.senha = crypt
        data.query(`insert into login set ?`, req.body, (error, result) => {
            if (error) {
                return res.status(500).send({ msg: "Erro ao cadastrar" + error })
            }
            res.status(201).send({ msg: "Cadastrado", payload: result })
        })
    })
})

routerLogin.post("/autenticar", (req, res) => {
    let sh = req.body.senha
    data.query("select * from login where email=?", req.body.email, (error, result) => {
        if (error || result[0] == null) {
            return res.status(400).send({ msg: "Usuário ou senha incorreto" })
        }
        bcrypt.compare(sh, result[0].senha, (err, same) => {
            if (err) {
                return res.status(500).send({ msg: "Erro ao processar o login" })
            }
            else if (same == false) {
                return res.status(400).send({ msg: "Usuário ou senha incorreto" })
            }
            else {
                let token = jwt.sign(
                    {
                        idlogin: result[0].idlogin,
                        email: result[0].email
                    },
                    process.env.JWT_KEY, { expiresIn: "3d" }
                )
                res.status(200).send({ msg: "Autenticado", token: token })
            }
        })
    })

})

module.exports = routerLogin