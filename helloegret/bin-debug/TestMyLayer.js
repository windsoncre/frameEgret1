/**
 *
 * @Author: liangzhaowei
 * @Date: 2018/3/20 星期二 18:22
 * @meaning: 场景测试类
 *
 **/
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
var TestMyLayer = (function (_super) {
    __extends(TestMyLayer, _super);
    function TestMyLayer() {
        var _this = _super.call(this) || this;
        _this.dataSource = [];
        // this.skinName = "resource/eui_skins/TestLayer.exml";
        //屏幕大小(需要补充获取舞台大小)
        var stageW = 640;
        var stageH = 1136;
        //背景 色块
        // let topMask = new egret.Shape();
        // topMask.graphics.beginFill(0x000000, 0.5);
        // topMask.graphics.drawRect(0, 0, stageW, stageH);
        // topMask.graphics.endFill();
        // this.addChild(topMask);
        //背景
        var sky = _this.createBitmapByName("bg_jpg");
        _this.addChild(sky);
        sky.width = stageW;
        sky.height = stageH;
        //文本
        var colorLabel = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.width = 200;
        colorLabel.textAlign = "center";
        colorLabel.text = "TestLayer";
        colorLabel.size = 30;
        colorLabel.x = stageW / 2 - colorLabel.width / 2;
        colorLabel.y = 128;
        _this.addChild(colorLabel);
        //img
        var icon = _this.createBitmapByName("egret_icon_png");
        _this.addChild(icon);
        icon.x = stageW / 2 - icon.width / 2;
        icon.y = stageH / 2 - icon.height / 2;
        //按钮
        var button = new eui.Button();
        button.label = "Back";
        button.x = 0;
        button.y = 0;
        _this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onButtonClick, _this);
        return _this;
    }
    //按钮回调
    TestMyLayer.prototype.onButtonClick = function () {
        //移除自己
        this.parent.removeChild(this);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    TestMyLayer.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return TestMyLayer;
}(eui.Component));
__reflect(TestMyLayer.prototype, "TestMyLayer");
//# sourceMappingURL=TestMyLayer.js.map