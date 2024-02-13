
class Fish extends MovableObject {
  constructor() {
    super().loadImage("../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");
    this.height = 80;
    this.width = 100;
    this.x = 320 + Math.random() * 500;
    this.y = 200 + Math.random() * 200;
  }
}
