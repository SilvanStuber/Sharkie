let level1;

function initLevel() {
  level1 = new Level(
    [
      new FishGreen(),
      new FishGreen(),
      new FishPink(),
      new FishPink(),
      new FishRed(),
      new FishRed(),
      new WeakLilaJellyFish(),
      new WeakLilaJellyFish(),
      new WeakYellowJellyFish(),
      new WeakYellowJellyFish(),
      new StrongPinkJellyFish(),
      new StrongPinkJellyFish(),
      new StrongGreenJellyFish(),
      new StrongGreenJellyFish(),
      new Endboss(),
    ],
    [
      new BackgroundObject("./img/3. Background/Layers/5. Water/D2.png", -719),
      new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D2.png", -719),
      new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D2.png", -719),
      new BackgroundObject("./img/3. Background/Layers/2. Floor/D2.png", -719),
      new BackgroundObject("./img/3. Background/Layers/2. Floor/D2.png", -719),
      new BackgroundObject("./img/3. Background/Legacy/Layers/1. Light/2.png", -719),
      new BackgroundObject("./img/3. Background/Layers/5. Water/D1.png", 0),
      new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D1.png", 0),
      new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D1.png", 0),
      new BackgroundObject("./img/3. Background/Layers/2. Floor/D1.png", 0),
      new BackgroundObject("./img/3. Background/Layers/2. Floor/D1.png", 0),
      new BackgroundObject("./img/3. Background/Legacy/Layers/1. Light/1.png", 0),
      new BackgroundObject("./img/3. Background/Layers/5. Water/D2.png", 719),
      new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D2.png", 719),
      new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D2.png", 719),
      new BackgroundObject("./img/3. Background/Layers/2. Floor/D2.png", 719),
      new BackgroundObject("./img/3. Background/Layers/2. Floor/D2.png", 719),
      new BackgroundObject("./img/3. Background/Legacy/Layers/1. Light/2.png", 719),
      new BackgroundObject("./img/3. Background/Layers/5. Water/D1.png", 719 * 2),
      new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D1.png", 719 * 2),
      new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D1.png", 719 * 2),
      new BackgroundObject("./img/3. Background/Layers/2. Floor/D1.png", 719 * 2),
      new BackgroundObject("./img/3. Background/Layers/2. Floor/D1.png", 719 * 2),
      new BackgroundObject("./img/3. Background/Legacy/Layers/1. Light/1.png", 719 * 2),
      new BackgroundObject("./img/3. Background/Layers/5. Water/D2.png", 719 * 3),
      new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D2.png", 719 * 3),
      new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D2.png", 719 * 3),
      new BackgroundObject("./img/3. Background/Layers/2. Floor/D2.png", 719 * 3),
      new BackgroundObject("./img/3. Background/Layers/2. Floor/D2.png", 719 * 3),
      new BackgroundObject("./img/3. Background/Legacy/Layers/1. Light/2.png", 719 * 3),
      new BackgroundObject("./img/3. Background/Layers/5. Water/D1.png", 719 * 4),
      new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D1.png", 719 * 4),
      new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D1.png", 719 * 4),
      new BackgroundObject("./img/3. Background/Layers/2. Floor/D1.png", 719 * 4),
      new BackgroundObject("./img/3. Background/Layers/2. Floor/D1.png", 719 * 4),
      new BackgroundObject("./img/3. Background/Legacy/Layers/1. Light/1.png", 719 * 4),
      new BackgroundObject("./img/3. Background/Layers/5. Water/D2.png", 719 * 5),
      new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D2.png", 719 * 5),
      new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D2.png", 719 * 5),
      new BackgroundObject("./img/3. Background/Layers/2. Floor/D2.png", 719 * 5),
      new BackgroundObject("./img/3. Background/Layers/2. Floor/D2.png", 719 * 5),
      new BackgroundObject("./img/3. Background/Legacy/Layers/1. Light/2.png", 719 * 5),
    ],
    [new Coins(), new Coins(), new Coins(), new Coins(), new Coins(), new Coins(), new Coins(), new Coins(), new Coins(), new Coins()],
    [new Poison(), new Poison(), new Poison(), new Poison(), new Poison(), new Poison(), new Poison(), new Poison(), new Poison()],
    [new LifeBar(), new CoinBar(), new PoisonBar()],
    [new EndScreen()]
  );
}
