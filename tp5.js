// CORTIZO PILAR
// legajo: 92722/5 
// Comision 2
// Link del video: https://youtu.be/S9ozx3B6j54
// Espere que este trabajo este correcto, en discord ya habia mandado el desafio de la breve sinopsis


let objJuego; 

function setup() {
  createCanvas(600,600);
  objJuego = new Juego(); 

}
function draw() {
  background(220); 
  objJuego.dibujar();
  objJuego.actualizarPescados(); 

}
function keyPressed(){ 
  objJuego.teclaPresionada(keyCode);
    if (keyCode === LEFT_ARROW) {
    objJuego.pinocho.moverIzquierda();
  } else if (keyCode === RIGHT_ARROW) {
    objJuego.pinocho.moverDerecha();
  }
   //apretar "r" para reiniciar :)
   if (key === 'r') {
    objJuego = new Juego();
  }
}
