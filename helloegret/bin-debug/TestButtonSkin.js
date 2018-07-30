var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 *
 * @Author: liangzhaowei
 * @Date: 2018/3/20 星期二 18:22
 * @meaning: 按钮view
 *
 **/
var TestButtonSkin = (function (_super) {
    __extends(TestButtonSkin, _super);
    // public lphone:egret.gui.Label;
    // public lqq:egret.gui.Label;
    function TestButtonSkin() {
        var _this = _super.call(this) || this;
        // 皮肤名称
        _this.skinName = "resource/eui_skins/ButtonSkin.exml";
        // this.touchChildren = true;
        //点击响应
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.OnClick, _this);
        _this.addEventListener("createImgLayer", _this.OnClick_addNewLayer, _this);
        return _this;
    }
    TestButtonSkin.prototype.dataChanged = function () {
        //显示名称
        if (this.data.name) {
            this.labelDisplay.text = this.data.name;
        }
    };
    TestButtonSkin.prototype.OnClick = function (e) {
        //与TestLayer中的数组对应
        switch (this.data.name) {
            case "TestImg":
                this.createImg();
                break; //
            case 2: break;
            case 3: break;
            case 4: break;
        }
    };
    TestButtonSkin.prototype.createImg = function () {
        console.log("createImg ............");
        this.hasEventListener("createImgLayer");
        // var pTestImg:TestImg = new TestImg();       /**测试图片对象 */  
        // var pTestLayer = MyTestLayer.getInstance();
        // pTestLayer.addChild(pTestImg);                    /**将test显示对象添加到舞台 */  
    };
    TestButtonSkin.prototype.OnClick_addNewLayer = function () {
        console.log("OnClick_addNewLayer............");
        // var pTestImg:TestImg = new TestImg();       /**测试图片对象 */  
        // this.addChild(pTestImg);                    /**将test显示对象添加到舞台 */  
    };
    return TestButtonSkin;
}(eui.ItemRenderer));
__reflect(TestButtonSkin.prototype, "TestButtonSkin");
//# sourceMappingURL=TestButtonSkin.js.map