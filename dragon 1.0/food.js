function Food() {
    this.size = 8 * px;
    this.x = this.size / 2 + width;
    this.y = random(this.size / 2, height - this.size / 2);
    this.xvel = 6;
    this.off = random(0, 1000);
    this.yvel = 0;
    this.maxspeed = 3;

    this.display = function() {
        fill(0, 255, 255);
        rect(this.x, this.y, this.size, this.size);
    };
    this.scroll = function() {
        this.x -= this.xvel;
        this.yvel = map(noise(this.off), 0, 1, -this.maxspeed, this.maxspeed);
        this.off += 0.01;
        this.y += this.yvel;
    }
    this.edgeCheck = function() {
        if (this.x + this.size / 2 < 0) {
            return true;
        } else {
            return false;
        }
    };
}
