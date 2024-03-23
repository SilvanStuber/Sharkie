class Level {
  enemies;
  backgroundObjects;
  level_end_x = 3500;

  constructor(enemies, backgroundObjects, coins, poisonBottle, statusBar, endScreen) {
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
    this.coins = coins;
    this.poisonBottle = poisonBottle;
    this.statusBar = statusBar;
    this.endScreen = endScreen;
  }
}
