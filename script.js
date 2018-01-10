// target all grab-able elements
var userGuess = document.querySelector('.user-input');
var guessButton = document.querySelector('.guess');
var clearButton = document.querySelector('.clear');
var numberDisplay = document.querySelector('.num');
var randomRoundOne = Math.floor(Math.random() * 100) + 1;
var messageDisplay = document.querySelector('.msg');
var resetButton = document.querySelector('.reset');

// check if randomizer functions
console.log ('random I: ' + randomRoundOne);

// enable ALL buttons once user gives input
userGuess.addEventListener('click', function() {
  guessButton.removeAttribute('disabled');
  clearButton.removeAttribute('disabled');
  resetButton.removeAttribute('disabled');
});

// click 'Guess' to grab user's value and display it
guessButton.addEventListener('click', function(event) {
  numberDisplay.innerText = userGuess.value;
  event.preventDefault();
});

// click 'Guess' to validate user's guess
guessButton.addEventListener('click', checkRoundOne);
function checkRoundOne() {
  var guessRoundOne = parseInt(userGuess.value);
  if (guessRoundOne === randomRoundOne) {
    messageDisplay.innerText = 'BOOM!';    
    var hiddenSection = document.querySelector('.hidden');
    hiddenSection.classList.remove('hidden');
    userGuess.value = '';
  } else if (guessRoundOne < randomRoundOne) {
    messageDisplay.innerText = 'That is too looow...';
      if (guessRoundOne < 1) {
        messageDisplay.innerText = 'No-no. No negative Nancy.';
      }
  } else if (guessRoundOne > randomRoundOne) {
    messageDisplay.innerText = 'That is toooo high!';
    if (guessRoundOne > 100) {
      messageDisplay.innerText = "Slow down! 1-100 only";
    }  
  } else {
    messageDisplay.innerText = 'Number only plz!';
  }
}

// click 'Clear' to clear input field
clearButton.addEventListener('click', function() {
  userGuess.value = '';
  clearButton.setAttribute('disabled', true);
  guessButton.setAttribute('disabled', true);
  resetButton.setAttribute('disabled', true);
  enterButton.setAttribute('disabled', true);
});

// click 'Reset' to reset game or reload page
resetButton.addEventListener('click', function() {
  window.location.reload(true);
});

// target new elements in Round 2
var minRange = document.querySelector('.min-input');
var maxRange = document.querySelector('.max-input');
var enterButton = document.querySelector('.enter');

// enable 'Enter' button once input min & max value
minRange.addEventListener('click', activateEnterButton, false);
maxRange.addEventListener('click', activateEnterButton, false);
function activateEnterButton () {
  enterButton.removeAttribute('disabled');
  
}

// hit 'Enter' to validate user's guess Round 2
enterButton.addEventListener('click', checkRoundTwo);
function checkRoundTwo() {
  numberDisplay.innerText = '??';
  messageDisplay.innerText = '';
  console.log('check message: ' + messageDisplay.innerText);
  var readyText = document.querySelector('.hidden-ready');
  readyText.classList.remove('hidden-ready');
  var guessRoundTwo = parseInt(userGuess.value);
  var minValue = parseInt(minRange.value);
  var maxValue = parseInt(maxRange.value);
  var randomRoundTwo = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  if (guessRoundTwo === randomRoundTwo) {
    messageDisplay.innerText = 'BING BANG BOOM!';    
  } else if (guessRoundTwo < randomRoundTwo) {
    messageDisplay.innerText = 'That is too looow...';
      if (guessRoundTwo < minValue) {
        messageDisplay.innerText = 'Your mininum number is ' + minValue;
      }
  } else if (guessRoundTwo > randomRoundTwo) {
    messageDisplay.innerText = 'That is toooo high!';
    if (guessRoundTwo > maxValue) {
      messageDisplay.innerText = 'Your maximum number is ' + maxValue;
    }  
  } else {
    messageDisplay.innerText = 'Number only plz!';
  }
  console.log ('random II: ' + randomRoundTwo);
}







// FAILED BREAKS:
// 1) global 'var userValue = userGuess.value'
// 2) global 'var numberGuess = parseInt(userValue)'