var cimg1,
    cimg2,
    cimg3,
    cimg4,
    drimg1,
    drimg2,
    drimg3,
    drimg4,
    drimg5,
    drimg6,
    fbimg,
    foodimg,
    obsimg,
    bgimg;
function preload() {
    cimg1 = loadImage("cloud1.png");
    cimg2 = loadImage("cloud2.png");
    cimg3 = loadImage("cloud3.png");
    cimg4 = loadImage("cloud4.png");
    drimg1 = loadImage("dragonhead.png");
    drimg2 = loadImage("dragonarm.png");
    drimg3 = loadImage("dragonbody.png");
    drimg4 = loadImage("dragontaila.png");
    drimg5 = loadImage("dragontailb.png");
    drimg6 = loadImage("dragonlives.png");
    fbimg = loadImage("fireball.png");
    foodimg = loadImage("food.png");
    bgimg = loadImage("background.png");
}

var px = 2;

var dragon;

var obs = [];
var obstimer;

var fbs = [];
var fbstimer;

var food = [];
var foodtimer;

var clouds = [];
var cloudtimer;

function setup() {
    createCanvas(1366, 768);
    rectMode(CENTER);
    noFill();
    strokeWeight(3);

    dragon = new Dragon(12);
    fbstimer = new Timer(1000);

    obstimer = new Timer(300);
    obstimer.begin();

    foodtimer = new Timer(5000);
    foodtimer.begin();

    cloudtimer = new Timer(1000);
    cloudtimer.begin();
}

function draw() {
    background(212, 187, 148);
    image(bgimg,0,0,width*2,height*2);
    if (cloudtimer.isFinished()) {
        clouds.push(new Cloud());
        cloudtimer.begin();
    }
    for (var c in clouds) {
        clouds[c].display();
        clouds[c].scroll();
        if (clouds[c].edgeCheck()) {
            clouds.splice(c, 1);
        }
    }

    if (obstimer.isFinished()) {
        obs.push(new Obstacle());
        obstimer.begin();
    }
    for (var o in obs) {
        obs[o].display();
        obs[o].scroll();
        if ((dragon.obsCheck(obs[o])) || (obs[o].edgeCheck())) {
            obs.splice(o, 1);
        }
    }

    if (foodtimer.isFinished()) {
        food.push(new Food());
        foodtimer.begin();
    }
    for (var f in food) {
        food[f].display();
        food[f].scroll();
        if ((dragon.foodCheck(food[f])) || (food[f].edgeCheck())) {
            food.splice(f, 1);
        }
    }

    for (var f in fbs) {
        fbs[f].display();
        fbs[f].move();
        for (var o in obs) {
            if (fbs[f].obsCheck(obs[o])) {
                obs.splice(o, 1);
            }
        }
    }
    dragon.setloc(mouseY);
    dragon.display();
    dragon.displayLives();

    if ((keyIsPressed) && (fbstimer.isFinished()) && (dragon.length > 8)) {
        dragon.spit();
        fbs.push(new Fireball(mouseY));
        fbstimer.begin();
    }
}
