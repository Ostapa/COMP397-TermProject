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
        function Turret(turretName, regX, regY) {
            var _this = _super.call(this, textureSprite, turretName) || this;
            _this._turretName = turretName;
            _this.regX = regX;
            _this.regY = regY;
            _this.start();
            return _this;
        }
        Turret.prototype.start = function () {
        };
        Turret.prototype.update = function () {
        };
        return Turret;
    }(createjs.Sprite));
    objects.Turret = Turret;
})(objects || (objects = {}));
//# sourceMappingURL=turret.js.map