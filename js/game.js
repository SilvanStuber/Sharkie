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

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (e.keyCode == 38) {
    keyboard.UP = true;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }
  if (e.keyCode == 68) {
    keyboard.D = true;
  }
  if (e.keyCode == 71) {
    keyboard.G = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (e.keyCode == 38) {
    keyboard.UP = false;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = false;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = false;
  }
  if (e.keyCode == 68) {
    keyboard.D = false;
  }
  if (e.keyCode == 71) {
    keyboard.G = false;
  }
});

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
}

function openFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

function setLanguage(language) {
  if (language == "german") {
    languageEnglish = false;
  } else {
    languageEnglish = true;
  }
  openInfoBox();
}

function openInfoBox() {
  removeStyleInfoBox();
  if (arrowInfoContent) {
  document.getElementById("arrowLeftInfoBox").classList.add("d-none");
  } else if (gInfoContent) {
    document.getElementById("arrowRightInfoBox").classList.add("d-none");
  }
  generateInfoContent();
}

function removeStyleInfoBox() {
  document.getElementById("infobox").classList.remove("d-none");
  document.getElementById("arrowLeftInfoBox").classList.remove("d-none");
  document.getElementById("arrowRightInfoBox").classList.remove("d-none");
}

function closeInfoBox() {
  document.getElementById("infobox").classList.add("d-none");
  resetVariablesInfoContent();
  arrowInfoContent = true;
}

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

function infoContentKey(instructionContentContainer, englishContent, germanContent) {
  if (languageEnglish) {
    instructionContentContainer.innerHTML = englishContent;
  } else {
    instructionContentContainer.innerHTML = germanContent;
  }
}

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

function resetVariablesInfoContent() {
  arrowInfoContent = false;
  spaceInfoContent = false;
  dInfoContent = false;
  gInfoContent = false;
}

function generateArrowKeyContentEnglish() {
  return /*html*/ `
    <img img class="arrow-key-image" src="./img/6.Botones/Key/arrow keys.png" alt="Image MOVE" />
          <span class="instruction-text">
            USE THE ARROW KEYS TO MOVE SHARKIE IN ALL DIRECTIONS. HOWEVER, BE CAUTIOUS IN YOUR MOVEMENTS, YOUR ENEMIES ARE ON THE LOOKOUT AND WILL NOT HESITATE
            TO PREVENT YOU FROM REACHING YOUR GOALS!
          </span>
  `;
}

function generateArrowKeyContentGerman() {
  return /*html*/ `
    <img img class="arrow-key-image" src="./img/6.Botones/Key/arrow keys.png" alt="Image MOVE" />
          <span class="instruction-text">
            VERWENDE DIE PFEILTASTEN, UM SHARKIE IN ALLE RICHTUNGEN ZU BEWEGEN. SEI JEDOCH VORSICHTIG BEI DEINEN BEWEGUNGEN, DEINE FEINDE SIND AUF DER LAUER UND WERDEN NICHT ZÖGERN, 
            DICH DARAN ZU HINDERN, DEINE ZIELE ZU ERREICHEN!
          </span>
  `;
}

function generateSpaceKeyContentEnglish() {
  return /*html*/ `
    <img img class="arrow-key-image" src="./img/6.Botones/Key/Space Bar key.png" alt="Image ATTACK SPACE" />
          <span class="instruction-text">
            USE SPACEBAR TO FLING PUFFERFISH. ATTACK EFFECTIVE ONLY IN CLOSE PROXIMITY.
            BE CAREFUL, APPROACH WITH CAUTION TO ACHIEVE SAFETY WITHOUT DAMAGE.
          </span>
  `;
}

function generateSpaceKeyContentGerman() {
  return /*html*/ `
    <img img class="arrow-key-image" src="./img/6.Botones/Key/Space Bar key.png" alt="Image ATTACK SPACE" />
          <span class="instruction-text">
            VERWENDE LEERTASTE, UM KUGELFISCH WEWZUSCHLEUDERN. ANGRIFF NUR IN DIREKTER NÄHE EFFEKTIV. SEI VORSICHTIG, NÄHERE DICH BEDACHT, 
            UM OHNE SCHADEN SICHERHEIT ZU ERREICHEN.
          </span>
  `;
}

function generateDkeyContentEnglish() {
  return /*html*/ `
    <img img class="arrow-key-image" src="./img/6.Botones/Key/D key.png" alt="Image ATTACK D" />
          <span class="instruction-text">
           FROM A DISTANCE, YOU CAN CATCH JELLYFISH WITH A BUBBLE BY PRESSING D. 
           THIS ATTACK METHOD IS ONLY EFFECTIVE AGAINST JELLYFISH. PUFFERFISH AND THE FINAL BOSS ARE IMMUNE AND RESPOND WITH A SMILE.
          </span>
  `;
}

function generateDkeyContentGerman() {
  return /*html*/ `
    <img img class="arrow-key-image" src="./img/6.Botones/Key/D key.png" alt="Image ATTACK D" />
          <span class="instruction-text">
            AUS DER FERNE KANNST DU QUALLEN MIT EINER BLASE EINFANGEN, INDEM DU D DRÜCKST. DIESE ANGRIFFSMETHODE IST NUR GEGEN QUALLEN EFFEKTIV. 
            KUGELFISCHE UND DER ENDBOSS SIND IMMUN UND REAGIEREN MIT EINEM LÄCHELN.
          </span>
  `;
}

function generateGkeyContentEnglish() {
  return /*html*/ `
    <img img class="arrow-key-image" src="./img/6.Botones/Key/G Key.png" alt="Image ATTACK G" />
          <span class="instruction-text">
           BY COLLECTING POISON CONTAINERS, YOU CAN RELEASE POISON BUBBLES WITH G. HOWEVER, USE THEM SPARINGLY AND STRATEGICALLY AGAINST THE FINAL BOSS.
           PUFFERFISH ARE IMMUNE TO THE POISON, AND JELLYFISH CAN CAUSE THE POISON BUBBLE TO BURST
          </span>
  `;
}

function generateGkeyContentGerman() {
  return /*html*/ `
    <img img class="arrow-key-image" src="./img/6.Botones/Key/G Key.png" alt="Image ATTACK D" />
          <span class="instruction-text">
           DURCH DAS EINSAMMELN VON GIFTBEHÄLTERN KÖNNEN SIE GIFTBLASEN MIT G FREISETZEN. SETZEN SIE DIESE JEDOCH SPARSAM UND STRATEGISCH GEGEN DEN ENDBOSS EIN.
           KUGELFISCHE SIND IMMUN GEGEN DAS GIFT, UND QUALLEN KÖNNEN DIE GIFTBLASE ZUM PLATZEN BRINGEN.
          </span>
  `;
}
