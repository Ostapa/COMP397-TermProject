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
    var Level2 = (function (_super) {
        __extends(Level2, _super);
        function Level2() {
            var _this = _super.call(this, "mapTwo", "levelOne_s") || this;
            if (!_this.onPause) {
                _this.start();
            }
            return _this;
        }
        Level2.prototype.start = function () {
            this._label = new objects.Label("LEVEL 2", "60px Arial", "#c6bf9c", 0, config.Screen.CENTER_Y);
            this.addChild(this._label);
            createjs.Tween.get(this._label).to({ x: config.Screen.WIDTH + this._label.getBounds().width }, 3000, createjs.Ease.linear);
        };
        Level2.prototype.update = function () {
        };
        return Level2;
    }(Scenes.GameScene));
    Scenes.Level2 = Level2;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=level2.js.map