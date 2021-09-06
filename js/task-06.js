const inputField = document.querySelector(`#validation-input`);

const requiredSymbols = Number(inputField.dataset.length);

inputField.addEventListener(`blur`, (e) => {
   inputField.classList.remove(`valid`, `invalid`);
   if (e.target.value.length === requiredSymbols) {
      inputField.classList.add(`valid`);
   } else {
      inputField.classList.add(`invalid`);
   };
});
