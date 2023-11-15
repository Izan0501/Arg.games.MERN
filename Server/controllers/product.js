const Product = require('../models/product');
const image = require('../utils/getFileName');

async function createProduct(req, res) {
    const newProduct = new Product(req.body);

    if (req.files.image) {
        const imagePath = image.getFileName(req.files.image);
        newProduct.image = imagePath;
    }

    try {
        await newProduct.save();
        res.status(200).send( { msg: `Saved Product`} )
    } catch (error) {
        res.status(500).send({ msg: `error saving product ${error}`})
    }
};

async function getProduct(req, res) {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(200).saved({ msg : `Product undefined`})
    }
}

module.exports = {
    createProduct,
    getProduct,
};