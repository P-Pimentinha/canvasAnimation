/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const example = document.getElementById('example');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 800);
let canvasPosition = canvas.getBoundingClientRect();

const explosion = [];

class Explosion {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.spriteWidth = 200;
    this.spriteHeight = 179;
    this.width = this.spriteWidth * 0.6;
    this.height = this.spriteHeight * 0.6;
    this.x = x - this.width * 0.5;
    this.y = y - this.height * 0.5;
    this.image = new Image();
    this.image.src = 'boom.png';
    this.frame = 0;
    this.timer = 0;
  }

  update() {
    this.timer++;
    if (this.timer % 5 === 0) {
      this.frame++;
    }
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.spriteWidth * this.frame,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

window.addEventListener('click', function (e) {
  let positionX = e.x - canvasPosition.left;
  let positionY = e.y - canvasPosition.top;
  explosion.push(new Explosion(positionX, positionY));
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  explosion.forEach((element) => {
    element.update();
    element.draw();
  });

  requestAnimationFrame(animate);
}

animate();
