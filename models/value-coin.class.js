class ValueOfCoin extends StatusBar {
    IMAGES_VALUE_COINS = [
      "./img/4. Marcadores/green/Coin/0_  copia 4.png",
      "./img/4. Marcadores/green/Coin/20_  copia 2.png",
      "./img/4. Marcadores/green/Coin/40_  copia 4.png",
      "./img/4. Marcadores/green/Coin/60_  copia 4.png",
      "./img/4. Marcadores/green/Coin/80_  copia 4.png",
      "./img/4. Marcadores/green/Coin/100_ copia 4.png",
    ];
    percentageCoins;
  
    constructor() {
      super();
      this.loadImages(this.IMAGES_VALUE_COINS);
      this.x = 160;
      this.setPercentage(0, this.IMAGES_VALUE_COINS);
    }
  
    setValueOfCoin(percentage) {
      if (percentage < 100) {
       this.percentageCoins = percentage;
      } else {
        this.percentageCoins = 100;
      }
      this.setPercentage(this.percentageCoins, this.IMAGES_VALUE_COINS);
    }
  }