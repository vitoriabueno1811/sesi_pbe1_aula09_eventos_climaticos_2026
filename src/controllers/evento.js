const con = require('../db');

const listar = (req, res) => {
    const query = 'SELECT * FROM evento;'
    con.query(query, (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Erro ao buscar por envento' })
        } else {
            res.json(results)
        }
    })
}

const cadastrar = (req, res) => {
    const {Usuario_id, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto} = req.body
    const query = 'INSERT INTO evento (Usuario_id, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto) VALUES (?, ?, ?);'
    con.query(query, [Usuario_id, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto], (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Erro ao cadastrar evento' })
        } else {
            res.status(201).json({ message: 'Evento cadastrado com sucesso', id: results.insertId })
        }
    })
}

module.exports = {
    listar,
    cadastrar
}