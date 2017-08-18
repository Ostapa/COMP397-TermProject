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
    // button class
    var Button = (function (_super) {
        __extends(Button, _super);
        // constructor
        function Button(path, x, y) {
            var _this = _super.call(this, assets.getResult(path)) || this;
            _this.x = x;
            _this.y = y;
            _this.width = 150;
            _this.height = 50;
            _this.regX = _this.width * .5;
            _this.regY = _this.height * .5;
            _this.on("mouseover", _this.overBtn, _this);
            _this.on("mouseout", _this.outBtn, _this);
            _this.cursor = "pointer";
            _this.on("click", _this._button_Click, _this);
            return _this;
        }
        // private methods
        Button.prototype.overBtn = function (event) {
            event.currentTarget.alpha = .7;
        };
        Button.prototype.outBtn = function (event) {
            event.currentTarget.alpha = 1;
        };
        Button.prototype._button_Click = function (event) {
            this.clickSound = createjs.Sound.play("click");
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map