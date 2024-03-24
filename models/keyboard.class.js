/**
 * Represents a keyboard controller.
 * @class
 */
class Keyboard {
  LEFT;
  RIGHT;
  UP;
  DOWN;
  SPACE;

  /**
   * Creates a new Keyboard instance.
   */
  constructor() {
    this.pressKeyEvent();
    this.touchKeyEvent();
  }

  /**
   * Listens for key press events and updates corresponding key states.
   */
  pressKeyEvent() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 39) {
        this.RIGHT = true;
      }
      if (e.keyCode == 37) {
        this.LEFT = true;
      }
      if (e.keyCode == 38) {
        this.UP = true;
      }
      if (e.keyCode == 40) {
        this.DOWN = true;
      }
      if (e.keyCode == 32) {
        this.SPACE = true;
      }
      if (e.keyCode == 68) {
        this.D = true;
      }
      if (e.keyCode == 71) {
        this.G = true;
      }
    });

    window.addEventListener("keyup", (e) => {
      if (e.keyCode == 39) {
        this.RIGHT = false;
      }
      if (e.keyCode == 37) {
        this.LEFT = false;
      }
      if (e.keyCode == 38) {
        this.UP = false;
      }
      if (e.keyCode == 40) {
        this.DOWN = false;
      }
      if (e.keyCode == 32) {
        this.SPACE = false;
      }
      if (e.keyCode == 68) {
        this.D = false;
      }
      if (e.keyCode == 71) {
        this.G = false;
      }
    });
  }

  /**
   * Listens for touch events and updates corresponding key states.
   */
  touchKeyEvent() {
    document.getElementById("btnKeyRight").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.RIGHT = true;
    });
    document.getElementById("btnKeyRight").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.RIGHT = false;
    });
    document.getElementById("btnKeyLeft").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.LEFT = true;
    });
    document.getElementById("btnKeyLeft").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.LEFT = false;
    });
    document.getElementById("btnKeyUp").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.UP = true;
    });
    document.getElementById("btnKeyUp").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.UP = false;
    });
    document.getElementById("btnKeyDown").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.DOWN = true;
    });
    document.getElementById("btnKeyDown").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.DOWN = false;
    });
    document.getElementById("btnKeySpace").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.SPACE = true;
    });
    document.getElementById("btnKeySpace").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.SPACE = false;
    });
    document.getElementById("btnKeyD").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.D = true;
    });
    document.getElementById("btnKeyD").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.D = false;
    });
    document.getElementById("btnKeyG").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.G = true;
    });
    document.getElementById("btnKeyG").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.G = false;
    });
  }
}
