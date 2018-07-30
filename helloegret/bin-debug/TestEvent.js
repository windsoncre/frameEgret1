/**
 *
 * @Author: liangzhaowei
 * @Date: 2018/3/22 星期四 11:46
 * @meaning: event测试类
 *
 * 需要说明的是,需要注册一个DateEvent函数,继承事件机制
 * 创建一个消息的发送者,发送,接收与移除都需要发送者发起,
 * 在创建接收类时,需要在注册的时候添加.
 *
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
var TestEvent = (function (_super) {
    __extends(TestEvent, _super);
    function TestEvent() {
        var _this = _super.call(this) || this;
        _this.dataSource = [];
        _this.strInvaiteInfo = "今晚在肯德基共进晚餐";
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
        colorLabel.text = "TestEvent";
        colorLabel.size = 30;
        colorLabel.x = stageW / 2 - colorLabel.width / 2;
        colorLabel.y = 128;
        _this.addChild(colorLabel);
        //测试
        //相关内容部分/////
        //链接按钮
        var connetButton = new eui.Button();
        connetButton.label = "Sent Event";
        connetButton.width = 150;
        // connetButton.horizontalCenter = 0;
        // connetButton.verticalCenter = 0;
        connetButton.x = stageW / 2 - connetButton.width / 2;
        connetButton.y = stageH / 2;
        _this.addChild(connetButton);
        connetButton.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onConnetClick, _this);
        //信息文本
        _this.lbShowInfo = new egret.TextField();
        _this.lbShowInfo.textColor = 0xff00ff;
        _this.lbShowInfo.width = 500;
        _this.lbShowInfo.textAlign = "center";
        _this.lbShowInfo.text = "Event Info";
        _this.lbShowInfo.size = 30;
        _this.lbShowInfo.x = stageW / 2 - _this.lbShowInfo.width / 2;
        _this.lbShowInfo.y = colorLabel.y + 100;
        _this.addChild(_this.lbShowInfo);
        //相关内容部分/////
        //按钮
        var button = new eui.Button();
        button.label = "Back";
        button.x = 0;
        button.y = 0;
        _this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onButtonClick, _this);
        return _this;
    }
    TestEvent.prototype.DoClose = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        console.log("close");
    };
    //按钮回调
    TestEvent.prototype.onButtonClick = function () {
        //移除自己
        this.parent.removeChild(this);
    };
    //相关内容部分/////
    //连接回调
    TestEvent.prototype.onConnetClick = function () {
        //创建一个男朋友
        var boy = new Boy();
        boy.name = "男朋友";
        //创建一个女朋友
        var girl = new Girl();
        girl.name = "女朋友";
        //注册侦听器
        boy.addEventListener(DateEvent.DATE, girl.getDate, girl);
        //用于显示消息
        boy.addEventListener(DateEvent.DATE, this.getListener, this);
        //男朋友发送要求
        boy.order(this.strInvaiteInfo);
        //约会邀请完成后，移除侦听器
        boy.removeEventListener(DateEvent.DATE, girl.getDate, girl);
        boy.removeEventListener(DateEvent.DATE, this.getListener, this);
    };
    //接收消息
    TestEvent.prototype.getListener = function (evt) {
        this.lbShowInfo.text = "当前界面" + "得到了" + evt.target.name + "的邀请！" + "会在" + evt._year + "年" + evt._month + "月" + evt._date + "日，在" + evt._where + evt._todo;
    };
    //相关内容部分/////
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    TestEvent.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return TestEvent;
}(eui.Component));
__reflect(TestEvent.prototype, "TestEvent");
//# sourceMappingURL=TestEvent.js.map