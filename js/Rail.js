/* 栏杆*/

function Rail(){

    base(this, Prop, []);
    var self = this;
    self.y = down_y;
    var itemCon = new LBitmap(new LBitmapData(imglist["rail"]));
    self.addChild(itemCon);
}


Rail.prototype.Checkhit = function (){
    if(this.hitTestObject(carLayer)){
        lzLayer.y = carLayer.y - 200;
        lzLayer.visible= true;
        LTweenLite.pauseAll();
        status=4;
        return false;
    }
    return false;
}