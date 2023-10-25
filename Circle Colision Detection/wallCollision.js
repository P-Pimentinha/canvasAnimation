const player = {
  x: 50,
  y: 50,
  radius: 50,
  speed: 10,
};

function drawPlayer() {
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();
}

function update() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawPlayer();

  // Check for collisions with the walls
  //left
  if (player.x - player.radius < 0) {
    player.x = player.radius;
  }

  //right
  if (player.x + player.radius > canvas.width) {
    player.x = canvas.width - player.radius;
  }
  //up
  if (player.y - player.radius < 0) {
    player.y = player.radius;
  }

  //bottom
  if (player.y + player.radius > canvas.height) {
    player.y = canvas.height - player.radius;
  }
}

function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    player.x += player.speed;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    player.x -= player.speed;
  } else if (e.key === 'Down' || e.key === 'ArrowDown') {
    player.y += player.speed;
  } else if (e.key === 'Up' || e.key === 'ArrowUp') {
    player.y -= player.speed;
  }
}

document.addEventListener('keydown', keyDownHandler);

function gameLoop() {
  update();
  requestAnimationFrame(gameLoop);
}

gameLoop();
