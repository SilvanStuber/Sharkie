/**
 * Represents a fish enemy.
 * @class
 */
class Fish extends MovableObject {
  height = 60;
  width = 100;
  offsetX = 0;
  offsetY = 2;
  offsetWidht = 0;
  offsetHeight = 10;
  fishTransition = false;
  transistionCounter = 0;
  deadCounter = 0;

  /**
   * Animates the fish enemy.
   * @param {string[]} imageDEAD - The array of images for the dead animation.
   * @param {string[]} imageTransition - The array of images for the transition animation.
   * @param {string[]} imageTransitionSwim - The array of images for the transition swim animation.
   * @param {string[]} imageSwim - The array of images for the swim animation.
   */
  animate(imageDEAD, imageTransition, imageTransitionSwim, imageSwim) {
    if (this.isDead()) {
      this.playAnimation(imageDEAD);
      this.fishFliesOutOfTheMap(characterPositionX, 40);
    } else if (characterPositionX + 400 < this.x) {
      this.fishTransition = true;
    } else if (this.fishTransition) {
      this.generateAnimationTransitionToBubbleFish(imageTransition, imageTransitionSwim);
    } else {
      this.playAnimation(imageSwim);
    }
  }

  /**
   * Generates the animation transition to bubble fish.
   * @param {string[]} imageTransition - The array of images for the transition animation.
   * @param {string[]} imageTransitionSwim - The array of images for the transition swim animation.
   */
  generateAnimationTransitionToBubbleFish(imageTransition, imageTransitionSwim) {
    if (this.transistionCounter < 3) {
      this.playSingeleAnimation(imageTransition, this.transistionCounter);
    } else {
      this.playAnimation(imageTransitionSwim);
    }
    this.transistionCounter++;
  }
}
