function Bottle(x, y, img) {
    Kinetic.Image.call(this);
    this.setWidth(20);
    this.setHeight(20);
    this.setX(x);
    this.setY(y);
    this.vx = 0;
    this.vy = 0;
    this.setImage(img);
    this.throw = function (v) {
        this.vy = -Math.abs(v);
        this.vx = v;
    }
    this.applyThrow = function (gravity) {
        this.vy += gravity;
        this.move(this.vx, this.vy);
        if(this.getY() + this.getHeight() > this.topLimit-15) {
            this.remove();
        }
    }
}
Bottle.prototype = Object.create(Kinetic.Image.prototype);
