const express = require("express")
const router = express.Router()

const Usuario = require('./controllers/usuario')
const Evento = require('./controllers/evento')

const rotaInicial = (req, res) => {
    res.json("Back-end Eventos Climáticos respondendo")
}

router.get('/',rotaInicial)
router.post('/usuarios', Usuario.cadastrar)
router.get('/usuarios', Usuario.listar)
router.post('/evento', Evento.cadastrar)
router.get('/evento', Evento.listar)

module.exports = router