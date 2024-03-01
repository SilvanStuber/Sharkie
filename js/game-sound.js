let GAME_SOUND = new Audio("./audio/game_loop.mp3");
let GAME_SOUND_LAUGH = new Audio("./audio/laugh.mp3") 
let GAME_SOUND_ENDBOSS = new Audio("./audio/end_game_loop.mp3");

function playGameSound() {
    stopGameSound();
    GAME_SOUND.play();
    GAME_SOUND.loop = true;
  }

  function playGameSoundEndboss() {
    stopGameSound();
    GAME_SOUND_ENDBOSS.volume = 0.9;
    GAME_SOUND_ENDBOSS.play();
    GAME_SOUND_LAUGH.volume = 0.9;
    GAME_SOUND_LAUGH.play();
    GAME_SOUND_ENDBOSS.loop = true;
  }

  function stopGameSound() {
    GAME_SOUND_ENDBOSS.loop = false;
    GAME_SOUND_ENDBOSS.loop = false;
    GAME_SOUND.pause();
    GAME_SOUND_ENDBOSS.pause();
  }