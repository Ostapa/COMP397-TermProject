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
            //Add the lives Icon
            _this._heartLives = new createjs.Bitmap(assets.getResult("heart"));
            _this._heartLives.x = 25;
            _this._heartLives.y = 2;
            //Add Cash amount Icon
            _this._cashAvail = new createjs.Bitmap(assets.getResult("cash"));
            _this._cashAvail.x = 75;
            _this._cashAvail.y = 2;
            //Add Settings Icon
            _this._settingBtn = new createjs.Bitmap(assets.getResult("settings"));
            _this._settingBtn.x = 600;
            _this._settingBtn.y = 2;
            _this.addChild(_this._background, _this._mainMenuBtn, _this._mapImg, _this._heartLives, _this._cashAvail, _this._settingBtn);
            stage.addChild(_this);
            _this._settingBtn.on("click", _this._settingBtn_Click, _this);
            return _this;
        }
        GameScene.prototype.start = function () {
        };
        GameScene.prototype._settingBtn_Click = function (event) {
            //this._range.visible = true;
            alert("YO");
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