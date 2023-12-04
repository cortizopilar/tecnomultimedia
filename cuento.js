class cuento {
  constructor() {
    this.estado = 0;
    this.fotos=[];
    this.relatos=[];
    this.botones = [];
    this.i=0;
    this.mipreload();
    this.cargarBotones();
    this.objJuego = new Juego(); 
  }

  background() {
    image( this.fotos[this.i], 0, 0, width, height );
  }

  mipreload() {
    for ( this.i = 0; this.i < 13; this.i++ ) {
      this.fotos.push( loadImage('data/foto'+this.i+'.png') );
      }
  
    this.relatos[0]="PINOCHO";
    this.relatos[1]="Geppetto, un buen carpintero, crea a Pinocho y el hada mágica le da vida, convirtiéndolo en un muñeco de madera viviente y cumpliendo él sueño de tener un hijo.";
    this.relatos[2]="Pinocho quiere hacer amigos y le pide a su padre que lo deje ir a estudiar a la escuela.";
    this.relatos[3]="De camino a la escuela. Pinocho se encuentra con dos nenes malos que le Invitan a hacer travesuras en la ciudad.";
    this.relatos[4]="Pinocho decide involucrarse en travesuras y desobedece las normas alejandose así de Geppetto.";
    this.relatos[5]="Pinocho asiste a la escuela y se destaca en sus estudios, conoce a nuevos amigos y aprende lecciones valiosas.";
    this.relatos[6]="Pinocho, como recompensa por ser un buen niño se convierte en uno de verdad, de carne y hueso y vive feliz junto a Geppeto.";
    this.relatos[7]="Pepito Grillo no encontró salida y Pinocho y Geppetto son tragados por la ballena.";
    this.relatos[8]="Pinocho es entregado a un circo donde lo obligan a trabajar. Pinocho tiene mucho miedo e implora al titiritero que le perdone con lágrimas en los ojos.";
    this.relatos[9]="El hada buena hechiza a Pinocho por su mal comportamiento y le pone unas orejas de burro y una nariz que va a crecer cada vez que el mienta";
    this.relatos[10]="Pinocho no volvió a su casa y termina siendo utilizado por personas malas para sacar dinero de él. Esta elección lleva a un final desafortunado para Pinocho, ya que pierde la oportunidad de redimirse y su historia termina en tragedia.";
    this.relatos[11]="Pinocho regresa a casa y encuentra a Geppeto en peligro, por ir a buscarlo por el mar y ser tragado por una ballena por eso decide rescatarlo y le pide ayuda a grillo.";
    this.relatos[12]="Pinocho ignora los consejos del grillo y sigue a los nenes malos.";
    this.relatos[13]="Pepito grillo no pudo encontrar escapatoria y padre e hijo son tragados por la ballena.";
    this.relatos[14]="AUTOR - Carlo Collodi\nDIRECTORA - Cortizo Pilar\nPROGRAMADORA - Cortizo Pilar", 10, height/2.5;
  }
  cargarBotones() {
    this.botones.push(new boton(200, 50, "Comenzar")); //n0
    this.botones.push(new boton(200, 50, "Creditos"));//n1
    this.botones.push(new boton(230, 50, "Siguiente"));//n2
    this.botones.push(new boton(200, 50, "Ira a la escuela"));//n3
    this.botones.push(new boton(200, 50, "Estudiara en casa"));//n4
    this.botones.push(new boton(230, 50, "Decide ir con los nenes malos"));//n5
    this.botones.push(new boton(230, 50, "Decide ir a la escuela"));//n6
    this.botones.push(new boton(200, 50, "No lo liberan"));//n7
    this.botones.push(new boton(200, 50, "Lo liberan"));//n8
    this.botones.push(new boton(230, 50, "No obedece al hada"));//n9
    this.botones.push(new boton(230, 50, "Pide perdon y vuelve a casa"));//n10
    this.botones.push(new boton(230, 50, "pepito no encuentra salida"));//n11
    this.botones.push(new boton(230, 50, "pepito encuentra salida"));//n12
    this.botones.push(new boton(200, 50, "Volver"));//n13
  }
  estados() {
    if (this.estado == 0) {
      image(this.fotos[0], 0, 0);
      this.botones[0].dibujar(200, 300); 
      this.botones[1].dibujar(200, 400); 
      fill(255);
      textSize(50);
      text(this.relatos[0], width / 2, 50);
      
    } else if (this.estado== 1) {
     image( this.fotos[1], 0, 0); 
      this.botones[2].dibujar(200, 300);
      fill(255);
      text(this.relatos[1], 200, 50, 400, 100);

    } else if (this.estado== 2) {
      image(this.fotos[2], 0, 0);
      this.botones[3].dibujar(200, 300);
      this.botones[4].dibujar(200, 400);
      text(this.relatos[2], 100, 80, 400, 70);
    
    } else if (this.estado== 3) {
      image(this.fotos[3], 0, 0);
      this.botones[5].dibujar(50, 300);
      this.botones[6].dibujar(300, 300);
      text(this.relatos[3], 100, 80, 400, 70);

    } else if (this.estado== 4) {
      image(this.fotos[5], 0, 0 );
      this.botones[2].dibujar(200, 300);
      text(this.relatos[4], 100, 80, 400, 70);

    } else if (this.estado== 5) {
      image(this.fotos[4], 0, 0 );
      this.botones[2].dibujar(200, 300);
      fill(0);
      text(this.relatos[5], 100, 80, 400, 70);

    //FINAL
    }else if (this.estado== 6) {
      image(this.fotos[6], 0, 0);
      this.botones[13].dibujar(400, 300);
      textSize(50);
      text('FINAL', width/2, 30);
      textSize(25);
      fill(0, 150, 100);
      text(this.relatos[6], 50, 20, 500, 200);
   
    }else if (this.estado== 7) {
      image(this.fotos[9], 0, 0);
      this.botones[7].dibujar(200, 300);
      this.botones[8].dibujar(200, 400);
      fill(255);
      text(this.relatos[8], 100, 80, 400, 70);
  
      //FINAL TRAGICO 
    }else if (this.estado== 8) {
      image(this.fotos[11], 0, 0);
      this.botones[13].dibujar(400, 300);
      textSize(50);
      text('FINAL', width/2, 30);
      fill(255);
      textSize(15);
      text(this.relatos[10], 100, 80, 400, 200);
  
    }else if (this.estado== 9) {
     image(this.fotos[10], 0, 0);
     this.botones[9].dibujar(200, 300);
     this.botones[10].dibujar(200, 400);
     fill(255);
     text(this.relatos[9], 100, 80, 400, 70);

    }else if (this.estado== 10) {
      this.objJuego.dibujar();
      this.objJuego.actualizarPescados(this);

// final si pierde el juego
    }else if (this.estado== 11) {
      image(this.fotos[11], 0, 0);
      this.botones[13].dibujar(400, 300);
      textSize(50);
      text('FINAL', width/2, 30);
      fill(200, 0, 100);
      textSize(15);
      text(this.relatos[13], 100, 80, 400, 200);
    
    }else if (this.estado== 12) {
      image(this.fotos[0], 0, 0);
      this.botones[13].dibujar(400, 300);
      fill(255);
      text(this.relatos[14], 100, 80, 400, 70);
 
     }
  }
  apretarBoton() {
    if (this.botones[0].funciona(200, 300) && this.estado === 0) {
   this.cambiarEstado(1);
 } else if (this.botones[1].funciona(200, 400) && this.estado === 0) {
   this.cambiarEstado(12);
 } else if (this.botones[2].funciona(200, 300) && this.estado === 1) {
   this.cambiarEstado(2);
 } else if (this.botones[3].funciona(200, 300) && this.estado === 2) {
   this.cambiarEstado(3);
 } else if (this.botones[4].funciona(200, 400) && this.estado === 2) {
   this.cambiarEstado(4);
 } else if (this.botones[5].funciona(50, 300) && this.estado === 3) { 
   this.cambiarEstado(4);
 } else if (this.botones[6].funciona(300, 300) && this.estado === 3) { 
   this.cambiarEstado(5);
 } else if (this.botones[2].funciona(300, 300) && this.estado === 5) { 
   this.cambiarEstado(6);
 } else if (this.botones[2].funciona(300, 300) && this.estado === 4) { 
   this.cambiarEstado(7);
 } else if (this.botones[2].funciona(300, 300) && this.estado === 5) { 
   this.cambiarEstado(7);
 } else if (this.botones[7].funciona(300, 300) && this.estado === 7) { 
   this.cambiarEstado(8);
 } else if (this.botones[8].funciona(300, 400) && this.estado === 7) { 
   this.cambiarEstado(9);
 }else if (this.botones[9].funciona(300, 400) && this.estado === 9) { 
   this.cambiarEstado(10);
 }else if (this.botones[13].funciona(400, 300) && this.estado === 11) { 
   this.reiniciar(0);
 }else if (this.botones[13].funciona(400, 300) && this.estado === 8) { 
   this.reiniciar(0);
 }else if (this.botones[13].funciona(400, 300) && this.estado === 6) { 
  this.reiniciar(0);
}else if (this.botones[13].funciona(400, 300) && this.estado ===12) { 
  this.reiniciar(0);
}
  }
  cambiarEstado(nuevoEstado) {
    this.estado = nuevoEstado;
  }
  // aca reinicio las variabless
  reiniciar() {
    this.estado = 0;
    this.i = 0;
    this.fotos = [];
    this.relatos = [];
    this.botones = [];
    this.mipreload();
    this.cargarBotones();
    this.objJuego = new Juego();
  }
}
