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
    var Zombie = (function (_super) {
        __extends(Zombie, _super);
        function Zombie(zombieName, x, y) {
            var _this = _super.call(this, textureSprite, zombieName) || this;
            _this.width = _this.getBounds().width;
            _this.height = _this.getBounds().height;
            _this.x = x;
            _this.y = y;
            _this.zombieName = zombieName;
            return _this;
        }
        Zombie.prototype.move = function (direction, destination) {
            switch (direction) {
                case 0:
                    createjs.Tween.get(this).to({ y: destination }, 10000);
                    break;
                case 2:
                    createjs.Tween.get(this).to({ y: destination }, 10000);
                    break;
                case 1:
                    createjs.Tween.get(this).to({ x: destination }, 10000);
                    break;
                case 3:
                    createjs.Tween.get(this).to({ x: destination }, 10000);
                    break;
            }
        };
        return Zombie;
    }(createjs.Sprite));
    objects.Zombie = Zombie;
})(objects || (objects = {}));
//# sourceMappingURL=zombie.js.map