/**
 * Represents collision handling in the game.
 * @class
 */
class Collision {
  coin_sound = new Audio("./audio/coin_sound.mp3");
  poison_sound = new Audio("./audio/poison_sound.mp3");
  lifeBar = new LifeBar();
  coinsValue = 0;
  poisonValue = 0;
  hitEnemy;
  level;
  chracter;
  keyboard;
  throwableObjects;

  /**
   * Constructs a new instance of the Collision class.
   * @param {Level} level - The game level.
   * @param {Character} chracter - The game character.
   * @param {ThrowableObjects} throwableObjects - Throwable objects in the game.
   */
  constructor(level, chracter, throwableObjects) {
    this.level = level;
    this.character = chracter;
    this.throwableObjects = throwableObjects;
  }

  /**
   * Runs collision detection and game logic at regular intervals.
   *
   * @param {Keyboard} keyboard - The keyboard input state.
   */
  run(keyboard) {
    this.keyboard = keyboard;
    setInterval(() => {
      this.checkCollisionsEnemy();
      this.checkCollisionsCoins();
      this.checkCollisionsPoison();
      this.checkCollisionsBubble();
      this.attackEnemy();
    }, 250);
  }

  /**
   * Checks for collisions between the character and enemies.
   * If a collision occurs and the SPACE key is not pressed, the character is hit by the enemy.
   */
  checkCollisionsEnemy() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (enemy.energy > 0) {
          if (!this.keyboard.SPACE) {
            this.character.hit(enemy);
          }
        }
      }
    });
  }

  /**
   * Checks for collisions between the character and coins.
   * Plays a sound and increases the coin count if a collision occurs.
   */
  checkCollisionsCoins() {
    let i = 0;
    this.level.coins.forEach((coin) => {
      if (this.character.isColliding(coin)) {
        playInteractionSound(this.coin_sound);
        this.level.coins.splice(i, 1);
        this.coinsValue += 1;
      }
      i++;
    });
  }

  /**
   * Checks for collisions with poison bottles and handles interactions.
   */
  checkCollisionsPoison() {
    let i = 0;
    this.level.poisonBottle.forEach((bottle) => {
      if (this.character.isColliding(bottle)) {
        playInteractionSound(this.poison_sound);
        this.level.poisonBottle.splice(i, 1);
        this.poisonValue += 1;
      }
      i++;
    });
  }

  /**
   * Checks for collisions between throwable objects (bubbles) and enemies, and generates collision reactions.
   */
  checkCollisionsBubble() {
    let i = 0;
    this.throwableObjects.forEach((bubble) => {
      this.level.enemies.forEach((enemy) => {
        this.generateCollodingReactionEnemy(i, bubble, enemy);
      });
      i++;
    });
  }

  /**
   * Generates collision reaction between a throwable object (bubble) and an enemy.
   * @param {number} i - Index of the throwable object.
   * @param {Bubble} bubble - The bubble object.
   * @param {Enemy} enemy - The enemy object.
   */
  generateCollodingReactionEnemy(i, bubble, enemy) {
    if (bubble.isColliding(enemy)) {
      if (bubble instanceof BubblePoison) {
        this.generateBubbleCollisionWithEndboss(enemy);
      } else if (bubble instanceof Bubble) {
        this.generateBubbleCollisionWithJellyFish(enemy);
      }
      this.throwableObjects.splice(i, 1);
    }
  }

  /**
   * Handles collision between a bubble and a jellyfish enemy, causing damage if applicable.
   * @param {Enemy} enemy - The jellyfish enemy object.
   */
  generateBubbleCollisionWithJellyFish(enemy) {
    if (
      enemy instanceof WeakLilaJellyFish ||
      enemy instanceof WeakYellowJellyFish ||
      enemy instanceof StrongPinkJellyFish ||
      enemy instanceof StrongGreenJellyFish
    ) {
      enemy.hitFish();
    }
  }

  /**
   * Handles collision between a bubble and the end boss enemy, causing damage if applicable.
   * @param {Enemy} enemy - The end boss enemy object.
   */
  generateBubbleCollisionWithEndboss(enemy) {
    if (enemy instanceof Endboss) {
      enemy.hitEndboss();
    }
  }

  /**
   * Attacks enemies when the SPACE key is pressed and handles enemy damage.
   */
  attackEnemy() {
    if (this.keyboard.SPACE) {
      let i = 0;
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          if (enemy instanceof Fish) {
            enemy.hitFish();
            setTimeout(() => {
              this.level.enemies.splice(i, 1);
            }, 1125);
          }
        }
        i++;
      });
    }
  }
}
