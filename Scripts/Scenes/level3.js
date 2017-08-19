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
 * @file level3.ts
 * @author Ostap Hamarnyk
 * @date August 16 2017
 * @version 0.1
 * @description The third level of the game. Difficulty: medium.
 */
var Scenes;
(function (Scenes) {
    var Level3 = (function (_super) {
        __extends(Level3, _super);
        // Constructor
        function Level3() {
            var _this = _super.call(this, "mapThree", "backSound3") || this;
            _this._currentTime = createjs.Ticker.getTime();
            _this._zombiesAdded = 0;
            _this._bTime = createjs.Ticker.getTime();
            _this._shootingRange = 100;
            _this._deadZombies = 0;
            _this._wave2 = false;
            _this._wave3 = false;
            if (!_this.onPause) {
                _this.start();
            }
            return _this;
        }
        Level3.prototype.start = function () {
            createjs.Sound.stop();
            this.level_bgSound = createjs.Sound.play("backSound3");
            this.level_bgSound.loop = -1;
            this._label = new objects.Label("LEVEL 3", "60px Arial", "#c6bf9c", 0, config.Screen.CENTER_Y);
            createjs.Tween.get(this._label).to({ x: config.Screen.WIDTH + this._label.getBounds().width }, 5000, createjs.Ease.linear);
            this._zombies = new Array();
            this._zombies2 = new Array();
            this._zombies3 = new Array();
            // adding turet areas to the map
            this._turretArea = new objects.TurretArea("turretArea", 140, 130);
            this._turretArea2 = new objects.TurretArea("turretArea", 300, 125);
            this._turretArea3 = new objects.TurretArea("turretArea", 490, 130);
            this._turretArea4 = new objects.TurretArea("turretArea", 235, 280);
            for (var i = 0; i < 10; i++) {
                if (i < 5) {
                    this._zombies.push(new objects.Zombie("walkerLeft", "walker", 640, 260));
                }
                else {
                    this._zombies.push(new objects.Zombie("mumblerLeft", "mumbler", 640, 260));
                }
            }
            for (var i = 0; i < 15; i++) {
                if (i < 5) {
                    this._zombies.push(new objects.Zombie("grunterLeft", "grunter", 640, 260));
                }
                else {
                    this._zombies.push(new objects.Zombie("hurlerLeft", "hurler", 640, 260));
                }
            }
            for (var i = 0; i < 25; i++) {
                if (i < 5) {
                    this._zombies.push(new objects.Zombie("yelperLeft", "yelper", 640, 260));
                }
                else {
                    this._zombies.push(new objects.Zombie("chaserLeft", "chaser", 640, 260));
                }
            }
            this.closestZombie = this._zombies[0];
            this.addChild(this._turretArea, this._turretArea2, this._turretArea3, this._turretArea4, this._label);
            stage.addChild(this);
        };
        Level3.prototype.update = function () {
            var _this = this;
            if (this._deadZombies >= 50 || (this._zombies.length == 0 && this.lifeCounterAmt > 0)) {
                this.level_bgSound.stop();
                scene = config.Scene.WON;
                changeScene();
            }
            if (this.closestZombie.y >= 362 && this._zombies.length != 0) {
                this.lifeCounterAmt--;
                this._zombies.shift();
                this.closestZombie = this._zombies[0];
            }
            if (this.lifeCounterAmt == 0) {
                scene = config.Scene.OVER_SCENE;
                changeScene();
            }
            gameScene.updateScore();
            if (this._turretArea._turret != undefined && this.startGame) {
                for (var i = 0; i < this._zombies.length; i++) {
                    if (this._turretArea._turret.inRange(this._zombies[i])) {
                        this._turretArea._turret.zombieToFollow = this._zombies[i];
                        this._turretArea._turret.calculateAngle();
                        this._turretArea._turret.shoot(this._zombies[i].x, this._zombies[i].y);
                        this._turretArea._turret.checkCollision();
                        this._turretArea._turret._bullet.update();
                        if (this._turretArea._turret.zombieToFollow.isDead) {
                            this.zombieDeath = createjs.Sound.play("zombieShort");
                            this._zombies.splice(this._zombies.indexOf(this._turretArea._turret.zombieToFollow), 1);
                            this.removeChild(this._turretArea._turret.zombieToFollow, this._turretArea._turret.zombieToFollow.actualHealth, this._turretArea._turret.zombieToFollow.healthBar);
                            this._deadZombies++;
                            this.cashCounterAmt += this._turretArea._turret.zombieToFollow.rewardPoints;
                            this.updateScore();
                        }
                        break;
                    }
                }
            }
            if (this._turretArea._turret != undefined) {
                if (this._turretArea._turret.sold) {
                    this.removeChild(this._turretArea._turret);
                    this._turretArea = new objects.TurretArea("turretArea", 180, 135);
                    this.addChild(this._turretArea);
                }
            }
            if (this._turretArea2._turret != undefined && this.startGame) {
                for (var i = 0; i < this._zombies.length; i++) {
                    if (this._turretArea2._turret.inRange(this._zombies[i])) {
                        this._turretArea2._turret.zombieToFollow = this._zombies[i];
                        this._turretArea2._turret.calculateAngle();
                        this._turretArea2._turret.shoot(this._zombies[i].x, this._zombies[i].y);
                        this._turretArea2._turret.checkCollision();
                        this._turretArea2._turret._bullet.update();
                        if (this._turretArea2._turret.zombieToFollow.isDead) {
                            this.zombieDeath = createjs.Sound.play("zombieShort");
                            this._zombies.splice(this._zombies.indexOf(this._turretArea2._turret.zombieToFollow), 1);
                            this.removeChild(this._turretArea2._turret.zombieToFollow, this._turretArea2._turret.zombieToFollow.actualHealth, this._turretArea2._turret.zombieToFollow.healthBar);
                            this._deadZombies++;
                            this.cashCounterAmt += this._turretArea2._turret.zombieToFollow.rewardPoints;
                            this.updateScore();
                        }
                        break;
                    }
                }
            }
            if (this._turretArea2._turret != undefined) {
                if (this._turretArea2._turret.sold) {
                    this.removeChild(this._turretArea2._turret);
                    this._turretArea2 = new objects.TurretArea("turretArea", 185, 140);
                    this.addChild(this._turretArea2);
                }
            }
            if (this._turretArea3._turret != undefined && this.startGame) {
                for (var i = 0; i < this._zombies.length; i++) {
                    if (this._turretArea3._turret.inRange(this._zombies[i])) {
                        this._turretArea3._turret.zombieToFollow = this._zombies[i];
                        this._turretArea3._turret.calculateAngle();
                        this._turretArea3._turret.shoot(this._zombies[i].x, this._zombies[i].y);
                        this._turretArea3._turret.checkCollision();
                        this._turretArea3._turret._bullet.update();
                        if (this._turretArea3._turret.zombieToFollow.isDead) {
                            this.zombieDeath = createjs.Sound.play("zombieShort");
                            this._zombies.splice(this._zombies.indexOf(this._turretArea3._turret.zombieToFollow), 1);
                            this.removeChild(this._turretArea3._turret.zombieToFollow, this._turretArea3._turret.zombieToFollow.actualHealth, this._turretArea3._turret.zombieToFollow.healthBar);
                            this._deadZombies++;
                            this.cashCounterAmt += this._turretArea3._turret.zombieToFollow.rewardPoints;
                            this.updateScore();
                        }
                        break;
                    }
                }
            }
            if (this._turretArea3._turret != undefined) {
                if (this._turretArea3._turret.sold) {
                    this.removeChild(this._turretArea3._turret);
                    this._turretArea3 = new objects.TurretArea("turretArea", 185, 140);
                    this.addChild(this._turretArea3);
                }
            }
            if (this._turretArea4._turret != undefined && this.startGame) {
                for (var i = 0; i < this._zombies.length; i++) {
                    if (this._turretArea4._turret.inRange(this._zombies[i])) {
                        this._turretArea4._turret.zombieToFollow = this._zombies[i];
                        this._turretArea4._turret.calculateAngle();
                        this._turretArea4._turret.shoot(this._zombies[i].x, this._zombies[i].y);
                        this._turretArea4._turret.checkCollision();
                        this._turretArea4._turret._bullet.update();
                        if (this._turretArea4._turret.zombieToFollow.isDead) {
                            this.zombieDeath = createjs.Sound.play("zombieShort");
                            this._zombies.splice(this._zombies.indexOf(this._turretArea4._turret.zombieToFollow), 1);
                            this.removeChild(this._turretArea4._turret.zombieToFollow, this._turretArea4._turret.zombieToFollow.actualHealth, this._turretArea4._turret.zombieToFollow.healthBar);
                            this._deadZombies++;
                            this.cashCounterAmt += this._turretArea4._turret.zombieToFollow.rewardPoints;
                            this.updateScore();
                        }
                        break;
                    }
                }
            }
            if (this._turretArea4._turret != undefined) {
                if (this._turretArea4._turret.sold) {
                    this.removeChild(this._turretArea4._turret);
                    this._turretArea4 = new objects.TurretArea("turretArea", 185, 140);
                    this.addChild(this._turretArea4);
                }
            }
            if (this.startGame && createjs.Ticker.getTime() > this.waveStart + 3000) {
                this.addZombies(this._zombies);
                this._zombies.forEach(function (zombie) {
                    if (zombie.x > _this.closestZombie.x && zombie.y > _this.closestZombie.y) {
                        _this.closestZombie = zombie;
                    }
                });
            }
            if (this._wave2) {
                this.addZombies(this._zombies2);
                this._zombies2.forEach(function (zombie) {
                    if (zombie.x > _this.closestZombie.x && zombie.y > _this.closestZombie.y) {
                        _this.closestZombie = zombie;
                    }
                });
            }
            if (this._wave3) {
                this.addZombies(this._zombies3);
                this._zombies3.forEach(function (zombie) {
                    if (zombie.x > _this.closestZombie.x && zombie.y > _this.closestZombie.y) {
                        _this.closestZombie = zombie;
                    }
                });
            }
        };
        // method to add zombies of any type to the stage and make them move in the desired direction
        Level3.prototype.addZombies = function (arr) {
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
                    zombie.lvl3Map();
                    zombie.update();
                    _this.addChild(zombie.healthBar, zombie.actualHealth);
                }
            });
        };
        return Level3;
    }(Scenes.GameScene));
    Scenes.Level3 = Level3;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=level3.js.map