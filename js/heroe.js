function Heroe(img){
    Kinetic.Image.call(this);
    this.setWidth(40);
    this.setHeight(80);
    this.vx = 15;
    this.vy = 0;
    this.rightLimit = 0;
    this.topLimit = 0;
    this.direccion = 1;
    this.count = 0;
    this.setImage(img);
    this.walkForward = function(){
        this.move(this.vx, 0);
        if(this.getX() > this.rightLimit)
            this.move(this.rightLimit - this.getX(), 0);
    }
    this.walkBack = function(){
        this.move(-this.vx, 0);
        if(this.getX() < 0)
            this.move(-this.getX(), 0);
    }
    this.jump = function(){
        this.vy = -60;
        this.count++;
    }
    this.applyGravity = function(gravity, bValue){
        this.vy += gravity;
        this.move(0, this.vy);
        if(this.getY() + this.getHeight() > this.topLimit) {
            this.setY(this.topLimit-this.getHeight());
            this.vy = 0;
            this.count = 0;
        }
    }
}
Heroe.prototype = Object.create(Kinetic.Image.prototype);