function LoadingSample4(height, background, color, loadimg) {
    base(this, LSprite, []);
    var s = this,
		c = LGlobal.canvas;
    s.backgroundColor = background == null ? "#000000" : background;
    s.graphics.drawRect(1, s.backgroundColor, [0, 0, LGlobal.width, LGlobal.height], true, s.backgroundColor);
    if (color == null) color = "#FFFFFF";
    s.loadimg = loadimg;

    //var datas = [];
    //var listChild = [];
    //for (var i = 0; i < 3; i++) {
    //    datas.push(new LBitmapData(loadimg["ft" + (i + 1)]));
    //    listChild.push({ dataIndex: i, x: 0, y: 0, width: 175, height: 29, sx: 0, sy: 0 });
    //}
    //var loadItemLayer = new LAnimationTimeline(datas, [listChild]);

    //loadItemLayer.speed = 3;
    //loadItemLayer.x = (LGlobal.width - 175) * 0.5;
    //loadItemLayer.y = 850;// (isphonex==true?850:650);
    //s.addChild(loadItemLayer);

    //var datas1 = [];
    //var listChild1 = [];
    //for (var i = 0; i < 19; i++) {
    //    datas1.push(new LBitmapData(loadimg["pic" + (i + 1)]));
    //    listChild1.push({ dataIndex: i, x: 0, y: 0, width: 86, height: 750 });
    //}
    //var loadItemLayer1 = new LAnimationTimeline(datas1, [listChild1]);

    //loadItemLayer1.speed = 3;
    //loadItemLayer1.x = (LGlobal.width - 86) * 0.5;
    //loadItemLayer1.y = 0;//(isphonex == true ? 0 : -200);
    //s.addChild(loadItemLayer1);
    //loadItemLayer1.addEventListener(LEvent.COMPLETE, function () {
    //    loadItemLayer1.stop();
    //});
    s.loading_progressbgLBitmap = new LBitmap(new LBitmapData(loadimg["progressbg"]));
    s.loading_progressbgLBitmap.x = (LGlobal.width - 476) * 0.5;
    s.loading_progressbgLBitmap.y = LGlobal.height * 0.5 - 10;
    s.loading_progressbgLBitmap.alpha = 1;
    s.addChild(s.loading_progressbgLBitmap);

    s.loading_logoLBitmap = new LBitmap(new LBitmapData(loadimg["progress"]));
    s.loading_logoLBitmap.x = (LGlobal.width - 444) * 0.5 - 442;
    s.loading_logoLBitmap.y = LGlobal.height * 0.5 + 3;
    s.loading_logoLBitmap.alpha = 1;

    s.maskSprite = new LSprite();
    s.maskSprite.x = (LGlobal.width - 444) * 0.5;
    s.maskSprite.y = LGlobal.height * 0.5 + 3;
    s.maskSprite.graphics.drawRect(0, "rgba(0,0,0,0.8)", [0, 0, 448, 22], false, "rgba(0,0,0,0.8)");
    s.loading_logoLBitmap.mask = s.maskSprite;
    s.maskSprite.alpha = 1;
    s.addChild(s.loading_logoLBitmap);

    s.progress = 0;
    s.label = new LTextField();
    s.label.color = color;
    s.label.size = 28;
    s.label.x = (LGlobal.width) * 0.5;
    s.label.y = LGlobal.height * 0.5-65;
    s.addChild(s.label);
    s.addEventListener(LEvent.ENTER_FRAME, s.onframe);
    s.setProgress(s.progress);
    if (window.WeixinJSBridge) {
        return void WeixinJSBridge.invoke("getNetworkType", {}, function () {
            music1.volume = 0;
            music1.muted = true;
            music1.play();
            music2.volume = 0;
            music2.muted = true;
            music2.play();
            music3.volume = 0;
            music3.muted = true;
            music3.play();
            music.volume = 0;
            music.muted = true;
            music.play();
            //music.stop();
        });
    }
    else {
        music1.volume = 0;
        music1.muted = true;
        music1.play();
        music2.volume = 0;
        music2.muted = true;
        music2.play();
        music3.volume = 0;
        music3.muted = true;
        music3.play();
        music.volume = 0;
        music.muted = true;
        music.play();
        //music.stop();
    }
}
var isallload = false;
var prevalue = 0;
LoadingSample4.prototype.onframe = function (event) {
    if (event.target.loading_logoLBitmap.x < ((LGlobal.width - 444) * 0.5)) {
        var eprogress = Math.floor((((event.target.loading_logoLBitmap.x) - ((LGlobal.width - 444) * 0.5 - 444))) * 100 / 444) + 1;
        if (eprogress >= 99) {
            if (!issourceload) {
                event.target.label.x = (LGlobal.width - event.target.label.getWidth()) * 0.5;
                if (eprogress == 99) {
                    if (prevalue < eprogress) {
                        event.target.label.text = prevalue + "%";
                    }
                    else {
                        event.target.label.text = eprogress + "%";
                    }
                }
                else {
                    event.target.loading_logoLBitmap.x += (444 / 100);
                    if (prevalue < eprogress) {
                        event.target.label.text = prevalue + "%";
                    }
                    else {
                        event.target.label.text = eprogress + "%";
                    }
                    isLoad = true;
                }

            }
            else {
                event.target.loading_logoLBitmap.x += (444 / 100);
                event.target.label.x = (LGlobal.width - event.target.label.getWidth()) * 0.5;
                if (prevalue < eprogress) {
                    event.target.label.text = prevalue + "%";
                }
                else {
                    event.target.label.text = eprogress + "%";
                }
                if (eprogress == 100) {
                    isLoad = true;
                }
            }
        }
        else {
            event.target.loading_logoLBitmap.x += (444 / 100);
            if (prevalue < eprogress) {
                event.target.label.x = (LGlobal.width - event.target.label.getWidth()) * 0.5;
                event.target.label.text = prevalue + "%";
            }
            else {
                event.target.label.x = (LGlobal.width - event.target.label.getWidth()) * 0.5;
                event.target.label.text = eprogress + "%";
            }
        }

    }
    else {
        if (isLoad) {
            isLoad = false;
            if (issourceload)
            {
                event.target.removeAllEventListener();
                removeChild(loadingLayer);
                loadingLayer = null;
                LoadMouseGame();
            }
        }
    }
};
var issourceload = false;
LoadingSample4.prototype.setProgress = function (value) {
    var s = this;
    if (value >= 100)
    {
        value = 100;
        issourceload = true;
    }
    prevalue = value;
    s.progress = value;
};
function LoadingOtherSource(height, background, color) {
    base(this, LSprite, []);
    var s = this, c = LGlobal.canvas;
    s.backgroundColor = background == null ? "#fff" : background;
    s.graphics.drawRect(1, s.backgroundColor, [0, 0, LGlobal.width, LGlobal.height], true, s.backgroundColor);
    if (color == null) color = "#000";
    s.arc = new LSprite();
    s.arc.x = LGlobal.width * 0.5;
    s.arc.y = LGlobal.height * 0.5;
    s.addChild(s.arc);
    for (var i = 0; i < 360; i++) {
        s.arc.graphics.drawArc(1 + i / 36, color, [0, 0, 50, (2 * Math.PI / 360) * i, (2 * Math.PI / 360) * (i + 2)]);
    }
    s.progress = 0;
    s.label = new LTextField();
    s.label.color = color;
    s.label.weight = "bolder";
    s.label.size = 18;
    s.label.x = LGlobal.width * 0.5;
    s.label.y = LGlobal.height * 0.5 - s.label.getHeight() * 0.5;
    s.addChild(s.label);
    var shadow = new LDropShadowFilter(0, 0, "#fff", 30);
    s.arc.filters = [shadow];
    s.addEventListener(LEvent.ENTER_FRAME, s.onframe1);
    s.setProgress(s.progress);
}
LoadingOtherSource.prototype.onframe1 = function (event) { event.target.arc.rotate += 20; };
LoadingOtherSource.prototype.setProgress = function (value) {
    var s = this;
    if (value >= 100) {
        value = 100;
    }
    s.progress = value;
};