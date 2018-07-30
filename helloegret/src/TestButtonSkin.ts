/**
 *
 * @Author: liangzhaowei
 * @Date: 2018/3/20 星期二 18:22
 * @meaning: 按钮view
 * 
 **/
class TestButtonSkin extends eui.ItemRenderer{
	    
    public labelDisplay:eui.Label;
    // public lphone:egret.gui.Label;
    // public lqq:egret.gui.Label;
    
    public constructor() {
        super();
        // 皮肤名称
        this.skinName = "resource/eui_skins/ButtonSkin.exml";
        // this.touchChildren = true;

        //点击响应
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this)


        this.addEventListener("createImgLayer",this.OnClick_addNewLayer,this);

    }
    
    public dataChanged():void{
  
        //显示名称
        if(this.data.name)
        {
            this.labelDisplay.text = this.data.name;
        }
        
    }

    public OnClick(e: egret.TouchEvent)
    {


        //与TestLayer中的数组对应
        switch(this.data.name)
        {
            case "TestImg": this.createImg();  break; //
            case 2:  break;
            case 3:  break;
            case 4:  break;
        }
    }


    public createImg()
    {

        console.log("createImg ............");
        this.hasEventListener("createImgLayer");
        // var pTestImg:TestImg = new TestImg();       /**测试图片对象 */  
        // var pTestLayer = MyTestLayer.getInstance();
        // pTestLayer.addChild(pTestImg);                    /**将test显示对象添加到舞台 */  
    }


    public OnClick_addNewLayer()
    {
        console.log("OnClick_addNewLayer............");
        // var pTestImg:TestImg = new TestImg();       /**测试图片对象 */  
        // this.addChild(pTestImg);                    /**将test显示对象添加到舞台 */  

    }
    
}