class Fish extends MovableObject {
    height = 60;
    width = 100;
    offsetX = 0;
    offsetY = 2;
    offsetWidht = 0;
    offsetHeight = 10;
    IMAGES_GREEN_FISH = [
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
    ];
    IMAGES_RED_FISH = [
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png",
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png",
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png",
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png",
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png",
    ];
    IMAGES_PINK_FISH = [
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png",
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png",
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png",
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png",
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png",
    ];
    arrayFish = [this.IMAGES_GREEN_FISH, this.IMAGES_RED_FISH, this.IMAGES_PINK_FISH];
    constructor() {
      super();
      let randomImage = this.generateRandomImage(this.arrayFish);
      this.loadImage(randomImage[0]);
      this.loadImages(randomImage);
      this.animate(randomImage);
    }
  
    animate(randomImage) {
      this.x = 320 + Math.random() * 2200;
      this.y = 100 + Math.random() * 320;
      this.speed = 0.15 + Math.random() * 0.3;
      setStoppableInterval(() => this.moveLeft(), 1000 / 60);
      setStoppableInterval(() => this.playAnimation(randomImage), 250);
    }
  }
  