var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

var ballX = canvas.width/2;
var ballY = canvas.height/2;
var ballColor = '#880088';
var ballRadius = 100;

var speedX = 5;
var speedY = 3;
var moveRight = true;
var moveDown = true;

var clickCount = 0;
var totalCount = 0;

if (redRange.value != 112){
    console.log("new value: " + redRange.value);
} //the slider doesn't seem to be updating the redRange value every time i move it

function animate(){
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    //draw the ball
    context.beginPath();
    context.fillStyle = ballColor;
    context.strokeStyle = "#000000";
    context.arc(ballX, ballY, ballRadius, 0, 2*Math.PI)
    context.fill();
    context.stroke();

    if (ballX + ballRadius >= canvas.width || ballX - ballRadius <= 0){
        moveRight = !moveRight;
    }

    if (ballY + ballRadius >= canvas.height || ballY - ballRadius <= 0){
        moveDown = !moveDown;
    }

    if (moveRight){
        // speedX = Math.random * 8;
        ballX = ballX + speedX;
    }
    else{
        // speedX = Math.random * 8;
        ballX = ballX - speedX;
    }

    if (moveDown){
        // speedY = Math.random() * 8;
        ballY = ballY + speedY;
    }
    else{
        // speedY = Math.random() * 8;
        ballY = ballY - speedY;
    }

    window.requestAnimationFrame(animate);

    context.font = "30px Acme";
    context.fillStyle = "red";
    context.fillText("Ball Clicks: " + clickCount, 10, 50);
    context.fillText("Total Clicks: " + totalCount, 10, 85);
}

animate();

canvas.addEventListener("click", function(event){
    console.log(event);
        // find the absolute value of the distance of the click from the ball
    // 
    var distX = Math.abs(ballX - event.clientX);
    var distY = Math.abs(ballY - event.clientY);
    // red =   Math.floor(Math.random() * 255);  // returns a random integer from 0 to 254 i think
    // green =   Math.floor(Math.random() * 255); 
    // blue =   Math.floor(Math.random() * 255); 
    totalCount++;
    
    $(document).ready(function(){     	
        $( ".redLabel" ).empty();
        $( ".redLabel" ).append("<h2> Red: " + redRange.value + "</h2>");
        $( ".greenLabel" ).empty();
        $( ".greenLabel" ).append("<h2> Green: " + greenRange.value + "</h2>");
        $( ".blueLabel" ).empty();
        $( ".blueLabel" ).append("<h2> Blue: " + blueRange.value + "</h2>");
    });

    var randomRGB = "rgb(" + redRange.value + "," + greenRange.value + "," + blueRange.value + ")";

    if( distX < ballRadius && distY < ballRadius){
        console.log('CLICK!!!!!');
        ballColor = randomRGB;
        ballRadius = Math.floor(Math.random() * 150) + 100;
        clickCount++;
        console.log(clickCount);
    }  
})

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}