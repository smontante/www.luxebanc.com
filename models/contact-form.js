const mongoose = require('mongoose')

const ContactForm = mongoose.model('contact-form', {
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

module.exports = ContactForm

