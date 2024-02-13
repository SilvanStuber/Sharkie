class Character extends MovableObject {
  x = 0;
  y = 220;
  height = 200;
  width = 300;
  constructor() {
    super().loadImage("../img/1.Sharkie/1.IDLE/1.png");
  }
  jump() {}
}
