class StrongPinkJellyFish extends JellyFish {
    IMAGES_PINK_JELLYFISH = [
      "./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png",
      "./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png",
      "./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png",
      "./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png",
    ];
    IMAGES_PINK_JELLYFISH_DEAD = [
      "img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png",
      "img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png",
      "img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png",
      "img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png"
    ];
  
    constructor() {
      super();
      this.loadImage("./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png");
      this.loadImages(this.IMAGES_PINK_JELLYFISH);
      this.loadImages(this.IMAGES_PINK_JELLYFISH_DEAD);
      this.animate(this.IMAGES_PINK_JELLYFISH, this.IMAGES_PINK_JELLYFISH_DEAD);
    }
  }