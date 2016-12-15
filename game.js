// don't forget to look at hide function, could be useful
// also need to make moving after some event
// should download picture and call it form the computer not from inet
function Game(){
	this.lifes = function(){
		
 		for(i = 0; i < 3; i++){
 			fill(255,255,0);
 			this.lifes[i] = rect(10 + 50*i, 10, 20, 20);

 			//if(ball.y == 590){
 			//	shorten(lifes);
 				//noLoop();
 			//	text('LIFE LEFT', 200, 200);
 				
 			//}
 		}

	}
	this.score = function() {
		textSize(16);
		fill(95,255,23);
		text("Score", 450, 20);

		text('' + t, 500, 20);		
	}

	this.gameOver = function() {
		if(breaks.length == 0){
			noLoop();
			text('HEY YOU WON THE GAME',250 , 250)
		//if()
		}
	}
}