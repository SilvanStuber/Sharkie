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
  poisonCounter = 0;
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
    "./img/1.Sharkie/2.Long_IDLE/I2.png",
    "./img/1.Sharkie/2.Long_IDLE/I3.png",
    "./img/1.Sharkie/2.Long_IDLE/I4.png",
    "./img/1.Sharkie/2.Long_IDLE/I5.png",
    "./img/1.Sharkie/2.Long_IDLE/I6.png",
    "./img/1.Sharkie/2.Long_IDLE/I7.png",
    "./img/1.Sharkie/2.Long_IDLE/I8.png",
    "./img/1.Sharkie/2.Long_IDLE/I9.png",
  ];
  IMAGES_SLEEP = [
    "./img/1.Sharkie/2.Long_IDLE/I10.png",
    "./img/1.Sharkie/2.Long_IDLE/I11.png",
    "./img/1.Sharkie/2.Long_IDLE/I12.png",
    "./img/1.Sharkie/2.Long_IDLE/I13.png",
    "./img/1.Sharkie/2.Long_IDLE/I14.png",
  ];
  IMAGES_BLOW_UP_BUBBLE = [
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png",
  ];
  IMAGES_BLOW_UP_BUBBLE_POISON = [
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png",
  ];
  world;
  playAttack;
  timeWithoutMovement = 0;
  attackImageCounter = 0;
  bubbleActive = false;
  bubbleMoves = false;
  bubbleInflated = false;
  chracterIsDead = false;
  swimming_sound = new Audio("./audio/swim.mp3");
  slap_sound = new Audio("./audio/slap_sound.mp3");
  sleep_sound = new Audio("./audio/sleep_sound.mp3");
  hit_sound_character = new Audio("./audio/hit_sound_chracter.mp3");
  inhale_sound = new Audio("./audio/inhale.mp3");
  exhale_sound = new Audio("./audio/exhale.mp3");

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
    this.loadImages(this.IMAGES_BLOW_UP_BUBBLE);
    this.loadImages(this.IMAGES_BLOW_UP_BUBBLE_POISON);
    this.animate();
    playGameSound();
  }

  animate() {
    setStoppableInterval(() => this.moveCharacter(), 1000 / 60);
    setStoppableInterval(() => this.animationCharacter(), 250);
    setStoppableInterval(() => this.attackAnimationCharacter(), 125);
    setStoppableInterval(() => this.resetSleepValue(), 125);
  }

  moveCharacter() {
    if (!this.chracterIsDead) {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
      } else if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.otherDirection = true;
      } else if (this.world.keyboard.UP && this.y > -20) {
        this.moveUp();
      } else if (this.world.keyboard.DOWN && this.y < 300) {
        this.moveDown();
      }
      this.world.camera_x = -this.x;
    }
  }

  animationCharacter() {
    this.soundCharacterPause();
    if (this.isDead()) {
      this.animationDead();
    } else if (this.isHurt()) {
      this.hurtAnimation();
    } else if (this.world.keyboard.D || this.world.keyboard.G) {
      this.animationBubble();
    } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
      this.playAnimation(this.IMAGES_SWIM);
      this.swimming_sound.play();
    } else {
      this.standingAnimation();
    }
  }

  hurtAnimation() {
    this.hit_sound_character.play();
    if (this.checkFishAndEndbossClass()) {
      this.playAnimation(this.IMAGES_POISON_HURT);
    } else if (this.checkJellyFishClass()) {
      this.playAnimation(this.IMAGES_ELECTRO_HURT);
    }
  }

  animationDead() {
    if (this.checkFishAndEndbossClass()) {
      this.playAnimationDead(this.IMAGES_POISON_DEAD, 11);
    } else if (this.checkJellyFishClass()) {
      this.playAnimationDead(this.IMAGES_ELECTRO_DEAD, 9);
    }
    stopGame();
  }

  playAnimationDead(images, counter) {
    if (!this.chracterIsDead) {
      let i = 0;
      setInterval(() => {
        this.chracterIsDead = true;
        if (i < counter) {
          this.playSingeleAnimation(images, counter);
        }
        i++;
      }, 250);
    }
  }

  animationBubble() {
    if (!this.bubbleActive) {
      this.bubbleActive = true;
      this.playSoundInhaleAndExhale();
      setTimeout(() => {
        this.bubbleMoves = true;
        this.attackImageCounter = 0;
        setInterval(() => {
          this.generateAnimationBubble();
        }, 125);
      }, 500);
      this.resetBubbleAnimation();
    }
  }

  playSoundInhaleAndExhale() {
    this.inhale_sound.play();
    setTimeout(() => {
      this.exhale_sound.play();
    }, 800);
  }

  generateAnimationBubble() {
    if (this.attackImageCounter < 8) {
      if (this.world.keyboard.G && this.poisonCounter > 0) {
        this.generatePoisonBubble();
      } else if (this.world.keyboard.D) {
        this.generateBubble();
      }
    }
    this.attackImageCounter++;
  }

  generatePoisonBubble() {
    this.playSingeleAnimation(this.IMAGES_BLOW_UP_BUBBLE_POISON, this.attackImageCounter);
    if (this.attackImageCounter == 7) {
      world.generateThrowObjects(this.world.keyboard);
      this.poisonCounter -= 1;
    }
  }

  generateBubble() {
    this.playSingeleAnimation(this.IMAGES_BLOW_UP_BUBBLE, this.attackImageCounter);
    if (this.attackImageCounter == 7) {
      world.generateThrowObjects(this.world.keyboard);
    }
  }

  resetBubbleAnimation() {
    setTimeout(() => {
      this.bubbleMoves = false;
      this.bubbleActive = false;
    }, 3000);
  }

  setStoppableIntervalBubble(fn, time) {
    let id = setInterval(fn, time);
    this.intervalIdBubble.push(id);
    return id;
  }

  soundCharacterPause() {
    this.swimming_sound.pause();
    this.sleep_sound.pause();
    this.hit_sound_character.pause();
  }

  resetSleepValue() {
    if (this.checkActivity()) {
      this.timeWithoutMovement = 0;
      this.isAsleep = 0;
    }
  }

  standingAnimation() {
    if (this.timeWithoutMovement > 20) {
      this.sleepAnimation();
    } else {
      this.playAnimation(this.IMAGES_STANDING);
    }
    setTimeout(() => {
      this.timeWithoutMovement++;
    }, 1000);
  }

  sleepAnimation() {
    if (this.isAsleep > 10) {
      this.playAnimation(this.IMAGES_SLEEP);
      this.sleep_sound.play();
    } else {
      this.playAnimation(this.IMAGES_GOSLEEP);
    }
    this.isAsleep++;
  }

  attackAnimationCharacter() {
    if (!this.world.keyboard.SPACE) {
      this.playAttack = 0;
    } else if (this.world.keyboard.SPACE) {
      if (this.playAttack < 6) {
        this.playAnimation(this.IMAGES_SLAP);
        this.slap_sound.play();
      }
    }
    this.playAttack++;
  }
}
