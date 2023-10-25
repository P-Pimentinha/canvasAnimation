/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const example = document.getElementById('example');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 800);

const circle1 = { x: 100, y: 100, radius: 50 };
const circle2 = { x: 150, y: 200, radius: 40 };

ctx.beginPath();
ctx.arc(circle1.x, circle1.y, circle1.radius, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(circle2.x, circle2.y, circle2.radius, 0, 2 * Math.PI);
ctx.stroke();

let dx = circle2.x - circle1.x;
let dy = circle2.y - circle1.y;
let distance = Math.hypot(dx + dy);
let sumOfRadii = circle1.radius + circle2.radius;

if (distance < sumOfRadii) {
  console.log('colision');
}

const toPrint = sumOfRadii;
example.innerHTML = toPrint;
