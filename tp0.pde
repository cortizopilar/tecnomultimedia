// Cortizo Pilar
// tp0

PImage insecto;

void setup(){
  size( 800, 400);
  insecto = loadImage("insecto.jpeg");

}

void draw(){
  background(150);
  image( insecto, 0, 0, 400, 400);
  println("X:");
  println(mouseX);
  println("Y:");
  println(mouseY);
 
 //ladrillos
  strokeWeight(0);
  fill(200);
  rect(400, 70, 170, 227);
  rect(600, 70, 270, 227);
  rect(400, 0, 500, 40 );
  rect(400, 327, 500, 100);
  
  //queliceros 
  fill(0);
  triangle( 591, 308, 595, 295, 586, 295 );
  triangle( 609, 308, 605, 295, 614, 295 );

strokeWeight(4);
  stroke(49, 6, 4);
  fill(49, 6, 4);
  ellipse( 600, 175, 90, 130); //panza
  circle( 600, 270, 50); //cabeza
  rect(583, 220, 35, 35);

  //patas
  strokeWeight(6);
  line( 587, 233, 557, 306 );
  line( 613, 233, 643, 306 );
  line( 557, 306, 571, 347 );
  line( 643, 306, 629, 347 );

  line( 586, 238, 540, 248 );
  line( 614, 238, 660, 248 );
  line( 540, 248, 505, 310 );
  line( 660, 248, 695, 310 );
  line( 505, 310, 517, 345 );
  line( 695, 310, 683, 345 );
  
  line( 580, 224, 513, 213 );  
  line( 620, 224, 687, 213 );
  line( 513, 213, 471, 258 );
  line( 687, 213, 729, 258 );
  line( 729, 258, 730, 305 );
  line( 471, 258, 470, 305 );
  
  line( 571, 207, 530, 200 );
  line( 629, 207, 670, 200 );
  line( 530, 200, 473, 129 );
  line( 670, 200, 727, 129 );
  line( 473, 129, 500, 71 );
  line( 727, 129, 700, 71 );
  
  fill( 110, 6, 4);
  ellipse( 600, 170, 90, 130 );
  
  noStroke();
  fill( 90, 55, 5);
  ellipse( 600, 170, 70, 100); 
  
  //ojos
  fill(0);
  circle( 592, 277, 15);
  circle( 608, 277, 15);
}
