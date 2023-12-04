class boton {
  constructor(ancho, alto, texto) {  
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;
    textSize(17);
    textAlign(CENTER, CENTER);
  }

  dibujar(x, y) {
    fill(255);
    stroke(255);
    rect(x, y, this.ancho, this.alto, 10);
    fill(255, 0, 0);
    textSize(17);
    textAlign(CENTER, CENTER);
    text(this.texto, x + this.ancho / 2, y + this.alto / 2);
  }

  funciona(x, y) {
  return mouseX > x && mouseX < x + this.ancho && mouseY > y && mouseY < y + this.alto;
  }
}
