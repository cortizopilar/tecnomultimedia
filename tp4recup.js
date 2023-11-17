//Pilar Cortizo
//Tp4
// video: https://youtu.be/-MOovr1I89k

let nPosX, nPosY, nVelocidad, nVida, nPuntos;
let asteroide = [];
let estado = 0;
let i = 0;
let tamanoNave = 60;
let tamanoAsteroide = 50;

function setup() {
  createCanvas(600, 600);
  cargarImagenes();
  nPosX = width * 0.5;
  nPosY = 500;
  nVelocidad = 20;
  nVida = 2;
  nPuntos = 0;
  //inicio los asteroides aca
  for (let i = 0; i < 5; i++) {
    asteroide.push([random(width), random(-100, -10), 1.8, loadImage('data/asteroide.png')]);
  }
}

function draw() {
  background(220);

  if (estado === 0) {
    image(fondoEntrada, 0, 0);
    textSize(30);
    fill(255);
    text("BIENVENIDO AL ESPACIO", 100, 100, 550);
    dibujarBoton(420, 500, 100, 50, "Jugar", 1);
    dibujarBoton(260, 500, 100, 50, "Instrucciones", 4);
    dibujarBoton(100, 500, 100, 50, "Créditos", 5);
  } else if (estado === 1) {
    image(fondoJuego, 0, 0);
    image(nave, nPosX, nPosY, tamanoNave, tamanoNave);
    textSize(15);
    fill(255);
    text("Vidas: " + nVida, 520, 570);
    text("Puntos: " + nPuntos, 50, 570);
    actualizarAsteroides();
    if (estado === 1 && nVida <= 0) {
      estado = 2;
    } else if (estado === 1 && nPuntos >= 100) {
      estado = 3;
    }
  } else if (estado === 2) {
    image(fondoJuego, 0, 0);
    dibujarBoton(250, 300, 100, 50, "volver", 2);
    fill(255);
    textSize(40);
    text("PERDISTE:(\n segui intentando", 150, 50, 300, 300);
  } else if (estado === 3) {
    image(fondoJuego, 0, 0);
    dibujarBoton(250, 300, 100, 50, "volver", 3);
    fill(255);
    textSize(40);
    text("LO LOGRASTE\n segui jugando", 150, 50, 300, 300);
  } else if (estado === 4) {
    image(fondoMenu, 0, 0);
    dibujarBoton(420, 500, 100, 50, "volver", 4);
    fill(0);
    rect(100, 100, 400, 300);
    fill(255);
    textSize(20);
    text("COMO JUGAR?\nSIMPLE! move la nave con las flechas izquierda y derecha\ne intenta que los asteroides no te estrellen,\ntenes solo dos vidas y ganas cuando llegas a los 100 puntos!", 150, 100, 300, 300);
  } else if (estado === 5) {
    image(fondoMenu, 0, 0);
    dibujarBoton(420, 500, 100, 50, "volver", 4);
    fill(0);
    rect(100, 100, 400, 300);
    fill(255);
    textSize(20);
    text("CREDITOS:\nProgramado por Cortizo Pilar.\n \nTrabajo Practico N4 \n \n Tecno Multimedial I Comisión 2 ", 150, 100, 300, 300);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    nPosX -= nVelocidad;
  } else if (keyCode === RIGHT_ARROW) {
    nPosX += nVelocidad;
  }
  // Apretar "r" para reiniciar :)
  if (key === 'r') {
    reiniciarJuego();
  }
}

function mousePressed() {
  if (botonClic(420, 500, 100, 50)) {
    if (estado === 0) {
      estado = 1;
    } else if (estado === 4) {
      estado = 0;
    } else if (estado === 5) {
      estado = 0;
    } else if (estado === 2 || estado === 3) {
      estado = 0;
      reiniciarJuego();
    }
  } else if (botonClic(260, 500, 100, 50) && estado === 0) {
    estado = 4;
  } else if (botonClic(100, 500, 100, 50) && estado === 0) {
    estado = 5;
  } else if (botonClic(250, 300, 100, 50) && (estado === 2 || estado === 3)) {
    estado = 0;
  }
}
