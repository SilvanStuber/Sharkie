class MovableObject {
    x = 120;
    y = 300;
    img;
    height = 200;
    width = 300;
    imageCacheStanding = {};
    imageCacheSwim = {};
    speed = 0.15;
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
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
       }, 1000 / 60)
    }

    moveRight() {
      console.log('Moving Right')  
    }
}
