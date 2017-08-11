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
            // testing turet area
            this._turretArea = new objects.TurretArea("turretArea", 240, 230);
            // testing turrets with simple shapes [images to be added later]
            this._turret = new objects.Turret("turret", 70, 230);
            this._range = new createjs.Shape();
            this._range.graphics.beginFill("#98FB98");
            this._range.alpha = .4;
            this._range.graphics.beginStroke("#1db81d");
            this._range.graphics.drawCircle(70, 230, 60);
            this._range.visible = false;
            // testing turrets' guns with simple shapes [images to be added later]
            this._gun = new createjs.Bitmap(assets.getResult("gunOne"));
            this._gun.x = 70;
            this._gun.y = 230;
            this._gun.regX = this._gun.getBounds().width / 2; // width / 2
            this._gun.regY = this._gun.getBounds().height / 2; // height / 2
            for (var i = 0; i < 6; i++) {
                if (i < 3) {
                    this._zombies.push(new objects.Zombie("walkerRight", "walker", 0, 260));
                }
                else {
                    this._zombies.push(new objects.Zombie("mumblerRight", "mumbler", 0, 260));
                }
                this._zombies[i].on("click", this._zombie_Click, this);
            }
            this._closestZombie = this._zombies[0];
            this.addChild(this._range, this._turret, this._gun, this._turretArea);
            stage.addChild(this);
            // event listeners
            this._gun.on("click", this._gun_Click, this);
            this.on("click", this._stage_Click, this);
        };
        Level1.prototype.update = function () {
            var _this = this;
            // calculate the angle for the gun to follow the zombie
            if (this._turret.inRange(this._closestZombie)) {
                this._angle = Math.atan2(this._closestZombie.y - this._gun.y, this._closestZombie.x - this._gun.x);
                this._angle = this._angle * (180 / Math.PI);
                // this if statement is to set angle to (0 - 360) instead of (-180 - 180)
                if (this._angle < 0) {
                    this._angle = 360 - (-this._angle);
                }
                this._gun.rotation = this._angle + 90;
            }
            this.addZombies(this._zombies);
            this._zombies.forEach(function (zombie) {
                if (zombie.x > _this._closestZombie.x && zombie.y > _this._closestZombie.y) {
                    _this._closestZombie = zombie;
                }
            });
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
            this._range.visible = true;
        };
        Level1.prototype._zombie_Click = function (event) {
            console.log("clicked on zombie" + event.target.x);
            this._zombies.shift();
            this.removeChild(this._closestZombie);
            // this.removeChild(event.target);
            if (this._zombies.length !== 0) {
                this._closestZombie = this._zombies[0];
            }
            else {
                this._closestZombie.x = 0;
                this._closestZombie.y = 0;
            }
        };
        Level1.prototype._stage_Click = function (event) {
            if (event.target != this._gun) {
                this._range.visible = false;
                console.log("stage event");
            }
        };
        return Level1;
    }(Scenes.GameScene));
    Scenes.Level1 = Level1;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=level1.js.map