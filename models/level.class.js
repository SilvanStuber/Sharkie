/**
 * Represents a game level.
 * @class
 */
class Level {
  enemies;
  backgroundObjects;
  level_end_x = 3500;

  /**
   * Creates an instance of Level.
   * @param {Array} enemies - Array of enemies.
   * @param {Array} backgroundObjects - Array of background objects.
   * @param {Array} coins - Array of coins.
   * @param {Object} poisonBottle - Poison bottle object.
   * @param {Object} statusBar - Status bar object.
   * @param {Object} endScreen - End screen object.
   */
  constructor(enemies, backgroundObjects, coins, poisonBottle, statusBar, endScreen) {
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
    this.coins = coins;
    this.poisonBottle = poisonBottle;
    this.statusBar = statusBar;
    this.endScreen = endScreen;
  }
}
