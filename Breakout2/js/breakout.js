//Setup the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

var rightPressed = false;
var leftPressed = false;


//Set the starting point

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2
var dy = -2
var ballRadius = 10

//insert bricks
var brickRowCount =3;
var brickColumnCount =5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft =30;

//hold bricks in 2deminsional array
var bricks = [];
for (c=0; c<brickColumnCount; c++) {
	bricks[c] [];
	for(r=0; r<brickRowCount; r++){
		bricks[c][r] = {x: 0, y: 0, status: 1};
		
	}
}	
	



//Draw the ball
function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y,ballRadius, 0, Math.PI*2);
	ctx.fillstyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
	
}	 
function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
	ctx.fillstyle = "#0095DD"
	ctx.fill();
	ctx.closePath();
	}
	
	function drawBricks() {
		for(c=0; c<brickColumnCount; c++) {
			for(r=0; r<brickRowCount; r++) {
				var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
			var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
			bricks[c][r].x = brickX;
			bricks[c][r].y = brickY;
			ctx.beginPath();
			ctx.rect(brickX, brickY, brickWidth, brickHeight);
			ctx.fillStyle = "#0095DD";
			ctx.fill();
			ctx.closePath();

		}
	}
}


function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	drawPaddle ();
	x += dx;
	y += dy;
	
	//should bouce off walls
	if(x + dx>canvas.width-ballRadius || x +dx <ballRadius) {
		dx = -dx;
		
	}
	if(y + dy <ballRadius){
		dy = -dy;
}else if (y + dy > canvas.height-ballRadius) {
	//is ball hittin paddle no
		if(x >paddleX && x < paddleX + paddleWidth) {
			dy =_dy;
			
		}
		else { 
				alert("GAME OVER");
				x= canvas.width/2;
				y= canvas.height-30;
				document.location.reload();
			
		}
	}	
	
	if(rightPressed && paddleX <canvas.width_paddleWidth) {
		paddleX +=7;
}
	else if(leftPressed && paddleX > 0){
		paddleX -= 7;
}	
	
	
	
	

}
document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);

function keyDownHandler(e){ 
	if(e.keyCode ==39) {
		rightPressed = true;
	}
    else if(e.keyCode ==37) {
        leftPressed = true;
	
	}
}
function keyUpHandler(e) {
	if(e.keyCode == 39) {
		rightPressed = false;
	}
	else if (e.keyCode == 37) {
		leftPressed = false;
	} 



	


}

setInterval(draw, 10); 
