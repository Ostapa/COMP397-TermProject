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
        function GameScene(backImg, backSound) {
            var _this = _super.call(this) || this;
            _this._backImg = backImg;
            _this._backSound = backSound;
            _this._mapImg = new createjs.Bitmap(assets.getResult(_this._backImg));
            _this._mainMenuBtn = new objects.Button("mainMenuBtn", config.Screen.WIDTH - 135, config.Screen.HEIGHT - 30);
            _this._background = new createjs.Bitmap(assets.getResult("instructionsBackground"));
            // event listener for home button
            _this._mainMenuBtn.on("click", _this._mainMenuBtn_Click, _this);
            _this.addChild(_this._background, _this._mainMenuBtn, _this._mapImg);
            stage.addChild(_this);
            return _this;
        }
        GameScene.prototype.start = function () {
        };
        // event handlers for click events 
        GameScene.prototype._mainMenuBtn_Click = function (event) {
            scene = config.Scene.START_SCENE;
            changeScene();
        };
        GameScene.prototype.update = function () {
        };
        return GameScene;
    }(objects.Scene));
    Scenes.GameScene = GameScene;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=gameScene.js.map