class Platform {
  constructor(ctx) {
    this.ctx = ctx;
    this.position = {
      x: 0,
      y: 700,
    };
    this.width = 1000;
    this.height = 100;
  }

  draw() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    this.draw();
  }
}

export default Platform;
