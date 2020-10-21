require('../db/mongoose')
const express = require('express');
const path = require('path');
const app = express();
const fetch = require('node-fetch');
const port = process.env.PORT || 3000;
const HeaderForm = require('../models/header-form')
const RentalForm = require('../models/rental-form')
const ContactForm = require('../models/contact-form')
const FlipForm = require('../models/flip-form');
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

app.post('/rental-form', (req, res)=> {
    const data = new RentalForm(req.body);
    showResultsRental(req.body)
    data.save()
        .then(() => {
            res.status(201).send(data)
        }).catch((e) => {
            res.status(400).send(e)
        })
});

app.post('/contact-form', (req, res)=> {
    const data = new ContactForm(req.body);
    showResultsContact(req.body)
    data.save()
        .then(() => {
            res.status(201).send(data)
        }).catch((e) => {
            res.status(400).send(e)
        })
});

app.post('/flip-form', (req, res)=> {
    const data = new FlipForm(req.body);
    showResultsFlip(req.body)
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

function showResultsRental(data) {
    console.log('data: ', data)
    const url = 'https://secure.setshape.com/postlead/5089/5264';
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

function showResultsContact(data) {
    console.log('data: ', data)
    const url = 'https://secure.setshape.com/postlead/5089/5261';
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

function showResultsFlip(data) {
    console.log('data: ', data)
    const url = 'https://secure.setshape.com/postlead/5089/5267';
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

