let counterValue = document.querySelector(`#value`);

const increment = document.querySelector('#counter button[data-action="increment"]');

const decrement = document.querySelector('#counter button[data-action="decrement"]');

increment.addEventListener(`click`, (e) => {
   counterValue.textContent = ++counterValue.textContent;
});

decrement.addEventListener(`click`, () => {
   counterValue.textContent = --counterValue.textContent;
});