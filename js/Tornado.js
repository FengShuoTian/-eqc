/* 龙卷风 */
function Tornado(){

    base(this, Prop, []);
    var self = this;
    self.y = down_y;
    var itemCon = new LBitmap(new LBitmapData(imglist["tornado"]));
    self.addChild(itemCon);
}


Tornado.prototype.Checkhit = function (){
    if(this.hitTestObject(carLayer)){
        sandstormLayer.visible = true;
        setTimeout(function () {
            sandstormLayer.visible =false;
        },1000*2)
        return true;
    }
    return false;
}