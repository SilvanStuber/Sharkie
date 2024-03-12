class FishGreen extends Fish {
  IMAGES_GREEN_FISH_SWIM = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
  ];
  IMAGES_GREEN_FISH_TRANSITION = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png",
  ];
  IMAGES_GREEN_FISH_BUBBLE_SWIM = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png",
  ];
  IMAGES_GREEN_FISH_DEAD = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png",
  ];

  constructor() {
    super().loadImage("./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");
    this.loadImages(this.IMAGES_GREEN_FISH_SWIM);
    this.loadImages(this.IMAGES_GREEN_FISH_TRANSITION);
    this.loadImages(this.IMAGES_GREEN_FISH_BUBBLE_SWIM);
    this.loadImages(this.IMAGES_GREEN_FISH_DEAD);
    this.x = this.positionierungObjecteX();
    this.y = this.positionierungObjecteY();
    this.speed = 0.15 + Math.random() * 0.3;
    setStoppableInterval(() => this.moveLeft(), 1000 / 60);
    setStoppableInterval(() => this.animate(this.IMAGES_GREEN_FISH_DEAD, this.IMAGES_GREEN_FISH_TRANSITION, this.IMAGES_GREEN_FISH_BUBBLE_SWIM, this.IMAGES_GREEN_FISH_SWIM), 125);
  }
}
