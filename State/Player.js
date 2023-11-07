import {
  StandingLeft,
  StandingRight,
  SittingLeft,
  SittingRight,
} from './state.js';

class Player {
  constructor(gameWidth, gameHeight, ctx) {
    this.ctx = ctx;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.state = [
      new StandingLeft(this),
      new StandingRight(this),
      new SittingLeft(this),
      new SittingRight(this),
    ];
    this.currentState = this.state[1];
    this.image = dogImage;
    this.width = 200;
    this.height = 181.83;
    this.x = this.gameWidth / 2 - this.width / 2;
    this.y = this.gameHeight / 2 - this.height / 2;

    this.frameX = 0;
    this.frameY = 0;
  }

  draw() {
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
  }

  setState(state) {
    this.currentState = this.state[state];
    this.currentState.enter();
  }
}

export default Player;
