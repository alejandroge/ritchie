function Dog(x, y, img){
    Kinetic.Image.call(this);
    this.setWidth(120);
    this.setHeight(60);
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
        if(this.getX()+this.getWidth() < 0)
            this.setX(stage.getWidth()+300);
        this.count++;
        this.setX(this.getX() - 10 - vx);
    }
};
Dog.prototype = Object.create(Kinetic.Image.prototype);
