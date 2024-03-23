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

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.initGame();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  generateThrowObjects(key) {
    playInteractionSound(this.bubble_sound);
    this.positionBubble();
    if (key.G) {
      this.bubble = new BubblePoison(this.positionBubbleX, this.character.y + 80, this.character.otherDirection);
    } else if (key.D) {
      this.bubble = new Bubble(this.positionBubbleX, this.character.y + 80, this.character.otherDirection);
    }
    this.throwableObjects.push(this.bubble);
  }

  positionBubble() {
    if (this.character.otherDirection) {
      this.positionBubbleX = this.character.x;
    } else if (!this.character.otherDirection) {
      this.positionBubbleX = this.character.x + 230;
    }
  }

  startGame() {
    this.loadDateGame();
    gameHasStarted = true;
    document.getElementById("startGameButton").classList.add("d-none");
    playGameSound();
    this.initGame();
  }

  loadDateGame() {
    initLevel();
    this.level = level1;
    this.checkColliding = new Collision(this.level, this.character, this.throwableObjects);
    this.checkColliding.run(this.keyboard);
    this.renderTouchKey();
  }

  initGame() {
    if (!gameHasStarted) {
      this.drawStartScreen();
    } else {
      this.drawGame();
    }
    document.getElementById("infobox").classList.add("d-none");
  }

  drawStartScreen() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.addToMap(this.menuScreen);
    let self = this;
    requestAnimationFrame(function () {
      self.drawStartScreen();
    });
  }

  drawGame() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.ctx.translate(-this.camera_x, 0);
    //----------Space for fixed objects--------------------
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
    let self = this;
    requestAnimationFrame(function () {
      self.drawGame();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    this.ctx.restore();
    mo.x = mo.x * -1;
  }

  drawValueFromStatusBar() {
    this.setNumberOfMap(this.character.energy, 65, 50);
    this.setNumberOfMap(this.checkColliding.coinsValue, 205, 50);
    this.setNumberOfMapPoison(this.checkColliding.poisonValue, 287, 50);
  }

  setNumberOfMap(value, x, y) {
    this.ctx.fillStyle = "white";
    this.ctx.font = "40px Luckiest Guy";
    this.ctx.fillText(value, x, y);
  }

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

  reset() {
    location.reload();
  }

  renderTouchKey() {
    document.getElementById('btnKeyUp').innerHTML = `<img class="key-mobile-img" src="./img/6.Botones/Key/key-up.png" alt="Key Up">`;
    document.getElementById('btnKeyDown').innerHTML = `<img class="key-mobile-img" src="./img/6.Botones/Key/key-down.png" alt="Key DOWN">`;
    document.getElementById('btnKeyLeft').innerHTML = `<img class="key-mobile-img" src="./img/6.Botones/Key/key-left.png" alt="Key LEFT">`;
    document.getElementById('btnKeyRight').innerHTML = `<img class="key-mobile-img" src="./img/6.Botones/Key/key-right.png" alt="Key RIGHT">`;
    document.getElementById('btnKeySpace').innerHTML = `<img class="key-mobile-img" src="./img/6.Botones/Key/Space Bar key.png" alt="Key SPACE">`;
    document.getElementById('btnKeyD').innerHTML = `<img class="key-mobile-img" src="./img/6.Botones/Key/D key.png" alt="Key D">`;
    document.getElementById('btnKeyG').innerHTML = `<img class="key-mobile-img" src="./img/6.Botones/Key/G Key.png" alt=" Key G">`;
  }

  removeTouchKey() {
    document.getElementById('btnKeyUp').innerHTML = "";
    document.getElementById('btnKeyDown').innerHTML = "";
    document.getElementById('btnKeyLeft').innerHTML = "";
    document.getElementById('btnKeyRight').innerHTML = "";
    document.getElementById('btnKeySpace').innerHTML = "";
    document.getElementById('btnKeyD').innerHTML = "";
    document.getElementById('btnKeyG').innerHTML =  "";
  }
}
