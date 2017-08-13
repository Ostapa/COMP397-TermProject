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
    var Zombie = (function (_super) {
        __extends(Zombie, _super);
        function Zombie(zombieName, zombieType, x, y, added) {
            if (added === void 0) { added = false; }
            var _this = _super.call(this, textureSprite, zombieName) || this;
            _this.added = added;
            _this.width = _this.getBounds().width;
            _this.height = _this.getBounds().height;
            _this.x = x;
            _this.y = y;
            _this.position = new objects.Vector(x, y);
            // this is to randomize the path of each zombie
            //this.y = y * (Math.round((Math.random() * (0.4-0.3) + 0.3)*100)/100);
            _this._zombieName = zombieName;
            _this._zombieType = zombieType;
            _this.start();
            return _this;
        }
        Zombie.prototype.start = function () {
            switch (this._zombieType) {
                case "walker":
                    this.health = 30;
                    break;
                case "mumbler":
                    this.health = 50;
                    break;
            }
        };
        Zombie.prototype.move = function (direction, destX, destY) {
            switch (direction) {
                case 0:
                    createjs.Tween.get(this).to({ y: destY }, Math.abs((this.y - destY) * 40));
                    break;
                case 2:
                    createjs.Tween.get(this).to({ y: destY }, Math.abs((this.y - destY) * 40));
                    break;
                case 1:
                    createjs.Tween.get(this).to({ x: destX }, Math.abs((this.x - destX) * 40));
                    break;
                case 3:
                    createjs.Tween.get(this).to({ x: destX }, Math.abs((this.x - destX) * 40));
                    break;
            }
        };
        Zombie.prototype.update = function () {
            this.position = new objects.Vector(this.x, this.y);
            if (this.x < 120 && this.y == 260) {
                this.move(config.Direction.RIGHT, 120, 260);
                if (this.x == 0) {
                    this.changeDirection(this._zombieType, config.Direction.RIGHT);
                }
            }
            if (this.x == 120 && this.y > 60) {
                if (this.y == 260) {
                    this.changeDirection(this._zombieType, config.Direction.UP);
                }
                this.move(config.Direction.UP, 120, 60);
            }
            if (this.x < 505 && this.y == 60) {
                if (this.x == 120) {
                    this.changeDirection(this._zombieType, config.Direction.RIGHT);
                }
                this.move(config.Direction.RIGHT, 505, 60);
            }
            if (this.x == 505 && this.y < 130) {
                if (this.y == 60) {
                    this.changeDirection(this._zombieType, config.Direction.DOWN);
                }
                this.move(config.Direction.DOWN, 505, 130);
            }
            if (this.x < 640 && this.y == 130) {
                if (this.x == 505) {
                    this.changeDirection(this._zombieType, config.Direction.RIGHT);
                }
                this.move(config.Direction.RIGHT, 640, 130);
            }
        };
        Zombie.prototype.changeDirection = function (zombieName, dir) {
            switch (zombieName) {
                case "walker":
                    switch (dir) {
                        case 0:
                            this.gotoAndPlay("walkerUp");
                            break;
                        case 1:
                            this.gotoAndPlay("walkerRight");
                            break;
                        case 2:
                            this.gotoAndPlay("walkerDown");
                            break;
                        case 3:
                            this.gotoAndPlay("walkerLeft");
                            break;
                    }
                    break;
                case "mumbler":
                    switch (dir) {
                        case 0:
                            this.gotoAndPlay("mumblerUp");
                            break;
                        case 1:
                            this.gotoAndPlay("mumblerRight");
                            break;
                        case 2:
                            this.gotoAndPlay("mumblerDown");
                            break;
                        case 3:
                            this.gotoAndPlay("mumblerLeft");
                            break;
                    }
            }
        };
        return Zombie;
    }(createjs.Sprite));
    objects.Zombie = Zombie;
})(objects || (objects = {}));
//# sourceMappingURL=zombie.js.map