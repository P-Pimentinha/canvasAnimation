class Enemy {
  constructor(canvas) {
    this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flasSpeed = Math.floor(Math.random() * 3 + 1);
  }

  update(gameFrame) {
    this.x += Math.random() * 5 - 2.5;
    this.y += Math.random() * 3 - 1.5;

    if (gameFrame % this.flasSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw(ctx, image) {
    ctx.drawImage(
      image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

export default Enemy;
