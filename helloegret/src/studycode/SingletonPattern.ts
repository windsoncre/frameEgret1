/**
 *
 * @Author: liangzhaowei
 * @Date: 2018/3/22 星期四 17:03
 * @meaning: 单例模式
 * 
 **/


class SingletonPattern {
    public static GetInstance() : SingletonPattern{
        if (SingletonPattern._instance == null){
            SingletonPattern._instance = new SingletonPattern();
        }
        return SingletonPattern._instance;
    }

    private static _instance = null;
}


