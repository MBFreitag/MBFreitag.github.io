function Dragon(tempLength) {
    this.length = tempLength;
    this.size = 16 * px;
    this.lives = 5;
    this.liveSize = 6 * px;
    this.theta = 0
    this.startx = 0;
    this.starty = 0;
    this.x = [];
    this.y = [];
    this.sinnum = 0;
    for (var i = 0; i < this.length; i++) {
        this.x[i] = 0;
        this.y[i] = 0;
    }

    this.setloc = function(tempy) {
        this.x[0] = width / 3;
        this.y[0] = tempy + 4 * sin(this.sinnum);
        this.sinnum += .35;

    };
    this.display = function() {
        for (var i = this.length; i > 0; i--) {
            this.x[i] = this.x[i - 1] - this.size;
            this.y[i] = this.y[i - 1];
            switch (i) {
            case 1:
                stroke(255, 175, 66);
                break;
            case int(this.length / 4):
                stroke(22);
                break;
            case int(this.length * 3 / 4):
                stroke(22);
                break;
            case this.length:
                stroke(117, 167, 174);
                break;
            default:
                stroke(65);
            }
            rect(this.x[i], this.y[i], this.size, this.size);
        }
    };
    this.displayLives = function() {
        for (var i = 0; i < this.lives; i++) {
            var r = 2 * PI / this.lives * i;
            stroke(255,0,0);
            rect(this.x[1] + (this.size) * sin(this.theta + r), this.y[1] + (this.size) * cos(this.theta + r), this.liveSize, this.liveSize);
        }
        this.theta -= .05;
    };
    this.isAlive = function() {
        if (this.lives > 0) {
            return true;
        } else {
            return false;
        }
    };

    this.spit = function() {
        this.length -= 1;
    };
    this.obsCheck = function(obs) {
        if (collided(this.x[1], this.y[1], this.size, this.size, obs.x, obs.y, obs.size, obs.size)) {
            this.lives -= 1;
            return true;
        } else {
            return false;
        }
    };
    this.foodCheck = function(food) {
        if (collided(this.x[1], this.y[1], this.size, this.size, food.x, food.y, food.size, food.size)) {
            this.length += 1;
            return true;
        } else {
            return false;
        }
    };
}
