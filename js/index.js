var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 30;

var dx = 2;
var dy = -2;

var ballRadius = 10;

// Esta funcion dibuja un circulo en la posicion x, y
function drawBall(){
  context.beginPath();
  context.arc(x, y, ballRadius, 0, Math.PI*2, false);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

// Se llama a la funcion de dibujar un circulo
  drawBall();

  // Verificar si llego al limite de arriba
  if(y +  dy < 0) {
    dy = -dy;
  }

// Verificar si llego al limite de abajo
  if(y +  dy > canvas.height) {
    dy = -dy;
  }

  // Verificar si llego al limite de izquierdo
  if(x + dx < 0) {
    dx = -dx;
  }

  // Verificar si llego al limite de derecho
  if(x + dx > canvas.width) {
    dx = -dx;
  }

  x += dx;
  y += dy;
}
setInterval(draw, 10);
