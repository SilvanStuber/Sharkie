class Endboss extends MovableObject {
  x = 0;
  y = 0;
  height = 500;
  width = 400;
  speed = 1;
  offsetX = -20;
  offsetY = -220;
  offsetWidht = 40;
  offsetHeight = 300;
  counterInteroduceEndboss = 0;
  startAttackAnimation = false;
  typOfEnemy = "endboss";
  IMAGE_INTRODUCE = [
    "./img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];
  IMAGES_SWIM = [
    "./img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];
  IMAGES_ATTACK = [
    "./img/2.Enemy/3 Final Enemy/Attack/1.png",
    "./img/2.Enemy/3 Final Enemy/Attack/2.png",
    "./img/2.Enemy/3 Final Enemy/Attack/3.png",
    "./img/2.Enemy/3 Final Enemy/Attack/4.png",
    "./img/2.Enemy/3 Final Enemy/Attack/5.png",
    "./img/2.Enemy/3 Final Enemy/Attack/6.png",
  ];
  IMAGES_DEAD = [
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
  ];
  IMAGES_HURT = [
    "./img/2.Enemy/3 Final Enemy/Hurt/1.png",
    "./img/2.Enemy/3 Final Enemy/Hurt/2.png",
    "./img/2.Enemy/3 Final Enemy/Hurt/3.png",
    "./img/2.Enemy/3 Final Enemy/Hurt/4.png",
  ];
  hadFirstContact = false;
  thisattackFromEndboss = false;
  hit_sound_endboss = new Audio("./audio/hit_sound_endboss.mp3");
  attack_endboss = new Audio("./audio/endboss_attack.mp3");

  constructor() {
    super().loadImage("./img/2.Enemy/3 Final Enemy/1.Introduce/1.png");
    this.loadImages(this.IMAGE_INTRODUCE);
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.x = 2450;
    this.animate();
  }

  animate() {
    let id = setInterval(() => {
      if (world.character.x > 1800 && !this.hadFirstContact) {
        this.generateInteroduceEndboss();
      } else if (this.hadFirstContact) {
        this.generateAnimationEndboss();
      }
    }, 250);
    intervalIds.push(id);
  }

  checkIsEndbossInteroduce() {
    if (!this.startAttackAnimation) {
      this.startAttackAnimation = true;
      setStoppableInterval(() => {
        this.thisattackFromEndboss = true;
      }, 8000);
    }
  }

  generateInteroduceEndboss() {
    if (this.counterInteroduceEndboss < 10) {
      this.playSingeleAnimation(this.IMAGE_INTRODUCE, this.counterInteroduceEndboss);
      this.checkIsEndbossInteroduce();
    } else {
      this.generateAnimationEndboss();
    }
    this.counterInteroduceEndboss++;
    if (!this.hadFirstContact) {
      playGameSoundEndboss();
      this.hadFirstContact = true;
    }
  }

  generateAnimationEndboss() {
    if (this.isDead()) {
      this.generateDeadEndboss();
    } else if (this.isHurt()) {
      this.generateHurtEndboss();
    } else if (this.thisattackFromEndboss) {
      this.generateAnimationAttackEndboss();
    } else {
      this.playAnimation(this.IMAGES_SWIM);
    }
  }

  generateDeadEndboss() {
    if (this.deadIntervalCounter > 4) {
      this.deadIntervalCounter = 4;
    }
    this.playSingeleAnimation(this.IMAGES_DEAD, this.deadIntervalCounter);
    this.deadIntervalCounter++;
    stopGame();
  }

  generateHurtEndboss() {
    this.hit_sound_endboss.play();
    this.playAnimation(this.IMAGES_HURT);
  }

  generateAnimationAttackEndboss() {
    this.playAnimation(this.IMAGES_ATTACK);
    this.attack_endboss.play();
    setTimeout(() => {
      this.y = world.character.y - 145;
      this.x = world.character.x + 210;
    }, 500);
    setTimeout(() => {
      this.thisattackFromEndboss = false;
      this.x = world.character.x + 280;
    }, 1000);
  }
}
