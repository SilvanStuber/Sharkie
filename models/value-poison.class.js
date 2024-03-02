class ValueOfPoison extends StatusBar {
    IMAGES_VALUE_POISON = [
      "./img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png",
      "./img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png",
      "./img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png",
      "./img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png",
      "./img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png",
      "./img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png",
    ];
  
    constructor() {
      super();
      this.loadImages(this.IMAGES_VALUE_POISON);
      this.x = 300;
      this.setPercentage(0, this.IMAGES_VALUE_POISON);
    }
  
    setValueOfPoison(percentage) {
      if (percentage < 100) {
        this.percentagePoison = percentage;
       } else {
         this.percentagePoison = 100;
       }
      this.setPercentage(this.percentagePoison, this.IMAGES_VALUE_POISON);
    }
  }