/**
 * Represents a jellyfish enemy.
 * @class
 */
class JellyFish extends MovableObject {
  height = 120;
  width = 100;
  offsetX = 0;
  offsetY = -5;
  offsetWidht = 0;
  offsetHeight = 15;

  /**
   * Animates the jellyfish enemy.
   * @param {string[]} imageAlive - The array of images for the alive animation.
   * @param {string[]} imageDead - The array of images for the dead animation.
   */
  animate(imageAlive, imaggeDead) {
    this.x = this.positionierungObjecteX();
    this.y = this.positionierungObjecteY();
    this.speed = 0.15 + Math.random() * 0.3;
    setStoppableInterval(() => this.moveLeft(), 1000 / 60);
    setStoppableInterval(() => this.animationCharacter(imageAlive, imaggeDead), 250);
  }

  /**
   * Animates the jellyfish character.
   * @param {string[]} imageAlive - The array of images for the alive animation.
   * @param {string[]} imageDead - The array of images for the dead animation.
   */
  animationCharacter(imageAlive, imaggeDead) {
    if (this.isDead()) {
      this.playAnimation(imaggeDead);
      this.jellyFishFliesOutOfTheMap(characterPositionX);
    } else {
      this.playAnimation(imageAlive);
    }
  }
}
