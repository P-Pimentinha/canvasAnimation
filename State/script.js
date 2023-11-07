import InputHandler from './InputHanlder.js';
import Player from './Player.js';
import { drawStatusText } from './utils.js';

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

window.addEventListener('load', function () {
  loading.style.display = 'none';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const player = new Player(canvas.width, canvas.height, ctx);
  const input = new InputHandler();

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
    player.update(input.lastKey);
    drawStatusText(ctx, input, player);
    requestAnimationFrame(animate);
  }

  animate();
});
