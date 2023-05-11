PImage mono, monkey, bun, panino, chignon;
String estado;
float abajo= 100;
boolean estoyDentroDelRect= true;
float x, y, ancho, alto;
int c;

void setup() {
  size( 640, 480 );  
  textAlign( CENTER, CENTER );
  textSize( 40 );
  
estado= "menu";
mono= loadImage("mono.jpg");
monkey= loadImage("monkey.jpg");
bun= loadImage( "bun.jpg");
chignon= loadImage("chignon.jpg");
panino= loadImage("panino.jpg");
x= 460;
y= 400;
ancho= 100;
alto= 100;

frameRate(50);
}

void draw() {
  abajo= frameCount;
  if ( estado.equals("menu") ) {
    image(mono,0,0);
    fill(255);
    text("DATOS CURIOSOS DE LOS MONOS",320, 30 );
    strokeWeight(0);
    fill(255,247,77);
    circle(550, 400, 60);
    //
  } else if (estado.equals("p1") ) {
    image(monkey,0,0);
    fill(255);
    textSize(27);
    text( "Los monos están divididos en dos, \n según su ubicación geográfica: \n monos del Nuevo Mundo y monos del Viejo Mundo. \n Los primeros viven en América, \n pero los otros se hallan en \n África y Asia", height/1.5, abajo );
   
    c++;  
    if( c >= 300 ){  
      estado = "p2";
      c = 0; 
    }
  } else if (estado.equals("p2") ) {
    image(bun,0,0);
    fill(255);
    textSize(26);
    text( "Son animales muy sociales y suelen vivir en grupos \n compuestos por machos, hembras, crías y jóvenes.", abajo/1.5, height/1.5 );
 
    c++;  
    if( c >= 300 ){  
      estado = "p3";
      c = 0; 
       }
  } else if (estado.equals("p3") ) {
    image(panino,0,0);
    fill(200,200,0);
    textSize(25);
    text( "Los monos pueden comprender número escritos \n y hasta comprenden simples nociones de aritmética elemental", height/1.5, abajo/2.5 );
  
    c++;  
    if( c >= 300 ){  
      estado = "p4";
      c = 0; 
       }       
       
    //
  } else if (estado.equals("p4") ) {
    image(chignon,0,0);
    fill(255);
    textSize(abajo/60);
    text( "La mayoría de los monos son arborícolas, es decir, \n viven en los árboles, pero algunos son más terrestres", width/2, height/2 );
    estoyDentroDelRect = ( mouseX > x ) && ( mouseX < x+ancho ) && ( mouseY > y) && ( mouseY < y+ancho);
    if ( estoyDentroDelRect ){
      fill(195,255,3);
    }else {
      fill(255,243,3);
      
  }
  noStroke();
  rect( x, y, ancho, alto );
 } 
  
}

void mousePressed() {
  if( estado.equals("menu") ){
    if( dist(550, 400, mouseX, mouseY) < 50/2 ){
      estado = "p1";
    }
  }
  if( estado.equals("p4") ){
     if( estoyDentroDelRect ){
       if ( ( mouseX > x ) && ( mouseX < x+ancho ) && ( mouseY > y) && ( mouseY < y+alto) ) {
         estado = "menu" ;
         
       }
     }
  }
}
