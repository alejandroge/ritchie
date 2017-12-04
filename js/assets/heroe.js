function Heroe(img){
    Kinetic.Image.call(this);
    this.setWidth(60);
    this.setHeight(120);
    this.vx = 15;
    this.vy = 0;
    this.rightLimit = 0;
    this.topLimit = 0;
    this.direction = 1;
    this.count = 0;
    this.setImage(img);
    this.walkForward = function(){
        if(this.direction) this.move(this.vx, 0);
        else {
            this.attrs.drawFunc = function (a) {
                var b = this.getWidth(), c=this.getHeight(), d,e=this, f=a.getContext();
                f.beginPath(), f.rect(0,0,b,c), f.closePath(), a.fillStroke(this);
                if(this.attrs.image){
                    if(this.attrs.crop&&this.attrs.crop.width&&this.attrs.crop.height){
                        var g=this.attrs.crop.x||0, h=this.attrs.crop.y||0, i=this.attrs.crop.width, j=this.attrs.crop.height;
                        d=[this.attrs.image,g,h,i,j,0,0,b,c]
                    } else d=[this.attrs.image,0,0,b,c];
                    this.hasShadow()?a.applyShadow(this,function(){e._drawImage(f,d)}):this._drawImage(f,d)
                }
            }
            this.setScale({x: 1});
            this.direction = true;
        }
        if(this.getX() > this.rightLimit)
            this.move(this.rightLimit - this.getX(), 0);
    }
    this.walkBack = function(){
        if(!this.direction) this.move(-this.vx, 0);
        else {
            this.attrs.drawFunc = function (a) {
                var b = this.getWidth(), c=this.getHeight(), d,e=this, f=a.getContext();
                f.beginPath(), f.rect(0,0,b,c), f.closePath(), a.fillStroke(this);
                if(this.attrs.image){
                    if(this.attrs.crop&&this.attrs.crop.width&&this.attrs.crop.height){
                        var g=this.attrs.crop.x||0, h=this.attrs.crop.y||0, i=this.attrs.crop.width, j=this.attrs.crop.height;
                        d=[this.attrs.image,g,h,i,j,-i,0,b,c]
                    } else d=[this.attrs.image,0,0,-b,c];
                    this.hasShadow()?a.applyShadow(this,function(){e._drawImage(f,d)}):this._drawImage(f,d)
                }
            }
            this.setScale({x: -1});
            this.direction = false;
        }
        if(this.getX() < 0)
            this.move(-this.getX(), 0);
    }
    this.jump = function(){
        if(this.vy <= 2) {
            this.vy = -60;
            this.count++;
        }
    }
    this.applyGravity = function(gravity, bValue){
        this.vy += gravity;
        this.move(0, this.vy);
        if(this.getY() + this.getHeight() > this.topLimit) {
            this.setY(this.topLimit-this.getHeight());
            this.vy = 0;
            this.count = 0;
        }
    }
}
Heroe.prototype = Object.create(Kinetic.Image.prototype);