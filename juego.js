class Juego{
  constructor(){
    this.pinocho = new Pinocho(width * 0.5, 500, 2);
    this.carga();
    this.pescados = [];
    this.iniciarPescados(5);
    this.actualizarPescados();
    this.estado = 0;
    this.fondo=[];
    this.mipreload();
    this.i=0;

  }
  background(){
    image( this.fondo[this.i], 0, 0, width, height );
  }

  mipreload() {
     for ( this.i = 0; this.i < 4; this.i++ ) {
    this.fondo.push( loadImage('data/fondo'+this.i+'.png') );
    }
  } 
  carga() {
     this.pinocho = new Pinocho(width * 0.5, 500);
  }
  iniciarPescados(cantidad) {
    for (let i = 0; i < cantidad; i++) {
      this.pescados.push(new Pescados());
     }
   }
  
  actualizarPescados(oc) {
    if (this.estado === 1) {
      for (let i = this.pescados.length - 1; i >= 0; i--) {
      this.pescados[i].mover();
      this.pescados[i].dibujar();
      this.pinocho.calcularColision(this.pescados);
    }
      this.perder(oc);
      this.ganar();
    }
   }
  
  dibujar(){
    if ( this.estado == 0 ) {
      image( this.fondo[0], 0, 0 );
      textSize(20);
      text('Pinocho regresa a casa y encuentra a Geppeto en peligro, por ir a buscarlo por el mar y ser tragado por una ballena por eso decide rescatarlo y le pide ayuda a grillo.', 100, 10, 400, 200);
      text('Apreta la barra de espacio para comenzar a JUGAR!', 100, 300, 400, 400);
    } else if ( this.estado == 1 ) {
     image(this.fondo[1], 0, 0);      
      this.pinocho.dibujar();
      textSize(15);
      fill (255);
      text ("Vidas: " + this.pinocho.vida, 520, 570);
      text("Puntos: " + this.pinocho.puntos, 20, 570); 
    } else if ( this.estado == 2 ) {
      image( this.fondo[2], 0, 0 )
      fill(255);
      text ("PERDISTE:((((\n\n\nPinocho y Geppetto quedaron encerrados\nen la ballena por siempre", 20, 18, 590);
    } else if ( this.estado == 3 ) {
      image( this.fondo[3], 0, 0 )
      text ("LO LOGRASTE\n Pinocho y Geppetto estan a salvo", 20, 20, 580);
    }
  }
//pierde si pinocho se queda sin vidass
   perder(oc) {
    if (this.estado === 1 && this.pinocho.vida <= 0) {
      //objCuento.cambiarEstado(11); 
      oc.cambiarEstado(11); 
    }
  }
// la condicion para ganar es llegar a los 500 puntos
   ganar() {
    if (this.estado === 1 && this.pinocho.puntos >= 500) {
      objCuento.cambiarEstado(6); 
    }
  }
   teclaPresionada(keyCode) {
     if (keyCode === 32) {
      print(this.estado);
       if (this.estado === 0) {
         this.estado = 1;
      }
    }
    if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    }
  }
}