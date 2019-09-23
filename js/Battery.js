

function Battery(){

    base(this, Prop, []);
    var self = this;
    self.y = up_y;
    var itemCon = new LBitmap(new LBitmapData(imglist["battery"]));
    self.addChild(itemCon);
}


Battery.prototype.Checkhit = function (){
    if(this.hitTestObject(carLayer)){

        if(dcLayer.visible==false){
            cdzLayer.visible=false;
            hjLayer.visible=false;

            dcLayer.y = carLayer.y - 200;
            dcLayer.visible= true;
            setTimeout(function () {
                dcLayer.visible= false;
            },1000*5);
        }
        if(carLayer.soc+20>=100){
            carLayer.soc=100;
        }else{
            carLayer.soc+=20;
        }
        carLayer.checksoc();
        return true;
    }
    return false;
}