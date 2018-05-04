var px = 1;

var dragon;

var obs = [];
var obstimer;

var fbs = [];
var fbstimer;

var food = [];
var foodtimer;

function setup() {
    createCanvas(1366, 768);
    rectMode(CENTER);
    noStroke();

    dragon = new Dragon(16);
    fbstimer = new Timer(1000);

    obstimer = new Timer(300);
    obstimer.begin();

    foodtimer = new Timer(5000);
    foodtimer.begin();
}

function draw() {
    background(0);

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
