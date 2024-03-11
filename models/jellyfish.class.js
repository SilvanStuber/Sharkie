class JellyFish extends MovableObject {
    height = 120;
    width = 100;
    offsetX = 0;
    offsetY = -5;
    offsetWidht = 0;
    offsetHeight = 15;
  
  
    animate(imageAlive, imaggeDead) {
      this.x = 320 + Math.random() * 2200;
      this.y = 100 + Math.random() * 280;
      this.speed = 0.15 + Math.random() * 0.3;
      setStoppableInterval(() => this.moveLeft(), 1000 / 60);
      setStoppableInterval(() => this.animationCharacter(imageAlive, imaggeDead), 250);
    }

    animationCharacter(imageAlive, imaggeDead) {
      if (this.isDead()) {
        this.playAnimation(imaggeDead);
      } else {
        this.playAnimation(imageAlive);
      }
    }
  }
  