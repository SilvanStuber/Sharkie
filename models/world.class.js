/**
 * Represents the game world.
 * @class
 */
class World {
  menuScreen = new MenuScreen();
  character = new Character();
  level;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  throwableObjects = [];
  checkColliding;
  bubble_sound = new Audio("./audio/bubble_sound.mp3");
  buzzer_sound = new Audio("./audio/buzzer.mp3");
  bubble;
  positionBubbleX;

  /**
   * Constructs a new World object.
   * @param {HTMLCanvasElement} canvas - The canvas element for rendering graphics.
   * @param {Keyboard} keyboard - The keyboard input handler for the game world.
   */
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.initGame();
    this.setWorld();
  }

  /**
   * Sets the world property of the character to the current instance of the World class.
   */
  setWorld() {
    this.character.world = this;
  }

  /**
   * Generates throwable objects based on the specified key input.
   * @param {Object} key - The key input object.
   */
  generateThrowObjects(bubbleFromCharacter) {
    this.positionBubble();
    playInteractionSound(this.bubble_sound);
    if (bubbleFromCharacter == "poisionBubble") {
      this.bubble = new BubblePoison(this.positionBubbleX, this.character.y + 80, this.character.otherDirection);
    } else if (bubbleFromCharacter == "normalBubble") {
      this.bubble = new Bubble(this.positionBubbleX, this.character.y + 80, this.character.otherDirection);
    }
    this.throwableObjects.push(this.bubble);
  }

  /**
   * Positions the bubble based on the character's direction.
   */
  positionBubble() {
    if (this.character.otherDirection) {
      this.positionBubbleX = this.character.x;
    } else if (!this.character.otherDirection) {
      this.positionBubbleX = this.character.x + 230;
    }
  }

  /**
   * Starts the game by loading game data, setting the game state, hiding the start game button, playing game sounds, and initializing the game.
   */
  startGame() {
    this.loadDateGame();
    gameHasStarted = true;
    document.getElementById("startGameButton").classList.add("d-none");
    playGameSound();
    this.initGame();
  }

  /**
   * Loads the game data by initializing the level, setting the current level, creating a collision checker, running collision checks, and rendering touch keys.
   */
  loadDateGame() {
    initLevel();
    this.level = level1;
    this.checkColliding = new Collision(this.level, this.character, this.throwableObjects);
    this.checkColliding.run(this.keyboard);
    this.renderTouchKey();
  }

  /**
   * Initializes the game by either drawing the start screen if the game has not started yet, or drawing the game screen if the game has started.
   */
  initGame() {
    if (!gameHasStarted) {
      this.drawStartScreen();
    } else {
      this.drawGame();
    }
    document.getElementById("infobox").classList.add("d-none");
  }

  /**
   * Draws the start screen by clearing the canvas, adding the menu screen to the map, and continuously redrawing the start screen using requestAnimationFrame.
   */
  drawStartScreen() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.addToMap(this.menuScreen);
    let self = this;
    requestAnimationFrame(function () {
      self.drawStartScreen();
    });
  }

  /**
   * Draws the game screen by clearing the canvas, translating the context based on camera position, adding background objects to the map, drawing fixed objects, and continuously redrawing the game screen using requestAnimationFrame.
   */
  drawGame() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.ctx.translate(-this.camera_x, 0);
    this.drawFixedObjects();
    let self = this;
    requestAnimationFrame(function () {
      self.drawGame();
    });
  }

  /**
   * Draws fixed objects by adding status bar elements, drawing values from the status bar, adding character, enemies, coins, poison bottles, throwable objects, and end screen to the map.
   */
  drawFixedObjects() {
    this.addObjectsToMap(this.level.statusBar);
    this.drawValueFromStatusBar();
    this.ctx.translate(this.camera_x, 0);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.poisonBottle);
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.level.endScreen);
    this.ctx.translate(-this.camera_x, 0);
  }

  /**
   * Adds objects to the map by iterating over the array of objects and adding each object to the map.
   * @param {Array} objects - The array of objects to be added to the map.
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * Adds a movable object to the map by drawing it on the canvas. If the object is facing the opposite direction, it flips the image horizontally before drawing.
   * @param {MovableObject} mo - The movable object to be added to the map.
   */
  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  /**
   * Flips the image of a movable object horizontally.
   * @param {MovableObject} mo - The movable object whose image will be flipped.
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * Reverts the flipped image of a movable object back to its original orientation.
   * @param {MovableObject} mo - The movable object whose flipped image will be reverted.
   */
  flipImageBack(mo) {
    this.ctx.restore();
    mo.x = mo.x * -1;
  }

  /**
   * Draws values from the status bar, such as character energy, coins value, and poison value, on the canvas.
   */
  drawValueFromStatusBar() {
    this.setNumberOfMap(this.character.energy, 65, 50);
    this.setNumberOfMap(this.checkColliding.coinsValue, 205, 50);
    this.setNumberOfMapPoison(this.checkColliding.poisonValue, 287, 50);
  }

  /**
   * Sets and draws a numeric value on the canvas at the specified coordinates.
   * @param {number} value - The numeric value to be drawn on the canvas.
   * @param {number} x - The x-coordinate where the value will be drawn on the canvas.
   * @param {number} y - The y-coordinate where the value will be drawn on the canvas.
   */
  setNumberOfMap(value, x, y) {
    this.ctx.fillStyle = "white";
    this.ctx.font = "40px Luckiest Guy";
    this.ctx.fillText(value, x, y);
  }

  /**
   * Sets and draws a numeric value representing poison on the canvas at the specified coordinates.
   * If the poison value is zero and the 'G' key is pressed, it plays a buzzer sound and displays the value in red, otherwise in white.
   * @param {number} value - The numeric value representing poison to be drawn on the canvas.
   * @param {number} x - The x-coordinate where the value will be drawn on the canvas.
   * @param {number} y - The y-coordinate where the value will be drawn on the canvas.
   */
  setNumberOfMapPoison(value, x, y) {
    if (this.checkColliding.poisonValue == 0 && this.keyboard.G) {
      playInteractionSound(this.buzzer_sound);
      this.ctx.fillStyle = "red";
    } else {
      this.ctx.fillStyle = "white";
    }
    this.ctx.font = "40px Luckiest Guy";
    this.ctx.fillText(value, x, y);
  }

  /**
   * Reloads the current page, effectively resetting the game.
   */
  reset() {
    location.reload();
  }

  /**
   * Renders touch keys on the mobile interface by updating the HTML content of corresponding elements with images representing different keys.
   */
  renderTouchKey() {
    document.getElementById("btnKeyUp").innerHTML = `<img class="key-mobile-img" src="./img/6.Botones/Key/key-up.png" alt="Key Up">`;
    document.getElementById("btnKeyDown").innerHTML = `<img class="key-mobile-img" src="./img/6.Botones/Key/key-down.png" alt="Key DOWN">`;
    document.getElementById("btnKeyLeft").innerHTML = `<img class="key-mobile-img" src="./img/6.Botones/Key/key-left.png" alt="Key LEFT">`;
    document.getElementById("btnKeyRight").innerHTML = `<img class="key-mobile-img" src="./img/6.Botones/Key/key-right.png" alt="Key RIGHT">`;
    document.getElementById("btnKeySpace").innerHTML = `<img class="key-mobile-img" src="./img/6.Botones/Key/Space Bar key.png" alt="Key SPACE">`;
    document.getElementById("btnKeyD").innerHTML = `<img class="key-mobile-img" src="./img/6.Botones/Key/D key.png" alt="Key D">`;
    document.getElementById("btnKeyG").innerHTML = `<img class="key-mobile-img" src="./img/6.Botones/Key/G Key.png" alt=" Key G">`;
  }

  /**
   * Removes touch keys from the mobile interface by clearing the HTML content of corresponding elements.
   */
  removeTouchKey() {
    document.getElementById("btnKeyUp").innerHTML = "";
    document.getElementById("btnKeyDown").innerHTML = "";
    document.getElementById("btnKeyLeft").innerHTML = "";
    document.getElementById("btnKeyRight").innerHTML = "";
    document.getElementById("btnKeySpace").innerHTML = "";
    document.getElementById("btnKeyD").innerHTML = "";
    document.getElementById("btnKeyG").innerHTML = "";
  }
}
