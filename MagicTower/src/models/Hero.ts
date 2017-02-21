class Hero extends egret.Sprite {
	public level : number;
	public life : number;
	public atack : number;
	public defence : number;
	public coins : number;
	public exp : number;

	public yellow_key : number;
	public blue_key : number;
	public red_key : number;

	private static _instance : Hero;
	public constructor() {
		super();
	}

	public static getHero() : Hero {
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
	}
}