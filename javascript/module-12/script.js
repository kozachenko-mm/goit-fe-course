"use strict";
// Переменные для работы с DOM
const list = document.querySelector(".list"),
  form = document.querySelector(".js-form"),
  inputName = document.querySelector('input[type="text"]'),
  inputUrl = document.querySelector('input[type="url"]'),
  listItem = document.querySelector(".list-item");

// массив для проверки URL
const arrInputUrl = [];

form.addEventListener("submit", addBookmark);

function addBookmark(event) {
  event.preventDefault();
  // проверяем на уникальность URL
  if (arrInputUrl.includes(inputUrl.value)) {
    alert("Закладка с таким URL уже существует");
    return;
  }
  //  массив для шаблона
  let bookmark = [];

  // обьект массива
  const obj = {};

  // добавляем значения из input в массив обьектов
  obj.name = inputName.value;
  obj.url = inputUrl.value;
  bookmark.push(obj);

  // добавляем URL в массив
  arrInputUrl.push(inputUrl.value);

// рендерим шаблон в начало списка
  const source = document.querySelector("#url-cards").innerHTML.trim(),
    template = Handlebars.compile(source),
    result = template(bookmark);
  list.insertAdjacentHTML("afterbegin", result);

  // слушатель на удаление закладки
  list.addEventListener("click", delBookmark);
  function delBookmark(event) {

    // удаление URL из массива проверки адрессов
    const ind = event.path[1];
    arrInputUrl.splice(
      arrInputUrl.indexOf(ind.children[1].children[0].textContent),
      1
    );
    // удаляем елемент списка закладок
    event.path[1].remove();
  }
  form.reset();
}
