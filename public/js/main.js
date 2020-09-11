let addressInput = document.querySelector('#inputAddress');

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










