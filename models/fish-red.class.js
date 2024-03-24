/**
 * Represents a red fish enemy.
 * @class
 */
class FishRed extends Fish {
  IMAGES_RED_FISH_SWIM = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png",
  ];
  IMAGES_RED_FISH_TRANSITION = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png",
  ];
  IMAGES_RED_FISH_BUBBLE_SWIM = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png",
  ];
  IMAGES_RED_FISH_DEAD = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.2.png",
  ];

  /**
   * Initializes the red fish enemy.
   */
  constructor() {
    super().loadImage("./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png");
    this.loadImages(this.IMAGES_RED_FISH_SWIM);
    this.loadImages(this.IMAGES_RED_FISH_TRANSITION);
    this.loadImages(this.IMAGES_RED_FISH_BUBBLE_SWIM);
    this.loadImages(this.IMAGES_RED_FISH_DEAD);
    this.x = this.positionierungObjecteX();
    this.y = this.positionierungObjecteY();
    this.speed = 0.15 + Math.random() * 0.3;
    setStoppableInterval(() => this.moveLeft(), 1000 / 60);
    setStoppableInterval(
      () => this.animate(this.IMAGES_RED_FISH_DEAD, this.IMAGES_RED_FISH_TRANSITION, this.IMAGES_RED_FISH_BUBBLE_SWIM, this.IMAGES_RED_FISH_SWIM),
      125
    );
  }
}
