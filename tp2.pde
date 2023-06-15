//Profe, te estuve mandando mensajes debido a que tres dias antes de la entrga me dijiste que no podia utilizar mi imagen pero 
//en clase ya me habias dado el okey porque yo queria hacer una con polares que no me salia. Yo avance igual con el trabajo con el okey que me diste el martes pasado
// espero que se entienda esta confusion.

// PILAR CORTIZO
// Legajo: 92722/5
// Trabajo numero 2 de tecno

//enlace del VIDEO EXPLICATIVO: https://youtu.be/o3hE4Cnk_WU

PImage cuadrados;
int cant;
int i, j, c, b, r, o, e, t, n , w;
int ta;
int tam;
int tama;
int taman;
int tamano;
float m, d;
float originalSize ;
boolean animate;


void setup(){
  size( 800, 400);
  cuadrados= loadImage("cuadrados.jpeg");
 
  ta= 27;
  tam=37;
  tama=47;
  taman=57;
  tamano=68;
  cant= 6;
  originalSize= ta;
  animate=  true; 
  
}

void draw(){
  background(255);
  image(cuadrados, 0, 0, 400, 400);
  pushMatrix();
  println (texto());
  
    //cuarto cuadrdo
    for (int r = 0; r < cant; r++) {
      for (int o = 0; o < cant; o++) {
     
      partecuatro( r, o);
     }
   }
     //segundo cuadrado
    for (int n = 0; n < cant; n++) {
     for (int m = 0; m< cant; m++) {
     
     partedos( n, m);
     }
   }
   //primer cuadrado
   for (int i = 0; i < cant; i++) {
     for (int j = 0; j < cant; j++) {
     
       
     parteuno(i, j);
   } 
  }
   //tercer cuadrdo
    for (int c = 0; c < cant; c++) {
     for (int b = 0; b < cant; b++) {
     
     partetres(c, b);
     }
   }

   //quinto cuadrado
    for (int e = 0; e < cant; e++) {
      for (int t = 0; t < cant; t++) {
      
      partecinco( e, t);
    }
   }
  
   popMatrix();
   
  }



void keyPressed() {
  
}
  
void mouseMoved() {
 
}

String texto() {
   return("Presentacion de mi trabajo numero 2 para tecno"); //variable que no retorno su valor
}
  







 
