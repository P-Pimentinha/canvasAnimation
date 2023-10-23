/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = (canvas.width = 1000);
const CANVAS_HEIGHT = (canvas.height = 500);
import Enemy from './Enemy.js';

const enemyImage = new Image();
enemyImage.src = './images/enemy3.png';

const numberOfEnemies = 200;
let enemiesArray = [];

let gameFrame = 0;

for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy(canvas));
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemiesArray.forEach((e) => {
    e.update(gameFrame, canvas);
    e.draw(ctx, enemyImage);
  });
  gameFrame++;
  requestAnimationFrame(animate);
}

// animate();
