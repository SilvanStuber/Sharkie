class MovableObject extends DrawableObject {
  offsetX;
  offsetY;
  offsetWidht;
  offsetHeight;
  speed = 0.15;
  otherDirection = false;
  energy = 100;
  lastHit = 0;

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  isColliding(mo) {
    return (
      this.x - this.offsetX + this.width - this.offsetWidht > mo.x - mo.offsetX &&
      this.y - this.offsetY + this.height - this.offsetHeight > mo.y - mo.offsetY &&
      this.x - this.offsetX < mo.x - mo.offsetX &&
      this.y - this.offsetY < mo.y - mo.offsetY + mo.height - mo.offsetHeight
    );
  }

  hit() {
    this.energy -= 2;
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
}
