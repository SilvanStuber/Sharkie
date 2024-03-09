class StrongJellyFish extends JellyFish {
  IMAGES_GREEN_JELLYFISH = [
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png",
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png",
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png",
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png",
  ];
  IMAGES_PINK_JELLYFISH = [
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png",
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png",
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png",
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png",
  ];
  arrayJellyFish = [this.IMAGES_GREEN_JELLYFISH, this.IMAGES_PINK_JELLYFISH];

  constructor() {
    super();
    let randomImage = this.generateRandomImage(this.arrayJellyFish);
    this.loadImage(randomImage[0]);
    this.loadImages(randomImage);
    this.animate(randomImage);
  }
}
