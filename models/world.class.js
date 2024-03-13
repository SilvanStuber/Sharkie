class World {
  character = new Character();
  lifeBar = new StatusBar();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  throwableObjects = [];
  checkColliding = new Collision(this.level, this.character, this.throwableObjects);
  bubble_sound = new Audio("./audio/bubble_sound.mp3");
  bubble;
  positionBubbleX;
  
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkColliding.run(this.keyboard);
  }

  setWorld() {
    this.character.world = this;
  }

  generateThrowObjects(key) {
    this.bubble_sound.play();
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

  draw() {
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
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
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
    if (mo.spinObject) {
      this.rotateImage(mo);
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
      this.setNumberOfMap(this.checkColliding.poisonValue, 287, 50);
  }

  setNumberOfMap(value, x, y) {
    console.log(this.lifeBar.lifeCounter)
    this.ctx.fillStyle = 'white';
    this.ctx.font = '40px Luckiest Guy';
    this.ctx.fillText(value, x, y ); 
  }
}
