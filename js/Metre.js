/* 米道具 */

function Metre(x){

    base(this, Prop, []);
    var self = this;
    var random= randomNum(1,4);
    var mile=10;
    self.y = up_y;
    if(random<3){
        self.mile=10;
    }else{
        self.mile=50;
    }
    if(x){
        self.x=x;
    }
    var itemCon = new LBitmap(new LBitmapData(imglist["metre" + self.mile]));
    itemCon.scaleX = 1.3;
    itemCon.scaleY = 1.3;
    self.addChild(itemCon);

}

Metre.prototype.Checkhit = function (){
    if(this.hitTestObject(carLayer)){
        carLayer.mile += this.mile;
        mileField.text = Math.round( carLayer.mile)+ "米";
        return true;
    }
    return false;
}