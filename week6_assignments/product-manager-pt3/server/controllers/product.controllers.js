const Product = require('../models/product.model');

module.exports = {

    getAllProducts: (req,res) => {
        Product.find()
            .then((allProducts) => {
                res.json(allProducts)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    getProductById: (req,res) => {
        const { params } = req;
        Product.findOne({_id: params.id})
            .then((product) => {
                res.json(product)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    createProduct: (req,res) => {
        Product.create(req.body)
            .then((newProduct) => {
                res.json(newProduct)
            })
            .catch((err) => {
                res.statusPe(500).json(err)
            })
    },
    updateProduct: (req,res) => {
        Product.findByIdAndUpdate( { _id: req.params.id } ,req.body, { new: true, runValidators: true } )
            .then((updatedProduct) => {
                res.json(updatedProduct)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then((response) => {
                res.json(response)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }

}