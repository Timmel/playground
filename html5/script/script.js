function init() {
  var ctx = $('ctx');

  var context = ctx.getContext('2d');
  

  clearInterval(gameLoop);
  
}

function animationLoop() {

}

function drawingLoop() {
  var gameLoop = setInterval(drawingLoop, 20);
}

function $(id) {
  return document.getElementById(id);
}

function drawStuff() {
  // draw stuff
  context.fillRect(200, 10, 100, 100);

  context.beginPath();
  context.moveTo(10, 120);
  context.lineTo(10, 180);
  context.lineTo(110, 150);
  context.fill();

  context.beginPath();
  context.arc(100, 300, 30, 0, 2 * Math.PI, true);
  context.fill();

  context.font = "30px Arial";
  context.strokeText('textie', 300, 150);

  var image = $('spaceship');
  //context.translate(50, 50);
  //context.rotate(-Math.PI / 3);
  context.drawImage(image, 200, 200, 64, 64);
}