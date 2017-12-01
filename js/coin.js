function Coin(x, y) {
    Kinetic.Rect.call(this);
    this.setWidth(30);
    this.setHeight(30);
    this.setX(x);
    this.setY(y);
    this.setFill('yellow');
}
Coin.prototype = Object.create(Kinetic.Rect.prototype);