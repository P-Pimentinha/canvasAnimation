import InputHandler from './InputHanlder.js';
import Platform from './Platform.js';
import Player from './Player.js';
import { drawStatusText } from './utils.js';

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const platform = new Platform(ctx);

window.addEventListener('load', function () {
  loading.style.display = 'none';
  canvas.width = 1000;
  canvas.height = 800;

  const player = new Player(canvas.width, canvas.height, ctx, platform);
  const input = new InputHandler();

  let lastTime = 0;
  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';
    platform.update();
    player.draw(deltaTime);
    player.update(input.lastKey);
    drawStatusText(ctx, input, player);
    requestAnimationFrame(animate);
  }

  animate(0);
});
