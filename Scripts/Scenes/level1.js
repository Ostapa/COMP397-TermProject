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
        function Level1() {
            var _this = _super.call(this, "mapOne", "levelOne_s") || this;
            _this._currentTime = createjs.Ticker.getTime();
            _this._zombiesAdded = 0;
            // create an array of map points
            _this._mapPoints = [
                //[x, y]
                [0, 260, config.Direction.RIGHT],
                [160, 260, config.Direction.UP],
                [160, 60, config.Direction.RIGHT],
                [540, 60, config.Direction.DOWN],
                [540, 90, config.Direction.RIGHT],
                [640, 90, config.Direction.RIGHT]
            ];
            _this.start();
            return _this;
        }
        Level1.prototype.start = function () {
            this._zombies = new Array();
            // testing gunsshot
            this._bullet = new createjs.Bitmap(assets.getResult("bullet"));
            this._bullet.x = 60;
            this._bullet.y = 175;
            this._bullet.visible = false;
            this._closestZombie = new objects.Zombie("walkerTop", "walker", 0, 0);
            this.addChild(this._range, this._turret, this._gun, this._bullet);
            for (var i = 0; i < 10; i++) {
                this._walkers.push(new objects.Zombie("walkerRight", "walker", 0, 260));
                // testing turet area
                this._turretArea = new objects.TurretArea("turretArea", 195, 150);
                this._turretArea2 = new objects.TurretArea("turretArea", 455, 150);
                for (var i = 0; i < 6; i++) {
                    if (i < 3) {
                        this._zombies.push(new objects.Zombie("walkerRight", "walker", 0, 260));
                    }
                    else {
                        this._zombies.push(new objects.Zombie("mumblerRight", "mumbler", 0, 260));
                    }
                    this._zombies[i].on("click", this._zombie_Click, this);
                }
                this.closestZombie = this._zombies[0];
                this.addChild(this._turretArea, this._turretArea2);
                stage.addChild(this);
                this.on("click", this._stage_Click, this);
            }
        };
        Level1.prototype.update = function () {
            var _this = this;
            //if there is a bullet, if so move upward
            if (this._bullet.isVisible() == true) {
                this._bullet.y -= 4;
            }
            // calculate the angle for the gun to follow the zombie
            //if(this._gun.inRange(this._closestZombie)) {
            if (10 > 3) {
                this._angle = Math.atan2(this._closestZombie.y - this._gun.y, this._closestZombie.x - this._gun.x);
                this._angle = this._angle * (180 / Math.PI);
                if (this._angle < 0) {
                    this._angle = 360 - (-this._angle);
                }
                this._gun.rotation = this._angle + 90;
                this._bullet.rotation = this._angle + 90;
                if (this._turretArea.notNull) {
                    this._turretArea.update().calculateAngle(this.closestZombie);
                }
                if (this._turretArea2.notNull) {
                    this._turretArea2.update().calculateAngle(this.closestZombie);
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
                            this.lifeCounterAmt--;
                            this._zombies.shift();
                        }
                        else {
                            scene = config.Scene.OVER_SCENE;
                            changeScene();
                        }
                        gameScene.updateScore();
                    }
                }
            }
            // method to add zombies of any type to the stage and make them move in the desired direction
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
        // Event handlers
        Level1.prototype._gun_Click = function (event) {
            this._bullet.visible = true;
            this._range.visible = true;
        };
        Level1.prototype._stage_Click = function (event) {
            if (event.target != this._gun) {
                this._range.visible = false;
            }
        };
        Level1.prototype._zombie_Click = function (event) {
            this._zombies.shift();
            this.removeChild(this.closestZombie);
            // this.removeChild(event.target);
            if (this._zombies.length !== 0) {
                this.closestZombie = this._zombies[0];
            }
            else {
                this.closestZombie.x = 0;
                this.closestZombie.y = 0;
            }
        };
        return Level1;
    }(Scenes.GameScene));
    Scenes.Level1 = Level1;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=level1.js.map