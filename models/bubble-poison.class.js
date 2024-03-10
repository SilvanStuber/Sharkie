class BubblePoison extends ThrowableObject{
    constructor(x,y, directionCharacter) {
        super().loadImage("./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
        this.x = x;
        this.y = y;
        this.trow(directionCharacter);
    }
}