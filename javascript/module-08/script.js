"use strict";

const galleryItems = [
  {
    preview: "/img/orange.png",
    fullview: "img/one-1.png",
    alt: "alt text 1"
  },
  {
    preview: "img/two.png",
    fullview: "img/two-1.png",
    alt: "alt text 2"
  },
  {
    preview: "img/three.png",
    fullview: "img/three-1.png",
    alt: "alt text 3"
  },
  {
    preview: "img/four.png",
    fullview: "img/four-1.png",
    alt: "alt text 4"
  },
  {
    preview: "img/five.png",
    fullview: "img/five-1.png",
    alt: "alt text 5"
  },
  { preview: "img/six.png", fullview: "img/six-1.png", alt: "alt text 6" }
];

const fullview = document.querySelector(".fullview"),
  preview = document.querySelector(".preview");

// Устанавливаем  первую картинку заглавной
fullview.innerHTML = `<img src = '${galleryItems[0].fullview}'>`;

// Наполняем галлерею картинками из массива
const liPrewiew = galleryItems.reduce(
  (acc, el) =>
    acc +
    `<li><img src=${el.preview} data-fullview=${el.fullview} alt ="${
      el.alt
    }"></li> `,
  ""
);
preview.innerHTML = liPrewiew;

const imgFull = fullview.querySelector("img"),
  imgPre = preview.querySelectorAll("img");

imgPre[0].style.filter = "none";

function getFull(event) {
  if (event.target.nodeName !== "IMG") return;
  // делаем заглавной картинкой выбраную кликом из галлереи
  imgFull.setAttribute("src", event.target.dataset.fullview);
  //   ИЛИ эфект затемнения пропадает при клике
  imgPre.forEach(el => (el.style.filter = "grayscale(70%)"));
  if (imgFull.getAttribute("src") == event.target.dataset.fullview) {
    event.target.style.filter = "none";
  }
}
preview.addEventListener("click", getFull);

// ИЛИ убираем фильтр при наведении курсора на картинку
// function getFilter(event) {
//   if (event.target.nodeName !== "IMG") return;
//   event.target.style.filter = "none";
// }
// preview.addEventListener("mouseover", getFilter);

// function getFilterOut(event) {
//   if (event.target.nodeName !== "IMG") return;
//   event.target.style.filter = "grayscale(70%)";
// }
// preview.addEventListener("mouseout", getFilterOut);
