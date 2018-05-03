var cloudsprite,
    cloud1,
    cloud2,
    cloud3,
    cloud4;
var dragonhead,
    dragonarm,
    dragonbody,
    dragontail;
var background,
    midground,
    forground;

function preload() {
    cloudsprite = loadImage("");
    cloud1 = loadImage("cloud1.png");
    cloud2 = loadImage("cloud2.png");
    cloud3 = loadImage("cloud3.png");
    cloud4 = loadImage("cloud4.png");
    dragonhead = loadImage("");
    dragonarm = loadImage("");
    dragonbody = loadImage("");
    dragontail = loadImage("");
}

var px = 2;

function setup() {
    createCanvas(800, 600);

}
function draw() {
    background(0);
    image(cloud1,0,0);
}
function Cloud() {
    this.ballnum = int(random(0, 5));
    this.w = 64 * px;
    this.h = 48 * px;
    this.x = width + w / 2;
    this.y = random(h / 2, height / 2);
    this.speed = random(.5, 3);
    this.img;
    this.loadsprite = function() {
        switch (this.ballnum) {
        case 1:
            this.img = cloud1;
            break;
        case 2:
            this.img = cloud2;
            break;
        case 3:
            this.img = cloud3;
            break;
        case 4:
            this.img = cloud4;
            break;
        default:
            this.img = cloud1;
        }
    };
    this.display = function() {
        image(this.img, this.x - this.w / 2, this.y + this.w / 2, this.w, this.h);
    };
    this.move = function() {
        this.x -= speed;
    };
}
