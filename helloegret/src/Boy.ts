class Boy extends egret.Sprite
{
    public constructor()
    {
        super();
    }
    public order(strInfo)
    {
        //生成约会事件对象
        var daterEvent:DateEvent = new DateEvent(DateEvent.DATE);
        //添加对应的约会信息
        daterEvent._year = 2018;
        daterEvent._month = 3;
        daterEvent._date = 22;
        daterEvent._where = "肯德基";
        daterEvent._todo = "共进晚餐";
        //发送要求事件
        this.dispatchEvent(daterEvent);
    }
}