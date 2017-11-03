/////////////// Simulation variables //////////////
// Size of our button
var buttonSize = 20;
var img;

/////////////////// Setup Code ////////////////////

function setup() {
    var canvas = createCanvas(1250 , 720);
    img = loadImage("https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png");
    canvas.parent("data-visualization");
}
/////////////////// Setup  Code ////////////////////


// This will have to be taken account for when zooming
var scaleFactor = 2;


// A function to create a button
function MakeButton(label,x,y,r,g,b){
    // Set the color of our rectangle
    fill(r,g,b,155);

    // Check if we clicked within a rectangle
    if(mouseIsPressed){
        if(mouseX > x &&
            mouseX < x+buttonSize &&
            mouseY > y &&
            mouseY < y+buttonSize) {
            fill(r-30,g-30,b-30,155);
        }
    }

    // Draw my rectangle
    rect(x,y,buttonSize,buttonSize);

    if(mouseX/scaleFactor > x &&
        mouseX/scaleFactor < x+buttonSize &&
        mouseY/scaleFactor > y &&
        mouseY/scaleFactor < y+buttonSize) {
        fill(255);
        rect(mouseX/scaleFactor-2,mouseY/scaleFactor-2,80,80);
        fill(0,0,0);
        text(label,mouseX/scaleFactor,mouseY/scaleFactor,80,80);
    }

    fill(255);
    text(mouseX+","+mouseY,20/scaleFactor,20/scaleFactor);
    rect(mouseX/scaleFactor,mouseY/scaleFactor,2,2)

}



/////////////////// Drawing Code ////////////////////
// This is the code that gets run over and over
// again and again. It loops forever, rendering each
// frame one after the other.
function draw() {
    // Draw a default blue background color
    background(0,155,255);

    if(mouseIsPressed){
        scaleFactor=2;
        translate(-mouseX,-mouseY);
    }
    else{
        scaleFactor=1;
    }

    scale(scaleFactor);
    image(img,0,0,img.width,img.height);

    MakeButton("Mile marker 1 - The runners are feeling good at this point.",	184,425,255,0,0);
    MakeButton("Mile marker 2",	225,412,0,255,0);
    MakeButton("Mile marker 3",	254,400,0,0,255);
    MakeButton("Mile marker 4",	290,370,255,255,0);
    MakeButton("Mile marker 5", 324,340,255,255,0);
    MakeButton("Mile marker 6", 360,329,255,255,0);
    MakeButton("Mile marker 7", 404,314,255,255,0);
    MakeButton("Mile marker 8", 447,303,255,255,0);
    MakeButton("Mile marker 9", 492,301,255,255,0);
    MakeButton("Mile marker 10", 540,300,255,255,0);
    MakeButton("Mile marker 11", 575,284,255,255,0);
    MakeButton("Mile marker 12", 610,265,255,255,0);
    MakeButton("Mile marker 13", 655,260,255,255,0);
    MakeButton("Mile marker 14", 685,240,255,255,0);
    MakeButton("Mile marker 15", 711,200,255,255,0);
    MakeButton("Mile marker 16", 740,175,255,255,0);
    MakeButton("Mile marker 17", 768,145,255,255,0);
    MakeButton("Mile marker 18", 810,140,255,255,0);
    MakeButton("Mile marker 19", 850,135,255,255,0);
    MakeButton("Mile marker 20", 900,140,255,255,0);
    MakeButton("Mile marker 21", 929,135,255,255,0);
    MakeButton("Mile marker 22", 966,135,255,255,0);
    MakeButton("Mile marker 23", 1000,130,255,255,0);
    MakeButton("Mile marker 24", 1045,120,255,255,0);
    MakeButton("Mile marker 25", 1083,109,255,255,0);
    MakeButton("Mile marker 26", 1022,100,255,255,0);
    MakeButton("Mile marker 26.2 -- Congratulations!", 1145,100,255,255,0);


}
/////////////////// Drawing Code ////////////////////