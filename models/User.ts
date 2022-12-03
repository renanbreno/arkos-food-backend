const mongoose2 = require('mongoose');

const User = mongoose2.model('User', {
    name: String,
    email: String,
    phone: String,
    password: String,
    birthDate: Date
})

module.exports = User;