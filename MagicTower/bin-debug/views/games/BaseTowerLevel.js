var BaseTowerLevel = (function (_super) {
    __extends(BaseTowerLevel, _super);
    function BaseTowerLevel(tiled_path) {
        _super.call(this);
        this.tiled_path = tiled_path;
        this.level_width = 640;
        this.level_height = 640;
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=BaseTowerLevel,p=c.prototype;
    p.onAddToStage = function () {
        this.request = new egret.HttpRequest();
        this.request.once(egret.Event.COMPLETE, this.onMapComplete, this);
        this.request.open(this.tiled_path, egret.HttpMethod.GET);
        this.request.send();
    };
    p.onMapComplete = function (event) {
        var data = egret.XML.parse(event.currentTarget.response);
        var tmxTiledMap = new tiled.TMXTilemap(this.level_width, this.level_height, data, this.tiled_path);
        // tmxTiledMap.scaleX = 2;
        // tmxTiledMap.scaleY = 2;
        tmxTiledMap.render();
        this.addChild(tmxTiledMap);
    };
    return BaseTowerLevel;
}(egret.DisplayObjectContainer));
egret.registerClass(BaseTowerLevel,'BaseTowerLevel');
//# sourceMappingURL=BaseTowerLevel.js.map