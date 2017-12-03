function Door(x, y) {
    Kinetic.Rect.call(this);
    this.setWidth(60);
    this.setHeight(120);
    this.setX(x);
    this.setY(y);
    this.setFill('brown');
}
Door.prototype = Object.create(Kinetic.Rect.prototype);