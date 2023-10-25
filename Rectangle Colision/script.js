/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = (canvas.width = 1000);
const CANVAS_HEIGHT = (canvas.height = 500);

if (
  this.x <= obstacle.x + obstacle.width &&
  this.x + this.width >= obstacle.x &&
  this.y <= obstacle.y + obstacle.height &&
  this.y + this.height >= obstacle.y
) {
  // Calculate the overlap in the x and y directions
  this.colision = true;
}
