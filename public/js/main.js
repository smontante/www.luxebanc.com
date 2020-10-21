/************************ HEADER MODAL FORM START **************************/
let mainModal = document.querySelector("#myModal"); //header modal code
let btn = document.querySelector("#myBtn");//header modal button
let span = document.getElementsByClassName("close")[0];//header modal exit button
btn.onclick = function () {
  mainModal.style.display = "block";
} //header modal open modal trigger
span.onclick = function () {
  mainModal.style.display = "none";
} //header modal close modal trigger

let loan;
function getLoanType(id) {
  loan = id;
  return loan;
}//values from purchase or refi button
let priceInput = document.querySelector('#inputPrice');//form input price
let creditInput = document.querySelector('#inputCreditScore');//form input credit score
let phoneInput = document.querySelector('#inputPhone');//form input phone
let firstNameInput = document.querySelector('#inputFirstName');//form input first name
let lastNameInput = document.querySelector('#inputLastName');//form input last name
let emailInput = document.querySelector('#inputEmail');//form input email

function getAddress() {
  console.log(addressInput.value);
  fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' 
  + addressInput.value + 
  '&types=geocode&language=en&key=AIzaSyAmEMUWq_jjbiLR0z-6g3QBk0JEScjWpaQ')
    .then(response => response.json())
    .then((data) => {
      let response = data.predictions[0].description.split(',');
      address = response[0];
      city = response[1];
      state = response[2];
      console.log('Address: ', address, city, state);
    });
}

let placeSearch, autocomplete;
let componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  postal_code: 'short_name'
};

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */
    (document.getElementById('autocomplete')), {
    types: ['geocode']
  });
  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  var place = autocomplete.getPlace();

  for (let component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  for (let i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}

function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}

function getValues() {
  let address = street_number.value + ' ' + route.value;
  let city = locality.value;
  let zip = postal_code.value;
  let state = administrative_area_level_1.value;
  let price = priceInput.value;
  let score = creditInput.value;
  let phone = phoneInput.value;
  let firstname = firstNameInput.value;
  let lastname = lastNameInput.value;
  let email = emailInput.value;

  let data = {
    loncuMonthlyPayment: price,
    prStreetAddress: address,
    prCity: city,
    prState: state,
    prZipCode: zip,
    creditscore: score,
    phone: phone,
    firstname: firstname,
    lastname: lastname,
    email: email
  }

  console.log('Data:', data);
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }
  fetch('/header-form', options);
}//get values and prep for post to api function

let headerModalPost = document.querySelector('#emailBtn');//form post trigger

headerModalPost.onclick = function () {
  getValues();
}//call and post values to api function
/************************** HEADER MODAL FORM END ***********************/






/************************** RENTAL MODAL FORM START ***********************/
let rentalModal = document.querySelector('#rentalModal'); //modal
let rentalBtn = document.querySelector('#rentalBtn'); //button
let rentalSpan = document.getElementsByClassName("close")[1]; //exit span
rentalBtn.onclick = function () {
  rentalModal.style.display = "block";
} //open modal
rentalSpan.onclick = function () {
  rentalModal.style.display = "none";
} //close modal

let rentalLoan;
function getLoanTypeRental(id) {
  rentalLoan = id;
  return rentalLoan;
}//values from purchase or refi button
let priceRental = document.querySelector('#priceInputRental');
let debtAmountRental = document.querySelector('#debtInputRental');
let creditScoreRental = document.querySelector('#inputCreditScoreRental');
let streetRental = document.querySelector('#inputStreetRental');
let cityRental = document.querySelector('#inputCityRental');
let stateRental = document.querySelector('#inputStateRental');
let zipRental = document.querySelector('#inputZipRental');
let phoneNumRental = document.querySelector('#inputPhoneRental');
let firstNameRental = document.querySelector('#inputFirstNameRental');
let lastNameRental = document.querySelector('#inputLastNameRental');
let emailRental = document.querySelector('#inputEmailRental');

let rentalModalPost = document.querySelector('#emailBtnRental');//form post trigger

