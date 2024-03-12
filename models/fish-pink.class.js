class FishPink extends Fish {
  IMAGES_PINK_FISH_SWIM = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png",
  ];
  IMAGES_PINK_FISH_TRANSITION = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png",
  ];
  IMAGES_PINK_FISH_BUBBLE_SWIM = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png",
  ];
  IMAGES_PINK_FISH_DEAD = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png",
  ];

  constructor() {
    super().loadImage("./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png");
    this.loadImages(this.IMAGES_PINK_FISH_SWIM);
    this.loadImages(this.IMAGES_PINK_FISH_TRANSITION);
    this.loadImages(this.IMAGES_PINK_FISH_BUBBLE_SWIM);
    this.loadImages(this.IMAGES_PINK_FISH_DEAD);
    this.x = this.positionierungObjecteX();
    this.y = this.positionierungObjecteY();
    this.speed = 0.15 + Math.random() * 0.3;
    setStoppableInterval(() => this.moveLeft(), 1000 / 60);
    setStoppableInterval(() => this.animate(this.IMAGES_PINK_FISH_DEAD, this.IMAGES_PINK_FISH_TRANSITION, this.IMAGES_PINK_FISH_BUBBLE_SWIM, this.IMAGES_PINK_FISH_SWIM), 125);
  }
}
