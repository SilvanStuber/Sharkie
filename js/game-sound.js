let GAME_SOUND = new Audio("./audio/game_loop.mp3");
let GAME_SOUND_LAUGH = new Audio("./audio/laugh.mp3");
let GAME_SOUND_ENDBOSS = new Audio("./audio/end_game_loop.mp3");
let hit_sound_character = new Audio("./audio/hit_sound_chracter.mp3");
let muteSound = false;
let soundEndboss = false;

/**
 * Plays the game's sound based on the mute and endboss status.
 * Stops any currently playing sound before deciding which sound to play next.
 */
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

/**
 * Plays the standard game sound continuously by starting the sound and setting it to loop.
 * Assumes `GAME_SOUND` is a global audio object preloaded with the game's standard sound.
 */
function standardGameSound() {
  GAME_SOUND.play();
  GAME_SOUND.loop = true;
}

/**
 * Initiates the endboss game sound sequence if the sound is not muted. It stops any currently playing
 * game sound, plays the specific endboss sound, and if the `soundEndboss` flag is not set,
 * it triggers the endboss's laugh sound.
 *
 * Assumes the presence of global flags `muteSound` and `soundEndboss`, and requires the functions
 * `stopGameSound`, `soundOfEndboss`, and `laughEndboss` to be defined.
 */
function endbossGameSound() {
  if (!muteSound) {
    stopGameSound();
    soundOfEndboss();
    if (!soundEndboss) {
      laughEndboss();
    }
  }
}

/**
 * Plays the endboss's laugh sound once. Assumes `GAME_SOUND_LAUGH` is a global audio object
 * preloaded with the endboss's laugh sound.
 */
function laughEndboss() {
  GAME_SOUND_LAUGH.play();
}

/**
 * Plays the endboss's theme sound on a loop. This function is responsible for starting the
 * endboss music and setting it to continuously loop, creating an immersive sound experience
 * for the endboss encounter in the game.
 *
 * Precondition: Assumes `GAME_SOUND_ENDBOSS` is a globally accessible Audio object, already
 * loaded with the appropriate endboss theme sound.
 */
function soundOfEndboss() {
  GAME_SOUND_ENDBOSS.play();
  GAME_SOUND_ENDBOSS.loop = true;
}

/**
 * Plays the endboss's theme sound and sets it to loop continuously.
 * Assumes `GAME_SOUND_ENDBOSS` is a global audio object preloaded with the endboss's theme sound.
 */
function stopGameSound() {
  GAME_SOUND_ENDBOSS.loop = false;
  GAME_SOUND_ENDBOSS.loop = false;
  GAME_SOUND.pause();
  GAME_SOUND_ENDBOSS.pause();
  hit_sound_character.pause();
}

/**
 * Toggles the game's sound on or off and updates the mute button's image accordingly.
 * When muting, it sets the `muteSound` flag to true, changes the mute button's image to indicate muting,
 * and stops any currently playing game sound. When unmuting, it sets the `muteSound` flag to false,
 * changes the mute button's image to indicate sound is on, and plays the appropriate game sound.
 *
 * Assumes global access to a `muteSound` flag, `stopGameSound`, and `playGameSound` functions, and
 * requires the mute button's element ID to be "muteButton".
 */
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

/**
 * Plays a given sound effect if sound is not muted. This function allows for flexibility in
 * playing different sound effects based on user interaction or game events, without playing
 * the sound if the game is muted.
 *
 */
function playInteractionSound(sound) {
  if (!muteSound) {
    sound.play();
  }
}

/**
 * Plays the character's hurt sound effect if sound is not muted.
 */
function hurtSoundCharacter() {
  if (!muteSound) {
    hit_sound_character.play();
  }
}
