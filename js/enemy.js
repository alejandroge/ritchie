function Enemy(x, y){
    this.setWidth();
    this.setHeight();
    this.setX(x);
    this.setY(y);
    this.random = function(floor, ceiling){
        var probs = ceiling - floor;
        var random = Math.random() * probs;
        random = Math.floor(random);
        return parseInt(floor) + random;
    }
    this.move = function(){

    }
};