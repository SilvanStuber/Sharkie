class MovableObject {
    x;
    y;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveLeft() {
       
    }

    moveRight() {
      console.log('Moving Right')  
    }
}