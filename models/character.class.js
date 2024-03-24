/**
 * Represents a character in the game.
 * @class
 * @extends CharacterImages
 */
class Character extends CharacterImages {
  x = 200;
  y = 220;
  height = 200;
  width = 300;
  offsetX = 50;
  offsetY = -90;
  offsetWidht = 10;
  offsetHeight = 130;
  speed = 2;
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
   * Moves the character based on keyboard input when the character is alive and the game has started. On the X-axis and Y-axis
   */
  moveCharacter() {
    if (!this.chracterIsDead && gameHasStarted) {
      if (this.world.keyboard.RIGHT && this.world.keyboard.UP && this.y > -20) {
        this.generateMoveRightUp();
      } else if (this.world.keyboard.RIGHT && this.world.keyboard.DOWN && this.y < 220) {
        this.generateMoveRightDown();
      } else if (this.world.keyboard.LEFT && this.world.keyboard.UP && this.y > -20) {
        this.generateMoveLeftUp();
      } else if (this.world.keyboard.LEFT && this.world.keyboard.DOWN && this.y < 220) {
        this.generateMoveLeftDown();
      } else {
        this.movementSingleAxle();
      }
      this.world.camera_x = -this.x;
    }
  }

  /**
   * Moves the character based on keyboard input when the character is alive and the game has started. On the X-axis or Y-axis
   */
  movementSingleAxle() {
    if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
      this.generateMoveRight();
    } else if (this.world.keyboard.LEFT && this.x > 0) {
      this.generateMoveLeft();
    } else if (this.world.keyboard.UP && this.y > -20) {
      this.moveUp();
    } else if (this.world.keyboard.DOWN && this.y < 220) {
      this.moveDown();
    }
  }

  /**
   * Generates a movement to the left.
   * It sets the direction to the "other direction" before executing the moveLeft method.
   */
  generateMoveLeft() {
    this.otherDirection = true;
    this.moveLeft();
  }

  /**
   * Generates a movement to the right.
   * It sets the direction to not be the "other direction" before executing the moveRight method.
   */
  generateMoveRight() {
    this.otherDirection = false;
    this.moveRight();
  }

  /**
   * Generates a combined movement to the right and upwards.
   * Initially, it sets the direction to not be the "other direction", then
   * executes a single axle movement, followed by an upward movement.
   */
  generateMoveRightUp() {
    this.otherDirection = false;
    this.movementSingleAxle();
    this.moveUp();
  }

  /**
   * Generates a movement diagonally to the right and downwards.
   * Sets the direction to not be the "other direction," initiates single axle movement,
   * and then moves downwards.
   */
  generateMoveRightDown() {
    this.otherDirection = false;
    this.movementSingleAxle();
    this.moveDown();
  }

  /**
   * Generates an upward movement towards the left.
   * It sets the direction to the "other direction", applies single axle movement adjustments,
   * and then executes the moveUp method to perform the upward movement.
   */
  generateMoveLeftUp() {
    this.otherDirection = true;
    this.movementSingleAxle();
    this.moveUp();
  }

  /**
   * Generates a downward movement towards the left.
   * It sets the direction to the "other direction", applies single axle movement adjustments,
   * and then executes the moveDown method to perform the downward movement.
   */
  generateMoveLeftDown() {
    this.otherDirection = true;
    this.movementSingleAxle();
    this.moveDown();
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
