
function preload(){
    img = loadImage('ps5.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill(255, 0, 0);
    text("Playstation 5", 45, 75);
    noFill();
    stroke(255, 0, 0);
    rect(30, 15, 520, 380)
}