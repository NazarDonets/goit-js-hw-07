let counterValue = document.querySelector(`#value`).textContent;

const increment = document.querySelector('#counter button[data-action="increment"]');

const decrement = document.querySelector('#counter button[data-action="decrement"]');

increment.addEventListener(`click`, (e) => {
   document.querySelector(`#value`).textContent = ++counterValue;
});

decrement.addEventListener(`click`, () => {
   document.querySelector(`#value`).textContent = --counterValue;
});