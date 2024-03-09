class Coins extends MovableObject {
  COINS_IMAGES = [
    "./img/4. Marcadores/1. Coins/1.png",
    "./img/4. Marcadores/1. Coins/2.png",
    "./img/4. Marcadores/1. Coins/3.png",
    "./img/4. Marcadores/1. Coins/4.png",
  ];
  height = 48;
  width = 48;
  offsetX = 0;
  offsetY = 0;
  offsetWidht = 0;
  offsetHeight = 0;
  coin = 0;


  constructor() {
    super().loadImage("./img/4. Marcadores/1. Coins/1.png");
    this.x = 250 + Math.random() * 2100;
    this.y = 100 + Math.random() * 250;
    this.loadImages(this.COINS_IMAGES);
    this.animate();
  }
  animate() {
  this.intervalId = setStoppableInterval(() => this.setCoin(), 220);
  }

  setCoin() {
    this.playAnimation(this.COINS_IMAGES);
  }
}
