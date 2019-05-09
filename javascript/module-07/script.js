"use strict";
/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/
const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-1.com"
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-2.com"
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-3.com"
  }
];

function createPostCard({ img, title, text, link }) {
  // Создаем блок для карточки
  const card = document.createElement("div"),
    // Создаем ссылку. Вся карточка будет ссылкой
    cardLink = document.createElement("a"),
    // Cоздаем элементы блока
    image = document.createElement("img"),
    cardTitle = document.createElement("h2"),
    cardDescription = document.createElement("p");

  //  Добавляем классы элементам
  card.classList.add("card");
  image.classList.add("card__image");
  cardTitle.classList.add("card__title");
  cardDescription.classList.add("card__description");

  //  Добавляем атрибуты элементам
  image.setAttribute("src", img);
  image.setAttribute("alt", "random image");
  cardLink.setAttribute("href", link);

  // Наполняем текстовым контентом
  cardTitle.textContent = title;
  cardDescription.textContent = text;

  // Размещаем элементы карточки
  card.appendChild(cardLink);
  cardLink.appendChild(image);
  cardLink.appendChild(cardTitle);
  cardLink.appendChild(cardDescription);

  return card;
}

function createCards(arr) {
  return arr.reduce((acc, el) => [...acc, createPostCard(el)], []);
}

const cards = createCards(posts);
const parentCards = document.querySelector(".section");

cards.map(el => {
  parentCards.appendChild(el);
});
