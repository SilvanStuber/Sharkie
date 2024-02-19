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
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }

  moveRight() {
    console.log("Moving Right");
  }
}
