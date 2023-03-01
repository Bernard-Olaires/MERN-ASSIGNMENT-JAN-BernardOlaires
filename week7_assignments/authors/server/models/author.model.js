const mongoose = require('mongoose')

// creating a new mongoose schema called AuthorSchema =
const AuthorSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, 'Author Name is required.'],
        minLength: [3, "Author Name must be more than 3 characters."],
        maxLength: [50, "Author Name must not be more than 50 characters."]
    }
}, {timestamps: true});

// compiling our schema into a Model and calling it Author
const Author = mongoose.model('Author', AuthorSchema);

// exporting author module to reuse in our project
module.exports = Author;