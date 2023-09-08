const counter = document.querySelector('.counter');
const increaseButton = document.querySelector('.button-increase');
const decreaseButton = document.querySelector('.button-decrease');
const resetButton = document.querySelector('.button-reset');
const counterValue = document.querySelector('.counter-value');
const counterTitle = document.querySelector('.counter-title');

function disableKeydown(event) {
  event.preventDefault();
  event.stopPropagation();
}

function incrementCounter() {
  let currentValue = counterValue.textContent;
  let currentValueAsNumber = parseInt(currentValue);
  let newValue = (currentValueAsNumber += 1);
  if (newValue > 5) {
    newValue = 5;
    counter.classList.add('counter--limit');
    counterTitle.textContent = 'Limit Reached!';
    increaseButton.disabled = true;
    decreaseButton.disabled = true;
    document.addEventListener('keydown', disableKeydown);
  }
  counterValue.textContent = newValue;
}

function decrementCounter() {
  let currentValue = counterValue.textContent;
  let currentValueAsNumber = parseInt(currentValue);
  let newValue = (currentValueAsNumber -= 1);
  if (newValue < 0) {
    newValue = 0;
  }
  counterValue.textContent = newValue;
}

resetButton.addEventListener('click', () => {
  counterValue.textContent = 0;
  counter.classList.remove('counter--limit');
  counterTitle.textContent = 'Fancy Counter';
  increaseButton.disabled = false;
  decreaseButton.disabled = false;
});

increaseButton.addEventListener('click', incrementCounter);
decreaseButton.addEventListener('click', decrementCounter);

document.addEventListener('keydown', (event) => {
  if (event.key == 'ArrowRight') {
    incrementCounter();
  } else if (event.key == 'ArrowLeft') {
    decrementCounter();
  }
});
