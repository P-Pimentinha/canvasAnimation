class Enemy {
  constructor(canvas) {
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 218;
    this.spriteHeight = 177;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flasSpeed = Math.floor(Math.random() * 3 + 1);

    this.angle = 0;
    this.angleSpeed = Math.random() * 2;

    this.curve = Math.random() * 200;
  }

  update(gameFrame, canvas) {
    this.x =
      (canvas.width / 2) * Math.sin((this.angle * Math.PI) / 90) +
      (canvas.width / 2 - this.width / 2);
    this.y =
      (canvas.height / 2) * Math.cos((this.angle * Math.PI) / 90) +
      (canvas.height / 2 - this.height / 2);
    // this.y += this.curve * Math.sin(this.angle);
    this.angle += this.angleSpeed;
    if (this.x + this.width < 0) {
      this.x = canvas.width;
    }

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
