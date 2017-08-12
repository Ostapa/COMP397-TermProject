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
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        // constructor
        function Bullet(path, x, y) {
            var _this = _super.call(this, assets.getResult(path)) || this;
            _this.x = x;
            _this.y = y;
            return _this;
        }
        Bullet.prototype.update = function () {
        };
        return Bullet;
    }(createjs.Bitmap));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map