class Enemy {
  constructor(game) {
    this.game = game;
    this.markToDel = false;
    this.frameX = 0;
    this.maxFrame = 5;
    this.frameInterval = 100;
    this.frameTimer = 0;
  }
  update(deltaTime) {
    this.x -= this.speed * deltaTime;

    if (this.x < 0 - this.width) this.markToDel = true;

    if (this.frameTimer > this.frameInterval) {
      if (this.frameX < this.maxFrame) {
        this.frameX++;
      } else {
        this.frameX = 0;
      }
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.frameX * this.spriteWidth,
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
