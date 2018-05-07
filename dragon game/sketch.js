var cloud1,cloud2;
function preload() {
    cloud1 = loadImage("cloud1.png");
}

function setup() {
    createCanvas(800, 600);
    cloud2=cloud1;

}
function draw() {
    background(0);
    image(cloud2,0,0);
}
