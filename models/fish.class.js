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

  animate(imageDEAD, imageTransition, imageTransitionSwim, imageSwim) {
    if (this.isDead()) {
      this.playAnimation(imageDEAD)
      this.fishFliesOutOfTheMap(world.character.x, 40);
    } else if (world.character.x + 400 < this.x) {
      this.fishTransition = true;
    } else if (this.fishTransition) {
      this.generateAnimationTransitionToBubbleFish(imageTransition, imageTransitionSwim);
    } else {
      this.playAnimation(imageSwim);
    }
  }

  generateAnimationTransitionToBubbleFish(imageTransition, imageTransitionSwim) {
    if (this.transistionCounter < 3) {
      this.playSingeleAnimation(imageTransition, this.transistionCounter);
    } else {
      this.playAnimation(imageTransitionSwim);
    }
    this.transistionCounter++;
  }
}
