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
            var _this = _super.call(this, turretTexture, turretName) || this;
            _this._turretName = turretName;
            _this.x = x;
            _this.y = y;
            _this.regX = _this.getBounds().width / 2;
            _this.regY = _this.getBounds().height / 2;
            _this.start();
            _this._range.graphics.drawCircle(_this.x, _this.y, _this.getBounds().width + 30);
            _this.damage = 10;
            _this.position = new objects.Vector(_this.x, _this.y);
            return _this;
        }
        Turret.prototype.start = function () {
            this._gun = new objects.Gun("gun", this.x, this.y);
            this._range = new createjs.Shape();
            this._range.graphics.beginFill("#98FB98");
            this._range.alpha = .4;
            this._range.graphics.beginStroke("#1db81d");
            this._range.visible = false;
            this._currentTime = createjs.Ticker.getTime();
            // event listeners
            stage.on("click", this._stage_Click, this);
            this._gun.on("click", this._gun_Click, this);
            this.shootingRange = 100;
        };
        Turret.prototype.update = function () {
            gameScene.addChild(this._gun, this._range);
        };
        Turret.prototype.calculateAngle = function (closestZombie) {
            //if(this.inRange(closestZombie)) {
            this._angle = Math.atan2(closestZombie.y - this._gun.y, closestZombie.x - this._gun.x);
            this._angle = this._angle * (180 / Math.PI);
            // this if statement is to set angle to (0 - 360) instead of (-180 - 180)
            if (this._angle < 0) {
                this._angle = 360 - (-this._angle);
            }
            this._gun.rotation = this._angle + 90;
            //} 
        };
        // method tp calculate if the zombie is in the shooting range of the turret
        // public inRange(zombie:objects.Zombie):boolean {
        //     var distance = Math.pow(zombie.x - this._range.x, 2) + Math.pow(zombie.y - this._range.y, 2);
        //     if(Math.pow(this.getBounds().width/2, 2) >= distance) {
        //         return true;
        //     } else return false;
        // }
        Turret.prototype.inRange = function (object1, object2, range) {
            if (objects.Vector.calcDistance(object1.position, object2.position) < range) {
                return true;
            }
        };
        Turret.prototype._reset = function () {
        };
        // Event handlers
        Turret.prototype._gun_Click = function (event) {
            this._range.visible = true;
            gameScene.updateInfo("Fire" + " Turret", 9999, this.damage);
        };
        Turret.prototype._stage_Click = function (event) {
            if (event.target != this._gun) {
                this._range.visible = false;
            }
        };
        return Turret;
    }(createjs.Sprite));
    objects.Turret = Turret;
})(objects || (objects = {}));
//# sourceMappingURL=turret.js.map