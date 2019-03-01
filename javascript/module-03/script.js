"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// Функция проверки валидности
const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};

// Функция проверки уникальности
const isLoginUnique = function (allLogins, login) {
  return !allLogins.includes(login);
};

// Функция добавления
const addLogin = function (allLogins, login) {
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      return 'Логин успешно добавлен!';
    } else {
      return 'Такой логин уже используется!'
    }
  } else {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
};

//Вызовы функции для проверки
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(logins);