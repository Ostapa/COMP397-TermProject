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
    var StartScene = (function (_super) {
        __extends(StartScene, _super);
        function StartScene() {
            return _super.call(this) || this;
        }
        StartScene.prototype.start = function () {
            this._background = new createjs.Bitmap(assets.getResult("initBackground"));
            this._playBtn = new objects.Button("playBtn", 95, 300);
            this._instructionsBtn = new objects.Button("instructionsBtn", 95, 365);
            this._gameTitle = new createjs.Bitmap(assets.getResult("gameTitle"));
            this._gameTitle.x = 280;
            this._gameTitle.y = 30;
            this.addChild(this._background, this._instructionsBtn, this._playBtn, this._gameTitle);
            stage.addChild(this);
            // Event listeners
            this._instructionsBtn.on("click", this._instructionsBtn_Click, this);
            this._playBtn.on("click", this._playBtn_Click, this);
        };
        // Event handlers
        StartScene.prototype._instructionsBtn_Click = function (event) {
            // ########### Play button click sound
            // change scene to controls scene
            scene = config.Scene.CONTROLS_SCENE;
            changeScene();
        };
        StartScene.prototype._playBtn_Click = function (event) {
            // ########### Play button click sound
            scene = config.Scene.LEVEL_1;
            changeScene();
        };
        return StartScene;
    }(objects.Scene));
    Scenes.StartScene = StartScene;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=startScene.js.map