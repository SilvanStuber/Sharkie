/**
 * Represents the end boss enemy.
 * @class
 */
class Endboss extends MovableObject {
  x = 0;
  y = 0;
  height = 500;
  width = 400;
  speed = 0.2;
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

  /**
   * Initializes the end boss.
   */
  constructor() {
    super().loadImage("./img/2.Enemy/3 Final Enemy/1.Introduce/1.png");
    this.loadImages(this.IMAGE_INTRODUCE);
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.x = 3800;
    this.animate();
  }

  /**
   * Initiates animation for the end boss.
   */
  animate() {
    let id = setInterval(() => {
      if (characterPositionX > 3300 && !this.hadFirstContact) {
        this.generateInteroduceEndboss();
      } else if (this.hadFirstContact) {
        this.generateAnimationEndboss();
      }
    }, 250);
    intervalIds.push(id);
  }

  /**
   * Checks if the end boss introduction animation has started.
   * If not, starts the animation and sets a flag to indicate it.
   */
  checkIsEndbossInteroduce() {
    if (!this.startAttackAnimation) {
      this.startAttackAnimation = true;
      setStoppableInterval(() => {
        this.thisattackFromEndboss = true;
      }, 8000);
    }
  }

  /**
   * Generates the introduction animation for the end boss.
   */
  generateInteroduceEndboss() {
    if (this.counterInteroduceEndboss < 10) {
      this.playSingeleAnimation(this.IMAGE_INTRODUCE, this.counterInteroduceEndboss);
      this.checkIsEndbossInteroduce();
    } else {
      this.generateAnimationEndboss();
    }
    this.counterInteroduceEndboss++;
    this.generateSoundEndboss();
    if (!this.hadFirstContact && this.counterInteroduceEndboss > 10) {
      this.hadFirstContact = true;
    }
  }

  /**
   * Generates the sound for the end boss.
   */
  generateSoundEndboss() {
    soundEndboss = true;
    endbossGameSound();
  }

  /**
   * Generates the animation for the end boss.
   */
  generateAnimationEndboss() {
    this.otherDirectionEndboss();
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

  /**
   * Determines if the end boss should face the other direction based on the character's position.
   */
  otherDirectionEndboss() {
    if (characterPositionX > this.x - 100) {
      this.otherDirection = true;
    } else {
      this.otherDirection = false;
    }
  }

  /**
   * Generates the death animation for the end boss.
   */
  generateDeadEndboss() {
    if (this.deadIntervalCounter > 4) {
      this.deadIntervalCounter = 4;
    }
    this.playSingeleAnimation(this.IMAGES_DEAD, this.deadIntervalCounter);
    this.deadIntervalCounter++;
    endbossDead = true;
    stopGame();
  }

  /**
   * Generates the hurt animation for the end boss and plays the corresponding sound.
   */
  generateHurtEndboss() {
    playInteractionSound(this.hit_sound_endboss);
    this.playAnimation(this.IMAGES_HURT);
  }

  /**
   * Generates the attack animation for the end boss, plays the attack sound,
   * and updates the position of the end boss during the attack.
   */
  generateAnimationAttackEndboss() {
    this.playAnimation(this.IMAGES_ATTACK);
    playInteractionSound(this.attack_endboss);
    setTimeout(() => {
      this.y = characterPositionY - 185;
      this.x = characterPositionX + 210;
    }, 500);
    setTimeout(() => {
      this.thisattackFromEndboss = false;
      this.x = characterPositionX + 280;
    }, 1000);
  }
}
