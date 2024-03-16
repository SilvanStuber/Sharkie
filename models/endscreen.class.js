class EndScreen extends MovableObject {
  IMAGE_WIN = [
    "./img/6.Botones/Tittles/You win/Recurso 19.png",
    "./img/6.Botones/Tittles/You win/Recurso 20.png",
    "./img/6.Botones/Tittles/You win/Recurso 21.png",
    "./img/6.Botones/Tittles/You win/Recurso 22.png",
  ];
  IMAGE_GAMEOVER = [
    "./img/6.Botones/Tittles/Game Over/Recurso 9.png",
    "./img/6.Botones/Tittles/Game Over/Recurso 10.png",
    "./img/6.Botones/Tittles/Game Over/Recurso 11.png",
    "./img/6.Botones/Tittles/Game Over/Recurso 12.png",
    "./img/6.Botones/Tittles/Game Over/Recurso 13.png",
  ];
  IMAGE_TRY_AGAIN = [
    "./img/6.Botones/Try again/Recurso 15.png",
    "./img/6.Botones/Try again/Recurso 16.png",
    "./img/6.Botones/Try again/Recurso 17.png",
    "./img/6.Botones/Try again/Recurso 18.png",
  ];

  width = 480;
  height = 280;
  imageTryAgainCounter = 0;

  constructor() {
    super();
    this.loadImage("./img/6.Botones/Tittles/You win/Recurso 19.png");
    this.loadImages(this.IMAGE_WIN);
    this.loadImages(this.IMAGE_GAMEOVER);
    this.y = 80;
    setInterval(() => this.generateWinAnimation(), 250);
    setInterval(() => this.generateGameOverAnimation(), 250);
    setInterval(() => this.loadTryAgain(), 250);
  }

  generateWinAnimation() {
    if (endbossDead) {
      this.x = characterPositionX + 130;
      this.playAnimation(this.IMAGE_WIN);
    }
  }

  generateGameOverAnimation() {
    if (characterDead) {
      this.x = characterPositionX + 120;
      this.playAnimation(this.IMAGE_GAMEOVER);
    }
  }

  loadTryAgain() {
    if (endbossDead || characterDead) {
      let i = this.imageTryAgainCounter % this.IMAGE_TRY_AGAIN.length;
      document.getElementById("tryAgainButton").src = this.IMAGE_TRY_AGAIN[i];
      this.imageTryAgainCounter++;
    }
  }
}
