const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredientsListContainer = document.querySelector(`#ingredients`);

const ingredientsListElements = ingredients.map(ingredient => {
  const listEl = document.createElement(`li`);
  listEl.textContent = ingredient;
  return listEl;
});

ingredientsListContainer.append(...ingredientsListElements);