const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    title:{
        type: String,
        required: [true, 'Title is required'],
        minLength: [2, "Title must be more than 2 characters"],
        maxLength: [25, "Title cannot be more than 25 characters"]
    },
    price:{
        type: Number,
        required: [true, 'Price is required'],
        min: [2, 'Price must be more than 1']
    },
    description:{
        type: String,
        required: [true, 'Description is required'],
        minLength: [2, "Description must be more than 2 characters"]
    }
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;