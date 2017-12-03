function Enemy(x, y, img){
    Kinetic.Image.call(this);
    this.setWidth(60);
    this.setHeight(120);
    this.setX(x);
    this.setY(y);
    this.count = 0;
    this.setImage(img);
    this.random = function(floor, ceiling){
        var probs = ceiling - floor;
        var random = Math.random() * probs;
        random = Math.floor(random);
        return parseInt(floor) + random;
    }
    this.move = function(vx){
        this.count++;
        this.setX(this.getX() + vx + Math.sin(this.count*Math.PI/50)*5);
    }
};
Enemy.prototype = Object.create(Kinetic.Image.prototype);