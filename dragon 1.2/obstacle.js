function Obstacle() {
    this.size = 32 * px;
    this.x = this.size / 2 + width;
    this.y = random(this.size / 2, height - this.size / 2);
    this.xvel = 4;
    this.off = random(0, 1000);
    this.yvel = 0;
    this.maxspeed = .6;
    this.spriteTimer = new Timer(random(48,52));
    this.spritenum = 2;
    this.n = 1;

    this.spriteSetup = function() {
        if (this.spriteTimer.isFinished()) {
            if ((this.spritenum > 4) || (this.spritenum < 2)) {
                this.n = this.n * -1;
            }
            this.spritenum += this.n;
            this.spriteTimer.begin();
        }
    };
    this.display = function() {
        var img;
        var imgs = this.size * 2;
        switch (this.spritenum) {
        case 1:
            img = obsimg1;
            break;
        case 2:
            img = obsimg2;
            break;
        case 3:
            img = obsimg3;
            break;
        case 4:
            img = obsimg4;
            break;
        case 5:
            img = obsimg5;
            break;
        default:
            img = obsimg3;
        }
        stroke(63, 54, 45);
        rect(this.x, this.y, this.size, this.size);
        image(img, this.x - imgs / 2, this.y - imgs / 2, imgs, imgs);
    };
    this.scroll = function() {
        this.x -= this.xvel;
        this.yvel = map(noise(this.off), 0, 1, -this.maxspeed, this.maxspeed);
        this.off += 0.01;
        this.y += this.yvel;
    };
    this.edgeCheck = function() {
        if (this.x + this.size / 2 < -100) {
            return true;
        } else {
            return false;
        }
    };
}
