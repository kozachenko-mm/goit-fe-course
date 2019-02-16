"use strict";
const adminLogin = "admin";
const adminPassword = "m4ngo1zh4ackz0r";

// запрашмваем у пользователя логин
const userLogin = prompt("Enter Login");

// если логин правильный запрашиваем пароль
if (userLogin === adminLogin) {
  const userPassword = prompt("Enter Password");

  if (userPassword === adminPassword) {
    alert("Добро пожаловать");
    // при отмене ввода
  } else if (userPassword === null) {
    alert("Отменено пользователем");
    // при неправильном пароле
  } else if (userPassword !== adminPassword) {
    alert("Доступ запрещен, неверный пароль!");
  }
  // при отмене ввода
} else if (userLogin === null) {
  alert("Отменено пользователем!");
  // при не правильном логине
} else if (userLogin !== adminLogin) {
  alert("Доступ запрещен, неверный логин!");
}
