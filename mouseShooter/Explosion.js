class Explosion {
  constructor(x, y, size) {
    this.image = new Image();
    this.image.src = 'boom.png';
    this.spriteWidth = 200;
    this.spriteHeight = 179;
    this.size = size;
    this.x = x;
    this.y = y;
    this.frame = 0;

    this.timeSinceLastFrame = 0;
    this.frameInterval = 100;

    this.markFOrDel = false;
  }

  update(deltatime, canvas) {
    this.timeSinceLastFrame += deltatime;

    if (this.timeSinceLastFrame > this.frameInterval) {
      this.frame++;
      this.timeSinceLastFrame = 0;
    }

    if (this.frame > 5) {
      this.markFOrDel = true;
    }
  }

  draw(ctx) {
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y - this.size * 0.4,
      this.size,
      this.size
    );
  }
}

export default Explosion;
