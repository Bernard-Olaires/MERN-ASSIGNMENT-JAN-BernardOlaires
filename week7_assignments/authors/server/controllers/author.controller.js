// importing our Author model
const Author = require('../models/author.model');

module.exports = {

    getAllAuthors: (_req, res) => {
        Author.find()
            .then((allAuthors) =>{
                res.json(allAuthors)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    getAuthorById: (req, res) => {
        const {params} = req;
        Author.findOne({_id: params.id})
            .then((product) => {
                res.json(product)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then((newAuthor) => {
                res.json(newAuthor)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    updateAuthor: (req,res) => {
        Author.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then((updatedAuthor) => {
                res.json(updatedAuthor)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then((respone) => {
                res.json(respone)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}