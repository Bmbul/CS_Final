var ball;
var plate;
var breaks = [];
var y = 70;
var bg;
var t = 0;
var player;
var lifes = [];


function setup() {
 bg = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Fornax_Dwarf.jpg/600px-Fornax_Dwarf.jpg");
 canvas = createCanvas(600,600);
  
  ball = new Ball ();
  
  plate = new Plate ();

  player = new Game ();
 
  for(i = 0; i < 15; i++ ){
    breaks[i] = new Breaks(55+i*120, y);
    if (breaks[i].x + breaks[i].length > width){
      breaks[i].y = breaks[i].y + 70 * floor((breaks[i].x + breaks[i].length/2)/width);
      breaks[i].x = breaks[i].x - width * floor((breaks[i].x + breaks[i].length/2)/width);
    }
  }

  
  
}


function draw() {
  background(bg);
  player.lifes();
  player.gameOver();
  player.score();
  ball.display();
  ball.move();
  ball.bounce();
  plate.draw();
  plate.move();

  //ball.removing();
  fill(75, 127, 232);
  for(i = 0; i < breaks.length; i++){
   breaks[i].createBreaks();
   ball.distroy();
  }
  
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

/*function keyIsPressed() {
  loop()
}*/
