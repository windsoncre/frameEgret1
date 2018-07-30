/**
 *
 * @Author: liangzhaowei
 * @Date: 2018/3/22 星期四 16:42
 * @meaning: 时间测试类
 * 
 **/

class TestTime extends eui.Component{




    private lbShowInfo:egret.TextField;
    private timer:egret.Timer
    

    public constructor() {
        super();
        // this.skinName = "resource/eui_skins/TestLayer.exml";

        //屏幕大小(需要补充获取舞台大小)
        let stageW = 640;
        let stageH = 1136;


        //背景 色块
        // let topMask = new egret.Shape();
        // topMask.graphics.beginFill(0x000000, 0.5);
        // topMask.graphics.drawRect(0, 0, stageW, stageH);
        // topMask.graphics.endFill();
        // this.addChild(topMask);

        //背景
        let sky = this.createBitmapByName("bg_jpg");
        this.addChild(sky);
        sky.width = stageW;
        sky.height = stageH;

        //文本
        let colorLabel = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.width = 200;
        colorLabel.textAlign = "center";
        colorLabel.text = "TestTime";
        colorLabel.size = 30;
        colorLabel.x = stageW/2-colorLabel.width/2;
        colorLabel.y = 128;
        this.addChild(colorLabel);


        //相关内容部分/////

        //开始按钮
		let connetButton = new eui.Button();
        connetButton.label = "Star";
        connetButton.width = 100;
        // connetButton.horizontalCenter = 0;
        // connetButton.verticalCenter = 0;
        connetButton.x = stageW/2-connetButton.width/2;
		connetButton.y = stageH/2;
        this.addChild(connetButton);
        connetButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStarClick, this);


        //信息文本
        this.lbShowInfo = new egret.TextField();
        this.lbShowInfo.textColor = 0xff00ff;
        this.lbShowInfo.width = 500;
        this.lbShowInfo.textAlign = "center";
        this.lbShowInfo.text = "Time Info";
        this.lbShowInfo.size = 30;
        this.lbShowInfo.x = stageW/2-this.lbShowInfo.width/2;
        this.lbShowInfo.y = colorLabel.y +100;
        this.addChild(this.lbShowInfo);


        //时间函数
        //创建一个计时器对象
        this.timer = new egret.Timer(500,5);
        //注册事件侦听器
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);



        //相关内容部分/////



		//按钮
		let button = new eui.Button();
        button.label = "Back";
		button.x = 0;
		button.y = 0;
        this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);

    }

    //按钮回调
    private onButtonClick(){
		//移除自己
		this.parent.removeChild(this);
    }

    //连接回调
    private onStarClick()
    {
        //开始计时
        this.timer.start();
    }


    //时间函数
     private timerFunc()
    {
        this.lbShowInfo.text = "计时";
    }
    private timerComFunc()
    {
        this.lbShowInfo.text = "计时结束";
    }




    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

}
