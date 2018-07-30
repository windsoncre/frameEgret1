/**
 *
 * @Author: liangzhaowei
 * @Date: 2018/3/22 星期四 17:03
 * @meaning: 单例模式
 *
 **/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SingletonPattern = (function () {
    function SingletonPattern() {
    }
    SingletonPattern.GetInstance = function () {
        if (SingletonPattern._instance == null) {
            SingletonPattern._instance = new SingletonPattern();
        }
        return SingletonPattern._instance;
    };
    SingletonPattern._instance = null;
    return SingletonPattern;
}());
__reflect(SingletonPattern.prototype, "SingletonPattern");
//# sourceMappingURL=SingletonPattern.js.map