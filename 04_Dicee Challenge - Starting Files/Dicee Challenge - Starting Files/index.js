// Generating Random Numbers
let n1 = Math.floor(Math.random() * 6) + 1;
let n2 = Math.floor(Math.random() * 6) + 1;

// Changing Images
let image1 = document.querySelector(".img1");
// OR
// let image1 = document.getElementsByClassName("img1")[0];

let image2 = document.querySelector(".img2");

image1.src = "images/dice" + n1 + ".png";
// OR (template string)
// image1.src = `images/dice${n1}.png`;

image2.src = "images/dice" + n2 + ".png";

// Checking which Player Won
let heading = document.querySelector("h1");
if (n1 > n2) {
  heading.innerHTML = "🚩 Player 1 Wins!";
} else if (n1 < n2) {
  heading.innerHTML = "Player 2 Wins! 🚩";
} else {
  heading.innerHTML = "Draw!";
}
