/**
 *
 * @Author: liangzhaowei
 * @Date: 2018/3/22 星期四 10:59
 * @meaning: socket测试类
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
var TestSocket = (function (_super) {
    __extends(TestSocket, _super);
    function TestSocket() {
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
        colorLabel.text = "TestSocket";
        colorLabel.size = 30;
        colorLabel.x = stageW / 2 - colorLabel.width / 2;
        colorLabel.y = 128;
        _this.addChild(colorLabel);
        //socket部分/////
        //链接按钮
        var connetButton = new eui.Button();
        connetButton.label = "Connet";
        connetButton.width = 100;
        // connetButton.horizontalCenter = 0;
        // connetButton.verticalCenter = 0;
        connetButton.x = stageW / 2 - connetButton.width / 2;
        connetButton.y = stageH / 2;
        _this.addChild(connetButton);
        connetButton.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onConnetClick, _this);
        //socket信息文本
        _this.lbShowInfo = new egret.TextField();
        _this.lbShowInfo.textColor = 0xff00ff;
        _this.lbShowInfo.width = 500;
        _this.lbShowInfo.textAlign = "center";
        _this.lbShowInfo.text = "Socket Info";
        _this.lbShowInfo.size = 30;
        _this.lbShowInfo.x = stageW / 2 - _this.lbShowInfo.width / 2;
        _this.lbShowInfo.y = colorLabel.y + 100;
        _this.addChild(_this.lbShowInfo);
        //socket部分/////
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
    TestSocket.prototype.onButtonClick = function () {
        //移除自己
        this.parent.removeChild(this);
    };
    //连接回调
    TestSocket.prototype.onConnetClick = function () {
        //链接
        //调用soket
        this.createGameSence();
    };
    //网络部分
    TestSocket.prototype.createGameSence = function () {
        this.lbShowInfo.text = "creat soket"; //显示信息
        this.webSocket = new egret.WebSocket();
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceieveMessage, this);
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.webSocket.connect("echo.websocket.org", 80);
    };
    TestSocket.prototype.onReceieveMessage = function (e) {
        var msg = this.webSocket.readUTF();
        this.lbShowInfo.text = "receive data: " + msg; //显示信息
    };
    TestSocket.prototype.onSocketOpen = function () {
        var cmd = "hello soket";
        this.lbShowInfo.text = "connect successful : " + cmd; //显示信息
        this.webSocket.writeUTF(cmd);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    TestSocket.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return TestSocket;
}(eui.Component));
__reflect(TestSocket.prototype, "TestSocket");
//# sourceMappingURL=TestSocket.js.map