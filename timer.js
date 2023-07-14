var timerInterval;
var hours = 0, minutes = 0, seconds = 0;

function startTimer() {
  timerInterval = setInterval(function () {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function updateDisplay() {
  var hoursDisplay = padNumber(hours);
  var minutesDisplay = padNumber(minutes);
  var secondsDisplay = padNumber(seconds);

  document.getElementById("hours").textContent = hoursDisplay;
  document.getElementById("minutes").textContent = minutesDisplay;
  document.getElementById("seconds").textContent = secondsDisplay;
}

function padNumber(number) {
  return (number < 10) ? "0" + number : number;
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
