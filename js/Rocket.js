/* 火箭 */


function Rocket(){

    base(this, Prop, []);
    var self = this;
    self.y = up_y;
    var itemCon = new LBitmap(new LBitmapData(imglist["rocket"]));
    self.addChild(itemCon);
}


Rocket.prototype.Checkhit = function (){
    if(this.hitTestObject(carLayer)){
        if(hjLayer.visible==false){
            cdzLayer.visible=false;
            dcLayer.visible=false;

            hjLayer.y = carLayer.y - 200;
            hjLayer.visible= true;
            setTimeout(function () {
                hjLayer.visible= false;
            },1000*5);
        }
        carLayer.hj_init_s += carLayer.hj_danwei_x;
        if(hj_status != 'up'){
            hj_status = 'up';
        }
        return true;
    }
    return false;
}