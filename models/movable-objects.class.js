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
  endbossIsPublished = false;
  world;
  damageFromWhichEnemy;
  deadIntervalCounter = 0;
  positionObjects = [];

  playAnimation(images) {
    let i = this.currentImage % images.length;
    this.playSingeleAnimation(images, i);
    this.currentImage++;
  }

  playSingeleAnimation(images, i) {
    let path = images[i];
    this.img = this.imageCache[path];
  }

  isColliding(mo) {
    return (
      this.x - this.offsetX + this.width - this.offsetWidht > mo.x - mo.offsetX &&
      this.y - this.offsetY + this.height - this.offsetHeight > mo.y - mo.offsetY &&
      this.x - this.offsetX < mo.x - mo.offsetX &&
      this.y - this.offsetY < mo.y - mo.offsetY + mo.height - mo.offsetHeight
    );
  }

  hit(enemy) {
    this.validationHit(enemy);
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
      this.damageFromWhichEnemy = enemy;
    }
  }

  validationHit(enemy) {
    if (enemy instanceof Fish || enemy instanceof WeakLilaJellyFish || enemy instanceof WeakYellowJellyFish) {
      this.energy -= 2;
    } else if (enemy instanceof StrongPinkJellyFish || enemy instanceof StrongGreenJellyFish) {
      this.energy -= 4;
    } else if (enemy instanceof Endboss) {
      this.energy -= 8;
    }
  }

  hitJellyFish() {
    this.energy = 0;
  }

  hitEndboss() {
    this.energy -= 20;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 0.5;
  }

  enemyFliesOutOfTheMap(characterX) {
    this.height -= 7.5;
    this.width -= 15;
    this.y -= 70;
    if (characterX > this.x) {
      this.x -= 50;
    } else {
      this.x += 50;
    }
  }

  isDead() {
    return this.energy == 0;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveDown() {
    this.y += this.speed;
  }

  moveUp() {
    this.y -= this.speed;
  }

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

  checkJellyFishClass() {
    return (
      this.damageFromWhichEnemy instanceof WeakLilaJellyFish ||
      this.damageFromWhichEnemy instanceof WeakYellowJellyFish ||
      this.damageFromWhichEnemy instanceof StrongPinkJellyFish ||
      this.damageFromWhichEnemy instanceof StrongGreenJellyFish
    );
  }

  checkFishAndEndbossClass() {
    return this.damageFromWhichEnemy instanceof Fish || this.damageFromWhichEnemy instanceof Endboss;
  }

  positionierungObjecteX() {
    let index = 320 + (Math.random() * 2000);
    this.positionObjects.forEach(position => {
      if (position - index < 10) {
        index + 100;
      } 
      this.positionObjects.push(index)
     
    });  
    return index; 
  }

  positionierungObjecteY() {
    let index = 60 + (Math.random() * 300);
    this.positionObjects.forEach(position => {
      if (position - index < 10) {
        index + 80;
      } 
      this.positionObjects.push(index)
    }); 
    return index;
  }
}
