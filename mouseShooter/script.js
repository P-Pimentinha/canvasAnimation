const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
import Raven from './Raven.js';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let timeTONExtRaven = 0;
let ravenInterval = 500;
let lastTime = 0;

let ravens = [];

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
  }
  [...ravens].forEach((object) => object.update(deltatime, canvas));
  [...ravens].forEach((object) => object.draw(ctx));
  ravens = ravens.filter((object) => !object.markFOrDel);

  requestAnimationFrame(animate);
}

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
