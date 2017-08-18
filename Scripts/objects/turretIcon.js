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
        function TurretIcon(imageUrl, x, y) {
            var _this = _super.call(this, gameTexture, imageUrl) || this;
            _this.x = x;
            _this.y = y;
            _this.regX = _this.getBounds().width / 2;
            _this.regY = _this.getBounds().height / 2;
            _this.start();
            return _this;
        }
        TurretIcon.prototype.start = function () {
            this.on("mouseover", this._icon_MouseOver, this);
            this.on("mouseout", this._icon_MouseOut, this);
        };
        TurretIcon.prototype._icon_MouseOver = function (event) {
            this.alpha = .6;
        };
        TurretIcon.prototype._icon_MouseOut = function (event) {
            this.alpha = 1;
        };
        return TurretIcon;
    }(createjs.Sprite));
    objects.TurretIcon = TurretIcon;
})(objects || (objects = {}));
//# sourceMappingURL=turretIcon.js.map