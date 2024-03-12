class WeakLilaJellyFish extends JellyFish {
    IMAGES_LILA_JELLYFISH = [
      "./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
      "./img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
      "./img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
      "./img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png"
    ];
    IMAGES_LILA_JELLYFISH_DEAD = [
      "./img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png",
      "./img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png",
      "./img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png",
      "./img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png"
    ];
  
    constructor() {
      super();
      this.loadImage("./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
      this.loadImages(this.IMAGES_LILA_JELLYFISH);
      this.loadImages(this.IMAGES_LILA_JELLYFISH_DEAD);
      this.animate(this.IMAGES_LILA_JELLYFISH, this.IMAGES_LILA_JELLYFISH_DEAD);
    }
  }