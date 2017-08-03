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
var objects;
(function (objects) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader(fillColor, strokeColor) {
            var _this = _super.call(this) || this;
            _this.width = 400;
            _this.height = 40;
            _this._fillColor = fillColor;
            _this._strokeColor = strokeColor;
            _this.drawBar();
            return _this;
        }
        Preloader.prototype.drawBar = function () {
            this._outline = new createjs.Shape();
            this._outline.graphics.drawRect(0, 0, this.width, this.height);
            this._outline.graphics.beginFill(this._strokeColor);
            this._bar = new createjs.Shape();
            this._bar.graphics.drawRect(0, 0, this.width, this.height);
            this._bar.graphics.beginFill(this._fillColor);
            this._bar.scaleX = 0;
            this.addChild(this._outline, this._bar);
        };
        Preloader.prototype.update = function (percents) {
            percents = percents > 1 ? 1 : percents;
            this._bar.scaleX = percents;
            console.log(percents);
        };
        return Preloader;
    }(createjs.Container));
    objects.Preloader = Preloader;
})(objects || (objects = {}));
//# sourceMappingURL=preloader.js.map