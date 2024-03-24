/**
 * Represents a poisonous bubble throwable object.
 * @class
 * @extends ThrowableObject
 */
class BubblePoison extends ThrowableObject {
  /**
   * Creates a new poisoned bubble object.
   * @param {number} x - The x-coordinate at which the object is to be created.
   * @param {number} y - The y-coordinate where the object should be created.
   * @param {string} directionCharacter - The directional character of the object.
   */
  constructor(x, y, directionCharacter) {
    super().loadImage("./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
    this.x = x;
    this.y = y;
    this.trow(directionCharacter);
  }
}
