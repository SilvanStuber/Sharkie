class Fish extends MovableObject {
  height = 80;
  width = 100;
  constructor() {
    super().loadImage("../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");
    this.x = 320 + Math.random() * 500;
    this.y = 200 + Math.random() * 200;
    this.speed = 0.15 + Math.random() * 0.3;
    this.animate();
  }

  animate() {
    this.moveLeft();
  }
}
