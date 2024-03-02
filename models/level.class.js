class Level {
  enemies;
  backgroundObjects;
  level_end_x = 2150;

  constructor(enemies, backgroundObjects, coins, poisonBottle) {
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
    this.coins = coins;
    this.poisonBottle = poisonBottle;
  }
}
