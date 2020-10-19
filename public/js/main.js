// Get the modal
var mainModal = document.getElementById("myModal");
var rentalModal = document.getElementById('rentalModal');
let flipModal = document.querySelector('#flipModal');
let contactUsModal = document.querySelector('#contactUsModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var rentalBtn = document.getElementById('rentalBtn');
var flipBtn = document.getElementById('flipBtn')
let learnMoreBtn = document.querySelector('#learnMoreBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var flipSpan = document.getElementsByClassName("close")[2];
let contactSpan = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  mainModal.style.display = "block";
}

rentalBtn.onclick = function() {
  rentalModal.style.display = "block";
}

flipBtn.onclick = function() {
  flipModal.style.display = "block";
}

learnMoreBtn.onclick = function() {
  contactUsModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  mainModal.style.display = "none";
}

span2.onclick = function() {
  rentalModal.style.display = "none";
}

flipSpan.onclick = function() {
  flipModal.style.display = "none";
}

contactSpan.onclick = function() {
  contactUsModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

