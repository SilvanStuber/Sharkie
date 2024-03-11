class Poison extends MovableObject {
  POISON_IMAGES = [
    "./img/4. Marcadores/Posión/Animada/1.png",
    "./img/4. Marcadores/Posión/Animada/2.png",
    "./img/4. Marcadores/Posión/Animada/3.png",
    "./img/4. Marcadores/Posión/Animada/4.png",
    "./img/4. Marcadores/Posión/Animada/5.png",
    "./img/4. Marcadores/Posión/Animada/6.png",
    "./img/4. Marcadores/Posión/Animada/7.png",
    "./img/4. Marcadores/Posión/Animada/8.png",
  ];
  height = 96;
  width = 96;
  offsetX = -20;
  offsetY = 0;
  offsetWidht = 40;
  offsetHeight = 0;
  poison = 0;

  constructor() {
    super().loadImage("./img/4. Marcadores/Posión/Animada/1.png");
    this.x = this.positionierungObjecteX();
    this.y = this.positionierungObjecteY();
    this.loadImages(this.POISON_IMAGES);
    this.animate();
  }
  animate() {
    setStoppableInterval(() => this.setCoin(), 220);
  }

  setCoin() {
    this.playAnimation(this.POISON_IMAGES);
  }
}
