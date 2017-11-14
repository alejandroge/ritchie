function Heroe(){
    Kinetic.Rect.call(this);
    this.setWidth(40);
    this.setHeight(70);
    this.vx = 15;
    this.vy = 0;
    this.rightLimit = 0;
    this.topLimit = 0;
    this.direccion = 1;
    this.contador = 0;
    this.setFill("red");
    this.walkForward = function(){
        console.log("Estoy caminando a'pa");
        this.move(this.vx, 0);
        if(this.getX() > this.rightLimit)
            this.move(this.rightLimit - this.getX(), 0);
        console.log(this.getX());
    }
    this.walkBack = function(){
        console.log("Moon walking bitch!");
        this.move(-this.vx, 0);
        if(this.getX() < 0)
            this.move(-this.getX(), 0);
    }
    this.jump = function(){
        
    }
    this.applyGravity = function(gravity, bValue){
        this.vy = gravity;
        this.move(0, this.vy);
        if(this.getY() + this.getHeight() > this.topLimit) {
            this.setY(this.topLimit-this.getHeight());
            this.vy = 0;
        }
    }
}
Heroe.prototype = Object.create(Kinetic.Rect.prototype);