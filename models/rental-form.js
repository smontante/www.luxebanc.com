const mongoose = require('mongoose')

const RentalForm = mongoose.model('rental-form', {
    price: {
        type: String,
    },
    score: {
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

module.exports = RentalForm

