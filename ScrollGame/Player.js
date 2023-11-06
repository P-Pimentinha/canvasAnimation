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
    this.maxFrame = 8;
    this.frameY = 0;

    this.fps = 5;
    this.frameTimer = 0;
    this.frameInterval = 100 / this.fps;

    this.speed = 2;
    this.vy = 0;
    this.weight = 1;

    this.gameOver = false;
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

  update(input, deltaTime, enemies) {
    //colision detection

    enemies.forEach((element) => {
      // prettier-ignore
      const dx = (element.x + element.width / 2) - (this.x + this.width / 2);
      // prettier-ignore
      const dy = (element.y + element.height / 2) - (this.y + this.height / 2);

      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < element.width / 2 + this.width / 2) {
        this.gameOver = true;
      }
    });

    //sprite animation
    if (this.frameTimer > this.frameInterval) {
      if (this.frameX >= this.maxFrame) this.frameX = 0;
      else this.frameX++;
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }

    this.x += this.speed;

    //controls
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
      this.maxFrame = 5;
      this.frameY = 1;
    } else {
      this.vy = 0;
      this.maxFrame = 8;
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
