class Character extends MovableObject {
  x = 0;
  y = 220;
  height = 200;
  width = 300;
  IMAGES_STANDING = [
    "../img/1.Sharkie/1.IDLE/2.png",
    "../img/1.Sharkie/1.IDLE/3.png",
    "../img/1.Sharkie/1.IDLE/4.png",
    "../img/1.Sharkie/1.IDLE/5.png",
    "../img/1.Sharkie/1.IDLE/6.png",
    "../img/1.Sharkie/1.IDLE/7.png",
    "../img/1.Sharkie/1.IDLE/8.png",
    "../img/1.Sharkie/1.IDLE/9.png",
    "../img/1.Sharkie/1.IDLE/10.png",
    "../img/1.Sharkie/1.IDLE/11.png",
    "../img/1.Sharkie/1.IDLE/12.png",
    "../img/1.Sharkie/1.IDLE/13.png",
    "../img/1.Sharkie/1.IDLE/14.png",
    "../img/1.Sharkie/1.IDLE/15.png",
    "../img/1.Sharkie/1.IDLE/16.png",
    "../img/1.Sharkie/1.IDLE/17.png",
    "../img/1.Sharkie/1.IDLE/18.png",
  ];
  currentImage = 0;

  constructor() {
    super().loadImage("../img/1.Sharkie/1.IDLE/1.png");
    this.loadStandingImages(this.IMAGES_STANDING);
    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_STANDING.length
      let path = this.IMAGES_STANDING[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 400);
  }
}
