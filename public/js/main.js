let nameInput = document.querySelector('#inputName');
let firstNameInput = document.querySelector('#inputFirstName');
let lastNameInput = document.querySelector('#inputLastName');
let emailInput = document.querySelector('#inputEmail');
let phoneInput = document.querySelector('#inputPhone');
let loanTypeInput = document.querySelector('#inputInput');
let priceInput = document.querySelector('#priceInput');
let scoreInput = document.querySelector('#inputCreditScore');
//let addressInput = document.querySelector('#inputAddress');
let cityInput = document.querySelector('#inputCity');
let stateInput = document.querySelector('#inputState');

let loan;

//get values from loan type
function getLoanType(id) {
  loan = id;
  return loan;
}

$("input[data-type='currency']").on({
  keyup: function () {
    formatCurrency($(this));
  },
  blur: function () {
    formatCurrency($(this), "blur");
  }
});


function formatNumber(n) {
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function formatCurrency(input, blur) {
  var input_val = input.val();
  if (input_val === "") {
    return;
  }
  var original_len = input_val.length;
  var caret_pos = input.prop("selectionStart");
  if (input_val.indexOf(".") >= 0) {
    var decimal_pos = input_val.indexOf(".");
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);
    left_side = formatNumber(left_side);
    right_side = formatNumber(right_side);
    if (blur === "blur") {
      right_side += "00";
    }
    right_side = right_side.substring(0, 2);
    input_val = "$" + left_side + "." + right_side;
  } else {
    input_val = formatNumber(input_val);
    input_val = "$" + input_val;
    if (blur === "blur") {
      input_val += ".00";
    }
  }
  input.val(input_val);
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}

function getValues() {
  let firstname = firstNameInput.value;
  let lastname = lastNameInput.value;
  let email = emailInput.value;
  let phone = phoneInput.value;
  let address = street_number.value + ' ' + route.value;
  let city = locality.value;
  let zip = postal_code.value;
  let state = administrative_area_level_1.value;
  let price = priceInput.value;
  let score = scoreInput.value;

  let data = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    prStreetAddress: address,
    prCity: city,
    prState: state,
    prZipCode: zip,
    purpose: loan,
    loncuMonthlyPayment: price,
    creditscore: score,
    getaddrinfo: 'https://getnvestorfunding.com form completion'
  }

  console.log('Data:', data);
  const options = {
    method: 'POST',
    headers: { 
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  } 
  fetch('/inquiry', options);
};

function sendAddress() {
  const address_ops = {
    method: 'POST',
    body: JSON.stringify(addressInput.value)
  } 
  fetch('/address', address_ops);
}

let modal = document.getElementById("contactInfoModal");
let btn = document.getElementById("emailBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function (e) {
  // e.preventDefault();
  getValues();
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function scrollToDownload() {
  if ($('.section-download').length != 0) {
    $("html, body").animate({
      scrollTop: $('.section-download').offset().top
    }, 1000);
  }
}

function getAddress() {
  console.log(addressInput.value);
  fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + addressInput.value + '&types=geocode&language=en&key=AIzaSyAmEMUWq_jjbiLR0z-6g3QBk0JEScjWpaQ')
  .then(response => response.json())
  .then( (data)=> {
      let response = data.predictions[0].description.split(',');
        address = response[0];
        city = response[1];
        state = response[2];
        console.log('Address: ', address, city, state);
    }
  );
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
            /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
            {types: ['geocode']});
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
          navigator.geolocation.getCurrentPosition(function(position) {
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

      $(document).ready(function() {
        $("#priceInput").keyup(function() {
          let amountBtnShow = document.getElementById('amountBtn');
          if($(this).val() == "") {
            amountBtnShow.style.display = 'none';
          } else {
            amountBtnShow.style.display = 'block';
          }
        });
        $("#autocomplete").keyup(function() {
          let addressBtnShow = document.getElementById('addressBtn');
          if($(this).val() == "") {
            addressBtnShow.style.display = 'none';
          } else {
            addressBtnShow.style.display = 'block';
          }
        });
        $("#inputCreditScore").keyup(function() {
          let scoreBtnShow = document.getElementById('scoreBtn');
          if($(this).val() == "") {
            scoreBtnShow.style.display = 'none';
          } else {
            scoreBtnShow.style.display = 'block';
          }
        });
        $("#inputPhone").keyup(function() {
          let phoneBtnShow = document.getElementById('phoneBtn');
          if($(this).val() == "") {
            phoneBtnShow.style.display = 'none';
          } else {
            phoneBtnShow.style.display = 'block';
          }
        });
        $("#inputLastName").keyup(function() {
          let nameBtnShow = document.getElementById('nameBtn');
          if($(this).val() == "") {
            nameBtnShow.style.display = 'none';
          } else {
            nameBtnShow.style.display = 'block';
          }
        });
        $("#inputEmail").keyup(function() {
          let emailBtnShow = document.getElementById('emailBtn');
          if($(this).val() == "") {
            emailBtnShow.style.display = 'none';
          } else {
            emailBtnShow.style.display = 'block';
          }
        });
      }); 



