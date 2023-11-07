export function drawStatusText(context, input, player) {
  context.font = '30px Helvetica';
  context.fillText('Last Input: ' + input.lastKey, 10, 60);

  context.fillText('Active State: ' + player.currentState.state, 10, 110);
}
