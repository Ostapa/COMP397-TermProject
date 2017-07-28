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
    // label class
    var Label = (function (_super) {
        __extends(Label, _super);
        function Label(labelText, fontFamily, fontColour, x, y) {
            var _this = _super.call(this, labelText, fontFamily, fontColour) || this;
            _this.regX = _this.getBounds().width * .5;
            _this.regY = _this.getBounds().height * .5;
            _this.x = x;
            _this.y = y;
            ;
            return _this;
        }
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map