function Car(){
    base(this, LSprite, []);
    var self = this;
    self.y = car_y+30;
    // self.y = 355;
    self.x = car_x;
    self.soc = 100;  //油量
    self.mile = 0;  // 行驶米数
    self.kv=1000/((1000/speed)*60)/v;  // 速度
    self.ks= 100/((1000/speed)*60)/v;  // 耗油系数
    self.jump_init_x=0;
    self.jumpstatus = false;
    self.scaleX=0.7;
    self.scaleY=0.7;
    self.initv = v;
    self.hj_v = 1;  // 减速速度
    self.hj_danwei_x = 1000/speed*5.2;
    self.hj_init_x = 0;
    self.hj_init_s = 0;
    var itemCon = new LBitmap(new LBitmapData(imglist["car"]));
    self.lun1 = new LBitmap(new LBitmapData(imglist["lun1"]));
    self.lun2 = new LBitmap(new LBitmapData(imglist["lun2"]));
    self.lun1.x=34;
    self.lun1.y=65;
    self.lun2.x=242;
    self.lun2.y=65;
    self.addChild(itemCon);
    self.addChild(self.lun1);
    self.addChild(self.lun2);
    self.graphics.drawVertices(0, '#ff0000', [[20, 30], [50, 0], [190, 0], [325, 45], [325, 90], [290, 117], [60, 117], [0, 85]]);
    // self.addShape(LShape.VERTICES,[[20, 30], [50, 0], [190, 0], [325, 45], [325, 90], [290, 117], [60, 117], [0, 85]])
    // self.graphics.drawArc(1,"#ffffff",[self.rotatex,self.rotatey,4,0,Math.PI*2],true);
}

/**
 *  检测和行驶
 */
Car.prototype.checkAndDriver =function(){
    this.lun1.rotate = (this.lun1.rotate+v)%360;
    this.lun2.rotate = (this.lun2.rotate+v)%360;
    this.checkSocAndmile();
}


Car.prototype.jump= function() {
    if (status == 1 && this.jumpstatus == false) {
        carLayer.jumpstatus = true;
        // this.jumpstatus= LTweenLite.to(this,0.1,{y:car_y+30,rotate:-30}).to(this,0.5,{y:car_y-170,rotate:0}).to(this,0.5,{y:car_y-50,rotate:20}).to(this,0.15,{y:car_y+30,rotate:0,onComplete:function (data) {
        //         carLayer.jumpstatus = false;
        //     }});../../../api/LEasing/Cubic.png
        this.jumpstatus= LTweenLite.to(this,0.1,{y:car_y+30,rotate:-30})
            .to(this,0.4,{y:car_y-160,rotate:0})
            .to(this,0.4,{y:car_y-50,rotate:20})
            .to(this,0.15,{y:car_y+30,rotate:0,onComplete:function (data) {
                carLayer.jumpstatus = false;
            }});
    }
}

Car.prototype.checkJump =function(){
    if (this.jumpstatus == 1) {
        this.jumpMove();
    }
}

Car.prototype.jumpMove = function(){
    // this.rotatey = 60;
    // if(this.jump_init_x<=600-v){
    //     this.jump_init_x+=v;
    //     this.rotate = this.jumpMove_k(this.jump_init_x);
    //     if(this.jump_init_x>50&&this.jump_init_x<550){
    //         var x= this.jump_init_x-50;
    //         this.y =this. jumpMove_y(x);
    //         // this.rotatex=this.jumpMove_z(x);
    //     }
    // }else{
    //     this.jumpstatus = false;
    //     this.rotate=0;
    //     this.y=car_y;
    //     // this.rotatex = 0;
    // }
}

Car.prototype.checkSocAndmile= function() {
    this.soc -=  this.ks*v;
    this.mile +=  this.kv*v;
    if(this.soc<=0){
        status=4;
        soc=0;
    }
    if(this.mile>= 2019){
        mile = 2019;
        if(this.soc>50){
            status=3;
        }else{
            status=4;
        }
    }
    this.checksoc(this.soc);
    mileField.text = Math.round( this.mile)+ "米";
}
Car.prototype.speedUp = function(){
    if(hj_status == 'up'){
        if(this.hj_init_s > 0){
            this.hj_init_s--;
            v = this.initv + 10;
        }else {
            hj_status = 'down';
            this.hj_init_s=0;
        }
    }else if(hj_status == 'down'){
        if(v-this.hj_v >this.initv){
            v -= this.hj_v;
        }else{
            hj_status = false;
            v = this.initv;
        }
    }else {
        hj_status = false;
    }
}
Car.prototype.checksoc = function(){
    socField.text = Math.round(this.soc)+"%" ;
    if(this.soc < 100){
        socField.x =83;
    }else{
        socField.x = 78;
    }
    var cont =  this.soc/100*174;
    socLayer.x = -65 + cont;
}

Car.prototype.jumpMove_y =function(x) {
    var y = 0.00296 *x*x-1.48*x+435;
    return y;
}
Car.prototype.jumpMove_k=function(x) {
    var k;
    if(x<50){
        var k =-0.6*x;
    }else if(x<550){
        k =0.12*(x-300);
    }else{
        var k =-0.6*x+360;
    }
    return k;
}
Car.prototype.jumpMove_z=function(x) {
    return (336/500)*x;
}