class ThrowableObject extends MovableObject {
    offsetX = 0;
    offsetY = 0;
    offsetWidht = 0;
    offsetHeight = 0;
    height = 80;
    width = 80;

    trow(directionCharacter) {
        setInterval(() => {
            if (directionCharacter) {
                this.x -= 10;
            } else if (!directionCharacter) {
                this.x += 10;
            }       
        }, 50)
    }
}