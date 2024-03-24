/**
 * Represents a poison bar, extending the StatusBar class.
 * @class
 * @extends StatusBar
 */
class PoisonBar extends StatusBar {
  IMAGES_POISON = "./img/4. Marcadores/green/100_ copia 5.png";

  /**
   * Creates an instance of PoisonBar.
   * @constructor
   */
  constructor() {
    super();
    this.loadImage(this.IMAGES_POISON);
    this.x = 240;
  }
}
