class MovableObject {
  x = 120;
  y = 300;
  img;
  height = 200;
  width = 300;
  imageCache = {};
  speed = 0.15;
  currentImage = 0;
  otherDirection = false;
  energy = 100;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  playAnimation(imgArray) {
    this.imgArray = imgArray;
    let i = this.currentImage % this.imgArray.length;
    let path = this.imgArray[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    ////////Rechteck///////////////////////
    if (this instanceof Character || this instanceof Fish) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
    //////////////////////////////
  }

  isColliding(mo) {
    return (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height
    );
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
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
}
