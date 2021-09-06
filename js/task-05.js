const inputField = document.querySelector(`#name-input`);

const output = document.querySelector(`#name-output`);

const defaultValue = output.textContent;

inputField.addEventListener(`input`, (e) => {
   const value = e.target.value;
   if (value.length) {
      output.textContent = value;
   }
   else {
      output.textContent = defaultValue;
   };
});
