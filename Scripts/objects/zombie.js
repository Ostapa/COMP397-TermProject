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
        function Zombie(zombieName, x, y, aName, added) {
            if (added === void 0) { added = false; }
            var _this = _super.call(this, textureSprite, zombieName) || this;
            _this.aName = aName;
            _this.added = added;
            _this.width = _this.getBounds().width;
            _this.height = _this.getBounds().height;
            _this.x = x;
            _this.y = y * (Math.round((Math.random() * (0.4 - 0.3) + 0.3) * 100) / 100);
            _this.zombieName = zombieName;
            _this.aName = aName;
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
        Zombie.prototype.update = function () {
            this.move(config.Direction.RIGHT, 500);
        };
        return Zombie;
    }(createjs.Sprite));
    objects.Zombie = Zombie;
})(objects || (objects = {}));
//# sourceMappingURL=zombie.js.map