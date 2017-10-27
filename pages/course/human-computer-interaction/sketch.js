/////////////// Simulation variables //////////////
var misses = 0;
var start = false;
var tries = 10;

// Position of the rectangle 
var randomX;
var randomY;
var rectSize = 40;

var startMouseX;
var startMouseY;

var startTime;

// Array to store times
var times = [];
// Array to store distances.
var distances = [];
// Show data
var showData = false;

/////////////// Simulation variables //////////////


/////////////////// Setup Code ////////////////////
function setup() {
    var canvas = createCanvas(640,480);
    canvas.parent("fitts-simulator");

}
/////////////////// Setup Code ////////////////////



// A function to generate random start positions for our rectangle
function randomRect(){
    // Generate a random coordinate to draw the rectangle.
    randomX = random(600);
    randomY = random(400);
    // Record the position of our mouse when a new rectangle is drawn.
    // We will then calculate the distance from this initial coordinate
    // after the user successfully clicks on the rectangle.
    startMouseX = mouseX;
    startMouseY = mouseY;
    // Whenever a new rectangle is drawn, start a new timer.
    startTime = millis();
}

// Check the state of our simulation
// Do we have more tries left?
function checkSimulationStatus(){
    // If we have not yet started the simulation
    // inform the user.
    if(start==false && tries >0){
        text("Press mouse to begin",200,50);
    }

    // After the first mouse click, the simulation starts
    if(mouseIsPressed && start==false){
        start=true;
        // Because the simulation is running, generate
        // a random coordinate for our rectangle and display it.
        randomRect();
    }

    // If are running our simulation and have run out of tries
    // then we have finished our Fitts law simulation.
    if(tries <=0){
        outputData();
        // Turn the flag to false to turn off our simultation.
        start = false;
    }
}


// Function to dump data out one time.
function outputData(){
    if(showData==false){
        text("Fitts simulation over",200,50);

        myP = createP("Distance,times");
        for (var i = 0; i < 10; i++) {
            text(distances[i],100,20*i);
            text(times[i],200,20*i);
            myP = createP(distances[i]+","+times[i]);
        }
    }
    // Force not to show data anymore
    showData= true;
}

// check if we have selected within the bounds of our rectangle.
function clickOnRectangleCheck(){
    if(start==true && tries>0){
        text("Tries:"+tries,300,30);
        // Draw a rectangle at a random position
        rect(randomX,randomY,rectSize,rectSize);
        // Determine if we selected the rectangle or not
        if(mouseIsPressed){
            if( mouseX > randomX && mouseX < randomX+rectSize &&
                mouseY > randomY && mouseY < randomY+rectSize) {
                // Record the time it took us to click on the rectangle.
                var t = parseInt(millis()-startTime);
                // Record the distance from our original coordinates.
                var d = parseInt(dist(startMouseX,mouseX,startMouseY,mouseY));
                // Store time and distance in an array of data.
                times.push(t);
                distances.push(d);
                // Decrement how many more attempts we have in our simulation
                tries = tries - 1;
                // Generate a random coordinate for our new rectangle.
                randomRect();
            }
            else{
                // If we miss our target, increment the misses.
                // This will help us quantify an index of difficulty.
                misses = 1;
            }
        }
    }
}

/////////////////// Drawing Code ////////////////////
// This is the code that gets run over and over
// again and again. It loops forever, rendering each
// frame one after the other.
function draw() {
    // Draw a default blue background color
    background(0,155,255);

    //
    checkSimulationStatus();
    clickOnRectangleCheck();
}
/////////////////// Drawing Code ////////////////////