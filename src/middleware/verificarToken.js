require('dotenv').config()
const jwt = require('jsonwebtoken')

const verificar = (req, res, next) => {
    const tokenEnviado = req.headers.token
    if (!tokenEnviado) {
        return res.status(401).send({ msg: "Não autenticado. Efetue o login." })
    }
    jwt.verify(tokenEnviado, process.env.JWT_KEY, (error, result) => {
        if (error) {
            return res.status(403).send({ msg: "Autorização negada para este conteúdo" })
        }
        next()
    })
}

module.exports = verificar