var myButton = document.querySelector("button");
myButton.onclick = function() {
  setUserName();
};

var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello World!";

var myImage = document.querySelector("img");
myImage.onclick = function() {
  var images = ["images/firefox-icon.png", "images/chrome-icon.png"];
  var currentImage = myImage.getAttribute("src");
  if (currentImage === images[0]) {
    myImage.setAttribute('src', images[1]);
  } else {
    myImage.setAttribute('src', images[0]);
  }
};

function setUserName() {
  var myName = prompt("Please enter your name");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
}

if(!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}