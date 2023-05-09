// Generating Random Numbers

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Changing Images

var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

image1.src = "images/dice" + randomNumber1 + ".png";
image2.src = "images/dice" + randomNumber2 + ".png";

// Checking which Player Won

var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  heading.innerHTML = "Player 2 Wins!🚩";
} else {
  heading.innerHTML = "Draw!";
}
