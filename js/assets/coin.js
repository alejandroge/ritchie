function Coin(x, y, img) {
    Kinetic.Image.call(this);
    this.setWidth(30);
    this.setHeight(30);
    this.setX(x);
    this.setY(y);
    this.setImage(img);
}
Coin.prototype = Object.create(Kinetic.Image.prototype);
