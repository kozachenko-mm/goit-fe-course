"use strict";

const userLogin = prompt("Enter Login");

if (userLogin === null) {
  alert("Отменено пользователем!");
}
if (userLogin !== "admin") {
  alert("Доступ запрещен, неверный логин!");
}
if (userLogin === "admin") {
  const userPassword = prompt("Enter Password");

  if (userPassword === null) {
    alert("Отменено пользователем!");
  }
  if (userPassword !== "m4ngo1zh4ackz0r") {
    alert("Доступ запрещен, неверный пароль!");
  }
  if (userPassword === "m4ngo1zh4ackz0r") {
     alert("Добро пожаловать!");
  }
}
