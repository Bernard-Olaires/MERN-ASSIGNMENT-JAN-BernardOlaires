const Joke = require("../models/jokes.model")

module.exports = {
    
    getAllJokes: (req,res) => {
        Joke.find()
            .then((allJokes) => {
                res.json(allJokes)
            })
            .catch((err) => {
                res.status(500).json({message: 'Something went wrong', error:err})
            })
    },
    getJokeById: (req, res) => {
        const { params } = req;
        Joke.findOne({ _id: params.id })
            .then((joke) => res.json(joke))
            .catch((err) => {
                res.status(500).json({message: 'Something went wrong', error:err})
            })
    },
    createJoke: (req, res) => {
        // console.log('REQ*********', req)
        console.log('BODY*********', req.body)
        Joke.create(req.body)
            .then((newJoke) => {
                res.json(newJoke)
            })
            .catch((err) => {
                res.status(500).json({message: 'Something went wrong', error:err})
            })
    },
    updateJoke: (req, res) => {
        Joke.findOneAndUpdate( { _id: req.params.id } ,req.body, { new: true, runValidators: true } )
            .then(updatedJoke => {
                res.json(updatedJoke)
            })
            .catch((err) => {
                res.status(500).json({message: 'Something went wrong', error:err})
            })
    },
    deleteJoke: (req, res) => {
        Joke.deleteOne({_id: req.params.id})
            .then((response) => {
                res.json(response)
            })
            .catch((err) => {
                res.status(500).json({message: 'Something went wrong', error:err})
            })
    }
}
