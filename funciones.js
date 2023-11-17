function cargarImagenes() {
  fondoMenu = loadImage('data/menu.png');
  fondoJuego = loadImage('data/fondo.png');
  fondoEntrada = loadImage('data/entrada.png');
  nave = loadImage('data/nave.png');
}

function dibujarBoton(x, y, ancho, alto, etiqueta, nuevoEstado) {
  fill(150, 0, 200);
  rect(x, y, ancho, alto);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(etiqueta, x + ancho / 2, y + alto / 2);
}

function actualizarAsteroides() {
  for (let i = asteroide.length - 1; i >= 0; i--) {
    asteroide[i][1] += asteroide[i][2];

    let distanciaNaveAste = dist(nPosX, nPosY, asteroide[i][0], asteroide[i][1]);

    if (int(asteroide[i][1]) === 450 && distanciaNaveAste > 70) {
      nPuntos += 10;
    }

    imageMode(CORNER);
    image(asteroide[i][3], asteroide[i][0], asteroide[i][1], tamanoAsteroide, tamanoAsteroide);

    //colision
    if (distanciaNaveAste < 50) {
      asteroide[i][0] = random(width);
      asteroide[i][1] = random(-100, -10);

      //vidas y posicioness
      nVida--;

      if (nVida > 0) {
        nPosX = width * 0.5;
        nPosY = 500;
      }
    }
    //posicion aste reinicio
    if (asteroide[i][1] > height) {
      asteroide[i][0] = random(width);
      asteroide[i][1] = random(-100, -10);
    }
  }
}

function reiniciarJuego() {
  nPosX = width * 0.5;
  nPosY = 500;
  nVida = 2;
  nPuntos = 0;
  estado = 0;

  for (let i = 0; i < asteroide.length; i++) {
    asteroide[i][0] = random(width);
    asteroide[i][1] = random(-100, -10);
  }
}

function botonClic(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}
