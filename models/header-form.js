const mongoose = require('mongoose')

const HeaderForm = mongoose.model('header-form', {
    price: {
        type: String,
    },
    score: {
        type: String,
    },
    phone: {
        type: String,
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String,
    },
    email: {
        type: String
    }
})

module.exports = HeaderForm

