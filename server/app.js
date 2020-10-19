require('../db/mongoose')
const express = require('express');
const path = require('path');
const app = express();
const fetch = require('node-fetch');
const port = process.env.PORT || 3000;
const HeaderForm = require('../models/header-form')
const publicDirectioryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectioryPath))
app.use(express.json());

app.post('/header-form', (req, res)=> {
    const data = new HeaderForm(req.body);
    showResults(req.body)
    data.save()
        .then(() => {
            res.status(201).send(data)
        }).catch((e) => {
            res.status(400).send(e)
        })
});

function showResults(data) {
    console.log('data: ', data)
    const url = 'https://secure.setshape.com/postlead/5089/5258';
    const headers = {
        "Content-Type": "application/json",
    }
    fetch(url, {
            method: 'POST',
            headers: headers,    
            body: JSON.stringify(data)
        })
        .then((res) => {
            console.log(data)
            return res.json()
        })
        .then((json) => {
            console.log(json);
        });

}

app.listen(port, () => {
    console.log('listening on port ', port)
})

