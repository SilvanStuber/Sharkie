class Bubble extends ThrowableObject{
    constructor(x,y, directionCharacter) {
        super().loadImage("./img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
        this.x = x;
        this.y = y;
        this.trow(directionCharacter);
    }
}

