var ball;
var plate;
var blocks = [];
function setup() {
  createCanvas(500,500);
  ball = new Ball ();
  
  plate = new Plate ();
  
   /*for(var i = 0; i < 5; i++){
     for(var j = 0; j <5; j++){
   blocks[i][j] = new Breaks ();
    }
   }*/
  /*if(ball.removing){
    h1 = createElement('h1',' 3 lifes');
    h1.position(100,100);
  }*/
}

function draw() {
  background(100);
  ball.display();
  ball.move();
  ball.bounce();
  plate.draw();
  plate.move();
  for(var i = 0; i < blocks.length; i++){
    for(var j = 0; j <blocks.length; j++){
       blocks[i][j].createBreaks();
   }
  }
  //ball.removing();
  
  ball.changeDir();
  if(keyIsDown(LEFT_ARROW)) {
    plate.dir(-1);
  }
  if(keyIsDown(RIGHT_ARROW)) {
    plate.dir(1);
  }
  
}
  
function keyReleased (){
  plate.dir(0);
}
/*
function keyIsPressed() {
  
}*/