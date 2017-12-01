function Platform(x, y){
    Kinetic.Rect.call(this);
    this.setWidth(200);
    this.setHeight(40);
    this.setX(x);
    this.setY(y);
    this.setFill("black");
};
Platform.prototype = Object.create(Kinetic.Rect.prototype);