class ValueOfLife extends StatusBar {
  IMAGES_VALUE_LIFE = [
    "./img/4. Marcadores/green/Life/0_  copia 3.png",
    "./img/4. Marcadores/green/Life/20_ copia 4.png",
    "./img/4. Marcadores/green/Life/40_  copia 3.png",
    "./img/4. Marcadores/green/Life/60_  copia 3.png",
    "./img/4. Marcadores/green/Life/80_  copia 3.png",
    "./img/4. Marcadores/green/Life/100_  copia 2.png",
  ];

  constructor() {
    super();
    this.loadImages(this.IMAGES_VALUE_LIFE);
    this.x = 20;
    this.setPercentage(100, this.IMAGES_VALUE_LIFE);
  }

  setValueOfLife(percentage) {
    this.setPercentage(percentage, this.IMAGES_VALUE_LIFE);
  }
}
