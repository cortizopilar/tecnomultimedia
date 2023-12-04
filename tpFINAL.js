let objCuento;

function setup() {
  createCanvas(600, 600);
  objCuento= new cuento();
}

function draw() {
  objCuento.estados();
}

function mousePressed() {
  objCuento.apretarBoton();
}

 function keyPressed(){
  if (key === 'r' || key === 'R') {
    objCuento.reiniciar();
  } else {
    objCuento.objJuego.teclaPresionada(32);
    objCuento.objJuego.pinocho.teclaPresionada(keyCode);
  }
}