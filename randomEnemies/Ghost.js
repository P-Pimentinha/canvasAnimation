import Enemy from './Enemy.js';

class Ghost extends Enemy {
  constructor(game) {
    super(game);
    this.spriteWidth = 261;
    this.spriteHeight = 209;
    this.width = this.spriteWidth * 0.5;
    this.height = this.spriteHeight * 0.5;
    this.x = this.game.width;
    this.y = Math.random() * this.game.height * 0.8;
    this.speed = Math.random() * 0.2 + 0.1;
    this.image = ghost;
    this.angle = 0;
  }

  update(deltaTime) {
    super.update(deltaTime);
    this.y += Math.sin(this.angle) * 1;
    this.angle += 0.04;
  }
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = 0.5;
    super.draw(ctx);
    ctx.restore();
  }
}

export default Ghost;
