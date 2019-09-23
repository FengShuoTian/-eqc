

function Bomb(){

    base(this, Prop, []);
    var self = this;
    self.y = down_y;
    var itemCon = new LBitmap(new LBitmapData(imglist["bomb"]));
    // self.graphics.drawArc(1,"#ff0000",[32,32,32,0,Math.PI*2]);
    self.addShape(LShape.ARC,[32,32,32])
    self.addChild(itemCon);
}


Bomb.prototype.Checkhit = function (){
    if(carLayer.hitTestObject(this)){
        LTweenLite.pauseAll();
        status=4;
        return false;
    }
    return false;
}