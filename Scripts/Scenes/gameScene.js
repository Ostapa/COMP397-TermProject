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
            return _super.call(this) || this;
        }
        GameScene.prototype.start = function () {
            this._gameMap = new createjs.Bitmap(assets.getResult("initBackground"));
            this._homeBtn = new objects.Button("playBtn", config.Screen.WIDTH - 150, config.Screen.HEIGHT - 75);
            this.addChild(this._gameMap, this._homeBtn);
            // event listener for home button
            this._homeBtn.on("click", this._homeBtn_Click, this);
            stage.addChild(this);
        };
        // event handlers for click events 
        GameScene.prototype._homeBtn_Click = function (event) {
            scene = config.Scene.START_SCENE;
            changeScene();
        };
        return GameScene;
    }(objects.Scene));
    Scenes.GameScene = GameScene;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=gameScene.js.map