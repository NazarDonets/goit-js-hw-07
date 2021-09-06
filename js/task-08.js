const input = document.querySelector(`#controls input[type="number"]`)

const createBtn = document.querySelector(`#controls button[data-action="render"]`);

const removeBtn = document.querySelector(`#controls button[data-action="destroy"]`);

const boxesContainer = document.querySelector(`#boxes`);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

let width = 30;
let height = 30;

const createBoxes = (amount) => {
   for (let i = 0; i < amount; i++) {
      const newDiv = document.createElement(`div`);
      newDiv.style.width = `${width}px`;
      newDiv.style.height = `${height}px`;
      width += 10;
      height += 10;
      newDiv.style.border = `1px solid black`;
      boxesContainer.append(newDiv);
      newDiv.style.backgroundColor = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`
   };
};

const destroyBoxes = () => {
   boxesContainer.innerHTML = ``;
   width = 30;
   height = 30;
};

createBtn.addEventListener(`click`, (e) => {
   createBoxes(input.value);
});

removeBtn.addEventListener(`click`, (e) => {
   destroyBoxes();
});
