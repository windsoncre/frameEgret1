class Girl extends egret.Sprite
{

    private colorLabel:egret.TextField;
    public constructor()
    {
        super();
    }
    public getDate(evt:DateEvent)
    {
        console.log("得到了" + evt.target.name + "的邀请！"+"会在" + evt._year + "年" + evt._month + "月" + evt._date + "日，在"+ evt._where+ evt._todo);
    }
}