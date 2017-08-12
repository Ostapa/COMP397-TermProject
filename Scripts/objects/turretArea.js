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
            var _this = _super.call(this, turretTexture, imageUrl) || this;
            // public instance variables
            _this.notNull = false;
            _this.x = x;
            _this.y = y;
            _this.regX = _this.getBounds().width / 2;
            _this.regY = _this.getBounds().height / 2;
            _this.start();
            return _this;
        }
        TurretArea.prototype.start = function () {
            this._gunTurret = new objects.TurretIcon("gunIcon", this.x, this.y, this.regX, this.regY);
            this._fireTurret = new objects.TurretIcon("fire", this.x, this.y, this.regX, this.regY);
            this._electroTurret = new objects.TurretIcon("electro", this.x, this.y, this.regX, this.regY);
            this._rocketTurret = new objects.TurretIcon("rocket", this.x, this.y, this.regX, this.regY);
            // Event listeners
            this.on("click", this._turretArea_Click, this);
            this._electroTurret.on("click", this._electroTurret_Click, this);
            this._fireTurret.on("click", this._fireTurret_Click, this);
            this._gunTurret.on("click", this._gunTurret_Click, this);
            this._rocketTurret.on("click", this._rocketTurret_Click, this);
        };
        TurretArea.prototype.update = function () {
            return this._turret;
        };
        TurretArea.prototype.showOptions = function () {
            gameScene.addChild(this._rocketTurret, this._electroTurret, this._fireTurret, this._gunTurret);
            createjs.Tween.get(this._gunTurret).to({ x: this.x + 30, y: this.y + 30 }, 500, createjs.Ease.linear);
            createjs.Tween.get(this._fireTurret).to({ x: this.x + 30, y: this.y - 30 }, 500, createjs.Ease.linear);
            createjs.Tween.get(this._electroTurret).to({ x: this.x - 30, y: this.y - 30 }, 500, createjs.Ease.linear);
            createjs.Tween.get(this._rocketTurret).to({ x: this.x - 30, y: this.y + 30 }, 500, createjs.Ease.linear);
        };
        TurretArea.prototype._turretArea_Click = function (event) {
            this.showOptions();
        };
        TurretArea.prototype._electroTurret_Click = function (event) {
            this._turret = new objects.Turret("turretBase", this.x, this.y);
            this._turret.update();
            this._reset();
            this.notNull = true;
        };
        TurretArea.prototype._fireTurret_Click = function (event) {
            this._turret = new objects.Turret("turretBase", this.x, this.y);
            this._turret.update();
            this._reset();
            this.notNull = true;
        };
        TurretArea.prototype._gunTurret_Click = function (event) {
            this._turret = new objects.Turret("turretBase", this.x, this.y);
            this._turret.update();
            this._reset();
            this.notNull = true;
        };
        TurretArea.prototype._rocketTurret_Click = function (event) {
            this._turret = new objects.Turret("turretBase", this.x, this.y);
            this._turret.update();
            this._reset();
            this.notNull = true;
        };
        TurretArea.prototype._reset = function () {
            gameScene.removeChild(this);
            gameScene.removeChild(this._electroTurret, this._fireTurret, this._gunTurret, this._rocketTurret);
        };
        return TurretArea;
    }(createjs.Sprite));
    objects.TurretArea = TurretArea;
})(objects || (objects = {}));
//# sourceMappingURL=turretArea.js.map