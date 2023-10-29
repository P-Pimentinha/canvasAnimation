import Enemy from './Enemy.js';
import Ghost from './Ghost.js';
import Spider from './Spider.js';
import Worm from './Worm.js';

class Game {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.height = height;
    this.width = width;
    this.enemies = [];

    this.enemyInterval = 500;
    this.enemyTimer = 0;
    this.enemyTypes = ['worm', 'ghost', 'spider'];
    this.#addNewEnemy();
  }

  update(deltaTime) {
    if (this.enemyTimer > this.enemyInterval) {
      this.#addNewEnemy();
      this.enemyTimer = 0;
      this.enemies = this.enemies.filter((object) => !object.markToDel);
    } else {
      this.enemyTimer += deltaTime;
    }

    this.enemies.forEach((element) => {
      element.update(deltaTime);
    });
  }

  draw() {
    this.enemies.forEach((element) => {
      element.draw(this.ctx);
    });
  }

  #addNewEnemy() {
    const randomEnemy =
      this.enemyTypes[Math.floor(Math.random() * this.enemyTypes.length)];
    if (randomEnemy === 'worm') this.enemies.push(new Worm(this));
    if (randomEnemy === 'ghost') this.enemies.push(new Ghost(this));
    if (randomEnemy === 'spider') this.enemies.push(new Spider(this));
    // this.enemies.sort(function (a, b) {
    //   return a.y - b.y;
    // });
  }
}

export default Game;
