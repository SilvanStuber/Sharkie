class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  valueOfLife = new ValueOfLife();
  valueOfCoin = new ValueOfCoin();
  valueOfPoison = new ValueOfPoison();
  throwableObjects = [];
  coinsValue = 0;
  poisonValue = 0;
  hitEnemy;
  coin_sound = new Audio("./audio/coin_sound.mp3");
  poison_sound = new Audio("./audio/poison_sound.mp3");
  bubble_sound = new Audio("./audio/bubble_sound.mp3");

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisionsEnemy();
      this.checkCollisionsCoins();
      this.checkCollisionsPoison();
      this.attackEnemy();
    }, 250);
  }

  checkCollisionsEnemy() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.valueOfLife.setValueOfLife(this.character.energy);
      }
    });
  }

  checkCollisionsCoins() {
    let i = 0;
    this.level.coins.forEach((coin) => {
      if (this.character.isColliding(coin)) {
        this.coin_sound.play();
        this.level.coins.splice(i, 1);
        this.coinsValue += 10;
        this.valueOfCoin.setValueOfCoin(this.coinsValue);
      }
      i++;
    });
  }

  checkCollisionsPoison() {
    let i = 0;
    this.level.poisonBottle.forEach((bottle) => {
      if (this.character.isColliding(bottle)) {
        this.poison_sound.play();
        this.level.poisonBottle.splice(i, 1);
        this.poisonValue += 20;
        this.valueOfPoison.setValueOfPoison(this.poisonValue);
      }
      i++;
    });
  }

  generateThrowObjects() {
        this.bubble_sound.play();
        let bubble = new ThrowableObject(this.character.x + 230, this.character.y + 80);
        this.throwableObjects.push(bubble);
  } 

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.ctx.translate(-this.camera_x, 0);
    //----------Space for fixed objects--------------------
    this.addToMap(this.valueOfLife);
    this.addToMap(this.valueOfCoin);
    this.addToMap(this.valueOfPoison);
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
    mo.drawFrame(this.ctx); //Rechteck
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

  attackEnemy() {
    if (this.keyboard.SPACE) {
      let i = 0;
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          setStoppableInterval(() => enemy.enemyFliesOutOfTheMap(this.character.x), 125);
          setTimeout(() => {
            this.level.enemies.splice(i, 1);
          }, 1125);
        }
        i++;
      });
    }
  }
}
