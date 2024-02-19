class Level {
  enemies;
  backgroundObjects;
  level_end_x = 2250;
  standard_game_sound = new Audio('../audio/game_loop.mp3');

  constructor(enemies, backgroundObjects) {
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
    this.standard_game_sound.play();
  }
}
