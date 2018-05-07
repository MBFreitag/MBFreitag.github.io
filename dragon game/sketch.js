var
    cloud1;
function preload() {
    cloud1 = loadImage("cloud1.png");
}

function setup() {
    createCanvas(800, 600);

}
function draw() {
    background(0);
    image(cloud1,0,0);
}
