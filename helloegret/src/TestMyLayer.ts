/**
 *
 * @Author: liangzhaowei
 * @Date: 2018/3/20 星期二 18:22
 * @meaning: 场景测试类
 * 
 **/

class TestMyLayer extends eui.Component{


	private dataSource:Array<any> = [];

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
        colorLabel.text = "TestLayer";
        colorLabel.size = 30;
        colorLabel.x = stageW/2-colorLabel.width/2;
        colorLabel.y = 128;
        this.addChild(colorLabel);


        //img
        let icon: egret.Bitmap = this.createBitmapByName("egret_icon_png");
        this.addChild(icon);
        icon.x = stageW/2-icon.width/2;
        icon.y = stageH/2-icon.height/2;

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