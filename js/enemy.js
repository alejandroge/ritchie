function Enemy(x, y){
    Kinetic.Rect.call(this);
    this.setWidth(40);
    this.setHeight(60);
    this.setX(x);
    this.setY(y);
    this.count = 0;
    this.setFill("blue");
    this.random = function(floor, ceiling){
        var probs = ceiling - floor;
        var random = Math.random() * probs;
        random = Math.floor(random);
        return parseInt(floor) + random;
    }
    this.move = function(){
        this.count++;
        this.setX(this.getX() + Math.sin(this.count*Math.PI/50)*5);
    }
};
Enemy.prototype = Object.create(Kinetic.Rect.prototype);