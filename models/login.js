const mongoose = require('mongoose')

const Login = mongoose.model('login', {
    username: {
        type: String,
        require
    },
    password: {
        type: String,
        require
    }
})

module.exports = Login

