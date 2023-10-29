/** @type {HTMLCanvasElement} */
window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');

  canvas.width = 500;
  canvas.height = 800;

  let lastTime = 1;
  const game = new Game(ctx, canvas.width, canvas.height);

  function animate(timeStamp = 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    game.update(deltaTime);
    game.draw();

    requestAnimationFrame(animate);
  }

  animate();
});
