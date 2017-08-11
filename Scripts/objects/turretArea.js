/**
 * @file turretArea.ts
 * @author Ostap Hamarnyk
 * @date August 10 2017
 * @version 0.1
 * @description The class defines a placeholder for the turrets.
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
    //export class TurretArea extends createjs.Sprite {
    var TurretArea = (function (_super) {
        __extends(TurretArea, _super);
        function TurretArea(imageUrl, x, y) {
            var _this = _super.call(this, assets.getResult(imageUrl)) || this;
            _this.x = x;
            _this.y = y;
            _this.regX = _this.getBounds().width / 2;
            _this.regY = _this.getBounds().height / 2;
            _this.start();
            return _this;
        }
        TurretArea.prototype.start = function () {
            this._gunTurret = new objects.TurretIcon("gunOne", this.x, this.y, this.regX, this.regY);
            this._fireTurret = new objects.TurretIcon("gunOne", this.x, this.y, this.regX, this.regY);
            this._electroTurret = new objects.TurretIcon("gunOne", this.x, this.y, this.regX, this.regY);
            this._bombTurret = new objects.TurretIcon("gunOne", this.x, this.y, this.regX, this.regY);
            this.on("click", this._turretArea_Click, this);
        };
        TurretArea.prototype.showOptions = function () {
            gameScene.addChild(this._bombTurret, this._electroTurret, this._fireTurret, this._gunTurret);
            createjs.Tween.get(this._gunTurret).to({ x: this.x + 30, y: this.y + 30 }, 500, createjs.Ease.linear);
            createjs.Tween.get(this._fireTurret).to({ x: this.x + 30, y: this.y - 30 }, 500, createjs.Ease.linear);
            createjs.Tween.get(this._electroTurret).to({ x: this.x - 30, y: this.y - 30 }, 500, createjs.Ease.linear);
            createjs.Tween.get(this._bombTurret).to({ x: this.x - 30, y: this.y + 30 }, 500, createjs.Ease.linear);
        };
        TurretArea.prototype._turretArea_Click = function (event) {
            this.showOptions();
        };
        return TurretArea;
    }(createjs.Bitmap));
    objects.TurretArea = TurretArea;
})(objects || (objects = {}));
//# sourceMappingURL=turretArea.js.map