const mongoose = require('mongoose')

const FlipForm = mongoose.model('flip-form', {
    price: {
        type: String,
    },
    score: {
        type: String,
    },
    experience: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
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

module.exports = FlipForm

