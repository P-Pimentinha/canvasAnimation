/** @type {HTMLCanvasElement} */
import Background from './Background.js';
import InputHandler from './InputHandler.js';
import Player from './Player.js';

window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 720;

  class Enemy {}

  function handleEnemies() {}

  function displayStatusText() {}

  const input = new InputHandler();
  const player = new Player(canvas.width, canvas.height, ctx);
  const background = new Background(canvas.width, canvas.height, ctx);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();
    // background.update();
    player.draw();
    player.update(input);

    requestAnimationFrame(animate);
  }

  animate();
});
