/**
 * Represents a coin status bar.
 * Extends the StatusBar class.
 * @class
 */
class CoinBar extends StatusBar {
  IMAGES_COIN = "./img/4. Marcadores/green/100_ copia 6.png";

  /**
   * Constructs a new instance of the CoinBar class.
   * Loads the coin image and sets its position.
   */
  constructor() {
    super();
    this.loadImage(this.IMAGES_COIN);
    this.y = 5;
    this.x = 150;
  }
}
