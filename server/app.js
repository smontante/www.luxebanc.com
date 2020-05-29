require('../db/mongoose')
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const Login = require('../models/login')
const Contact = require('../models/contact')
const publicDirectioryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectioryPath))
app.use(express.json());

app.post('/contact', (req, res)=> {
    const contact = new Contact(req.body);
    console.log('lead:', req.body)
    contact.save().then(()=> {
        res.status(201).send(contact)
    }).catch((e)=> {
        res.status(400).send(e)
    })
})

app.post('/login', (req, res)=> {
    const user = new Login(req.body);
    console.log('user:', req.body)
    user.save().then(()=> {
        res.status(201).send(user)
    }).catch((e)=> {
        res.status(400).send(e)
    })
})

app.listen(port, ()=> {
    console.log('listening on port ', port)
})



