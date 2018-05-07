function Cloud() {
    this.h = 48 * px;
    this.w = 64 * px;
    this.x = this.w / 2 + width;
    this.y = random(this.h / 2, height - this.h / 2);
    this.xvel = random(1,3);
    this.off = random(0, 1000);
    this.yvel = 0;
    this.maxspeed = .25;
    this.imgnum= int(random(0,5));
    this.img;
    switch (this.imgnum) {
    case 1:
        this.img=cimg1;
        break;
    case 2:
        this.img=cimg2;
        break;
    case 3:
        this.img=cimg3;
        break;
    case 4:
        this.img=cimg4;
        break;
    default:
        this.img=cimg1;
      }

    this.display = function() {
        stroke(240,240,255);
        rect(this.x, this.y, this.w, this.h);
        image(this.img, this.x-this.w/2, this.y+this.h/2, this.w, this.h);
    };
    this.scroll = function() {
        this.x -= this.xvel;
        this.yvel = map(noise(this.off), 0, 1, -this.maxspeed, this.maxspeed);
        this.off += 0.01;
        this.y += this.yvel;
    }
    this.edgeCheck = function() {
        if (this.x + this.w / 2 < -100) {
            return true;
        } else {
            return false;
        }
    };
}
