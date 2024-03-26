let intervalIds = [];

/**
 * Sets an interval that's tracked for later stopping. Adds interval ID to a global list.
 *
 * @param {Function} fn - Function to execute at intervals.
 * @param {number} time - Interval time in milliseconds.
 * @returns {number} Interval ID.
 */
function setStoppableInterval(fn, time) {
  let id = setInterval(fn, time);
  intervalIds.push(id);
  return id;
}

/**
 * Stops the game after a delay, including halting game sounds and clearing all tracked intervals.
 * Assumes `stopGameSound` function exists to stop sounds and a global `intervalIds` array tracks interval IDs.
 */
function stopGame() {
  setTimeout(() => {
    stopGameSound();
    this.stopIntervalFromArray();
  }, 2500);
}

/**
 * Stops all intervals identified by their IDs stored in the `intervalIds` array. This function iterates through the array, 
 * calling `clearInterval()` on each ID, effectively stopping the execution of the associated intervals. 
 */
function stopIntervalFromArray() {
  intervalStop = true;
  intervalIds.forEach((intervalId) => stopIntervalFromObject(intervalId));
}

/**
 * Stops the interval timer associated with the specified interval ID.
 * @param {number} intervalId - The ID of the interval timer to stop.
 * @returns {void}
 */
function stopIntervalFromObject(intervalId) {
  clearInterval(intervalId);
}

/**
 * Starts game intervals for characters, enemies, coins, poison bottles, and the end boss. It sets `intervalStop` to false.
 */
function startIntervalFromArray() {
 world.character.animate();
 startArrayInterval(world.level.enemies);
 startArrayInterval(world.level.coins);
 startArrayInterval(world.level.poisonBottle);
 world.level.endboss[0].animate();
 intervalStop = false;
}

/**
 * Iterates over an array and calls `animateContent()` on each element.
 * @param {Array} arrayContent - Array of objects with an `animateContent` method.
 */
function startArrayInterval(arrayContent) {
  for (let i = 0; i < arrayContent.length; i++) {
    arrayContent[i].animateContent();    
  }
}