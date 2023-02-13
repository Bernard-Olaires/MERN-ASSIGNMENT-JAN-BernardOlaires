const JokeController = require('../controllers/jokes.controller')

module.exports = app => {
    app.get('/api/allJokes', JokeController.getAllJokes)
    app.get('/api/oneJoke/:id', JokeController.getJokeById)
    app.get('/api/createJoke', JokeController.createJoke)
    app.get('/api/updateJoke/:id', JokeController.updateJoke)
    
}