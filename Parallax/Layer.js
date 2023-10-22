class Layer {
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    this.x2 = this.width;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
  }

  update() {
    this.speed = gameSpeed * this.speedModifier;
    if (this.x <= -this.width) {
      this.x = this.width + this.x2 - this.speed;
    }
    if (this.x2 <= -this.width) {
      this.x2 = this.width + this.x - this.speed;
    }
  }
}
