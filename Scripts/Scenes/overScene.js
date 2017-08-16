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
    var OverScene = (function (_super) {
        __extends(OverScene, _super);
        function OverScene() {
            var _this = _super.call(this) || this;
            _this.start();
            return _this;
        }
        OverScene.prototype.start = function () {
            // ############# Stop the level sound and play some sound once to indicate that game is over and  
            // then play game over background music infinetely
            this._background = new createjs.Bitmap(assets.getResult("instructionsBackground"));
            this._message = new objects.Label("GAME OVER", "60px Arial", "#c6bf9c", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this._playAgainBtn = new objects.Button("mainMenuBtn", 300, 300);
            // Event listeners
            this._playAgainBtn.on("click", this._playAgainBtn_Click, this);
            this.addChild(this._background, this._message, this._playAgainBtn);
            stage.addChild(this);
        };
        // event handlers
        OverScene.prototype._playAgainBtn_Click = function (event) {
            // ########### Play button click sound
            scene = config.Scene.START_SCENE;
            changeScene();
        };
        return OverScene;
    }(objects.Scene));
    Scenes.OverScene = OverScene;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=overScene.js.map