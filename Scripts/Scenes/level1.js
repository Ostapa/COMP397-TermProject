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
 * @file level1.ts
 * @author Ostap Hamarnyk
 * @date August 9 2017
 * @version 0.3
 * @description The first level of the game. Difficulty: easy.
 */
var Scenes;
(function (Scenes) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        // Constructor
        function Level1() {
            var _this = _super.call(this, "mapOne", "levelOne_s") || this;
            _this._currentTime = createjs.Ticker.getTime();
            _this._zombiesAdded = 0;
            _this._bTime = createjs.Ticker.getTime();
            _this._shootingRange = 100;
            _this._deadZombies = 0;
            _this.turretIsBuild1 = false;
            _this.turretIsBuild2 = false;
            _this.counter = 0;
            _this.counter2 = 0;
            if (!_this.onPause) {
                _this.start();
            }
            return _this;
        }
        Level1.prototype.start = function () {
            this._zombies = new Array();
            this._collision = new Managers.Collision();
            // testing turet area
            this._turretArea = new objects.TurretArea("turretArea", 195, 150);
            this._turretArea2 = new objects.TurretArea("turretArea", 455, 150);
            for (var i = 0; i < 10; i++) {
                if (i < 5) {
                    this._zombies.push(new objects.Zombie("walkerRight", "walker", 0, 260));
                }
                else {
                    this._zombies.push(new objects.Zombie("mumblerRight", "mumbler", 0, 260));
                }
            }
            this.closestZombie = this._zombies[0];
            this.addChild(this._turretArea, this._turretArea2, this._turret, this._turret2);
            stage.addChild(this);
        };
        Level1.prototype.update = function () {
            var _this = this;
            if (this._deadZombies >= 10) {
                scene = config.Scene.LEVEL_2;
                changeScene();
            }
            if (this.turretIsBuild1 && this._zombies.length != 0) {
                if (this._turret.inRange(this._turret, this.closestZombie, this._turret.shootingRange)) {
                    this._bullet.update();
                    this.shoot1(this.closestZombie.x + this.closestZombie.width / 2, this.closestZombie.y);
                    console.log(this._bullet.x);
                    if (this._collision.check(this.closestZombie, this._bullet)) {
                        this.removeChild(this._bullet);
                        this.reduceHealth();
                        if (this.closestZombie.health <= 0) {
                            this.removeChild(this.closestZombie);
                            if (this._zombies.length !== 0) {
                                this._zombies.shift();
                                this.closestZombie = this._zombies[0];
                                this._deadZombies++;
                            }
                            else {
                                this.closestZombie.x = 0;
                                this.closestZombie.y = 0;
                            }
                        }
                    }
                }
            }
            if (this.turretIsBuild2 && this._zombies.length != 0) {
                if (this._turret2.inRange(this._turret2, this.closestZombie, this._turret2.shootingRange)) {
                    this._bullet2.update();
                    this.shoot2(this.closestZombie.x + this.closestZombie.width / 2, this.closestZombie.y + this.closestZombie.height / 2);
                    console.log(this._bullet2.x);
                    if (this._collision.check(this.closestZombie, this._bullet2)) {
                        this.removeChild(this._bullet2);
                        this.reduceHealth();
                        if (this.closestZombie.health <= 0) {
                            this.removeChild(this.closestZombie);
                            if (this._zombies.length !== 0) {
                                this._zombies.shift();
                                this.closestZombie = this._zombies[0];
                                this._deadZombies++;
                            }
                            else {
                                this.closestZombie.x = 0;
                                this.closestZombie.y = 0;
                            }
                        }
                    }
                }
            }
            // calculate the angle for the gun to follow the zombie
            if (this._turretArea.notNull) {
                this._turret = this._turretArea.update();
                this._turret.calculateAngle(this.closestZombie);
                this.addChild(this._turret);
                this._turret.update();
                this.turretIsBuild1 = true;
                if (this._turret.isBuild && this.counter < 1) {
                    this._bullet = new objects.Bullet(this.chooseBullet(this._turret), this._turret.x, this._turret.y);
                    this.counter++;
                }
            }
            if (this._turretArea2.notNull) {
                this._turret2 = this._turretArea2.update();
                this._turret2.calculateAngle(this.closestZombie);
                this.addChild(this._turret2);
                this._turret2.update();
                this.turretIsBuild2 = true;
                if (this._turret2.isBuild && this.counter2 < 1) {
                    this._bullet2 = new objects.Bullet(this.chooseBullet(this._turret2), this._turret2.x, this._turret2.y);
                    this.counter2++;
                }
            }
            if (this.startGame) {
                this.addZombies(this._zombies);
                this._zombies.forEach(function (zombie) {
                    if (zombie.x > _this.closestZombie.x && zombie.y > _this.closestZombie.y) {
                        _this.closestZombie = zombie;
                    }
                });
                if (this.closestZombie.x >= 640) {
                    if (this._zombies.length != 0) {
                        this.lifeCounterAmt = this.lifeCounterAmt - 1;
                        this._zombies.shift();
                    }
                    else {
                        scene = config.Scene.OVER_SCENE;
                        changeScene();
                    }
                    gameScene.updateScore();
                }
            }
        };
        // method to add zombies of any type to the stage and make them move in the desired direction
        Level1.prototype.addZombies = function (arr) {
            var _this = this;
            arr.forEach(function (zombie) {
                if (_this._zombiesAdded != arr.length && !zombie.added) {
                    if (createjs.Ticker.getTime() > _this._currentTime + 1000) {
                        _this.addChild(zombie);
                        _this._currentTime = createjs.Ticker.getTime();
                        zombie.added = true;
                    }
                }
                if (zombie.added) {
                    zombie.update();
                }
            });
        };
        Level1.prototype.reduceHealth = function () {
            this.closestZombie.health -= 3;
        };
        // method to shoot 
        Level1.prototype.shoot1 = function (targetX, targetY) {
            if (createjs.Ticker.getTime() > this._bTime + 500) {
                this.removeChild(this._bullet);
                this._bullet = new objects.Bullet(this.chooseBullet(this._turret), this._turret.x, this._turret.y);
                this.addChild(this._bullet);
                this._bullet.update();
                createjs.Tween.get(this._bullet).to({ x: targetX, y: targetY }, 500, createjs.Ease.linear);
                this._bTime = createjs.Ticker.getTime();
            }
        };
        Level1.prototype.shoot2 = function (targetX, targetY) {
            if (createjs.Ticker.getTime() > this._bTime + 500) {
                this.removeChild(this._bullet2);
                this._bullet2 = new objects.Bullet(this.chooseBullet(this._turret2), this._turret2.x, this._turret2.y);
                this.addChild(this._bullet2);
                this._bullet2.update();
                createjs.Tween.get(this._bullet2).to({ x: targetX, y: targetY }, 500, createjs.Ease.linear);
                this._bTime = createjs.Ticker.getTime();
            }
        };
        Level1.prototype.chooseBullet = function (turret) {
            switch (turret.turretType) {
                case "Electro":
                    return "electroBullet1";
                case "Fire":
                    return "electroBullet3";
                case "Gun":
                    return "gunBullet3";
                case "Rocket":
                    return "gunBullet1";
            }
        };
        return Level1;
    }(Scenes.GameScene));
    Scenes.Level1 = Level1;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=level1.js.map