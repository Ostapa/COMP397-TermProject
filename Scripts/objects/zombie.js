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
            var _this = _super.call(this, gameTexture, zombieName) || this;
            _this.added = added;
            _this.width = _this.getBounds().width;
            _this.height = _this.getBounds().height;
            _this.x = x;
            _this.y = y;
            _this.position = new objects.Vector(x, y);
            _this.isDead = false;
            _this.actualHealth = new createjs.Shape();
            _this.healthBar = new createjs.Shape();
            _this.healthBar.graphics.beginFill("#b21616").rr(0, 0, _this.width, 5, 2);
            _this._zombieName = zombieName;
            _this._zombieType = zombieType;
            _this.start();
            _this._originalHealth = _this.health;
            _this.actualHealth.graphics.beginFill("#2bce2b").rr(0, 0, _this._calcWidth(), 5, 2);
            return _this;
            // this is to randomize the path of each zombie
            //this.y = y * (Math.round((Math.random() * (0.4-0.3) + 0.3)*100)/100);
        }
        Zombie.prototype.start = function () {
            switch (this._zombieType) {
                case "walker":
                    this.health = 60;
                    this.rewardPoints = 1;
                    break;
                case "mumbler":
                    this.health = 90;
                    this.rewardPoints = 3;
                    break;
                case "grunter":
                    this.health = 120;
                    this.rewardPoints = 5;
                    break;
                case "hurler":
                    this.health = 150;
                    this.rewardPoints = 7;
                    break;
                case "chaser":
                    this.health = 150;
                    this.rewardPoints = 7;
                    break;
                case "yelper":
                    this.health = 175;
                    this.rewardPoints = 10;
                    break;
            }
            // Event listeners
            this.on("click", this._zombie_Click, this);
        };
        Zombie.prototype.move = function (direction, destX, destY) {
            switch (direction) {
                case 0:
                    createjs.Tween.get(this).to({ y: destY }, Math.abs((this.y - destY) * 30));
                    break;
                case 2:
                    createjs.Tween.get(this).to({ y: destY }, Math.abs((this.y - destY) * 30));
                    break;
                case 1:
                    createjs.Tween.get(this).to({ x: destX }, Math.abs((this.x - destX) * 30));
                    break;
                case 3:
                    createjs.Tween.get(this).to({ x: destX }, Math.abs((this.x - destX) * 30));
                    break;
            }
        };
        Zombie.prototype.update = function () {
            this.position = new objects.Vector(this.x, this.y);
            if (this.health <= 0) {
                this.isDead = true;
            }
            this.actualHealth.graphics.clear();
            this.actualHealth.graphics.beginFill("#2bce2b").rr(this.x, this.y - 10, this._calcWidth(), 5, 2);
            this.healthBar.x = this.x;
            this.healthBar.y = this.y - 10;
        };
        Zombie.prototype._calcWidth = function () {
            return this.health / this._originalHealth * this.width;
        };
        Zombie.prototype.changeDirection = function (zombieName, dir) {
            switch (zombieName) {
                case "walker":
                    switch (dir) {
                        case 0:
                            this.gotoAndPlay("walkerTop");
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
                            this.gotoAndPlay("mumblerTop");
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
                case "grunter":
                    switch (dir) {
                        case 0:
                            this.gotoAndPlay("grunterTop");
                            break;
                        case 1:
                            this.gotoAndPlay("grunterRight");
                            break;
                        case 2:
                            this.gotoAndPlay("grunterDown");
                            break;
                        case 3:
                            this.gotoAndPlay("grunterLeft");
                            break;
                    }
                case "hurler":
                    switch (dir) {
                        case 0:
                            this.gotoAndPlay("hurlerTop");
                            break;
                        case 1:
                            this.gotoAndPlay("hurlerRight");
                            break;
                        case 2:
                            this.gotoAndPlay("hurlerDown");
                            break;
                        case 3:
                            this.gotoAndPlay("hurlerLeft");
                            break;
                    }
                case "chaser":
                    switch (dir) {
                        case 0:
                            this.gotoAndPlay("chaserTop");
                            break;
                        case 1:
                            this.gotoAndPlay("chaserRight");
                            break;
                        case 2:
                            this.gotoAndPlay("chaserDown");
                            break;
                        case 3:
                            this.gotoAndPlay("chaserLeft");
                            break;
                    }
                case "yelper":
                    switch (dir) {
                        case 0:
                            this.gotoAndPlay("yelperTop");
                            break;
                        case 1:
                            this.gotoAndPlay("yelperRight");
                            break;
                        case 2:
                            this.gotoAndPlay("yelperDown");
                            break;
                        case 3:
                            this.gotoAndPlay("yelperLeft");
                            break;
                    }
            }
        };
        Zombie.prototype.lvl1Map = function () {
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
                this.move(config.Direction.RIGHT, 650, 130);
            }
        };
        Zombie.prototype.lvl2Map = function () {
            if (this.x < 123 && this.y == 115) {
                this.move(config.Direction.RIGHT, 123, 115);
                if (this.x == 0) {
                    this.changeDirection(this._zombieType, config.Direction.RIGHT);
                }
            }
            if (this.x == 123 && this.y < 290) {
                if (this.y == 115) {
                    this.changeDirection(this._zombieType, config.Direction.DOWN);
                }
                this.move(config.Direction.DOWN, 123, 282);
            }
            if (this.x < 240 && this.y == 282) {
                if (this.x == 123) {
                    this.changeDirection(this._zombieType, config.Direction.RIGHT);
                }
                this.move(config.Direction.RIGHT, 240, 282);
            }
            if (this.x == 240 && this.y > 33) {
                if (this.y == 282) {
                    this.changeDirection(this._zombieType, config.Direction.UP);
                }
                this.move(config.Direction.UP, 240, 33);
            }
            if (this.x < 570 && this.y == 33) {
                if (this.x == 240) {
                    this.changeDirection(this._zombieType, config.Direction.RIGHT);
                }
                this.move(config.Direction.RIGHT, 570, 33);
            }
            if (this.x == 570 && this.y < 158) {
                if (this.y == 33) {
                    this.changeDirection(this._zombieType, config.Direction.DOWN);
                }
                this.move(config.Direction.DOWN, 570, 158);
            }
            if (this.x > 415 && this.y == 158) {
                if (this.x == 570) {
                    this.changeDirection(this._zombieType, config.Direction.LEFT);
                }
                this.move(config.Direction.LEFT, 415, 158);
            }
            if (this.x == 415 && this.y < 362) {
                if (this.y == 158) {
                    this.changeDirection(this._zombieType, config.Direction.DOWN);
                }
                this.move(config.Direction.DOWN, 415, 362);
            }
        };
        Zombie.prototype.lvl3Map = function () {
            if (this.x > 395 && this.y == 260) {
                this.move(config.Direction.LEFT, 395, 282);
                if (this.x == 640) {
                    this.changeDirection(this._zombieType, config.Direction.LEFT);
                }
            }
            if (this.x == 395 && this.y > 204) {
                if (this.y == 260) {
                    this.changeDirection(this._zombieType, config.Direction.UP);
                }
                this.move(config.Direction.UP, 395, 204);
            }
            if (this.x < 445 && this.y == 204) {
                if (this.x == 395) {
                    this.changeDirection(this._zombieType, config.Direction.RIGHT);
                }
                this.move(config.Direction.RIGHT, 445, 204);
            }
            if (this.x == 445 && this.y > 154) {
                if (this.y == 204) {
                    this.changeDirection(this._zombieType, config.Direction.UP);
                }
                this.move(config.Direction.UP, 445, 154);
            }
            if (this.x > 170 && this.y == 154) {
                if (this.x == 445) {
                    this.changeDirection(this._zombieType, config.Direction.LEFT);
                }
                this.move(config.Direction.LEFT, 170, 154);
            }
            if (this.x == 170 && this.y < 310) {
                if (this.y == 154) {
                    this.changeDirection(this._zombieType, config.Direction.DOWN);
                }
                this.move(config.Direction.DOWN, 170, 310);
            }
            if (this.x < 540 && this.y == 310) {
                if (this.x == 170) {
                    this.changeDirection(this._zombieType, config.Direction.RIGHT);
                }
                this.move(config.Direction.RIGHT, 540, 310);
            }
            if (this.x == 540 && this.y > 55) {
                if (this.y == 310) {
                    this.changeDirection(this._zombieType, config.Direction.UP);
                }
                this.move(config.Direction.UP, 540, 55);
            }
            if (this.x > 70 && this.y == 55) {
                if (this.x == 540) {
                    this.changeDirection(this._zombieType, config.Direction.LEFT);
                }
                this.move(config.Direction.LEFT, 70, 55);
            }
            if (this.x == 70 && this.y < 362) {
                if (this.y == 55) {
                    this.changeDirection(this._zombieType, config.Direction.DOWN);
                }
                this.move(config.Direction.DOWN, 70, 362);
            }
        };
        // Event Handlers
        Zombie.prototype._zombie_Click = function (event) {
            gameScene.updateInfo(this._zombieType, this.health, this.rewardPoints);
        };
        return Zombie;
    }(createjs.Sprite));
    objects.Zombie = Zombie;
})(objects || (objects = {}));
//# sourceMappingURL=zombie.js.map