"use strict";

const timer = document.querySelector(".js-time"),
  btnStart = document.querySelector(".js-start"),
  btnTakeLap = document.querySelector(".js-take-lap"),
  btnReset = document.querySelector(".js-reset"),
  list = document.querySelector(".js-laps");

btnStart.addEventListener("click", getStart);
btnTakeLap.addEventListener("click", getValueLap);
btnReset.addEventListener("click", getReset);

let counterMs = 0,
  counterSec = 0,
  counterMin = 0;

btnReset.disabled = true;
let timerId = null;

function getReset() {
  clearInterval(timerId);
  btnStart.textContent = "Start";
  list.innerHTML = null;
  btnReset.disabled = true;
  (counterMs = 0), (counterSec = 0), (counterMin = 0);
  timer.textContent = "00:00.0";
}

function getStart() {
  if (btnStart.textContent == "Start") {
    (counterMs = 0), (counterSec = 0), (counterMin = 0);
  }
  if (btnStart.textContent == "Pause") {
    btnStart.textContent = "Contunue";
    clearInterval(timerId);
    return;
  }
  btnReset.disabled = false;
  btnStart.textContent = "Pause";
  timerId = setInterval(updateTimerValue, 100);
}

function updateTimerValue() {
  counterMs += 1;
  timer.textContent = `0${counterMin}:0${counterSec}.${counterMs}`;
  if (counterMs > 9) {
    counterMs = 0;
    counterSec += 1;
    timer.textContent = `0${counterMin}:0${counterSec}.${counterMs}`;
  }
  if (counterSec > 9) {
    timer.textContent = `0${counterMin}:${counterSec}.${counterMs}`;
  }
  if (counterSec > 59) {
    counterSec = 0;
    counterMin += 1;
    timer.textContent = `0${counterMin}:${counterSec}.${counterMs}`;
  }
  if (counterMin > 9) {
    timer.textContent = `${counterMin}:${counterSec}.${counterMs}`;
  }
}

function getValueLap() {
  const li = document.createElement("li");
  list.appendChild(li);
  li.textContent = timer.textContent;
  btnReset.disabled = false;
}


