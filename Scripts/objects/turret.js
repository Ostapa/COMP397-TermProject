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
        function Turret(turretName, turretType, x, y) {
            var _this = _super.call(this, turretTexture, turretName) || this;
            _this._bTime = createjs.Ticker.getTime();
            _this._turretName = turretName;
            _this.x = x;
            _this.y = y;
            _this.regX = _this.getBounds().width / 2;
            _this.regY = _this.getBounds().height / 2;
            _this.turretType = turretType;
            _this.start();
            _this._range.graphics.drawCircle(_this.x, _this.y, _this.getBounds().width + 30);
            _this.position = new objects.Vector(_this.x, _this.y);
            _this._turretLvl = 1; // TODO: change this dynamically
            _this._shootingRange = _this.getBounds().width + 40;
            _this._collision = new Managers.Collision();
            return _this;
        }
        Turret.prototype.start = function () {
            switch (this.turretType) {
                // public chooseBullet(turret:objects.Turret):string {
                //     switch(turret.turretType) {
                //         case "Electro":
                //             return "electroBullet1"
                //         case "Fire":
                //             return "electroBullet3"
                //         case "Gun":
                //             return "gunBullet3"
                //         case "Rocket":
                //             return "gunBullet1"
                //     }
                // }
                case "Gun":
                    this._gun = new objects.Gun("gun", this.x, this.y);
                    this.damage = 3;
                    this._bullet = new objects.Bullet("gunBullet3", this.x, this.y);
                    break;
                case "Fire":
                    this._gun = new objects.Gun("fireGun", this.x, this.y);
                    this.damage = 5;
                    this._bullet = new objects.Bullet("electroBullet3", this.x, this.y);
                    break;
                case "Rocket":
                    this._gun = new objects.Gun("rocketGun", this.x, this.y);
                    this.damage = 10;
                    this._bullet = new objects.Bullet("gunBullet1", this.x, this.y);
                    break;
                case "Electro":
                    this._gun = new objects.Gun("electroBullet1", this.x, this.y);
                    this.damage = 7;
                    break;
            }
            this._range = new createjs.Shape();
            this._range.graphics.beginFill("#98FB98");
            this._range.alpha = .4;
            this._range.graphics.beginStroke("#1db81d");
            this._range.visible = false;
            this._currentTime = createjs.Ticker.getTime();
            // event listeners
            stage.on("click", this._stage_Click, this);
            this._gun.on("click", this._gun_Click, this);
        };
        Turret.prototype.update = function () {
            gameScene.addChild(this._gun, this._range);
        };
        // method shoot a bullet in the specified direction
        Turret.prototype.shoot = function (targetX, targetY) {
            if (createjs.Ticker.getTime() > this._bTime + 500) {
                gameScene.removeChild(this._bullet);
                this._bullet = new objects.Bullet("electroBullet1", this.x, this.y);
                gameScene.addChild(this._bullet);
                createjs.Tween.get(this._bullet).to({ x: targetX, y: targetY }, 500, createjs.Ease.linear);
                this._bTime = createjs.Ticker.getTime();
                this.update();
                console.log(this._bullet.position);
            }
            if (this._collision.check(this.zombieToFollow, this._bullet)) {
                gameScene.removeChild(this._bullet);
                this.zombieToFollow.health -= this.damage;
                this.zombieToFollow.update();
            }
        };
        //if(this._collision.check(this.closestZombie, this._bullet)) {
        //             this.removeChild(this._bullet)
        //             this.reduceHealth();
        //             if(this.closestZombie.health <= 0) {
        //                 this.removeChild(this.closestZombie);
        //                 if(this._zombies.length !== 0) {
        //                     this._zombies.shift()
        //                     this.closestZombie = this._zombies[0];
        //                     this._deadZombies++;
        //                 } else {
        //                     this.closestZombie.x = 0;
        //                     this.closestZombie.y = 0;
        //                 } 
        //             }
        //         }
        Turret.prototype.calculateAngle = function () {
            this._angle = Math.atan2(this.zombieToFollow.y - this._gun.y, this.zombieToFollow.x - this._gun.x);
            this._angle = this._angle * (180 / Math.PI);
            // this if statement is to set angle to (0 - 360) instead of (-180 - 180)
            if (this._angle < 0) {
                this._angle = 360 - (-this._angle);
            }
            this._gun.rotation = this._angle + 90;
        };
        // method to calculate if the zombie is in the shooting range of the turret
        Turret.prototype.inRange = function (object2) {
            if (objects.Vector.calcDistance(this.position, object2.position) < this._shootingRange) {
                return true;
            }
        };
        Turret.prototype._reset = function () {
        };
        // Event handlers
        Turret.prototype._gun_Click = function (event) {
            this._range.visible = true;
            gameScene.updateInfo(this.turretType + " Turret", this._turretLvl, this.damage);
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