function getValuesRental() {
  let price = priceRental.value;
  let debt = debtAmountRental.value;
  let score = creditScoreRental.value;
  let address = streetRental.value;
  let city = cityRental.value;
  let state = stateRental.value;
  let zip = zipRental.value;
  let phone = phoneNumRental.value;
  let firstname = firstNameRental.value;
  let lastname = lastNameRental.value;
  let email = emailRental.value;

  let data = {
    loncuMonthlyPayment: price,
    loncuMonthlyPayment: debt,
    creditscore: score,
    prStreetAddress: address, 
    prCity: city,
    prState: state,
    prZipCode: zip,
    phone: phone,
    firstname: firstname,
    lastname: lastname,
    email: email
  }

  console.log('Data:', data);
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }
  fetch('/rental-form', options);
}//get values and prep for post to api function

rentalModalPost.onclick = function () {
  getValuesRental();
}//call and post values to api function
/************************** RENTAL MODAL FORM END ***********************/








/************************** CONTACT MODAL FORM START ***********************/
let contactUsModal = document.querySelector('#contactUsModal'); //modal
let learnMoreBtn = document.querySelector('#learnMoreBtn'); //button
let contactSpan = document.getElementsByClassName("close")[3]; //exit span
learnMoreBtn.onclick = function () {
  contactUsModal.style.display = "block";
} //open modal
contactSpan.onclick = function () {
  contactUsModal.style.display = "none";
} //close modal

let phoneContact = document.querySelector('#inputPhoneContact');
let firstNameContact = document.querySelector('#inputFirstNameContact');
let lastNameContact = document.querySelector('#inputLastNameContact');
let emailContact = document.querySelector('#inputEmailContact');

let contactModalPost = document.querySelector('#emailBtnContact');//form post trigger

function getValuesContact() {
  let phone = phoneContact.value;
  let firstname = firstNameContact.value;
  let lastname = lastNameContact.value;
  let email = emailContact.value;

  let data = {
    phone: phone,
    firstname: firstname,
    lastname: lastname,
    email: email
  }

  console.log('Data:', data);
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }
  fetch('/contact-form', options);
}//get values and prep for post to api function

contactModalPost.onclick = function () {
  getValuesContact();
}//call and post values to api function
/************************** CONTACT MODAL FORM END *************************/










/************************** FLIO MODAL FORM START *************************/
let flipModal = document.querySelector('#flipModal'); //modal
var flipBtn = document.getElementById('flipBtn') //button
var flipSpan = document.getElementsByClassName("close")[2]; //exit span
flipBtn.onclick = function () {
  flipModal.style.display = "block";
} //open modal
flipSpan.onclick = function () {
  flipModal.style.display = "none";
} //close modal

let priceFlip = document.querySelector('#priceInputFlip');
let streetFlip = document.querySelector('#inputStreetFlip');
let cityFlip= document.querySelector('#inputCityFlip');
let stateFlip = document.querySelector('#inputStateFlip');
let zipFlip = document.querySelector('#inputZipFlip');
let scoreFlip = document.querySelector('#inputCreditScoreFlip');
let experienceFlip = document.querySelector('#inputExperienceFlip')
let phoneNumFlip = document.querySelector('#inputPhoneFlip');
let firstNameFlip = document.querySelector('#inputFirstNameFlip');
let lastNameFlip = document.querySelector('#inputLastNameFlip');
let emailFlip = document.querySelector('#inputEmailFlip');

let flipModalPost = document.querySelector('#emailBtnFlip');

function getValuesFlip() {
  let price = priceFlip.value;
  let address = streetFlip.value;
  let city = cityFlip.value;
  let state = stateFlip.value;
  let zip = zipFlip.value;
  let score = scoreFlip.value;
  let experience = experienceFlip.value;
  let phone = phoneNumFlip.value;
  let firstname = firstNameFlip.value;
  let lastname = lastNameFlip.value;
  let email = emailFlip.value;

  let data = {
    loncuMonthlyPayment: price,
    prStreetAddress: address,
    prCity: city,
    prState: state,
    prZipCode: zip,
    creditscore: score,
    notes: experience + ' flips or rentals',
    firstname: firstname,
    lastname: lastname,
    phone: phone,
    email: email
  }

  console.log('Data:', data);
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }
  fetch('/flip-form', options);
}//get values and prep for post to api function

flipModalPost.onclick = function () {
  getValuesFlip();
}//call and post values to api function
/************************** FLIP MODAL FORM END *************************/


