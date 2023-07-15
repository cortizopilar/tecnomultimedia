//Cortizo Pilar - leg.92722/5 - comi 2
//TPn3 - PINOCHO, Carlos Collodi
//Espero que este bien! no llegue a decir mucho en el video pero resumi bastante
//Link video---> https://youtu.be/owWu_kM8LGY

float rectX = 400;  
float rectY = 110;  
float rectAncho = 400;  
float rectAlto = 200; 
int estado = 0;
int l = 14;
boolean generarColores = true;
color colorOriginal;
PFont miFuente;
PImage[] imagenes = new PImage[l];
String[] relatos  = new String[l];
boolean datos= false;

void setup(){
  size(600,600);
  miFuente = createFont("tipografia.ttf", 60);
  textFont(miFuente);
  //imagenes 
  for(int i = 0 ; i < l ; i++ ){
    imagenes[i] = loadImage("foto" + i + ".png"); 
  }
  relatos = loadStrings("relatos.txt");
  for ( int i = 0; i < l ; i++ ) {
  }  
  colorOriginal = color(0); // Color original negro

}

void draw(){
  textAlign(CENTER, CENTER);
  println(estado);
  println(mouseX);
  println(mouseY);
  println(datos);
  
  switch(estado){
    case 0:
     image( imagenes[0],0,0);
     boton(300, 350, 200, "Comenzar", 1);
     boton(300, 430, 200, "Creditos ", 13);
     textSize(60);
     text(relatos[0], width/2, 50);
     return;   
     
    case 1:  
     image( imagenes[1], 0, 0);
     boton(300, 500, 200, "Siguiente", 2);
     textSize(20);
     fill(0,100,200);
     noStroke(); 
     if (generarColores) {
     color colorAleatorio = color(random(255), random(255), random(255));
     fill(colorAleatorio);
  } else {
     fill(255); 
  }
     rect(rectX, rectY, rectAncho, rectAlto);
     fill(0);
     text(relatos[1], 400, 100, 400 ,500);
     break;
      
    case 2:
     image(imagenes[2], 0, 0);
     boton(300, 350, 200, "Geppeto decide que\nira a la escuela", 3);
     boton(300, 430, 200, "Geppeto decide que\nestudiara en casa ", 5);
     textSize(25);
     text(relatos[2], width/2, 100, 400 ,500);
     break;
     
    case 3: 
     image(imagenes[3],0,0);
     noStroke();
     fill(0, 200, 100);
     rect(150, 300, 150, 70);  
     rect(400, 300, 150, 70);
     textSize(25);
     fill(0);
     text(relatos[3], width/2, 100, 400 ,500);
     //opciones con A y B
     textSize(15);
     text("PRESIONA A\n Pinocho decide ir\nhacia la escuela", 150, 300);
     text("PRESIONA B\n Pinocho decide ir\ncon los nenes malos", 400, 300);
     break;
     
    case 4:
     image(imagenes[4],0 ,0 );
     textSize(25);
     fill(0);
     text(relatos[5], width/2, 100, 400 ,500);
     boton(300, 500, 200, "Siguiente", 6);
     break;
    
    case 5:
     image(imagenes[5], 0, 0);
     textSize(25);
     text(relatos[4], width/2, 100, 500 ,500);
     boton(300, 500, 200, "Y que le sucede?", 7);
     break;
     
    //FINAL FELIZ
    case 6:
     image(imagenes[6], 0, 0);
     fill(50, 200, 200);
     textSize(25);
     text(relatos[6], width/2, 130, 500 ,500);
     textSize(40);
     fill(200, 200, 0);
     text("FINAL", 300, 27);
     boton(500, 500, 100, "VOLVER", 0); 
     break;
     
    case 7:
     image(imagenes[9], 0, 0);
     textSize(25);
     text(relatos[12], width/2, 100, 500, 500);
     boton(300, 500, 200, "Siguiente", 10);
     break;
   
    case 8:
     image(imagenes[7], 0, 0);
     text(relatos[11], width/2, 100, 500, 500);
     boton(300, 350, 200, "Pepito grillo NO\nencuentra salida", 9);
     boton(300, 430, 200, "Pepito grillo\nencuentra salida", 6);
     break;
     
    //FINAL TRAGICO ;(
    case 9:
     image(imagenes[8], 0, 0);
     textSize(25);
     fill(255);
     text(relatos[13], width/2, 200, 400, 500);
     textSize(40);
     text("FINAL", 300, 350);   
     boton(100, 100, 100, "VOLVER", 0); 
     break;
  
    case 10:
     image(imagenes[11], 0, 0);
     textSize(25);
     text(relatos[8], width/2, 100, 550 ,500);
     textSize(12);
     boton(300, 350, 200, "Comefuego se\nconmueve y lo libera", 11);
     boton(300, 430, 200, "Comefuego se rie de el y\nlo obligando a trabajar", 12);
     break;
     
    case 11:
     image(imagenes[10], 0, 0);
     textSize(25);
     text(relatos[9], width/2, 100, 550 ,500);
     boton(300, 350, 200, "Pinocho no\nobedece al hada", 12);
     boton(300, 430, 200, "Pinocho pide perdon\ny vuelve a su casa", 8);
     break;
     
    //oTRO FINAL TRAGICO ;((
    case 12:
     image(imagenes[12], 0, 0);
     textSize(25);
     fill(0,0,255);
     text(relatos[10], width/2, 490, 550 ,500);
     textSize(40);
     text("FINAL", 300, 350);
     boton(480, 50, 200, "VOLVER", 0); 
     break;
   
     case 13:
     image(imagenes[13], 0, 0);
     boton(480, 50, 100, "VOLVER", 0); 
     textAlign(LEFT, RIGHT);
     textSize(35);
     fill(255);
     text("AUTOR - Carlo Collodi\nDIRECTORA - Cortizo Pilar\nPROGRAMADORA - Cortizo Pilar", 10, height/2.5);
     break; 
 }
}

void mouseReleased() {
  switch (estado) {
    case 0:
      if (mouseX >= 300 - 100 / 2 && mouseX <= 300 + 100 / 2 && mouseY >= 350 - 30 / 2 && mouseY <= 350 + 30 / 2) {
        cambiarEstado(1); 
        datos = true;
      } else if (mouseX >= 300 - 100 / 2 && mouseX <= 300 + 100 / 2 && mouseY >= 430 - 30 / 2 && mouseY <= 430 + 30 / 2) {
        cambiarEstado(13); 
        datos = true;
      }
      break;

    case 1:
      if (mouseX >= 300 - 100 / 2 && mouseX <= 300 + 100 / 2 && mouseY >= 430 - 30 && mouseY <= 430 + 30) {
     
      }
      break;
    
    case 6:
    case 9:
    case 12:
    if (mouseX >= 100 && mouseX <= 200 && mouseY >= 100 && mouseY <= 200) {
      estado = 0; 
      }
      break;
  }    
 }

void keyPressed() {
  if (estado == 3 && (key == 'a' || key == 'A')) {
    estado = 4;
  }

  if (estado == 3 && (key == 'b' || key == 'B')) {
    estado = 5;
  }
  
    if (key == ' ') {
    estado = 0;
    rectX = 400;
    rectY = 110;
    rectAncho = 400;
    rectAlto = 200;
  }
    if (key == 'p' || key == 'P') {
    generarColores = !generarColores;
  } else if (key == ' ') {
    generarColores = true; // Restablecer la generación aleatoria de colores
  }
}


  
