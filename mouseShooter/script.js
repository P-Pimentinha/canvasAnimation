/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
import Raven from './Raven.js';
import Explosion from './Explosion.js';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.font = '40px Impact';

const collisionCanvas = document.getElementById('collisionCanvas');
const collisionCTX = collisionCanvas.getContext('2d');
collisionCTX.width = window.innerWidth;
collisionCTX.height = window.innerHeight;

let timeTONExtRaven = 0;
let ravenInterval = 500;
let lastTime = 0;
let score = 0;
let ravens = [];
let explosions = [];
let gameOver;

const raven = new Raven(canvas);

function animate(timestamp = 0) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //TimeStamp
  let deltatime = timestamp - lastTime;
  lastTime = timestamp;
  timeTONExtRaven += deltatime;
  if (timeTONExtRaven > ravenInterval) {
    ravens.push(new Raven(canvas));
    timeTONExtRaven = 0;
    ravens.sort(function (a, b) {
      return a.width - b.width;
    });
  }

  drawScore();
  [...ravens, ...explosions].forEach((object) =>
    object.update(deltatime, canvas)
  );
  [...ravens, ...explosions].forEach((object) => object.draw(ctx));
  ravens = ravens.filter((object) => !object.markFOrDel);
  explosions = explosions.filter((object) => !object.markFOrDel);

  requestAnimationFrame(animate);
}

function drawScore() {
  ctx.fillStyle = 'white';
  ctx.fillText('Score: ' + score, 50, 75);
}

window.addEventListener('click', function (e) {
  ravens.forEach((object) => {
    if (
      e.x >= object.x &&
      e.x <= object.x + object.width &&
      e.y >= object.y &&
      e.y <= object.y + object.height
    ) {
      object.markFOrDel = true;
      score++;
      explosions.push(new Explosion(object.x, object.y, object.width));
    }
  });
});

animate();

// function animate(timestamp = 0) {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   let deltatime = timestamp - lastTime;
//   lastTime = timestamp;
//   timeTONExtRaven += deltatime;
//   if (timeTONExtRaven > ravenInterval) {
//     ravens.push(new Raven(canvas));
//     timeTONExtRaven = 0;
//   }
//   [...ravens].forEach((object) => object.update());
//   [...ravens].forEach((object) => object.draw(ctx));
//   requestAnimationFrame(animate);
// }
