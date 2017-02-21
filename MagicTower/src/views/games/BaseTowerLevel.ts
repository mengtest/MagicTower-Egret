class BaseTowerLevel extends egret.DisplayObjectContainer {
	public tiled_path : string;//加载地图文件资源路径
	public request : egret.HttpRequest;

	public level_width : number;
	public level_height : number;

	public constructor(tiled_path : string) {
		super();
		this.tiled_path = tiled_path;
		this.level_width = 640;
		this.level_height = 640;
		this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	public onAddToStage() {
		this.request = new egret.HttpRequest();
		this.request.once(egret.Event.COMPLETE, this.onMapComplete, this);
		this.request.open(this.tiled_path, egret.HttpMethod.GET);
		this.request.send();
	}

	public onMapComplete(event : egret.Event) {
		var data : any = egret.XML.parse(event.currentTarget.response);
		var tmxTiledMap : tiled.TMXTilemap = new tiled.TMXTilemap(this.level_width, this.level_height, data, this.tiled_path);
		// tmxTiledMap.scaleX = 2;
		// tmxTiledMap.scaleY = 2;
		tmxTiledMap.render();
		this.addChild(tmxTiledMap);
	}
}