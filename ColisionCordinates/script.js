/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
import Player from './Player.js';

canvas.width = 850;
canvas.height = 500;

const player = new Player(50, 50, 50, 50, 5);

const square = {
  x: 200,
  y: 200,
  height: 200,
  width: 200,
};

const keys = {
  left: false,
  right: false,
  up: false,
  down: false,
};
player.con();
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.fillRect(square.x, square.y, square.width, square.height);
  //player
  player.draw(ctx);
  //update
  player.update(keys);
  player.colisionObj(square);

  requestAnimationFrame(animate);
}

animate(0);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') keys.left = true;
  if (e.key === 'ArrowRight') keys.right = true;
  if (e.key === 'ArrowUp') keys.up = true;
  if (e.key === 'ArrowDown') keys.down = true;
});

document.addEventListener('keyup', function (e) {
  if (e.key === 'ArrowLeft') keys.left = false;
  if (e.key === 'ArrowRight') keys.right = false;
  if (e.key === 'ArrowUp') keys.up = false;
  if (e.key === 'ArrowDown') keys.down = false;
});

console.log(keys);
