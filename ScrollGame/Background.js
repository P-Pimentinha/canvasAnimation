class Background {
  constructor(gameWidth, gameHeight, ctx) {
    this.ctx = ctx;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.image = backgroundImage;
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 720;
    this.speed = 6;
  }

  draw(ctx) {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    this.ctx.drawImage(
      this.image,
      this.x + this.width - this.speed,
      this.y,
      this.width,
      this.height
    );
  }

  update() {
    this.x -= this.speed;
    if (this.x <= 0 - this.width) this.x = 0;
  }
}

export default Background;
