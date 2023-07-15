void boton(int x, int y, int ancho, String texto, int destino) {
  rectMode(CENTER);
  
  boolean mouseHover = mouseX >= x - ancho/2 && mouseX <= x + ancho/2 && mouseY >= y - 30 && mouseY <= y + 30;
  if (mouseHover) {
    fill(0,200,100); 
  } else {
    fill(0); 
  }
  
  //BOTON Y TEXTO
  stroke(255);
  rect(x, y, ancho, 60, 10);
  fill(255);
  textSize(17);
  textAlign(CENTER, CENTER);
  text(texto, x, y);
  
  if (mouseHover && mousePressed) {
    estado = destino;
  }
    println("El valor de 'datos' es: " + datos);

}
void drawRect(float x, float y, float ancho, float alto) {
  rect(x, y, ancho, alto);

}

void cambiarEstado(int nuevoEstado) {
  estado = nuevoEstado;
}
