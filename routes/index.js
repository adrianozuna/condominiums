const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('start')
})

router.get('/clientes', (req, res) => {
    res.render('clients')
})

router.get('/productos', (req, res) => {
    res.render('products')
})

module.exports = router