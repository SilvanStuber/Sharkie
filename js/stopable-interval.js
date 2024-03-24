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
    intervalIds.forEach((intervalId) => clearInterval(intervalId));
  }, 2500);
}

/**
 * Stops the interval timer associated with the specified interval ID.
 * @param {number} intervalId - The ID of the interval timer to stop.
 * @returns {void}
 */
function stopIntervalFromObject(intervalId) {
  clearInterval(intervalId);
}
