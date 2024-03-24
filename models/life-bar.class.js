/**
 * Represents a life bar, extending the StatusBar class.
 * @class
 * @extends StatusBar
 */
class LifeBar extends StatusBar {
  IMAGES_LIFE = "./img/4. Marcadores/green/100_  copia 3.png";

  /**
   * Creates an instance of LifeBar.
   * @constructor
   */
  constructor() {
    super();
    this.loadImage(this.IMAGES_LIFE);
    this.x = 10;
  }
}
