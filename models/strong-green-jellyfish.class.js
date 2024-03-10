class StrongGreenJellyFish extends JellyFish {
  IMAGES_GREEN_JELLYFISH = [
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png",
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png",
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png",
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png"
  ];
  IMAGES_GREEN_JELLYFISH_DEAD = [
    "./img/2.Enemy/2 Jelly fish/Dead/green/g1.png",
    "./img/2.Enemy/2 Jelly fish/Dead/green/g2.png",
    "./img/2.Enemy/2 Jelly fish/Dead/green/g3.png",
    "./img/2.Enemy/2 Jelly fish/Dead/green/g4.png"
  ];

  constructor() {
    super();
    this.loadImage("./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png");
    this.loadImages(this.IMAGES_GREEN_JELLYFISH);
    this.loadImages(this.IMAGES_GREEN_JELLYFISH_DEAD);
    this.animate(this.IMAGES_GREEN_JELLYFISH, this.IMAGES_GREEN_JELLYFISH_DEAD);
  }
}
