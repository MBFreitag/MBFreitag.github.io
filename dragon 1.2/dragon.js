function Dragon(tempLength) {
    this.length = tempLength;
    this.size = 16 * px;
    this.lives = 5;
    this.liveSize = 8 * px;
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
        this.y[0] = tempy + 3 * px * sin(.35 * this.sinnum);
        this.sinnum += 1;

    };
    this.display = function() {
        var img,
            imgw,
            imgh;
        imgh = this.size * 2;
        for (var i = this.length; i > 0; i--) {
            this.x[i] = this.x[i - 1] - this.size + .1;
            this.y[i] = this.y[i - 1];
            switch (i) {
            case 1:
                stroke(255, 175, 66);
                img = drimg1;
                break;
            case int(this.length / 4):
                stroke(22);
                img = drimg2;
                break;
            case int(this.length * 3 / 4):
                stroke(22);
                img = drimg2;
                break;
            case this.length - 1:
                stroke(117, 167, 174);
                img = drimg4;
                break;
            case this.length:
                stroke(117, 167, 174);
                img = drimg5;
                break;
            default:
                stroke(65);
                img = drimg3;
            }
            if ((i == 1) || (i == this.length)) {
                imgw = this.size * 3;
            } else {
                imgw = this.size * 2;
            }
            rect(this.x[i], this.y[i], this.size, this.size);
            image(img, this.x[i] - imgw / 2, this.y[i] - imgh / 2, imgw, imgh);
        }
    };
    this.spit = function() {
        this.length -= 1;
    };

    this.displayLives = function() {
        var img = drimg6;
        for (var i = 0; i < this.lives; i++) {
            var r = 2 * PI / this.lives * i;
            stroke(255, 0, 0);
            rect(this.x[1] + (this.size) * sin(this.theta + r), this.y[1] + (this.size) * cos(this.theta + r), this.liveSize, this.liveSize);
            image(img, this.x[1] + 8 * px + (this.size * 2) * sin(this.theta + r) - this.liveSize / 2, this.y[1] + (this.size) * cos(this.theta + r) - this.liveSize / 2, this.liveSize, this.liveSize);
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
