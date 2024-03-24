/**
 * Represents a character in the game.
 * @class
 * @extends MovableObject
 */
class Character extends MovableObject {
  x = 200;
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
  poisonBar = new Collision();

  /**
   * Constructor for initializing Sharkie with various images and animations.
   */
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
  }

  /**
   * Startet die Animationen für das Sharkie-Objekt.
   */
  animate() {
    setStoppableInterval(() => this.moveCharacter(), 1000 / 60);
    setStoppableInterval(() => this.animationCharacter(), 250);
    setStoppableInterval(() => this.attackAnimationCharacter(), 125);
    setStoppableInterval(() => this.resetSleepValue(), 125);
    setStoppableInterval(() => this.setGlobalPositionCharacter(), 125);
    setStoppableInterval(() => this.resetBubbleAnimation(), 250);
  }

  /**
   * Moves the character based on keyboard input if the character is alive and the game has started.
   */
  moveCharacter() {
    if (!this.chracterIsDead && gameHasStarted) {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
      } else if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.otherDirection = true;
      } else if (this.world.keyboard.UP && this.y > -20) {
        this.moveUp();
      } else if (this.world.keyboard.DOWN && this.y < 220) {
        this.moveDown();
      }
      this.world.camera_x = -this.x;
    }
  }

  /**
   * Animates the character based on game state and keyboard input.
   */
  animationCharacter() {
    if (gameHasStarted) {
      this.soundCharacterPause();
      if (this.isDead()) {
        this.animationDead();
      } else if (this.isHurt()) {
        this.hurtAnimation();
      } else if (this.world.keyboard.D || (this.world.keyboard.G && world.checkColliding.poisonValue > 0)) {
        this.animationBubble();
      } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
        this.playAnimation(this.IMAGES_SWIM);
        playInteractionSound(this.swimming_sound);
      } else {
        this.standingAnimation();
      }
    }
  }

  /**
   * Plays the hurt animation and corresponding sound for the character.
   */
  hurtAnimation() {
    playInteractionSound(this.hit_sound_character);
    if (this.checkFishAndEndbossClass()) {
      this.playAnimation(this.IMAGES_POISON_HURT);
    } else if (this.checkJellyFishClass()) {
      this.playAnimation(this.IMAGES_ELECTRO_HURT);
    }
  }

  /**
   * Plays the dead animation for the character and stops the game.
   */
  animationDead() {
    if (this.checkFishAndEndbossClass()) {
      this.playAnimationDead(this.IMAGES_POISON_DEAD, 11);
    } else if (this.checkJellyFishClass()) {
      this.playAnimationDead(this.IMAGES_ELECTRO_DEAD, 9);
    }
    characterDead = true;
    stopGame();
  }

  /**
   * Plays the dead animation for the character.
   *
   * @param {string[]} images - The array of images to be used in the animation.
   * @param {number} counter - The number of times the animation should be repeated.
   */
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

  /**
   * Initiates the bubble animation.
   * If bubble is not active, activates it and starts the animation sequence.
   */
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
    }
  }

  /**
   * Plays the inhale sound followed by the exhale sound with a delay.
   */
  playSoundInhaleAndExhale() {
    playInteractionSound(this.inhale_sound);
    setTimeout(() => {
      playInteractionSound(this.exhale_sound);
    }, 800);
  }

  /**
   * Generates animation frames for the bubble based on keyboard input.
   * Generates either a regular bubble or a poison bubble depending on keyboard input.
   */
  generateAnimationBubble() {
    if (this.attackImageCounter < 8) {
      if (this.world.keyboard.G && world.checkColliding.poisonValue > 0) {
        this.generatePoisonBubble();
      } else if (this.world.keyboard.D) {
        this.generateBubble();
      }
    }
    this.attackImageCounter++;
  }

  /**
   * Generates animation frames for a poison bubble and throws poison objects when animation is complete.
   *
   * @param {number} attackImageCounter - The current frame of the animation.
   */
  generatePoisonBubble() {
    this.playSingeleAnimation(this.IMAGES_BLOW_UP_BUBBLE_POISON, this.attackImageCounter);
    if (this.attackImageCounter == 7) {
      world.generateThrowObjects(this.world.keyboard);
      world.checkColliding.poisonValue -= 1;
    }
  }

  /**
   * Generates animation frames for a regular bubble and throws objects when animation is complete.
   *
   * @param {number} attackImageCounter - The current frame of the animation.
   */
  generateBubble() {
    this.playSingeleAnimation(this.IMAGES_BLOW_UP_BUBBLE, this.attackImageCounter);
    if (this.attackImageCounter == 7) {
      world.generateThrowObjects(this.world.keyboard);
    }
  }

  /**
   * Resets the bubble animation if it's inactive and no relevant keys are pressed after a timeout.
   */
  resetBubbleAnimation() {
    setTimeout(() => {
      if (this.bubbleMoves && this.bubbleActive && !this.world.keyboard.G && !this.world.keyboard.D) {
        this.bubbleMoves = false;
        this.bubbleActive = false;
      }
    }, 4000);
  }

  /**
   * Sets a stoppable interval for executing a function repeatedly at a specified time interval.
   *
   * @param {Function} fn - The function to execute.
   * @param {number} time - The time interval (in milliseconds) at which to execute the function.
   * @returns {number} The interval ID.
   */
  setStoppableIntervalBubble(fn, time) {
    let id = setInterval(fn, time);
    this.intervalIdBubble.push(id);
    return id;
  }

  /**
   * Pauses all character-related sounds.
   */
  soundCharacterPause() {
    this.swimming_sound.pause();
    this.sleep_sound.pause();
    this.hit_sound_character.pause();
  }

  /**
   * Resets sleep-related values if there is activity.
   */
  resetSleepValue() {
    if (this.checkActivity()) {
      this.timeWithoutMovement = 0;
      this.isAsleep = 0;
    }
  }

  /**
   * Plays the standing animation or switches to sleep animation if there's no movement for a certain period.
   */
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

  /**
   * Plays the sleep animation or transition animation to sleep state.
   */
  sleepAnimation() {
    if (this.isAsleep > 10) {
      this.playAnimation(this.IMAGES_SLEEP);
      playInteractionSound(this.sleep_sound);
    } else {
      this.playAnimation(this.IMAGES_GOSLEEP);
    }
    this.isAsleep++;
  }

  /**
   * Plays the attack animation when the SPACE key is pressed.
   * Resets the attack animation if the SPACE key is not pressed.
   */
  attackAnimationCharacter() {
    if (!this.world.keyboard.SPACE) {
      this.playAttack = 0;
    } else if (this.world.keyboard.SPACE) {
      if (this.playAttack < 6) {
        this.playAnimation(this.IMAGES_SLAP);
        playInteractionSound(this.slap_sound);
      }
    }
    this.playAttack++;
  }

  /**
   * Sets the global position of the character.
   */
  setGlobalPositionCharacter() {
    characterPositionX = this.x;
    characterPositionY = this.y;
  }
}
