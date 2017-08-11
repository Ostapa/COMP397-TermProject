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
/**
 * @file turret.ts
 * @author Ostap Hamarnyk
 * @date August 9 2017
 * @version 0.1
 * @description The class that has generic properties of the turret
 */
var objects;
(function (objects) {
    var Turret = (function (_super) {
        __extends(Turret, _super);
        // Constructor
        function Turret(turretName, x, y) {
            var _this = _super.call(this, textureSprite, turretName) || this;
            _this.fireRange = 60;
            _this._turretName = turretName;
            _this.x = x;
            _this.y = y;
            _this.regX = _this.getBounds().width / 2;
            _this.regY = _this.getBounds().height / 2;
            _this.start();
            return _this;
        }
        Turret.prototype.start = function () {
        };
        Turret.prototype.update = function () {
        };
        // method tp calculate if the zombie is in the shooting range of the turret
        Turret.prototype.inRange = function (zombie) {
            var distance = Math.pow(zombie.x - this.x, 2) + Math.pow(zombie.y - this.y, 2);
            if (Math.pow(this.fireRange, 2) >= distance) {
                return true;
            }
            else
                return false;
        };
        Turret.prototype._reset = function () {
        };
        return Turret;
    }(createjs.Sprite));
    objects.Turret = Turret;
})(objects || (objects = {}));
//# sourceMappingURL=turret.js.map