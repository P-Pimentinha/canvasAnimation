export const states = {
  STADING_LEFT: 0,
  STANDING_RIGHT: 1,
  SITTING_LEFT: 2,
  SITTING_RIGHT: 3,
  RUNNING_LEFT: 4,
  RUNNING_RIGHT: 5,
  JUMPING_LEFT: 6,
  JUMPING_RIGHT: 7,
  FALLIN_LEFT: 8,
  FALLING_RIGHT: 9,
};

class State {
  constructor(state) {
    this.state = state;
  }
}

export class StandingLeft extends State {
  constructor(player) {
    super('STANDING LEFT');
    this.player = player;
  }

  enter() {
    this.player.frameY = 1;
    this.player.speed = 0;
    this.player.maxFrame = 6;
  }

  handleInput(input) {
    if (input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT);
    if (input === 'PRESS left') this.player.setState(states.RUNNING_LEFT);
    if (input === 'PRESS down') this.player.setState(states.SITTING_LEFT);
    if (input === 'PRESS up') this.player.setState(states.JUMPING_LEFT);
  }
}

export class StandingRight extends State {
  constructor(player) {
    super('STANDING RIGHT');
    this.player = player;
  }

  enter() {
    this.player.frameY = 0;
    this.player.speed = 0;
    this.player.maxFrame = 6;
  }

  handleInput(input) {
    if (input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT);
    if (input === 'PRESS left') this.player.setState(states.RUNNING_LEFT);
    if (input === 'PRESS down') this.player.setState(states.SITTING_RIGHT);
    if (input === 'PRESS up') this.player.setState(states.JUMPING_RIGHT);
  }
}

export class SittingLeft extends State {
  constructor(player) {
    super('SITTING LEFT');
    this.player = player;
  }

  enter() {
    this.player.frameY = 9;
    this.player.speed = 0;
    this.player.maxFrame = 4;
  }

  handleInput(input) {
    if (input === 'PRESS left') this.player.setState(states.RUNNING_LEFT);
    if (input === 'PRESS right') this.player.setState(states.SITTING_RIGHT);
    if (input === 'PRESS up') this.player.setState(states.STADING_LEFT);
  }
}

export class SittingRight extends State {
  constructor(player) {
    super('SITTING RIGHT');
    this.player = player;
  }

  enter() {
    this.player.frameY = 8;
    this.player.speed = 0;
    this.player.maxFrame = 4;
  }

  handleInput(input) {
    if (input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT);
    if (input === 'PRESS up') this.player.setState(states.STANDING_RIGHT);
    if (input === 'PRESS left') this.player.setState(states.SITTING_LEFT);
  }
}

export class RunninLeft extends State {
  constructor(player) {
    super('Running Left');
    this.player = player;
  }

  enter() {
    this.player.frameY = 7;
    this.player.speed = -this.player.maxSpeed;
    this.player.maxFrame = 8;
  }

  handleInput(input) {
    if (input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT);
    if (input === 'RELEASE left') this.player.setState(states.STADING_LEFT);
    if (input === 'PRESS down') this.player.setState(states.SITTING_LEFT);
  }
}

export class RunninRight extends State {
  constructor(player) {
    super('Running Left');
    this.player = player;
  }

  enter() {
    this.player.frameY = 6;
    this.player.speed = this.player.maxSpeed;
    this.player.maxFrame = 8;
  }

  handleInput(input) {
    if (input === 'PRESS left') this.player.setState(states.RUNNING_LEFT);
    if (input === 'RELEASE right') this.player.setState(states.STANDING_RIGHT);
    if (input === 'PRESS down') this.player.setState(states.SITTING_RIGHT);
  }
}

export class JumpingLeft extends State {
  constructor(player) {
    super('Jumping Left');
    this.player = player;
  }

  enter() {
    this.player.frameY = 3;
    if (this.player.platformColosion()) this.player.vy -= 20;
    this.player.maxFrame = 6;
  }

  handleInput(input) {
    if (input === 'PRESS right') this.player.setState(states.JUMPING_RIGHT);
    this.player.speed = -this.player.maxSpeed * 0.5;
    if (this.player.platformColosion())
      this.player.setState(states.STADING_LEFT);
    if (this.player.vy > 0) this.player.setState(states.FALLIN_LEFT);
  }
}

export class JumpingRight extends State {
  constructor(player) {
    super('Jumping Right');
    this.player = player;
  }

  enter() {
    this.player.frameY = 2;
    if (this.player.platformColosion()) this.player.vy -= 20;
    this.player.speed = this.player.maxSpeed * 0.5;
    this.player.maxFrame = 6;
  }

  handleInput(input) {
    if (input === 'PRESS left') this.player.setState(states.JUMPING_LEFT);
    if (this.player.platformColosion())
      this.player.setState(states.STANDING_RIGHT);
    if (this.player.vy > 0) this.player.setState(states.FALLING_RIGHT);
  }
}

export class FallingLeft extends State {
  constructor(player) {
    super('Falling Left');
    this.player = player;
  }

  enter() {
    this.player.frameY = 5;
    this.player.maxFrame = 6;
  }

  handleInput(input) {
    if (input === 'PRESS right') this.player.setState(states.FALLING_RIGHT);
    if (this.player.platformColosion())
      this.player.setState(states.STADING_LEFT);
  }
}

export class FallingRight extends State {
  constructor(player) {
    super('Falling Right');
    this.player = player;
  }

  enter() {
    this.player.frameY = 4;
    this.player.maxFrame = 6;
  }

  handleInput(input) {
    if (input === 'PRESS left') this.player.setState(states.FALLIN_LEFT);
    if (this.player.platformColosion())
      this.player.setState(states.STANDING_RIGHT);
  }
}
