class Player {
  constructor(gameWidth, gameHeight, ctx) {
    this.ctx = ctx;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 200;
    this.height = 200;
    this.x = 0;
    this.y = this.gameHeight - this.height;
    this.image = playerImage;

    this.frameX = 0;
    this.frameY = 0;

    this.speed = 2;
    this.vy = 0;
    this.weight = 1;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update(input) {
    this.x += this.speed;

    if (input.keys.indexOf('ArrowRight') > -1) this.speed = 5;
    if (input.keys.indexOf('ArrowLeft') > -1) this.speed = -5;
    if (input.keys.indexOf('ArrowUp') > -1 && this.onGround()) this.vy -= 30;
    if (input.keys.length === 0) this.speed = 0;

    if (this.x < 0) this.x = 0;
    else if (this.x > this.gameWidth - this.width)
      this.x = this.gameWidth - this.width;

    this.y += this.vy;
    if (!this.onGround()) {
      this.vy += this.weight;
      this.frameY = 1;
    } else {
      this.vy = 0;
      this.frameY = 0;
    }

    if (this.y > this.gameHeight - this.height)
      this.y = this.gameHeight - this.height;
  }

  onGround() {
    return this.y >= this.gameHeight - this.height;
  }
}

export default Player;
