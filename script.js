var form = document.querySelector('form');
var minInput = document.querySelector('.min-input');
var maxInput = document.querySelector('.max-input');
var enterButton = document.querySelector('.enter-btn');
var guessInput = document.querySelector('.guess-input');
var guessButton = document.querySelector('.guess-btn');
var clearButton = document.querySelector('.clear-btn');
var resetButton = document.querySelector('.reset-btn');
var randomNum;

form.addEventListener('input', activateEnter);
form.addEventListener('input', activateGuess);
enterButton.addEventListener('click', submitRange);
guessButton.addEventListener('click', checkResult);
resetButton.addEventListener('click', function() {
  window.location.reload();
});

function activateEnter(e) {
  e.preventDefault();
  if(minInput.value !== '' && maxInput.value !== '') {
    enterButton.removeAttribute('disabled');
  } else {
    enterButton.setAttribute('disabled', true);
  }
}; 

function activateGuess(e) {
  var buttons = [guessButton, clearButton, resetButton];

  e.preventDefault();
  buttons.forEach(function(btn) {
    if(guessInput.value !== '') {
      btn.removeAttribute('disabled');
    } else {
      btn.setAttribute('disabled', true);
    };
  });
};

function submitRange(e) {
  e.preventDefault();
  var min = parseInt(minInput.value);
  var max = parseInt(maxInput.value);
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log('randomNum:', randomNum);
};

function checkResult(e) {  
  e.preventDefault();

  var guessValue = guessInput.value;
  var guessDisplay = document.querySelector('.guess-display');
  var message = document.querySelector('.msg');

  console.log(guessValue, randomNum)
  guessDisplay.innerText = guessValue;
  
  if(guessValue == randomNum){
    message.innerText = 'BOOM!';
  } else if(guessValue < randomNum) {
    message.innerText = 'Wayy too low!';
  } else if(guessValue > randomNum) {
    message.innerText = 'Too high! Slow down killer';
  } else if(isNaN(guessValue)) {
    message.innerText = 'Number only plz!';
  }
};