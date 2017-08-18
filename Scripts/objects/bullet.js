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
            var _this = _super.call(this, turretTexture, path) || this;
            _this.x = x;
            _this.y = y;
            _this.regX = _this.getBounds().width / 2;
            _this.regY = _this.getBounds().height / 2;
            _this.width = _this.getBounds().width;
            _this.height = _this.getBounds().height;
            _this.position = new objects.Vector(x, y);
            _this.type = path;
            return _this;
        }
        Bullet.prototype.update = function () {
            this.position = new objects.Vector(this.x, this.y);
        };
        return Bullet;
    }(createjs.Sprite));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map