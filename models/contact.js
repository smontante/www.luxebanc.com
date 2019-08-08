const mongoose = require('mongoose')

const Contact = mongoose.model('contact', {
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    number: {
        type: Number,
    },
    message: {
        type: String
    }
})

module.exports = Contact

