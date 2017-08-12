/**
 * @file gun.ts
 * @author Ostap Hamarnyk
 * @date August 10 2017
 * @version 0.1
 * @description The class defines a gun which is placed on top of the turret base.
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
    var Gun = (function (_super) {
        __extends(Gun, _super);
        function Gun(imageUrl, x, y) {
            var _this = _super.call(this, turretTexture, imageUrl) || this;
            _this.x = x;
            _this.y = y;
            _this.regX = _this.getBounds().width / 2;
            _this.regY = _this.getBounds().height / 2;
            // depending on the type of gun, the bullets will differentiate
            _this.start();
            return _this;
        }
        Gun.prototype.start = function () {
            this._currentTime = createjs.Ticker.getTime();
        };
        Gun.prototype.update = function () {
        };
        return Gun;
    }(createjs.Sprite));
    objects.Gun = Gun;
})(objects || (objects = {}));
//# sourceMappingURL=gun.js.map