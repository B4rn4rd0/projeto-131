img = "";
status = "";

function preload(){
    img = loadImage('ps5.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}

function modelLoaded(){
    console.log("Modelo Carregado!")
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill(255, 0, 0);
    text("Playstation 5", 45, 75);
    noFill();
    stroke(255, 0, 0);
    rect(30, 15, 520, 380);

    fill(255, 0, 0);
    text("Controle", 55, 235);
    noFill();
    stroke(255, 0, 0);
    rect(30, 210, 300, 180)
}