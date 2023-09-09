//VIDEO: https://youtu.be/_CUWAmddViU

let naveEspacial;
let asteroidImg;
let puntaje = 0;
let estadoJuego = "MENU";
let fondoImg;
let fondoImgMenu;
let asteroides = [];
const maxCantidadAsteroides = 5;
const anchoNave = 90;
const altoNave = 120;
const anchoAsteroide = 80;
const altoAsteroide = 80;
let ganaste = false;
let perdiste = false;
let clicEnBoton = false;
let textoInstrucciones = "CONTROLES: Usa el ratón para controlar la Nave Espacial Galáctica. \n\nMueve el ratón hacia la izquierda o la derecha para desplazar\n\nla nave en esas direcciones.\n\n\n\REGLAS: Evita chocar con los asteroides.\n\nSi la Nave Espacial colisiona, el juego terminará.\n\nGana puntos a medida que esquivas asteroides.\n\n¡Intenta obtener la mayor cantidad de puntos posible!\n\nSi acumulas 80 puntos, ¡ganarás el juego!\n\nSiempre puedes presionar la tecla 'P' para reiniciar el juego.\n\n\n\n¡Diviértete y que la fuerza te acompañe en tu viaje galáctico!";
let textoCreditos = "PROGRAMADORA: Cortizo pilar \n\n DIRECTORA - Cortizo Pilar\n\nLegajo: 92722/5";

function preload() {
  naveEspacial = loadImage('data/nave.png');
  asteroidImg = loadImage('data/asteroide.png');
  fondoImg = loadImage('data/fondo.png');
  fondoImgMenu = loadImage('data/menu.png');
}

function setup() {
  createCanvas(600, 600);
  frameRate(60);
  asteroidX = random(width);
  asteroidY = -30;
}

function draw() {
  background(fondoImgMenu); 
  
if (estadoJuego === "MENU") {
    clicEnBoton = false; 
    textSize(36);
    fill(186, 59, 255);
    textAlign(CENTER, TOP);
    text("Bienvenido a\n\nGalaxia Peligrosa: Misión Espacial", width / 2, 50); 
   
   fill(255);
    dibujarBoton(240, 350, 120, 50, "Jugar", () => {
      iniciarJuego();
      estadoJuego = "JUEGO";
    });
   fill(255);
   dibujarBoton(240, 420, 120, 50, "Instrucciones", () => {
      mostrarInstrucciones = true;
      estadoJuego = "INSTRUCCIONES";
    });
    fill(255);
    dibujarBoton(240, 490, 120, 50, "Créditos", () => {
      mostrarCreditos = true;
      estadoJuego = "CREDITOS";
    });
  } else if (estadoJuego === "JUEGO") {
    image(fondoImg, 0, 0, width, height);
    // Mueve la nave con el mouse en el eje X
    naveX = constrain(mouseX - anchoNave / 2, 0, width - anchoNave);
    image(naveEspacial, naveX, height - altoNave, anchoNave, altoNave);

    for (let i = 0; i < asteroides.length; i++) {
      asteroides[i].y += asteroides[i].velocidad;
      image(asteroidImg, asteroides[i].x, asteroides[i].y, anchoAsteroide, altoAsteroide);

      // Colisión con la nave
      if (
        naveX + anchoNave > asteroides[i].x &&
        naveX < asteroides[i].x + anchoAsteroide &&
        height - altoNave < asteroides[i].y + altoAsteroide
      ) {
        estadoJuego = "FIN";
      }

     if (asteroides[i].y > height) {
    asteroides.splice(i, 1);
    puntaje += 5;
   }
 }
    textSize(24);
    fill(255);
    textAlign(CENTER, TOP);
    text(`Puntaje: ${puntaje}`, width / 2, 10);
    if (puntaje >= 80) {
      estadoJuego = "GANAR";
    }
   if (asteroides.length < maxCantidadAsteroides) {
     let nuevoAsteroide = {
       x: random(width - anchoAsteroide),
       y: -altoAsteroide,
       velocidad: random(2, 4)
      };
      asteroides.push(nuevoAsteroide);
    }
  } else if (estadoJuego === "FIN") {
    image(fondoImg, 0, 0, width, height);
    textSize(90);
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    text("¡Fin del juego!", width / 2, height / 2);
  } else if (estadoJuego === "GANAR") {
    image(fondoImg, 0, 0, width, height);
    textSize(90);
    fill(0, 255, 0);
    textAlign(CENTER, CENTER);
    text("¡Has ganado!", width / 2, height / 2);
 } else if (estadoJuego === "INSTRUCCIONES") {
    fill(186, 59, 255);
    textSize(18); 
    textAlign(LEFT, TOP); 
    let x = 20;
    let y = 20;
    let espacioLinea = 25; 
    let lineas = textoInstrucciones.split('\n');
    for (let i = 0; i < lineas.length; i++) {
      text(lineas[i], x, y);
      y += espacioLinea; 
    }
  } else if (estadoJuego === "CREDITOS") {
   fill(186, 59, 255);
    textSize(30); 
    textAlign(LEFT, TOP); 
    let x = 20;
    let y = 20;
    let espacioLinea = 25; 
    let lineas = textoCreditos.split('\n');
    for (let i = 0; i < lineas.length; i++) {
      text(lineas[i], x, y);
      y += espacioLinea; 
    }
  }
}

function keyPressed() {
  if (key === "p" || key === "P") {
    reiniciarTodo();
  }
}
