let intervalIds = [];

function setStoppableInterval(fn, time) {
  let id = setInterval(fn, time);
  intervalIds.push(id);
  return id;
}

function stopGame() {
  setTimeout(() => {
    stopGameSound();
    intervalIds.forEach((intervalId) => clearInterval(intervalId));
  }, 2500);
}

function stopIntervalFromObject(intervalId) {
  clearInterval(intervalId);
}
