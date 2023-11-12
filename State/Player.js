import {
  StandingLeft,
  StandingRight,
  SittingLeft,
  SittingRight,
  RunninLeft,
  RunninRight,
  JumpingLeft,
  JumpingRight,
  FallingLeft,
  FallingRight,
} from './state.js';

class Player {
  constructor(gameWidth, gameHeight, ctx, obstacle) {
    this.ctx = ctx;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.obstacle = obstacle;
    //state
    this.state = [
      new StandingLeft(this),
      new StandingRight(this),
      new SittingLeft(this),
      new SittingRight(this),
      new RunninLeft(this),
      new RunninRight(this),
      new JumpingLeft(this),
      new JumpingRight(this),
      new FallingLeft(this),
      new FallingRight(this),
    ];
    this.currentState = this.state[1];
    //coordinates
    this.width = 200;
    this.height = 181.83;
    this.x = this.gameWidth / 2 - this.width / 2;
    this.y = this.gameHeight / 2 - this.height / 2;

    //

    this.image = dogImage;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 5;

    this.speed = 0;
    this.maxSpeed = 10;

    this.vy = 0;
    this.weight = 0.5;

    //deltaTime
    this.fps = 30;
    this.frameTimer = 0;
    this.frameInterval = 1000 / this.fps;
  }

  draw(deltaTime) {
    if (this.frameTimer > this.frameInterval) {
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }

    this.ctx.drawImage(
      this.image,
      this.width * this.frameX,
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update(input) {
    this.currentState.handleInput(input);
    this.x += this.speed;
    this.y += this.vy;
    this.boundriesColision();
    this.platformColosion();

    //vertical movement
    if (!this.platformColosion()) {
      this.vy += this.weight;
    } else {
      this.vy = 0;
    }
  }

  setState(state) {
    this.currentState = this.state[state];
    this.currentState.enter();
  }

  boundriesColision() {
    this.x = Math.max(this.x, 0);
    this.x = Math.min(this.x, this.gameWidth - this.width);

    this.y = Math.min(this.y, this.gameHeight - this.height);
  }

  onGround() {
    return this.y >= this.gameHeight - this.height;
  }

  platformColosion() {
    if (
      this.x <= this.obstacle.position.x + this.obstacle.width &&
      this.x + this.width >= this.obstacle.position.x &&
      this.y <= this.obstacle.position.y + this.obstacle.height &&
      this.y + this.height >= this.obstacle.position.y
    ) {
      return true;
    } else return false;
  }
}

export default Player;
