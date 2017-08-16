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
            _this._zombieIsNotAssigned = true;
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
            this._turretArea = new objects.TurretArea("turretArea", 185, 140);
            this._turretArea2 = new objects.TurretArea("turretArea", 465, 140);
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
            if (this._turretArea._turret != undefined && this.startGame) {
                for (var i = 0; i < this._zombies.length; i++) {
                    if (this._turretArea._turret.inRange(this._zombies[i])) {
                        this._turretArea._turret.zombieToFollow = this._zombies[i];
                        this._turretArea._turret.calculateAngle();
                        this._turretArea._turret.shoot(this._zombies[i].x, this._zombies[i].y);
                        this._turretArea._turret._bullet.update();
                        if (this._turretArea._turret.zombieToFollow.isDead) {
                            this._zombies.splice(this._zombies.indexOf(this._turretArea._turret.zombieToFollow), 1);
                            this.removeChild(this._turretArea._turret.zombieToFollow);
                            this._deadZombies++;
                        }
                        break;
                    }
                }
            }
            if (this._turretArea2._turret != undefined && this.startGame) {
                for (var i = 0; i < this._zombies.length; i++) {
                    if (this._turretArea2._turret.inRange(this._zombies[i])) {
                        this._turretArea2._turret.zombieToFollow = this._zombies[i];
                        this._turretArea2._turret.calculateAngle();
                        this._turretArea2._turret.shoot(this._zombies[i].x, this._zombies[i].y);
                        this._turretArea2._turret._bullet.update();
                        if (this._turretArea2._turret.zombieToFollow.isDead) {
                            this._zombies.splice(this._zombies.indexOf(this._turretArea2._turret.zombieToFollow), 1);
                            this.removeChild(this._turretArea2._turret.zombieToFollow);
                            this._deadZombies++;
                        }
                        break;
                    }
                }
            }
            if (this.startGame) {
                this.addZombies(this._zombies);
                this._zombies.forEach(function (zombie) {
                    if (zombie.x > _this.closestZombie.x && zombie.y > _this.closestZombie.y) {
                        _this.closestZombie = zombie;
                    }
                });
            }
        };
        // method to add zombies of any type to the stage and make them move in the desired direction
        Level1.prototype.addZombies = function (arr) {
            var _this = this;
            arr.forEach(function (zombie) {
                if (_this._zombiesAdded != arr.length && !zombie.added) {
                    if (createjs.Ticker.getTime() > _this._currentTime + 1500) {
                        _this.addChild(zombie);
                        _this._currentTime = createjs.Ticker.getTime();
                        zombie.added = true;
                    }
                }
                if (zombie.added) {
                    zombie.update();
                    _this.addChild(zombie._healthBar);
                }
            });
        };
        return Level1;
    }(Scenes.GameScene));
    Scenes.Level1 = Level1;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=level1.js.map