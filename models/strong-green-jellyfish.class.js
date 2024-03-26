/**
 * Represents a strong green jellyfish enemy, extending the JellyFish class.
 * @class
 * @extends JellyFish
 */
class StrongGreenJellyFish extends JellyFish {
  IMAGES_GREEN_JELLYFISH = [
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png",
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png",
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png",
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png",
  ];
  IMAGES_GREEN_JELLYFISH_DEAD = [
    "./img/2.Enemy/2 Jelly fish/Dead/green/g1.png",
    "./img/2.Enemy/2 Jelly fish/Dead/green/g2.png",
    "./img/2.Enemy/2 Jelly fish/Dead/green/g3.png",
    "./img/2.Enemy/2 Jelly fish/Dead/green/g4.png",
  ];

  /**
   * Creates an instance of StrongGreenJellyFish.
   * @constructor
   */
  constructor() {
    super();
    this.loadImage("./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png");
    this.loadImages(this.IMAGES_GREEN_JELLYFISH);
    this.loadImages(this.IMAGES_GREEN_JELLYFISH_DEAD);
    this.animate();
    this.animateContent();
  }

  /**
   * Animates content by initiating two key animations: moving an object left and cycling through character animations.
   */
  animateContent() {
    setStoppableInterval(() => this.moveLeft(), 1000 / 60);
    setStoppableInterval(() => this.animationCharacter(this.IMAGES_GREEN_JELLYFISH, this.IMAGES_GREEN_JELLYFISH_DEAD), 250);
  }
}
