class Endboss extends MovableObject {
  x = 0;
  y = 0;
  height = 500;
  width = 400;
  speed = 1;
  world;
  IMAGE_INTRODUCE = [
    "./img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];
  IMAGES_SWIM = [
    "./img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];
  hadFirstContact = false;

  constructor() {
    super().loadImage("./img/2.Enemy/3 Final Enemy/1.Introduce/1.png");
    this.loadImages(this.IMAGE_INTRODUCE);
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_SWIM);
    this.x = 2450;
    this.animate();
  }

  animate() {
      let i = 0;
      setInterval(() => {
        if (world.character.x > 1800) {
          if (i < 10 ) {
            this.playAnimation(this.IMAGE_INTRODUCE);
            } else {
            this.playAnimation(this.IMAGES_SWIM);
            }
            i++
            if(!this.hadFirstContact) {
              playGameSoundEndboss();
              this.hadFirstContact = true;
            } 
        }
      }, 250);
    
  }
}
