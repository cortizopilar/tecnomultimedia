void parteuno(int i, int j){
  
  //interaccion
  if (animate) {
      float d = dist(mouseX, mouseY, (400+j*(ta+40)), (i*(ta+40)));
      m = map(d, 0, width, 0, ta * 2);
    } else {
      m = ta;
 }
  // vuelve al valor de la variable
    if (key == 'u') {
    animate = !animate; 
    if (!animate) {
      m = ta; 
    }
}
  // mantener presionado para que se aplique el color
   if (keyPressed) {
   if (key == 'p' ) {
     fill(0, 200, 100);
  }else if (key == 'l') {
     fill(0, 100, 250); 
   }
     }
    rect( 400+j*(ta+ 40), i*(ta + 40), m , m );
    strokeWeight(3);
  
}
