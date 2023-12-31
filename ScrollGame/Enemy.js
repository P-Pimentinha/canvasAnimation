class Enemy {
  constructor(gameWidth, gameHeight, ctx) {
    this.ctx = ctx;

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 160;
    this.height = 119;
    this.image = document.getElementById('enemyImage');
    this.x = this.gameWidth;
    this.y = this.gameHeight - this.height;
    this.frameX = 0;
    this.maxFrame = 5;
    this.fps = 5;
    this.frameTimer = 0;
    this.frameInterval = 100 / this.fps;
    this.speed = 8;
    this.markedForDel = false;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.frameX * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update(deltaTime) {
    if (this.frameTimer > this.frameInterval) {
      if (this.frameX >= this.maxFrame) this.frameX = 0;
      else this.frameX += 1;
      this.frameTimer = 0;
      if (this.x < 0 - this.width) {
        this.markedForDeletion = true;
      }
    } else {
      this.frameTimer += deltaTime;
    }

    this.x -= this.speed;
  }
}

export default Enemy;
