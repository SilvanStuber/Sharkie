class MenuScreen extends MovableObject {
  IMAGE_TRY_AGAIN = ["./img/6.Botones/Start/1.png", "./img/6.Botones/Start/2.png", "./img/6.Botones/Start/3.png", "./img/6.Botones/Start/4.png"];
  width = 720;
  height = 480;

  constructor() {
    super().loadImage("./img/3. Background/Mesa de trabajo 1.png");
    this.x = 0;
    this.y = 0;
    setInterval(() => {this.animateStartButto();}, 250);
  }

  animateStartButto() {
      let i = this.imageCounter % this.IMAGE_TRY_AGAIN.length;
      document.getElementById("startGameButton").src = this.IMAGE_TRY_AGAIN[i];
      this.imageCounter++;
  }
}
