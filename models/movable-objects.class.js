class MovableObject {
    x = 0;
    y = 220;
    img;
    height = 200;
    width = 300;


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