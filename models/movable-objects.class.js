/**
 * Represents a movable object, extending the DrawableObject class.
 * @class
 * @extends DrawableObject
 */
class MovableObject extends DrawableObject {
  offsetX;
  offsetY;
  offsetWidht;
  offsetHeight;
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  lastHit = 0;
  endBossIsPublished = false;
  damageFromWhichEnemy;
  deadIntervalCounter = 0;
  positionObjects = [];
  turnRight = false;
  imageCounter = 0;

  /**
   * Plays an animation using the provided array of images.
   * Increments the current image index for subsequent calls.
   * @param {Array.<string>} images - Array of image paths for the animation.
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    this.playSingeleAnimation(images, i);
    this.currentImage++;
  }

  /**
   * Plays a single animation frame using the specified image index from the provided array of images.
   * Updates the object's image based on the path obtained from the array.
   * @param {Array.<string>} images - Array of image paths for the animation.
   * @param {number} i - Index of the image to be played in the animation sequence.
   */
  playSingeleAnimation(images, i) {
    let path = images[i];
    this.img = this.imageCache[path];
  }

  /**
   * Checks if this object is colliding with the specified movable object (mo).
   * @param {MovableObject} mo - The movable object to check collision with.
   * @returns {boolean} - Returns true if collision is detected, false otherwise.
   */
  isColliding(mo) {
    return (
      this.x - this.offsetX + this.width - this.offsetWidht > mo.x - mo.offsetX &&
      this.y - this.offsetY + this.height - this.offsetHeight > mo.y - mo.offsetY &&
      this.x - this.offsetX < mo.x - mo.offsetX &&
      this.y - this.offsetY < mo.y - mo.offsetY + mo.height - mo.offsetHeight
    );
  }

  /**
   * Handles a hit from the specified enemy, updating the object's energy and recording the hit timestamp and the source of the damage.
   * @param {Enemy} enemy - The enemy that inflicted the hit.
   */
  hit(enemy) {
    this.validationHit(enemy);
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
      this.damageFromWhichEnemy = enemy;
    }
  }

  /**
   * Validates and processes a hit from the specified enemy, adjusting the object's energy based on the type of enemy.
   * @param {Enemy} enemy - The enemy that inflicted the hit.
   */
  validationHit(enemy) {
    if (enemy instanceof Fish || enemy instanceof WeakLilaJellyFish || enemy instanceof WeakYellowJellyFish) {
      this.energy -= 2;
    } else if (enemy instanceof StrongPinkJellyFish || enemy instanceof StrongGreenJellyFish) {
      this.energy -= 4;
    } else if (enemy instanceof Endboss) {
      this.energy -= 8;
    }
  }

  /**
   * Simulates a hit from a fish, reducing the object's energy to 0.
   */
  hitFish() {
    this.energy = 0;
  }

  /**
   * Simulates a hit from the end boss, reducing the object's energy by 20 and updating the last hit timestamp if the energy doesn't go below 0.
   */
  hitEndboss() {
    this.energy -= 20;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Checks if the object is currently in a hurt state based on the time elapsed since the last hit.
   * @returns {boolean} - Returns true if the object is hurt (hit recently), false otherwise.
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 0.5;
  }

  /**
   * Simulates a fish flying out of the map by adjusting its position relative to the character's position.
   * @param {number} characterX - The x-coordinate of the character's position.
   */
  fishFliesOutOfTheMap(characterX) {
    this.y -= 40;
    if (characterX > this.x) {
      this.x += 50;
    } else {
      this.x -= 50;
    }
  }

  /**
   * Simulates a jellyfish flying out of the map by adjusting its position upwards.
   * @param {number} characterX - The x-coordinate of the character's position.
   */
  jellyFishFliesOutOfTheMap(characterX) {
    this.y -= 20;
  }

  /**
   * Checks if the object is dead by evaluating if its energy level is zero.
   * @returns {boolean} - Returns true if the object's energy level is zero, indicating it is dead, otherwise returns false.
   */
  isDead() {
    return this.energy == 0;
  }

  /**
   * Moves the object to the left by subtracting its speed from its current x-coordinate.
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * Moves the object to the right by adding its speed to its current x-coordinate.
   */
  moveRight() {
    this.x += this.speed;
  }

  /**
   * Moves the object downward by adding its speed to its current y-coordinate.
   */
  moveDown() {
    this.y += this.speed;
  }

  /**
   * Moves the object upward by subtracting its speed from its current y-coordinate.
   */
  moveUp() {
    this.y -= this.speed;
  }

  /**
   * Checks if the object is currently active based on keyboard input or its current state (hurt or dead).
   * @returns {boolean} - Returns true if the object is currently active, otherwise returns false.
   */
  checkActivity() {
    return (
      this.world.keyboard.RIGHT ||
      this.world.keyboard.LEFT ||
      this.world.keyboard.UP ||
      this.world.keyboard.DOWN ||
      this.world.keyboard.SPACE ||
      this.world.keyboard.D ||
      this.world.keyboard.G ||
      this.isHurt() ||
      this.isDead()
    );
  }

  /**
   * Checks if the last damage was inflicted by a jellyfish of any class.
   * @returns {boolean} - Returns true if the last damage was inflicted by a jellyfish (weak or strong), otherwise returns false.
   */
  checkJellyFishClass() {
    return (
      this.damageFromWhichEnemy instanceof WeakLilaJellyFish ||
      this.damageFromWhichEnemy instanceof WeakYellowJellyFish ||
      this.damageFromWhichEnemy instanceof StrongPinkJellyFish ||
      this.damageFromWhichEnemy instanceof StrongGreenJellyFish
    );
  }

  /**
   * Checks if the last damage was inflicted by either a fish or the end boss.
   * @returns {boolean} - Returns true if the last damage was inflicted by a fish or the end boss, otherwise returns false.
   */
  checkFishAndEndbossClass() {
    return this.damageFromWhichEnemy instanceof Fish || this.damageFromWhichEnemy instanceof Endboss;
  }

  /**
   * Determines the x-coordinate for positioning objects within a range and avoids overlapping with existing positions.
   * @returns {number} - Returns the calculated x-coordinate for positioning objects.
   */
  positionierungObjecteX() {
    let index = 520 + Math.random() * 3200;
    this.positionObjects.forEach((position) => {
      if (position - index < 10) {
        index + 100;
      }
      this.positionObjects.push(index);
    });
    return index;
  }

  /**
   * Determines the y-coordinate for positioning objects within a range and avoids overlapping with existing positions.
   * @returns {number} - Returns the calculated y-coordinate for positioning objects.
   */
  positionierungObjecteY() {
    let index = 60 + Math.random() * 220;
    this.positionObjects.forEach((position) => {
      if (position - index < 10) {
        index + 80;
      }
      this.positionObjects.push(index);
    });
    return index;
  }
}
