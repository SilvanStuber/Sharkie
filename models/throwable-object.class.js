/**
 * Represents a throwable object, extending the MovableObject class.
 * @class
 * @extends MovableObject
 */
class ThrowableObject extends MovableObject {
  offsetX = 0;
  offsetY = 0;
  offsetWidht = 0;
  offsetHeight = 0;
  height = 80;
  width = 80;

  /**
   * Throws the throwable object in a specified direction.
   * @param {boolean} directionCharacter - Indicates the direction in which the throwable object will be thrown.
   */
  trow(directionCharacter) {
    setInterval(() => {
      if (directionCharacter) {
        this.x -= 10;
      } else if (!directionCharacter) {
        this.x += 10;
      }
    }, 50);
  }
}
