const Product = require('../models/product')

function createProduct(req, res) {
    console.log(req.body)
    res.status(200).send({ msg: 'ok' })
}

module.exports = {
    createProduct,
}