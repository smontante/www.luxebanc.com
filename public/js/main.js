/************************ HEADER MODAL FORM START **************************/
var mainModal = document.getElementById("myModal"); //header modal code
var btn = document.getElementById("myBtn");//header modal button
var span = document.getElementsByClassName("close")[0];//header modal exit button
btn.onclick = function () {
  mainModal.style.display = "block";
} //header modal open modal trigger
span.onclick = function () {
  mainModal.style.display = "none";
} //header modal close modal trigger

let priceInput = document.querySelector('#inputPrice');//form input price
let creditInput = document.querySelector('#inputCreditScore');//form input credit score
let phoneInput = document.querySelector('#inputPhone');//form input phone
let firstNameInput = document.querySelector('#inputFirstName');//form input first name
let lastNameInput = document.querySelector('#inputLastName');//form input last name
let emailInput = document.querySelector('#inputEmail');//form input email
let loan;
function getLoanType(id) {
  loan = id;
  return loan;
}//values from purchase or refi button

let headerModalPost = document.querySelector('#emailBtn');//form post trigger

function getAddress() {
  console.log(addressInput.value);
  fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + addressInput.value + '&types=geocode&language=en&key=AIzaSyAmEMUWq_jjbiLR0z-6g3QBk0JEScjWpaQ')
    .then(response => response.json())
    .then((data) => {
      let response = data.predictions[0].description.split(',');
      address = response[0];
      city = response[1];
      state = response[2];
      console.log('Address: ', address, city, state);
    });
}

var placeSearch, autocomplete;
var componentForm = {
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

  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  for (var i = 0; i < place.address_components.length; i++) {
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

headerModalPost.onclick = function () {
  getValues();
}//call and post values to api function
/************************** HEADER MODAL FORM END ***********************/










//rental form
var rentalModal = document.getElementById('rentalModal'); //modal
var rentalBtn = document.getElementById('rentalBtn'); //button
var rentalSpan = document.getElementsByClassName("close")[1]; //exit span
rentalBtn.onclick = function () {
  rentalModal.style.display = "block";
} //open modal
rentalSpan.onclick = function () {
  rentalModal.style.display = "none";
} //close modal

//flip form
let flipModal = document.querySelector('#flipModal'); //modal
var flipBtn = document.getElementById('flipBtn') //button
var flipSpan = document.getElementsByClassName("close")[2]; //exit span
flipBtn.onclick = function () {
  flipModal.style.display = "block";
} //open modal
flipSpan.onclick = function () {
  flipModal.style.display = "none";
} //close modal

//contact form
let contactUsModal = document.querySelector('#contactUsModal'); //modal
let learnMoreBtn = document.querySelector('#learnMoreBtn'); //button
let contactSpan = document.getElementsByClassName("close")[3]; //exit span
learnMoreBtn.onclick = function () {
  contactUsModal.style.display = "block";
} //open modal
contactSpan.onclick = function () {
  contactUsModal.style.display = "none";
} //close modal

