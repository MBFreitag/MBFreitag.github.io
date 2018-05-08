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
    cimg1 = loadImage("sprites/cloud1.png");
    cimg2 = loadImage("sprites/cloud2.png");
    cimg3 = loadImage("sprites/cloud3.png");
    cimg4 = loadImage("sprites/cloud4.png");
    drimg1 = loadImage("sprites/dragonhead.png");
    drimg2 = loadImage("sprites/dragonarm.png");
    drimg3 = loadImage("sprites/dragonbody.png");
    drimg4 = loadImage("sprites/dragontaila.png");
    drimg5 = loadImage("sprites/dragontailb.png");
    drimg6 = loadImage("sprites/dragonlives.png");
    fbimg = loadImage("sprites/fireball.png");
    foodimg = loadImage("sprites/food.png");
    bgimg = loadImage("sprites/background.png");
}

var px = 3;

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
    strokeWeight(0);

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
    image(bgimg,0,0,width * px,height * px);
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
