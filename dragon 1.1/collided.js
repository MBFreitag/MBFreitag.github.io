function collided(x1, y1, w1, h1, x2, y2, w2, h2, v) {
    this.x1 = x1;
    this.y1 = y1;
    this.w1 = w1;
    this.h1 = h1;
    this.x2 = x2;
    this.y2 = y2;
    this.w2 = w2;
    this.h2 = h2;
    this.v = v || 2;
    if ((this.x1 + this.w1 / this.v >= this.x2 - this.w2 / this.v) && (this.x1 - this.w1 / this.v <= this.x2 + this.w2 / this.v) && (this.y1 + this.h1 / this.v >= this.y2 - this.h2 / this.v) && (this.y1 - this.h1 / this.v <= this.y2 + this.h2 / this.v)) {
        return true;
    } else {
        return false;
    }
}
