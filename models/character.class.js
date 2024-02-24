class Character extends MovableObject {
  x = 0;
  y = 220;
  height = 200;
  width = 300;
  offsetX = 50;
  offsetY = -90;
  offsetWidht= 10;
  offsetHeight = 130;
  speed = 2;
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
  IMAGES_POISON_DEAD = [
    "../img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];
  IMAGES_ELECTRO_DEAD = [
    "../img/1.Sharkie/6.dead/2.Electro_shock/1.png",
    "../img/1.Sharkie/6.dead/2.Electro_shock/2.png",
    "../img/1.Sharkie/6.dead/2.Electro_shock/3.png",
    "../img/1.Sharkie/6.dead/2.Electro_shock/4.png",
    "../img/1.Sharkie/6.dead/2.Electro_shock/5.png",
    "../img/1.Sharkie/6.dead/2.Electro_shock/6.png",
    "../img/1.Sharkie/6.dead/2.Electro_shock/7.png",
    "../img/1.Sharkie/6.dead/2.Electro_shock/8.png",
    "../img/1.Sharkie/6.dead/2.Electro_shock/9.png",
    "../img/1.Sharkie/6.dead/2.Electro_shock/10.png",
  ];
  world;
  swimming_sound = new Audio("../audio/swim.mp3");

  constructor() {
    super().loadImage("../img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_STANDING);
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_POISON_DEAD);
    this.loadImages(this.IMAGES_ELECTRO_DEAD);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.swimming_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
        this.swimming_sound.play();
      }
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.otherDirection = true;
        this.swimming_sound.play();
      }
      if (this.world.keyboard.UP && this.y > -50) {
        this.moveUp();
        this.swimming_sound.play();
      }
      if (this.world.keyboard.DOWN && this.y < 250) {
        this.moveDown();
        this.swimming_sound.play();
      }
      this.world.cemera_x = -this.x;
    }, 1000 / 60);
    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
        this.playAnimation(this.IMAGES_SWIM);
      }
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_POISON_DEAD);
      } else {
        this.playAnimation(this.IMAGES_STANDING);
      }
    }, 250);
  }
}
