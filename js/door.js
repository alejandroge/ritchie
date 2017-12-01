function Door(x, y) {
    Kinetic.Rect.call(this);
    this.setWidth(30);
    this.setHeight(70);
    this.setX(x);
    this.setY(y);
    this.setFill('brown');
}
Door.prototype = Object.create(Kinetic.Rect.prototype);