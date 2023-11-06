/** @type {HTMLCanvasElement} */
import Background from './Background.js';
import InputHandler from './InputHandler.js';
import Player from './Player.js';
import Enemy from './Enemy.js';

export let score = 1;

window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 720;

  let enemies = [];
  let gameOver = true;

  function handleEnemies(deltaTime) {
    if (enemyTimer > enemyInterval + randomEnemyInterval) {
      enemies.push(new Enemy(canvas.width, canvas.height, ctx));
      enemyTimer = 0;
      enemies = enemies.filter((enemy) => !enemy.markedForDeletion);
    } else {
      enemyTimer += deltaTime;
    }
    enemies.forEach((enemy) => {
      enemy.draw();
      enemy.update(deltaTime);
    });
  }

  function displayStatusText(ctx) {
    ctx.fillStyle = 'black';
    ctx.font = '40px Helvetica';
    ctx.fillText('Score:' + score, 20, 50);
  }

  const input = new InputHandler();
  const player = new Player(canvas.width, canvas.height, ctx);
  const background = new Background(canvas.width, canvas.height, ctx);
  const enemy1 = new Enemy(canvas.width, canvas.height, ctx);

  let lastTime = 0;
  let enemyTimer = 0;
  let enemyInterval = 2000;
  let randomEnemyInterval = Math.random() * 1000 + 500;

  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();
    background.update();
    player.draw();
    player.update(input, deltaTime, enemies);
    handleEnemies(deltaTime);
    displayStatusText(ctx);
    if (!player.gameOver) requestAnimationFrame(animate);
  }

  animate(0);
});
