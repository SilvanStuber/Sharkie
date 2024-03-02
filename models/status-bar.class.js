class StatusBar extends DrawableObject {
  percentage = 100;

  constructor() {
    super();
    this.height = 60;
    this.width = 120;
    this.y = 0;
  }

  setPercentage(percentage, image) {
    this.percentage = percentage;
    let path = image[this.resolveImagesIndex()];
    this.img = this.imageCache[path];
  }

  resolveImagesIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
