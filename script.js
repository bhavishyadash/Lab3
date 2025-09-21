
let correctnumber = Math.floor(Math.random() * 100) + 1;
const guessinput = document.querySelector("#guessinput");
const guessbutton = document.querySelector("#guessbutton");
const resetbutton = document.querySelector("#resetbutton");

const feedback = document.querySelector("#feedback");
const pastguesses = document.querySelector("#pastguesses");
let invalidCount = 0;
let guesses = [];

guessbutton.addEventListener("click", function() {
  const guess = Number(guessinput.value);
  if (!guess || guess < 1 || guess > 100) {
    invalidCount++;
    if (invalidCount >= 2) {
      feedback.textContent = "bro stop! Numbers from 1 to 100 is only valid!";
    } else {
      feedback.textContent = "Too sad that you struggle understand english :(";
    }
    guessinput.style.backgroundColor = "lightcoral";
    return;
  } else {
    invalidCount = 0;
  }
  guesses.push(guess);
  if (guesses.length === 1) {
    pastguesses.textContent = "Past guesses: " + guess;
  } else {
    pastguesses.textContent += ", " + guess;
  }
  if (guess === correctnumber) {
    feedback.textContent = "Correct! You guessed the number.";
    feedback.style.color = "lightgreen";
    guessinput.style.backgroundColor = "lightgreen";
  } else if (guess > correctnumber) {
    feedback.textContent = "Number is higher";
    feedback.style.color = "red";
    guessinput.style.backgroundColor = "lightcoral";
  } else {
    feedback.textContent = "Number is lower";
    feedback.style.color = "red";
    guessinput.style.backgroundColor = "lightcoral";
  }
});

resetbutton.addEventListener("click", function() {
  correctnumber = Math.floor(Math.random() * 100) + 1;
  guessinput.value = '';
  guessinput.style.backgroundColor = '';
  feedback.textContent = '';
  guesses = [];
  pastguesses.textContent = '';
  guessinput.focus();
});
