// script.js
const squares = document.querySelectorAll('.square');
const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#time-left');

let result = 0;
let hitPosition;
let currentTime = 30;
let timerId = null;

// Function to pick a random square
function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole');
  });

  let randomSquare = squares[Math.floor(Math.random() * squares.length)];
  randomSquare.classList.add('mole');

  // Save the ID of the square with the mole
  hitPosition = randomSquare.id;
}

// Function to handle mole click
squares.forEach(square => {
  square.addEventListener('click', () => {
    if (square.id === hitPosition) {
      result++;
      scoreDisplay.textContent = result;
      hitPosition = null; // Reset hit position
    }
  });
});

// Function to move the mole periodically
function moveMole() {
  timerId = setInterval(randomSquare, 1000);
}

// Function to count down the timer
function countDown() {
  currentTime--;
  timeLeftDisplay.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId); // Stop moving the mole
    clearInterval(countDownTimerId); // Stop the countdown
    alert('Game Over! Your final score is ' + result);
  }
}

// Start the game
moveMole();
let countDownTimerId = setInterval(countDown, 1000);