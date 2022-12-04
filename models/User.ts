const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: String,
    email: String,
    phone: String,
    password: String,
    birthDate: Date
})

module.exports = User;

export {}