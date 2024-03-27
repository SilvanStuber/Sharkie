let canvas;
let world;
let ctx;
let characterPositionX = 0;
let characterPositionY = 220;
let keyboard = new Keyboard();
let endbossDead = false;
let characterDead = false;
let gameHasStarted = false;
let gameIsFinished = false;
let fullScreenIsActive = false;
let languageEnglish = true;
let arrowInfoContent = true;
let spaceInfoContent = false;
let dInfoContent = false;
let gInfoContent = false;
let intervalStop = false;
let infoBoxOpen = false;

/**
 * Initializes the application, setting up the canvas, world, and UI elements for the game.
 * It retrieves the canvas element from the DOM, creates a new World instance with the canvas and keyboard, and hides both the 'turnScreen' and 'touchButton' elements.
 * This setup prepares the UI for the game by ensuring that certain elements are not visible initially, providing a cleaner starting interface.
 */
function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  removeTouchContent();
  checkScreen();
}

/**
 * Toggles fullscreen mode for the game. If fullscreen is not active, it activates fullscreen
 * mode and changes the fullscreen button to indicate window mode. If fullscreen is active,
 * it exits fullscreen mode and updates the button to indicate fullscreen mode.
 *
 * Assumes existence of global `fullScreenIsActive` flag, `openFullscreen()` to activate,
 * and `closeFullscreen()` to deactivate fullscreen mode.
 */
function addFullScreen() {
  let fullscreen = document.getElementById("fullscreen");
  if (!fullScreenIsActive) {
    openFullscreen(fullscreen);
    document.getElementById("fullScreenButton").src = "./img/6.Botones/Key/window-mode.png";
    fullScreenIsActive = true;
  } else {
    closeFullscreen();
    document.getElementById("fullScreenButton").src = "./img/6.Botones/Key/fullscreen.png";
    fullScreenIsActive = false;
  }
  checkOrientation();
}

/**
 * Checks the orientation of the window and adjusts canvas height accordingly.
 */
function checkOrientation() {
  if (window.matchMedia("(orientation: landscape)").matches) {
    if (window.innerHeight < 480) {
      newHeight = window.innerHeight;
      document.getElementById("canvas").style.height = `${newHeight}px`;
    }
  } else {
    document.getElementById("canvas").style.height = `100%`;
  }
}

/**
 * Requests fullscreen mode for a given DOM element. It supports multiple browser implementations by
 * checking for various fullscreen methods available on the element.
 */
function openFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

/**
 * Exits fullscreen mode, supporting various browser implementations. This function checks for
 * and calls the appropriate method to exit fullscreen mode based on the browser's capabilities.
 */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

/**
 * Periodically checks the screen and sets content accordingly.
 */
function checkScreen() {
  setInterval(() => {
    if (!infoBoxOpen && !gameIsFinished) {
      checkTheScreenAndSetContent();
    } 
  }, 125);
}

/**
 * Checks the current screen's touch capability and user agent to determine content and functionality adjustments based on device orientation. It triggers different actions for touch-based devices depending on whether the device is in portrait or landscape mode. For non-touch devices, it removes touch-specific content.
 *
 * - If a touch-enabled device is detected (through user agent string or 'ontouchstart'), it further checks the device orientation.
 * - In portrait mode, it prompts the user to turn their device and stops certain intervals (if any are specified).
 * - In landscape mode, and if the game has started and requires interval-based actions to be paused/resumed, it resumes these actions and removes any turn-device prompts.
 * - For non-touch devices, it removes content or functionality that requires touch.
 */
function checkTheScreenAndSetContent() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    setTouchConent();
  } else {
    removeTouchContent();
    if (gameHasStarted && intervalStop) {
      startIntervalFromArray();
    }
  }
}

/**
 * Adjusts the UI and functionality for touch-enabled devices based on the 
 * current orientation. In portrait mode, prompts users to turn their device 
 * and stops intervals.
 * In landscape mode, resumes intervals if conditions are met and removes the 
 * turn device prompt.
 */
function setTouchConent() {
  if (window.matchMedia("(orientation: portrait)").matches) {
    addTurnDevice();
    stopIntervalFromArray();
  } else {
    if (gameHasStarted && intervalStop) {
      startIntervalFromArray();
    }
    removeTurnDevice();
  }
}

/**
 * Displays a prompt for the user to turn their device by showing an element with the ID "turnScreen" and hides elements related to touch interactions by adding a "d-none"
 * class to them. This is typically used to encourage users to switch to landscape mode on touch-enabled devices.
 *
 */
function addTurnDevice() {
  document.getElementById("turnScreen").classList.remove("d-none");
  document.getElementById("touchButton").classList.add("d-none");
  document.getElementById("touchButtonSpace").classList.add("d-none");
}

/**
 * Hides the device rotation prompt and shows touch interaction elements by managing CSS classes. It reverses the actions taken by the `addTurnDevice` function,
 * making it suitable for scenarios where the device orientation is now acceptable, or touch interactions are required.
 *
 */
function removeTurnDevice() {
  document.getElementById("turnScreen").classList.add("d-none");
  document.getElementById("touchButton").classList.remove("d-none");
  document.getElementById("touchButtonSpace").classList.remove("d-none");
}

