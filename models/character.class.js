class Character extends MovableObject {
  x = 0;
  y = 220;
  height = 200;
  width = 300;
  offsetX = 50;
  offsetY = -90;
  offsetWidht = 10;
  offsetHeight = 130;
  speed = 2;
  IMAGES_STANDING = [
    "./img/1.Sharkie/1.IDLE/2.png",
    "./img/1.Sharkie/1.IDLE/3.png",
    "./img/1.Sharkie/1.IDLE/4.png",
    "./img/1.Sharkie/1.IDLE/5.png",
    "./img/1.Sharkie/1.IDLE/6.png",
    "./img/1.Sharkie/1.IDLE/7.png",
    "./img/1.Sharkie/1.IDLE/8.png",
    "./img/1.Sharkie/1.IDLE/9.png",
    "./img/1.Sharkie/1.IDLE/10.png",
    "./img/1.Sharkie/1.IDLE/11.png",
    "./img/1.Sharkie/1.IDLE/12.png",
    "./img/1.Sharkie/1.IDLE/13.png",
    "./img/1.Sharkie/1.IDLE/14.png",
    "./img/1.Sharkie/1.IDLE/15.png",
    "./img/1.Sharkie/1.IDLE/16.png",
    "./img/1.Sharkie/1.IDLE/17.png",
    "./img/1.Sharkie/1.IDLE/18.png",
  ];
  IMAGES_SWIM = [
    "./img/1.Sharkie/3.Swim/1.png",
    "./img/1.Sharkie/3.Swim/2.png",
    "./img/1.Sharkie/3.Swim/3.png",
    "./img/1.Sharkie/3.Swim/4.png",
    "./img/1.Sharkie/3.Swim/5.png",
    "./img/1.Sharkie/3.Swim/6.png",
  ];
  IMAGES_POISON_HURT = [
    "./img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "./img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "./img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
    "./img/1.Sharkie/5.Hurt/1.Poisoned/5.png",
  ];

  IMAGES_ELECTRO_HURT = [
    "./img/1.Sharkie/5.Hurt/2.Electric shock/1.png",
    "./img/1.Sharkie/5.Hurt/2.Electric shock/2.png",
    "./img/1.Sharkie/5.Hurt/2.Electric shock/3.png",
  ];
  IMAGES_POISON_DEAD = [
    "./img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];
  IMAGES_ELECTRO_DEAD = [
    "./img/1.Sharkie/6.dead/2.Electro_shock/1.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/2.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/3.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/4.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/5.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/6.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/7.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/8.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/9.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/10.png",
  ];
  IMAGES_SLAP = [
    "./img/1.Sharkie/4.Attack/Fin slap/1.png",
    "./img/1.Sharkie/4.Attack/Fin slap/4.png",
    "./img/1.Sharkie/4.Attack/Fin slap/5.png",
    "./img/1.Sharkie/4.Attack/Fin slap/6.png",
    "./img/1.Sharkie/4.Attack/Fin slap/7.png",
    "./img/1.Sharkie/4.Attack/Fin slap/8.png",
  ];
  IMAGES_GOSLEEP = [
    "./img/1.Sharkie/2.Long_IDLE/i1.png",
    "./img/1.Sharkie/2.Long_IDLE/i2.png",
    "./img/1.Sharkie/2.Long_IDLE/i3.png",
    "./img/1.Sharkie/2.Long_IDLE/i4.png",
    "./img/1.Sharkie/2.Long_IDLE/i5.png",
    "./img/1.Sharkie/2.Long_IDLE/i6.png",
    "./img/1.Sharkie/2.Long_IDLE/i7.png",
    "./img/1.Sharkie/2.Long_IDLE/i8.png",
    "./img/1.Sharkie/2.Long_IDLE/i9.png",
  ];
  IMAGES_SLEEP = [
    "./img/1.Sharkie/2.Long_IDLE/i10.png",
    "./img/1.Sharkie/2.Long_IDLE/i11.png",
    "./img/1.Sharkie/2.Long_IDLE/i12.png",
    "./img/1.Sharkie/2.Long_IDLE/i13.png",
    "./img/1.Sharkie/2.Long_IDLE/i14.png",
  ];
  world;
  swimming_sound = new Audio("./audio/swim.mp3");
  plaAttack;
  timeWithoutMovement = 0;
  isAsleep = 0;

  constructor() {
    super().loadImage("./img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_STANDING);
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_POISON_HURT);
    this.loadImages(this.IMAGES_ELECTRO_HURT);
    this.loadImages(this.IMAGES_POISON_DEAD);
    this.loadImages(this.IMAGES_ELECTRO_DEAD);
    this.loadImages(this.IMAGES_SLAP);
    this.loadImages(this.IMAGES_GOSLEEP);
    this.loadImages(this.IMAGES_SLEEP);
    this.animate();
    playGameSound();
  }

  animate() {
    setStoppableInterval(() => this.moveCharacter(), 1000 / 60);
    setStoppableInterval(() => this.animationCharacter(), 250);
    setStoppableInterval(() => this.attackAnimationCharacter(), 125);
  }

  moveCharacter() {
    if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
      this.moveRight();
      this.otherDirection = false;
    } else if (this.world.keyboard.LEFT && this.x > 0) {
      this.moveLeft();
      this.otherDirection = true;
    } else if (this.world.keyboard.UP && this.y > -50) {
      this.moveUp();
    } else if (this.world.keyboard.DOWN && this.y < 250) {
      this.moveDown();
    }
    this.world.camera_x = -this.x;
  }

  animationCharacter() {
    this.swimming_sound.pause();
    if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
      this.timeWithoutMovement = 0;
      this.isAsleep = 0;
      this.playAnimation(this.IMAGES_SWIM);
      this.swimming_sound.play();
    } else if (this.isHurt()) {
      this.playAnimation(this.IMAGES_ELECTRO_HURT);
    } else if (this.isDead()) {
      this.playAnimation(this.IMAGES_POISON_DEAD);
      setTimeout(stopGame, 1050);
      stopGameSound();
    } else {
      this.standingAnimation();
    }
  }

  standingAnimation() {
    if (this.timeWithoutMovement > 20) {
      this.sleepAnimation();
    } else {
      this.playAnimation(this.IMAGES_STANDING);
    }
    setTimeout(() => {this.timeWithoutMovement++}, 1000);
    
  }

  sleepAnimation() {
    if (this.isAsleep > 10) {
      this.playAnimation(this.IMAGES_SLEEP);
    } else {
      this.playAnimation(this.IMAGES_GOSLEEP);
    }
    this.isAsleep++;
  }

  attackAnimationCharacter() {
    if (!this.world.keyboard.SPACE) {
      this.plaAttack = 0;
    } else if (this.world.keyboard.SPACE) {
      if (this.plaAttack < 6) {
        this.playAnimation(this.IMAGES_SLAP);
      }
    }
    this.plaAttack++;
  }
}
