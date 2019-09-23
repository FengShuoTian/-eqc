function Prop(){

    base(this, LSprite, []);
    var self = this;
    self.mode = "";
    self.y = car_y;
    self.x = height -itemLayer.x;
}


Prop.prototype.check = function(){
    // console.log("我的x坐标",self.x);
    var self = this;
    var hit = self.Checkhit();
    if(hit||self.x + itemLayer.x< -100){
        self.mode = "die";
    }else{
        self.mode = "none";
    }
}
