class Collision {
  coin_sound = new Audio("./audio/coin_sound.mp3");
  poison_sound = new Audio("./audio/poison_sound.mp3");
  valueOfLife = new ValueOfLife();
  valueOfCoin = new ValueOfCoin();
  valueOfPoison = new ValueOfPoison();
  coinsValue = 0;
  poisonValue = 0;
  hitEnemy;
  level;
  chracter;
  keyboard;
  throwableObjects;

  constructor(level, chracter, throwableObjects) {
    this.level = level;
    this.character = chracter;
    this.throwableObjects = throwableObjects;
  }

  run(keyboard) {
    this.keyboard = keyboard;
    
    setInterval(() => {
      this.checkCollisionsEnemy();
      this.checkCollisionsCoins();
      this.checkCollisionsPoison();
      this.checkCollisionsBubble();
      this.attackEnemy();
    }, 250);
  }

  checkCollisionsEnemy() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit(enemy);
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

  checkCollisionsBubble() {
    this.throwableObjects.forEach((bubble) => {
      this.level.enemies.forEach((enemy) => {
        if (bubble.isColliding(enemy)) {
          console.log(enemy)
          if(enemy instanceof Fish) {
            console.log("Fisch")
          } else if (enemy instanceof Endboss) {
            console.log("Endboss")
          } 
        }
      });
    });
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
