const btn = document.querySelector('#submit');
const btnQuestion = document.querySelector('#submitQuestion');
const btnLogin = document.querySelector('#login');

const emailVal = document.querySelector('#email');
const nameVal = document.querySelector('#name');
const phoneVal = document.querySelector('#phone');

const emailQuestion = document.querySelector('#emailQuestion')
const nameQuestion = document.querySelector('#nameQuestion');
const messageQuestionVal = document.querySelector('#message');

const usernameLogin = document.querySelector('#usernameLogin');
const passwordLogin = document.querySelector('#passwordLogin');

btnQuestion.addEventListener('click', () => {
    let email = emailQuestion.value;
    let name = nameQuestion.value;
    let message = messageQuestion.value;
        console.log('email: ', email);
        console.log('name: ', name);
        console.log('message: ', message);

    contact = {
        email: email,
        name: name,
        message: message
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact),
    }
    fetch('/contact', options);
});

btn.addEventListener('click', () => {
    let email = emailVal.value;
    let name = nameVal.value;
    let phone = phoneVal.value;
        console.log('email: ', email);
        console.log('name: ', name);
        console.log('phone: ', phone);

    contact = {
        email: email,
        name: name,
        phone: phone
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact),
    }
    fetch('/contact', options);
});

btnLogin.addEventListener('click', () => {
    let username = usernameLogin.value;
    let password = passwordLogin.value;
    console.log('username: ', username);
    console.log('password: ', password);

    user = {
        username: username,
        password: password
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    }
    fetch('/user', options);
});



















