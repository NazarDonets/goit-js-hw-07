const slider = document.querySelector(`#font-size-control`);

const text = document.querySelector(`#text`);

text.style.fontSize = `${slider.value}px`;

slider.addEventListener(`change`, (e) => {
   text.style.fontSize = `${e.target.value}px`;
});