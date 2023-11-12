class Player {
  constructor(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.score = 0;
    this.GameOver = false;
  }

  //Getters
  getScore() {
    return this.score;
  }

  //setters
  setScore() {
    this.score++;
  }

  draw(ctx) {
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update(keys) {
    if (keys.left) this.x -= this.speed;
    if (keys.right) this.x += this.speed;
    if (keys.up) this.y -= this.speed;
    if (keys.down) this.y += this.speed;
  }

  colisionWall(canvas) {
    if (this.x < 0) this.x = 0;
    if (this.x + this.width > canvas.width) this.x = canvas.width - this.width;
    if (this.y < 0) this.y = 0;
    if (this.y + this.height > canvas.height)
      this.y = canvas.height - this.height;
  }

  colisionObj(obstacles) {
    if (
      this.x > obstacles.x + obstacles.width ||
      this.x + this.width < obstacles.x ||
      this.y > obstacles.y + obstacles.height ||
      this.y + this.height < obstacles.y
    ) {
    } else {
      // Check if the contact is made specifically on the bottom
      if (
        this.y + this.height >= obstacles.y &&
        this.y + this.height <= obstacles.y + 25 &&
        this.x + this.width - 10 >= obstacles.x + 10
      ) {
        this.y = 149;
        console.log('bottom');
      }

      // Check if the contact is made specifically on the top
      if (
        this.y <= obstacles.y + obstacles.height &&
        this.y >= obstacles.y + obstacles.height - 10
      ) {
        console.log('Top');
      }

      // Check if the contact is made specifically on the right
      if (
        this.x + this.width >= obstacles.x &&
        this.x + this.width <= obstacles.x + 10
      ) {
        this.x = obstacles.x - this.width - 1;
        console.log('right');
      }

      // Check if the contact is made specifically on the left
      if (
        this.x <= obstacles.x + obstacles.width &&
        this.x >= obstacles.x + obstacles.width - 10
      ) {
        console.log('left');
      }
    }
  }

  con() {
    console.log(this.x);
  }

  colisionEnemies(enemies) {
    enemies.forEach((enemie) => {
      if (
        this.x <= enemie.x + enemie.width &&
        this.x + this.width >= enemie.x &&
        this.y <= enemie.y + enemie.height &&
        this.y + this.height >= enemie.y
      ) {
        this.setScore();
        const index = enemies.findIndex((item) => item.id === enemie.id);

        if (index !== -1) {
          enemies.splice(index, 1);
        }
      }
    });
  }

  colisionPredator(predatorArr) {
    predatorArr.forEach((predator) => {
      if (
        this.x <= predator.x + predator.width &&
        this.x + this.width >= predator.x &&
        this.y <= predator.y + predator.height &&
        this.y + this.height >= predator.y
      ) {
        this.GameOver = true;
      }
    });
  }
}

export default Player;
