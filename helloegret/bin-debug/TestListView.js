/**
 *
 * @Author: liangzhaowei
 * @Date: 2018/3/20 星期二 18:22
 * @meaning: listView测试类
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
var TestListView = (function (_super) {
    __extends(TestListView, _super);
    function TestListView() {
        var _this = _super.call(this) || this;
        _this.dataSource = [];
        _this.skinName = "resource/eui_skins/TestListViewSkin.exml";
        _this.listView.itemRenderer = TestButtonSkin; //view类 
        //模拟一个数据体
        var nameList = new Array("Test1", "Test2", "Test3", "Test4", "Test5", "Test6", "Test7", "Test8", "Test9");
        for (var i in nameList) {
            _this.dataSource.push({ name: nameList[i], type: i });
        }
        //创建数据体的适配器
        _this.listView.dataProvider = new eui.ArrayCollection(_this.dataSource);
        //按钮
        var button = new eui.Button();
        button.label = "Back";
        _this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onButtonClick, _this);
        return _this;
    }
    TestListView.prototype.onButtonClick = function () {
        //移除自己
        this.parent.removeChild(this);
    };
    return TestListView;
}(eui.Component));
__reflect(TestListView.prototype, "TestListView");
//# sourceMappingURL=TestListView.js.map