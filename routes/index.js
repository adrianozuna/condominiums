const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('start')
})

router.get('/clientes', (req, res) => {
    res.render('clients')
})

module.exports = router