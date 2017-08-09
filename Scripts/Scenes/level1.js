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
 * @version 0.1
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
            this._walkers = new Array();
            this._mumblers = new Array();
            // testing turrets with simple shapes [images to be added later]
            this._turret = new createjs.Shape();
            this._turret.graphics.beginFill("#000");
            this._turret.graphics.drawCircle(70, 210, 30);
            // this._turret.regX = 70 - 30;
            // this._turret.regY = 210 + 30;
            // testing turrets' guns with simple shapes [images to be added later]
            this._gun = new createjs.Shape();
            this._gun.graphics.beginFill("#fff");
            this._gun.graphics.drawRect(65, 210, 5, 30);
            this.addChild(this._turret, this._gun);
            for (var i = 0; i < 10; i++) {
                this._walkers.push(new objects.Zombie("walkerRight", "walker", 0, 260));
            }
            for (var i = 0; i < 10; i++) {
                this._mumblers.push(new objects.Zombie("mumblerRight", "mumbler", 0, 260));
            }
            stage.addChild(this);
        };
        Level1.prototype.update = function () {
            this.addZombies(this._walkers);
            this.addZombies(this._mumblers);
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
        return Level1;
    }(Scenes.GameScene));
    Scenes.Level1 = Level1;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=level1.js.map