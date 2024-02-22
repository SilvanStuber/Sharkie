class Fish extends MovableObject {
  height = 80;
  width = 100;
  IMAGES_GREEN_FISH = [
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png"
  ];
  IMAGES_RED_FISH = [
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png"
  ];
  IMAGES_PINK_FISH = [
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png"
  ];
  constructor() {
    super().loadImage("../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");
    this.loadImages(this.IMAGES_GREEN_FISH, "imageCacheEnemies");
    this.x = 320 + Math.random() * 500;
    this.y = 250 + Math.random() * 200;
    this.speed = 0.15 + Math.random() * 0.3;
    this.animate();
  }

  animate() {
    this.enemyMoveLeft();
    setInterval(() => {
      this.playAnimation("IMAGES_GREEN_FISH", "imageCacheEnemies")
    }, 250); 
  }
}
