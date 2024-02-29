class GameSound {
    GAME_SOUND = new Audio("./audio/game_loop.mp3");
    GAME_SOUND_ENDBOSS = new Audio("./audio/end_game_loop.mp3");

  

    playGameSound() {
        this.GAME_SOUND.play();
        this.GAME_SOUND.loop = true;
      }
    
      playGameSoundEndboss() {
        this.GAME_SOUND_ENDBOSS.play();
        this.GAME_SOUND_ENDBOSS.loop = true;
      }
    
      stopGameSound() {
        this.GAME_SOUND_ENDBOSS.loop = false;
        this.GAME_SOUND_ENDBOSS.loop = false;
        this.GAME_SOUND.pause();
        this.GAME_SOUND_ENDBOSS.pause();
       
      }
}