/**
 * Represents a weak yellow jellyfish enemy, extending the JellyFish class.
 * @class
 * @extends JellyFish
 */
class WeakYellowJellyFish extends JellyFish {
  IMAGES_YELLOW_JELLYFISH = [
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png",
  ];
  IMAGES_YELLOW_JELLYFISH_DEAD = [
    "./img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png",
    "./img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png",
    "./img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png",
    "./img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png",
  ];

  /**
   * Creates an instance of WeakYellowJellyFish.
   * @constructor
   */
  constructor() {
    super();
    this.loadImage("./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png");
    this.loadImages(this.IMAGES_YELLOW_JELLYFISH);
    this.loadImages(this.IMAGES_YELLOW_JELLYFISH_DEAD);
    this.animate();
    this.animateContent();
  }

  /**
   * Animates content by initiating two key animations: moving an object left and cycling through character animations.
   */
  animateContent() {
    setStoppableInterval(() => this.moveLeft(), 1000 / 60);
    setStoppableInterval(() => this.animationCharacter(this.IMAGES_YELLOW_JELLYFISH, this.IMAGES_YELLOW_JELLYFISH_DEAD), 250);
  }
}
