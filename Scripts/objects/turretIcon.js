/**
 * @file turretIcon.ts
 * @author Ostap Hamarnyk
 * @date August 10 2017
 * @version 0.1
 * @description The class defines a four circles with the four types of the turrets.
 */
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
    var TurretIcon = (function (_super) {
        __extends(TurretIcon, _super);
        function TurretIcon(imageUrl, x, y, regX, regY) {
            var _this = _super.call(this, turretTexture, imageUrl) || this;
            _this.x = x;
            _this.y = y;
            _this.regX = (regX - (_this.getBounds().width / 2)) / 2;
            _this.regY = regY;
            return _this;
        }
        return TurretIcon;
    }(createjs.Sprite));
    objects.TurretIcon = TurretIcon;
})(objects || (objects = {}));
//# sourceMappingURL=turretIcon.js.map