class MovableObject {
  x = 120;
  y = 300;
  img;
  height = 200;
  width = 300;
  imageCacheStanding = {};
  imageCacheSwim = {};
  imageCacheEnemies = {};
  speed = 0.15;
  currentImage = 0;
  otherDirection = false;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  playAnimation(imgArray, imgCache) {
    this.imgArray = imgArray;
    this.imgCache = imgCache;
    let i = this.currentImage % this[imgArray].length;
    let path = this[imgArray][i];
    this.img = this[imgCache][path];
    this.currentImage++;
  }

  loadImages(arr, cacheTyp) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this[cacheTyp][path] = img;
    });
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    ////////Rechteck///////////////////////
    ctx.beginPath();
    ctx.lineWidth = '5';
    ctx.strokeStyle = 'blue';
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
    //////////////////////////////
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
