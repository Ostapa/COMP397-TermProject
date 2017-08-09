var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scenes;
(function (Scenes) {
    var GameScene = (function (_super) {
        __extends(GameScene, _super);
        function GameScene() {
            var _this = _super.call(this) || this;
            _this._currentTime = createjs.Ticker.getTime();
            _this._zombiesAdded = 0;
            return _this;
        }
        GameScene.prototype.start = function () {
            this._gameMap = new createjs.Bitmap(assets.getResult("mapOne"));
            this._mainMenuBtn = new objects.Button("mainMenuBtn", config.Screen.WIDTH - 135, config.Screen.HEIGHT - 30);
            this._background = new createjs.Bitmap(assets.getResult("instructionsBackground"));
            this.addChild(this._background, this._gameMap);
            // this._zombie1 = new objects.Zombie("walkerUp", 100, 300);
            // this._zombie2 = new objects.Zombie("mumblerTop", 100, 330);
            this._walkers = [];
            for (var i = 0; i < 3; i++) {
                this._walkers.push(new objects.Zombie("walkerRight", 0, 80, i));
                console.log(this._walkers[i].name);
            }
            this.addChild(this._mainMenuBtn);
            // event listener for home button
            this._mainMenuBtn.on("click", this._mainMenuBtn_Click, this);
            stage.addChild(this);
        };
        // event handlers for click events 
        GameScene.prototype._mainMenuBtn_Click = function (event) {
            scene = config.Scene.START_SCENE;
            changeScene();
        };
        GameScene.prototype.update = function () {
            var _this = this;
            this._walkers.forEach(function (zombie) {
                if (_this._zombiesAdded != _this._walkers.length && !zombie.added) {
                    if (createjs.Ticker.getTime() > _this._currentTime + 1000) {
                        _this.addChild(zombie);
                        _this._currentTime = createjs.Ticker.getTime();
                        _this._zombiesAdded++;
                        console.log(zombie.aName + " zombie added");
                        zombie.added = true;
                    }
                }
                if (zombie.added)
                    zombie.update();
            });
        };
        return GameScene;
    }(objects.Scene));
    Scenes.GameScene = GameScene;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=gameScene.js.map