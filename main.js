// var name = document.getElementById('name');
// var next = document.getElementById('next');

// // function nextPage() {
//   if (next.style.display === 'none') {
//     document.getElementById('next').style.display = 'block';
//   } else {
//     document.getElementById('name').style.display = 'none';
//   }
// // }

var myVar;

function myLoader() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


window.onscroll = function () { myFunction2() };

var navbar = document.getElementById("main-nav");

var sticky = navbar.offsetTop;

function myFunction2() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



function myFunction() {
  var x = document.getElementById("pword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

    var currentTab = 0; 
showTab(currentTab); 

function showTab(n) {

  var x = document.getElementsByClassName("name");
  x[n].style.display = "block";

  // if (n == 0) {
  //   document.getElementById("prebtn").style.display = "none";
  // } else {
  //   document.getElementById("prebtn").style.display = "inline";
  // }
  // if (n == (x.length -1)) {
  //   document.getElementById("ctl").innerHTML = "continue";
  // } else {
  //   document.getElementById("ctl").innerHTML = "continue";
  // }

};

function previous() {
  document.getElementById('name').style.display = "block";
   };



var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
}


myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
}


myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}


function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("formss");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}