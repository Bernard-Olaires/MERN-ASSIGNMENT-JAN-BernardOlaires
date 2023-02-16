const ProductController = require('../controllers/product.controllers');

module.exports = app => {
    app.get('/api/allProducts', ProductController.getAllProducts)
    app.get('/api/oneProduct/:id', ProductController.getProductById)
    app.post('/api/postProduct', ProductController.createProduct )
    app.put('/api/updateProduct/:id', ProductController.updateProduct)
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct)
}