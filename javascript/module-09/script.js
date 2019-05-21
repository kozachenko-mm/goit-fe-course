"use strict";

const timer = document.querySelector(".js-time"),
  btnStart = document.querySelector(".js-start"),
  btnTakeLap = document.querySelector(".js-take-lap"),
  btnReset = document.querySelector(".js-reset"),
  list = document.querySelector(".js-laps");

btnStart.addEventListener("click", getStart);
btnTakeLap.addEventListener("click", getValueLap);
btnReset.addEventListener("click", getReset);

let counterMs,
  counterSec,
  counterMin,
  deltaDate = 0,
  dateNow = 0,
  timerId = null;

btnReset.disabled = true;


function getStart() {
  if (btnStart.textContent == "Start") {
    deltaDate = 0;
  }
  if (btnStart.textContent == "Pause") {
    btnStart.textContent = "Contunue";
    clearInterval(timerId);
    return;
  }
  btnReset.disabled = false;
  btnStart.textContent = "Pause";
  dateNow = Date.now() - deltaDate;
  timerId = setInterval(updateTimerValue, 100);
}

function updateTimerValue() {
  deltaDate = Date.now() - dateNow;
  counterMin = new Date(deltaDate).getMinutes();
  if (counterMin < 10) {
    counterMin = `0${counterMin}`;
  }
  counterSec = new Date(deltaDate).getSeconds();
  if (counterSec < 10) {
    counterSec = `0${counterSec}`;
  }
  counterMs = Math.floor(new Date(deltaDate).getMilliseconds() / 100);
  return (timer.textContent = `${counterMin}:${counterSec}.${counterMs}`);
}
function getReset() {
  clearInterval(timerId);
  btnStart.textContent = "Start";
  list.innerHTML = null;
  btnReset.disabled = true;
  (counterMs = 0), (counterSec = 0), (counterMin = 0);
  timer.textContent = "00:00.0";
}
function getValueLap() {
  const li = document.createElement("li");
  list.appendChild(li);
  li.textContent = timer.textContent;
  btnReset.disabled = false;
}
