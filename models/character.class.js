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
  IMAGES_SWIM = [
    "../img/1.Sharkie/3.Swim/1.png",
    "../img/1.Sharkie/3.Swim/2.png",
    "../img/1.Sharkie/3.Swim/3.png",
    "../img/1.Sharkie/3.Swim/4.png",
    "../img/1.Sharkie/3.Swim/5.png",
    "../img/1.Sharkie/3.Swim/6.png",
  ];
  world;

  constructor() {
    super().loadImage("../img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_STANDING, "imageCacheStanding");
    this.loadImages(this.IMAGES_SWIM, "imageCacheSwim");
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT) {
        let i = this.currentImage % this.IMAGES_SWIM.length;
        let path = this.IMAGES_SWIM[i];
        this.img = this.imageCacheSwim[path];
        this.currentImage++;
      } else {
        this.animateStanding();
      }
    }, 400);
  }

  animateStanding() {
    let i = this.currentImage % this.IMAGES_STANDING.length;
    let path = this.IMAGES_STANDING[i];
    this.img = this.imageCacheStanding[path];
    this.currentImage++;
  }
}
