var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        _super.call(this);
    }
    var d = __define,c=Hero,p=c.prototype;
    Hero.getHero = function () {
        if (this._instance == null) {
            this._instance = new Hero();
            //初始化
            this._instance.level = 1;
            this._instance.life = 1000;
            this._instance.atack = 10;
            this._instance.defence = 10;
            this._instance.coins = 0;
            this._instance.exp = 0;
            this._instance.yellow_key = 1;
            this._instance.blue_key = 1;
            this._instance.red_key = 1;
        }
        return this._instance;
    };
    return Hero;
}(egret.Sprite));
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map