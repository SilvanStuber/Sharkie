class WeakJellyFish extends JellyFish {
  IMAGES_LILA_JELLYFISH = [
    "./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
  ];
  IMAGES_YELLOW_JELLYFISH = [
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png",
  ];
  arrayJellyFish = [this.IMAGES_LILA_JELLYFISH, this.IMAGES_YELLOW_JELLYFISH];

  constructor() {
    super();
    let randomImage = this.generateRandomImage(this.arrayJellyFish);
    this.loadImage(randomImage[0]);
    this.loadImages(randomImage);
    this.animate(randomImage);
  }
}
