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

class TestEvent extends eui.Component{


	private dataSource:Array<any> = [];

    private webSocket:egret.WebSocket;

    private lbShowInfo:egret.TextField;

    private strInvaiteInfo = "今晚在肯德基共进晚餐";


    public DoClose(...param: any[]) {
        console.log("close");
        
	}
    

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
        colorLabel.text = "TestEvent";
        colorLabel.size = 30;
        colorLabel.x = stageW/2-colorLabel.width/2;
        colorLabel.y = 128;
        this.addChild(colorLabel);

        //测试


        //相关内容部分/////

        //链接按钮
		let connetButton = new eui.Button();
        connetButton.label = "Sent Event";
        connetButton.width = 150;
        // connetButton.horizontalCenter = 0;
        // connetButton.verticalCenter = 0;
        connetButton.x = stageW/2-connetButton.width/2;
		connetButton.y = stageH/2;
        this.addChild(connetButton);
        connetButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onConnetClick, this);


        //信息文本
        this.lbShowInfo = new egret.TextField();
        this.lbShowInfo.textColor = 0xff00ff;
        this.lbShowInfo.width = 500;
        this.lbShowInfo.textAlign = "center";
        this.lbShowInfo.text = "Event Info";
        this.lbShowInfo.size = 30;
        this.lbShowInfo.x = stageW/2-this.lbShowInfo.width/2;
        this.lbShowInfo.y = colorLabel.y +100;
        this.addChild(this.lbShowInfo);



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

    //相关内容部分/////
    

    //连接回调
    private onConnetClick()
    {
         //创建一个男朋友
        var boy:Boy = new Boy();
        boy.name = "男朋友";
        //创建一个女朋友
        var girl:Girl = new Girl();
        girl.name = "女朋友";

        //注册侦听器
        boy.addEventListener(DateEvent.DATE,girl.getDate,girl);
        //用于显示消息
        boy.addEventListener(DateEvent.DATE,this.getListener,this);

        //男朋友发送要求
        boy.order(this.strInvaiteInfo);


        //约会邀请完成后，移除侦听器
        boy.removeEventListener(DateEvent.DATE,girl.getDate,girl);
        boy.removeEventListener(DateEvent.DATE,this.getListener,this);

    }

    //接收消息
    public getListener(evt:DateEvent)
    {
        this.lbShowInfo.text = "当前界面" + "得到了" + evt.target.name + "的邀请！" + "会在" + evt._year + "年" + evt._month + "月" + evt._date + "日，在"+ evt._where+ evt._todo ;
    }

    //相关内容部分/////



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
