class WeakYellowJellyFish extends JellyFish {
  IMAGES_YELLOW_JELLYFISH = [
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png"
  ];
  IMAGES_GREEN_JELLYFISH_DEAD = [
    "./img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png",
    "./img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png",
    "./img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png",
    "./img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png"
  ];

  constructor() {
    super();
    this.loadImage("./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png");
    this.loadImages(this.IMAGES_YELLOW_JELLYFISH);
    this.loadImages(this.IMAGES_GREEN_JELLYFISH_DEAD);
    this.animate(this.IMAGES_YELLOW_JELLYFISH, this.IMAGES_GREEN_JELLYFISH_DEAD);
  }
}