/**
 * Hides UI elements that are specific to touch interactions or orientation instructions. This function is called to simplify the UI for devices or contexts where touch
 * interactions are not applicable or when such content is deemed unnecessary. It hides the "turnScreen" prompt as well as touch interaction elements "touchButton" and
 * "touchButtonSpace" by adding a "d-none" class to them.
 */
function removeTouchContent() {
  document.getElementById("turnScreen").classList.add("d-none");
  document.getElementById("touchButton").classList.add("d-none");
  document.getElementById("touchButtonSpace").classList.add("d-none");
}

/**
 * Sets the application's language based on the given parameter and then opens the information box.
 * If the language is set to "german", it sets `languageEnglish` to false, otherwise true.
 *
 * @param {string} language - The desired language for the application ("german" or any other string for English).
 */
function setLanguage(language) {
  if (language == "german") {
    languageEnglish = false;
  } else {
    languageEnglish = true;
  }
  openInfoBox();
}

/**
 * Opens the information box with dynamic content. It first removes any existing styles from the info box.
 * Depending on the content flags (`arrowInfoContent` or `gInfoContent`), it adjusts the visibility of navigation arrows.
 * Finally, it generates and displays the new content within the info box.
 */
function openInfoBox() {
  infoBoxOpen = true;
  stopIntervalFromArray();
  removeStyleInfoBox();
  if (arrowInfoContent) {
    document.getElementById("arrowLeftInfoBox").classList.add("d-none");
  } else if (gInfoContent) {
    document.getElementById("arrowRightInfoBox").classList.add("d-none");
  }
  generateInfoContent();
}

/**
 * Removes the 'd-none' class from the infobox and its arrow navigation elements, making them visible.
 * This function is typically used to reset the visibility of these elements before updating the info box content.
 */
function removeStyleInfoBox() {
  document.getElementById("infobox").classList.remove("d-none");
  document.getElementById("arrowLeftInfoBox").classList.remove("d-none");
  document.getElementById("arrowRightInfoBox").classList.remove("d-none");
}

/**
 * Closes the information box by adding the 'd-none' class to hide it. It also resets variables related
 * to info content, ensuring a clean state for when the info box is opened again. The default state for
 * navigation arrows is set to visible (`arrowInfoContent = true`).
 */
function closeInfoBox() {
  document.getElementById("infobox").classList.add("d-none");
  resetVariablesInfoContent();
  arrowInfoContent = true;
  startIntervalFromArray();
  infoBoxOpen = false;
}

/**
 * Generates and displays the appropriate information content based on the current content flags.
 * It updates the instruction content container with specific instructions for different keys,
 * displaying either English or German content based on the language selection.
 */
function generateInfoContent() {
  let instructionContentContainer = document.getElementById("instructionContent");
  if (arrowInfoContent) {
    infoContentKey(instructionContentContainer, generateArrowKeyContentEnglish(), generateArrowKeyContentGerman());
  } else if (spaceInfoContent) {
    infoContentKey(instructionContentContainer, generateSpaceKeyContentEnglish(), generateSpaceKeyContentGerman());
  } else if (dInfoContent) {
    infoContentKey(instructionContentContainer, generateDkeyContentEnglish(), generateDkeyContentGerman());
  } else if (gInfoContent) {
    infoContentKey(instructionContentContainer, generateGkeyContentEnglish(), generateGkeyContentGerman());
  }
}

/**
 * Updates the instruction content container with either English or German content based on the
 * current language setting. This function is utilized to dynamically display game instructions
 * in the selected language.
 *
 * @param {string} englishContent - The content to display if the language is set to English.
 * @param {string} germanContent - The content to display if the language is set to German.
 */
function infoContentKey(instructionContentContainer, englishContent, germanContent) {
  if (languageEnglish) {
    instructionContentContainer.innerHTML = englishContent;
  } else {
    instructionContentContainer.innerHTML = germanContent;
  }
}

/**
 * Cycles through different info content types when navigating through the info box. It resets current info
 * content variables and sets the next appropriate content flag before reopening the info box with the new content.
 */
function previousNextInfoContent() {
  if (spaceInfoContent) {
    resetVariablesInfoContent();
    arrowInfoContent = true;
  } else if (dInfoContent) {
    resetVariablesInfoContent();
    spaceInfoContent = true;
  } else if (gInfoContent) {
    resetVariablesInfoContent();
    dInfoContent = true;
  }
  openInfoBox();
}

/**
 * Loads the next set of information content based on the current state. It transitions through
 * predefined content stages (arrow, space, d, g) by resetting existing content flags and setting
 * the next content flag to true. After updating the content flag, it opens the info box with the
 * new content.
 */
function loadNextInfoContent() {
  if (arrowInfoContent) {
    resetVariablesInfoContent();
    spaceInfoContent = true;
  } else if (spaceInfoContent) {
    resetVariablesInfoContent();
    dInfoContent = true;
  } else if (dInfoContent) {
    resetVariablesInfoContent();
    gInfoContent = true;
  }
  openInfoBox();
}

/**
 * Resets all content-related flags to false. This function is typically used to clear the current
 * state before setting a new content flag to true, ensuring that only one type of content is active
 * at a time.
 */
function resetVariablesInfoContent() {
  arrowInfoContent = false;
  spaceInfoContent = false;
  dInfoContent = false;
  gInfoContent = false;
}
