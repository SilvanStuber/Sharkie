let GAME_SOUND = new Audio("./audio/game_loop.mp3");
let GAME_SOUND_LAUGH = new Audio("./audio/laugh.mp3");
let GAME_SOUND_ENDBOSS = new Audio("./audio/end_game_loop.mp3");
let muteSound = false;
let soundEndboss = false;

function playGameSound() {
  stopGameSound();
  if (!muteSound) {
    if (!soundEndboss) {
      standardGameSound();
    } else {
      endbossGameSound();
    }
  }
}

function standardGameSound() {
  GAME_SOUND.play();
  GAME_SOUND.loop = true;
}

function endbossGameSound() {
  if (!muteSound) {
    stopGameSound();
    soundOfEndboss();
    if (!soundEndboss) {
      laughEndboss();
    }
  }
}

function laughEndboss() {
  GAME_SOUND_LAUGH.play();
}

function soundOfEndboss() {
  GAME_SOUND_ENDBOSS.play();
  GAME_SOUND_ENDBOSS.loop = true;
}

function stopGameSound() {
  GAME_SOUND_ENDBOSS.loop = false;
  GAME_SOUND_ENDBOSS.loop = false;
  GAME_SOUND.pause();
  GAME_SOUND_ENDBOSS.pause();
}

function mute() {
  if (!muteSound) {
    muteSound = true;
    document.getElementById("muteButton").src = "./img/6.Botones/Key/mute.png";
    stopGameSound();
  } else {
    muteSound = false;
    document.getElementById("muteButton").src = "./img/6.Botones/Key/unmute.png";
    playGameSound();
  }
}

function playInteractionSound(sound) {
  if (!muteSound) {
    sound.play();
  }
}



