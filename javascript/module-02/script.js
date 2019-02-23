"use strict";
let userInput;
const numbers = [];


do {
  // Просим пользователя ввести число
  userInput = prompt('Введите число');
  // Ввведеное пользователем число преобразовываем в число и добавляем в конец массива
  numbers.push(Number(userInput));
} 

// прекращаем цикл при нажатии на cansel
while (userInput != null);
let sum = 0;
// Сумируем числа в массиве
for (let i = 0; i < numbers.length; i+=1) {
  sum += numbers[i];
  
}

// Выводим результат на екран
alert('Сумма введеных чисел = ' + sum);