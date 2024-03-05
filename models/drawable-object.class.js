class DrawableObject {
  x;
  y;
  img;
  currentImage = 0;
  imageCache = {};
  height = 200;
  width = 300;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    ////////Rechteck///////////////////////
    if (this instanceof Character || this instanceof Fish  || this instanceof Coins || this instanceof Poison || this instanceof ThrowableObject) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x - this.offsetX, this.y - this.offsetY, this.width - this.offsetWidht, this.height - this.offsetHeight);
      ctx.stroke();
    }
    //////////////////////////////
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
}
