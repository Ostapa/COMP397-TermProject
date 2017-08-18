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
    var SettingsScene = (function (_super) {
        __extends(SettingsScene, _super);
        function SettingsScene() {
            var _this = _super.call(this) || this;
            _this.x = 0;
            _this.y = 0;
            _this.start();
            return _this;
        }
        SettingsScene.prototype.start = function () {
            this._continueBtn = new objects.Button("continueBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y - 100);
            this._muteBtn = new objects.Button("muteBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y - 35);
            this._restartBtn = new objects.Button("restartBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 30);
            this._exitBtn = new objects.Button("exitBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 95);
            this._background = new createjs.Bitmap(assets.getResult("instructionsBackground"));
            this._continueBtn.on("click", this._continueBtn_Click, this);
            this._muteBtn.on("click", this._muteBtn_Click, this);
            this._restartBtn.on("click", this._restartBtn_Click, this);
            this._exitBtn.on("click", this._exitBtn_Click, this);
            this.addChild(this._background, this._continueBtn, this._exitBtn, this._muteBtn, this._restartBtn);
            stage.addChild(this);
        };
        // Event handlers
        SettingsScene.prototype._continueBtn_Click = function (event) {
            createjs.Ticker.setPaused(false);
            this.removeAllChildren();
            gameScene.onPause = false;
            createjs.Sound.stop();
        };
        SettingsScene.prototype._muteBtn_Click = function (event) {
            createjs.Sound.muted = true;
        };
        SettingsScene.prototype._restartBtn_Click = function (event) {
            stage.removeAllChildren();
            scene = config.Scene.LEVEL_1;
            changeScene();
            gameScene.onPause = false;
        };
        SettingsScene.prototype._exitBtn_Click = function (event) {
            stage.removeAllChildren();
            scene = config.Scene.START_SCENE;
            changeScene();
            gameScene.onPause = false;
        };
        return SettingsScene;
    }(createjs.Container));
    Scenes.SettingsScene = SettingsScene;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=settingsScene.js.map