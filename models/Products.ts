const mongoose = require('mongoose');

const Products = mongoose.model('Product', {
    name: String,
    description: String,
    avaliation: Number,
    avaliationAmount: Number,
    inventory: Number,
    price: Number,
    productImg: String
})

module.exports = Products;
