class ThrowableObject extends MovableObject {
    constructor(x,y) {
        super().loadImage("./img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 80;
        this.trow();
    }

    trow() {
        setInterval(() => {
            this.x += 10;
        }, 50)
    }
}