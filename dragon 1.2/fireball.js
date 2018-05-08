function Fireball(tempy) {
    this.size = 16 * px;
    this.x = width / 3;
    this.y = tempy;
    this.accel = .25;
    this.vel = .5;
    this.lives = 1;

    this.isAlive = function() {
        if (this.lives > 0) {
            return true;
        } else {
            return false;
        }
    };
    this.display = function() {
        var imgw = this.size * 2;
        var imgh = this.size;
        stroke(245, 127, 32);
        rect(this.x, this.y, this.size, this.size);
        image(fbimg, this.x - imgw / 2, this.y - imgh / 2, imgw, imgh);
    };
    this.move = function() {
        this.vel += this.accel;
        this.x += this.vel;
    };
    this.obsCheck = function(obs) {
        if (collided(this.x, this.y, this.size, this.size, obs.x, obs.y, obs.size, obs.size)) {
            this.lives -= 1;
            return true;
        } else {
            return false;
        }
    };
}
