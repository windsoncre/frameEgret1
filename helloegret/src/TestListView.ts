/**
 *
 * @Author: liangzhaowei
 * @Date: 2018/3/20 星期二 18:22
 * @meaning: listView测试类
 * 
 **/

class TestListView extends eui.Component{
    // private Beginbtn: eui.Button;


	listView: eui.List;


	private dataSource:Array<any> = [];

    public static pMyTestLayer ;

    public constructor() {
        super();
        this.skinName = "resource/eui_skins/TestListViewSkin.exml";
		this.listView.itemRenderer = TestButtonSkin;//view类 



        //模拟一个数据体
        var nameList=new Array("Test1","Test2","Test3","Test4","Test5","Test6","Test7","Test8","Test9")
        for(var i in nameList)
        {
            this.dataSource.push({name: nameList[i],type:i});
        }

        //创建数据体的适配器
		this.listView.dataProvider = new eui.ArrayCollection(this.dataSource);     
        
        //按钮
		let button = new eui.Button();
        button.label = "Back";
        this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);

    }


    private onButtonClick(){
		//移除自己
		this.parent.removeChild(this);
    }
}