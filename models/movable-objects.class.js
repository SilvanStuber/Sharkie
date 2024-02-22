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

  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
    this.swimming_sound.play();
  }

  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
    this.swimming_sound.play();
  }

  moveDown() {
    this.y += this.speed;
    this.swimming_sound.play();
  }

  moveUp() {
    this.y -= this.speed;
    this.swimming_sound.play();
  }
  enemyMoveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}

  

  
