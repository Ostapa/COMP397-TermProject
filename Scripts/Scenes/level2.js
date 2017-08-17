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
var Scenes;
(function (Scenes) {
    var Level2 = (function (_super) {
        __extends(Level2, _super);
        function Level2() {
            var _this = _super.call(this, "mapTwo", "levelOne_s") || this;
            _this._currentTime = createjs.Ticker.getTime();
            _this._zombiesAdded = 0;
            _this._deadZombies = 0;
            if (!_this.onPause) {
                _this.start();
            }
            return _this;
        }
        Level2.prototype.start = function () {
            this._label = new objects.Label("LEVEL 2", "60px Arial", "#c6bf9c", 0, config.Screen.CENTER_Y);
            createjs.Tween.get(this._label).to({ x: config.Screen.WIDTH + this._label.getBounds().width }, 5000, createjs.Ease.linear);
            // adding turet areas to the map
            this._turretArea1 = new objects.TurretArea("turretArea", 190, 250);
            this._turretArea2 = new objects.TurretArea("turretArea", 300, 105);
            this._turretArea3 = new objects.TurretArea("turretArea", 510, 115);
            this._zombies = new Array();
            // creating an array of zombies for lvl 2
            for (var i = 0; i < 20; i++) {
                if (i < 5) {
                    this._zombies.push(new objects.Zombie("walkerRight", "walker", 0, 115));
                }
                else {
                    this._zombies.push(new objects.Zombie("mumblerRight", "mumbler", 0, 115));
                }
            }
            this.addChild(this._turretArea1, this._turretArea2, this._turretArea3, this._label);
            this._closestZombie = this._zombies[0];
            stage.addChild(this);
        };
        Level2.prototype.update = function () {
            var _this = this;
            if (this.startGame) {
                this.addZombies(this._zombies);
                this._zombies.forEach(function (zombie) {
                    if (zombie.x > _this._closestZombie.x && zombie.y > _this._closestZombie.y) {
                        _this._closestZombie = zombie;
                    }
                });
            }
            if (this._turretArea1._turret != undefined && this.startGame) {
                for (var i = 0; i < this._zombies.length; i++) {
                    if (this._turretArea1._turret.inRange(this._zombies[i])) {
                        this._turretArea1._turret.zombieToFollow = this._zombies[i];
                        this._turretArea1._turret.calculateAngle();
                        this._turretArea1._turret.shoot(this._zombies[i].x, this._zombies[i].y);
                        this._turretArea1._turret._bullet.update();
                        if (this._turretArea1._turret.zombieToFollow.isDead) {
                            this._zombies.splice(this._zombies.indexOf(this._turretArea1._turret.zombieToFollow), 1);
                            this.removeChild(this._turretArea1._turret.zombieToFollow, this._turretArea1._turret.zombieToFollow.actualHealth, this._turretArea1._turret.zombieToFollow.healthBar);
                            this._deadZombies++;
                            this.cashCounterAmt += this._turretArea1._turret.zombieToFollow.rewardPoints;
                            this.updateScore();
                        }
                        break;
                    }
                }
            }
            // turret 2 rotation and shooting
            if (this._turretArea2._turret != undefined && this.startGame) {
                for (var i = 0; i < this._zombies.length; i++) {
                    if (this._turretArea2._turret.inRange(this._zombies[i])) {
                        this._turretArea2._turret.zombieToFollow = this._zombies[i];
                        this._turretArea2._turret.calculateAngle();
                        this._turretArea2._turret.shoot(this._zombies[i].x, this._zombies[i].y);
                        this._turretArea2._turret._bullet.update();
                        if (this._turretArea2._turret.zombieToFollow.isDead) {
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
            // turret 3 rotation and shooting
            if (this._turretArea3._turret != undefined && this.startGame) {
                for (var i = 0; i < this._zombies.length; i++) {
                    if (this._turretArea3._turret.inRange(this._zombies[i])) {
                        this._turretArea3._turret.zombieToFollow = this._zombies[i];
                        this._turretArea3._turret.calculateAngle();
                        this._turretArea3._turret.shoot(this._zombies[i].x, this._zombies[i].y);
                        this._turretArea3._turret._bullet.update();
                        if (this._turretArea3._turret.zombieToFollow.isDead) {
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
        };
        Level2.prototype.addZombies = function (arr) {
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
                    zombie.lvl2Map();
                    zombie.update();
                    _this.addChild(zombie.healthBar, zombie.actualHealth);
                }
            });
        };
        return Level2;
    }(Scenes.GameScene));
    Scenes.Level2 = Level2;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=level2.js.map