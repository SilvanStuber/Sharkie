let canvas;
let world;
let ctx;
let characterPositionX = 0;
let characterPositionY = 220;
let keyboard = new Keyboard();
let endbossDead = false;
let characterDead = false;
let gameHasStarted = false;
let fullScreenIsActive = false;
let languageEnglish = true;
let arrowInfoContent = true;
let spaceInfoContent = false;
let dInfoContent = false;
let gInfoContent = false;
let intervalStop = false;

/**
 * Initializes the game world and canvas. Assumes global `keyboard` for input handling.
 */
function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
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
 * Attaches an event listener to the window that listens for resize events.
 * This event listener is used to execute the `checkAndToggleIntervals` function
 * whenever the window is resized.
 */
window.addEventListener("resize", checkAndToggleIntervals);

/**
 * Checks the current device and screen orientation. Based on these checks,
 * it decides whether to start or stop intervals. Specifically:
 * - If on a touch device (e.g., smartphones, tablets), it further checks the screen orientation.
 * - For portrait orientation, it stops intervals using `stopIntervalFromArray()`.
 * - For landscape orientation, if the game has started and intervals are stopped,
 *   it starts intervals using `startIntervalFromArray()`.
 */
function checkAndToggleIntervals() {
  if (("ontouchstart" in window) | /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    if (window.matchMedia("(orientation: portrait)").matches) {
      stopIntervalFromArray();
    } else {
      if (gameHasStarted && intervalStop) {
        startIntervalFromArray();
      }
    }
  }
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
  intervalStop = true;
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
  if (gameHasStarted) {
    startIntervalFromArray();
  }
  arrowInfoContent = true;
  intervalStop = false;
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

/**
 * Generates HTML content for the English instructions related to using the arrow keys. This content
 * includes an image representing the arrow keys and a text instruction on their use in the game,
 * emphasizing cautious movement to avoid enemies.
 *
 * @returns {string} HTML content with instructions and an image for moving the character using arrow keys.
 */
function generateArrowKeyContentEnglish() {
  return /*html*/ `
    <img img class="arrow-key-image" src="./img/6.Botones/Key/arrow keys.png" alt="Image MOVE" />
          <span class="instruction-text">
            USE THE ARROW KEYS TO MOVE SHARKIE IN ALL DIRECTIONS. HOWEVER, BE CAUTIOUS IN YOUR MOVEMENTS, YOUR ENEMIES ARE ON THE LOOKOUT AND WILL NOT HESITATE
            TO PREVENT YOU FROM REACHING YOUR GOALS!
          </span>
  `;
}

/**
 * Generates HTML content for the German instructions related to using the arrow keys. This includes
 * an image of the arrow keys and a detailed instruction for maneuvering Sharkie within the game,
 * cautioning players about enemies that might thwart their progress.
 *
 * @returns {string} HTML content including an instructional image and text for navigating using arrow keys in German.
 */
function generateArrowKeyContentGerman() {
  return /*html*/ `
    <img img class="arrow-key-image" src="./img/6.Botones/Key/arrow keys.png" alt="Image MOVE" />
          <span class="instruction-text">
            VERWENDE DIE PFEILTASTEN, UM SHARKIE IN ALLE RICHTUNGEN ZU BEWEGEN. SEI JEDOCH VORSICHTIG BEI DEINEN BEWEGUNGEN, DEINE FEINDE SIND AUF DER LAUER UND WERDEN NICHT ZÖGERN, 
            DICH DARAN ZU HINDERN, DEINE ZIELE ZU ERREICHEN!
          </span>
  `;
}

/**
 * Generates HTML content for the English instructions related to using the spacebar. This content
 * includes an image representing the spacebar key and text instruction on its use for attacking in the game,
 * highlighting the need for proximity and caution during attacks.
 *
 * @returns {string} HTML content with instructions and an image for attacking using the spacebar key.
 */
function generateSpaceKeyContentEnglish() {
  return /*html*/ `
    <img img class="space-key-image" src="./img/6.Botones/Key/Space Bar key.png" alt="Image ATTACK SPACE" />
          <span class="instruction-text">
            USE SPACEBAR TO FLING PUFFERFISH. ATTACK EFFECTIVE ONLY IN CLOSE PROXIMITY.
            BE CAREFUL, APPROACH WITH CAUTION TO ACHIEVE SAFETY WITHOUT DAMAGE.
          </span>
  `;
}

/**
 * Generates HTML content for the German instructions related to using the spacebar. This content
 * includes an image representing the spacebar key and text instruction on its use for attacking in the game,
 * emphasizing the importance of proximity for effective attacks and the need for cautious approach.
 *
 * @returns {string} HTML content with instructions and an image for attacking using the spacebar key in German.
 */
function generateSpaceKeyContentGerman() {
  return /*html*/ `
    <img img class="space-key-image" src="./img/6.Botones/Key/Space Bar key.png" alt="Image ATTACK SPACE" />
          <span class="instruction-text">
            VERWENDE LEERTASTE, UM KUGELFISCH WEWZUSCHLEUDERN. ANGRIFF NUR IN DIREKTER NÄHE EFFEKTIV. SEI VORSICHTIG, NÄHERE DICH BEDACHT, 
            UM OHNE SCHADEN SICHERHEIT ZU ERREICHEN.
          </span>
  `;
}

/**
 * Generates HTML content for the English instructions related to using the 'D' key. This content
 * includes an image representing the 'D' key and text instruction on its use for capturing jellyfish
 * with a bubble from a distance, noting its effectiveness only against jellyfish and not against pufferfish
 * or the final boss.
 *
 * @returns {string} HTML content with instructions and an image for using the 'D' key to attack in English.
 */
function generateDkeyContentEnglish() {
  return /*html*/ `
    <img img class="d-g-key-image" src="./img/6.Botones/Key/D key.png" alt="Image ATTACK D" />
          <span class="instruction-text">
           FROM A DISTANCE, YOU CAN CATCH JELLYFISH WITH A BUBBLE BY PRESSING D. 
           THIS ATTACK METHOD IS ONLY EFFECTIVE AGAINST JELLYFISH. PUFFERFISH AND THE FINAL BOSS ARE IMMUNE AND RESPOND WITH A SMILE.
          </span>
  `;
}

/**
 * Generates HTML content for the German instructions related to using the 'D' key. This content
 * includes an image representing the 'D' key and a text instruction on its use for capturing jellyfish
 * with a bubble from a distance, highlighting that this method is effective only against jellyfish,
 * with pufferfish and the final boss being immune and responding merely with a smile.
 *
 * @returns {string} HTML content with instructions and an image for using the 'D' key to attack in German.
 */
function generateDkeyContentGerman() {
  return /*html*/ `
    <img img class="d-g-key-image" src="./img/6.Botones/Key/D key.png" alt="Image ATTACK D" />
          <span class="instruction-text">
            AUS DER FERNE KANNST DU QUALLEN MIT EINER BLASE EINFANGEN, INDEM DU D DRÜCKST. DIESE ANGRIFFSMETHODE IST NUR GEGEN QUALLEN EFFEKTIV. 
            KUGELFISCHE UND DER ENDBOSS SIND IMMUN UND REAGIEREN MIT EINEM LÄCHELN.
          </span>
  `;
}

/**
 * Generates HTML content for the English instructions related to using the 'G' key. This content
 * includes an image representing the 'G' key and text instruction on releasing poison bubbles
 * by collecting poison containers. It advises sparing and strategic use against the final boss,
 * noting that pufferfish are immune and jellyfish can cause the bubbles to burst.
 *
 * @returns {string} HTML content with instructions and an image for using the 'G' key in English.
 */
function generateGkeyContentEnglish() {
  return /*html*/ `
    <img img class="d-g-key-image" src="./img/6.Botones/Key/G Key.png" alt="Image ATTACK G" />
          <span class="instruction-text">
           BY COLLECTING POISON CONTAINERS, YOU CAN RELEASE POISON BUBBLES WITH G. HOWEVER, USE THEM SPARINGLY AND STRATEGICALLY AGAINST THE FINAL BOSS.
           PUFFERFISH ARE IMMUNE TO THE POISON, AND JELLYFISH CAN CAUSE THE POISON BUBBLE TO BURST
          </span>
  `;
}

/**
 * Generates HTML content for the German instructions related to using the 'G' key. This content
 * includes an image representing the 'G' key and a text instruction on its use for releasing poison
 * bubbles, following the collection of poison containers. It advises sparing and strategic use against
 * the final boss, notes the immunity of pufferfish to the poison, and cautions that jellyfish can cause
 * the poison bubble to burst.
 *
 * @returns {string} HTML content with instructions and an image for using the 'G' key to release poison in German.
 */
function generateGkeyContentGerman() {
  return /*html*/ `
    <img img class="d-g-key-image" src="./img/6.Botones/Key/G Key.png" alt="Image ATTACK D" />
          <span class="instruction-text">
           DURCH DAS EINSAMMELN VON GIFTBEHÄLTERN KÖNNEN SIE GIFTBLASEN MIT G FREISETZEN. SETZEN SIE DIESE JEDOCH SPARSAM UND STRATEGISCH GEGEN DEN ENDBOSS EIN.
           KUGELFISCHE SIND IMMUN GEGEN DAS GIFT, UND QUALLEN KÖNNEN DIE GIFTBLASE ZUM PLATZEN BRINGEN.
          </span>
  `;
}
