const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const imagesContainer = document.querySelector(`#gallery`);

// const imagesList = images.map(element => {
//   const imageListElement = document.createElement(`li`);
//   const image = document.createElement(`img`);
//   imageListElement.classList.add(`gallery-image`)
//   imageListElement.append(image);
//   image.src = element.url;
//   image.alt = element.alt;
//   image.style.display = `flex`;
//   image.style.width = `100%`;
//   return imageListElement;
// });

const imagesList = images.map(element => {
  const imageElement = element.innerHTML = `<li class="gallery-item"><img src="${element.url} alt="${element.alt}" class="gallery-image"></li>`;
  return imageElement;
}).join("");

imagesContainer.insertAdjacentHTML(`afterbegin`, imagesList);

