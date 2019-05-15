var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

var ballX = canvas.width/2;
var ballY = canvas.height/2;

var initialRed = Math.random() * 255;
var initialGreen = Math.random() * 255;
var initialBlue = Math.random() * 255;

var randomRGB = "rgb(" + initialRed + ", " + initialGreen + ", " + initialBlue + ")";
console.log("randomRGB: " + randomRGB);

var ballColor = randomRGB;

redRange.value = initialRed; //updates the sliders initially
greenRange.value = initialGreen;
blueRange.value = initialBlue;

var sliderUpdates = function(){
    $( ".redLabel" ).empty();
    $( ".redLabel" ).append("<label> Red: " + redRange.value + "</label>");

    $( ".greenLabel" ).empty();
    $( ".greenLabel" ).append("<label> Green: " + greenRange.value + "</label>");

    $( ".blueLabel" ).empty();
    $( ".blueLabel" ).append("<label> Blue: " + blueRange.value + "</label>");
}

sliderUpdates();

var ballRadius = 100;

var speedX = 5;
var speedY = 3;
var moveRight = true;
var moveDown = true;

var clickCount = 0;
var totalCount = 0;



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

    var sliderChoice = "rgb(" + redRange.value + "," + greenRange.value + "," + blueRange.value + ")";
    ballColor = sliderChoice;
}

animate();


canvas.addEventListener("click", function(event){

    console.log();
    console.log(event);
        // find the absolute value of the distance of the click from the ball
    // 
    var canvasX = event.clientX - event.target.offsetLeft;
    var canvasY = event.clientY - event.target.offsetTop;
    var distX = Math.abs(ballX - canvasX);
    var distY = Math.abs(ballY - canvasY);
    // red =   Math.floor(Math.random() * 255);  // returns a random integer from 0 to 254 i think
    // green =   Math.floor(Math.random() * 255); 
    // blue =   Math.floor(Math.random() * 255); 
    totalCount++;

    console.log("DistX: " + distX);
    console.log("DistY" + distY);


    if( distX < ballRadius && distY < ballRadius){
        console.log('CLICK!!!!!');
        
        ballRadius = Math.floor(Math.random() * 150) + 100;
        speedX = speedX + .5;
        speedY = speedY + .5;
        clickCount++;
        console.log(clickCount);
    }  
})

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

redRange.oninput = function(){
    sliderUpdates();
}

greenRange.oninput = function(){
    sliderUpdates();
}

blueRange.oninput = function(){
    sliderUpdates();
}


