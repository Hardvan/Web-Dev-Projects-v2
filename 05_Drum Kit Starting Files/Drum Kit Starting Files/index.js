// Button Click Detection
let drumButtons = document.querySelectorAll(".drum"); // Selects all the buttons with class drum

for (let i = 0; i < drumButtons.length; i++) {
  // Adding Event Listener to all the buttons
  drumButtons[i].addEventListener("click", function () {
    let key = this.innerHTML;

    makeSound(key);
    buttonAnimation(key);
  });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function (event) {
  let key = event.key;

  makeSound(key);
  buttonAnimation(key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(`Wrong Key Pressed: ${key}`);
      break;
  }
}

// Animating the Drums when Pressed
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  // Removing the added class after 100ms
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
