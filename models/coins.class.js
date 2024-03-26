/**
 * Represents a coin object.
 * Extends the MovableObject class.
 * @class
 */
class Coins extends MovableObject {
  COINS_IMAGES = [
    "./img/4. Marcadores/1. Coins/1.png",
    "./img/4. Marcadores/1. Coins/2.png",
    "./img/4. Marcadores/1. Coins/3.png",
    "./img/4. Marcadores/1. Coins/4.png",
  ];
  height = 48;
  width = 48;
  offsetX = 0;
  offsetY = 0;
  offsetWidht = 0;
  offsetHeight = 0;
  coin = 0;

  /**
   * Constructs a new instance of the Coins class.
   * Loads the initial coin image and sets its position.
   * Also loads all coin images and starts animating them.
   */
  constructor() {
    super().loadImage("./img/4. Marcadores/1. Coins/1.png");
    this.x = this.positionierungObjecteX();
    this.y = this.positionierungObjecteY();
    this.loadImages(this.COINS_IMAGES);
    this.animateContent();
  }
  
  /**
   * Initiates an animation sequence for displaying coin images. This method leverages `setStoppableInterval` to cycle through an array of coin images, creating an animation effect.
   */
  animateContent() {
    setStoppableInterval(() => this.playAnimation(this.COINS_IMAGES), 220);
  }
}
