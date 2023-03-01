// importing our author.controller.js
const AuthorController = require('../controllers/author.controller')

module.exports = app => {
    app.get('/api/allAuthors', AuthorController.getAllAuthors)
    app.get('/api/oneAuthor/:id', AuthorController.getAuthorById)
    app.post('/api/createAuthor', AuthorController.createAuthor)
    app.put('/api/updateAuthor/:id', AuthorController.updateAuthor)
    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor)
}