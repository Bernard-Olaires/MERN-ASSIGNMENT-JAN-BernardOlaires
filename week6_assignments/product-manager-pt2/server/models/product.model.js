const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    title:{
        type: String,
        minLength: [2, "Title must be more than 2 characters"],
        maxLength: [25, "Title cannot be more than 25 characters"]
    },
    price:{
        type: Number,
        min: [1, "Price must be 1 dollar or more"]
    },
    description:{
        type: String,
        minLength: [1, "Description must be more than 1 characters"]
    }
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;