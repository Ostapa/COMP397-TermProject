module objects {
    export class Zombie extends createjs.Sprite {

        // private instance variables 
        private _zombieName:string;
        private _zombieType:string;
        public health:number;
        public rewardPoints:number;
        public position:Vector;
        public isDead:boolean;
        public healthBar:createjs.Shape;
        public actualHealth:createjs.Shape; 
        private _originalHealth;

        // public instance variables
        public width:number;
        public height:number;

        constructor(zombieName:string, zombieType:string, x:number, y:number, public added:boolean=false) {
            super(gameTexture, zombieName);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.x = x;
            this.y = y;
            this.position = new Vector(x, y);
            this.isDead = false;
           
            this.actualHealth = new createjs.Shape();
            this.healthBar = new createjs.Shape();
            this.healthBar.graphics.beginFill("#b21616").rr(0,0, this.width, 5, 2);
            this._zombieName = zombieName;
            this._zombieType = zombieType;
            this.start();
            this._originalHealth = this.health;
            this.actualHealth.graphics.beginFill("#2bce2b").rr(0, 0, this._calcWidth(), 5, 2);     

            // this is to randomize the path of each zombie
            //this.y = y * (Math.round((Math.random() * (0.4-0.3) + 0.3)*100)/100);
            
        }

        public start():void {
            switch(this._zombieType) {
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
            this.on("click", this._zombie_Click, this) 

        }

        public move(direction:number, destX:number, destY:number):void {
            switch(direction) {
                case 0:
                    createjs.Tween.get(this).to({y:destY}, Math.abs((this.y - destY) * 30));
                    break;
                case 2:
                    createjs.Tween.get(this).to({y:destY}, Math.abs((this.y - destY) * 30));
                    break;
                case 1:
                    createjs.Tween.get(this).to({x: destX}, Math.abs((this.x - destX) * 30));
                    break;
                case 3:
                    createjs.Tween.get(this).to({x: destX}, Math.abs((this.x - destX) * 30));
                    break;
            }
        }

        public update():void {
            this.position = new Vector(this.x, this.y)
            if(this.health <= 0) {
                this.isDead = true;
                
            }
            this.actualHealth.graphics.clear();
            this.actualHealth.graphics.beginFill("#2bce2b").rr(this.x, this.y - 10, this._calcWidth(), 5, 2)
            this.healthBar.x = this.x;
            this.healthBar.y = this.y - 10;
            
        }

        private _calcWidth():number {
            return this.health/this._originalHealth * this.width;
        }
        public changeDirection(zombieName:string, dir:number) {
            switch(zombieName) {
                case "walker":
                    switch(dir) {
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
                    switch(dir) {
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
                    switch(dir) {
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
                    switch(dir) {
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
                    switch(dir) {
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
                    switch(dir) {
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
        }
        public lvl1Map():void {
            if(this.x < 120 && this.y == 260) {
                this.move(config.Direction.RIGHT, 120, 260);
                if(this.x == 0) {
                    this.changeDirection(this._zombieType,config.Direction.RIGHT)
                } 
            }
            if(this.x == 120 && this.y > 60) {
                if(this.y == 260) {
                    this.changeDirection(this._zombieType, config.Direction.UP);
                }
                this.move(config.Direction.UP, 120, 60);
            }
            if(this.x < 505 && this.y == 60) {
                if(this.x == 120) {
                    this.changeDirection(this._zombieType, config.Direction.RIGHT)
                }
                this.move(config.Direction.RIGHT, 505, 60)
            }
            if(this.x == 505 && this.y < 130) {
                if(this.y == 60) {
                    this.changeDirection(this._zombieType, config.Direction.DOWN)
                }
                this.move(config.Direction.DOWN, 505, 130);
            }
            if(this.x < 640 && this.y == 130) {
                if(this.x == 505) {
                    this.changeDirection(this._zombieType, config.Direction.RIGHT)
                }
                this.move(config.Direction.RIGHT, 650, 130);
            }
        }

        public lvl2Map():void {
            if(this.x < 123 && this.y == 115) {
                this.move(config.Direction.RIGHT, 123, 115);
                if(this.x == 0) {
                    this.changeDirection(this._zombieType,config.Direction.RIGHT)
                } 
            }
            if(this.x == 123 && this.y < 290) {
                if(this.y == 115) {
                    this.changeDirection(this._zombieType, config.Direction.DOWN);
                }
                this.move(config.Direction.DOWN, 123, 282);
            }
            if(this.x < 240 && this.y == 282) {
                if(this.x == 123) {
                    this.changeDirection(this._zombieType, config.Direction.RIGHT)
                }
                this.move(config.Direction.RIGHT, 240, 282)
            }
            if(this.x == 240 && this.y > 33) {
                if(this.y == 282) {
                    this.changeDirection(this._zombieType, config.Direction.UP)
                }
                this.move(config.Direction.UP, 240, 33);
            }
            if(this.x < 570 && this.y == 33) {
                if(this.x == 240) {
                    this.changeDirection(this._zombieType, config.Direction.RIGHT)
                }
                this.move(config.Direction.RIGHT, 570, 33);
            }
            
            if(this.x == 570 && this.y < 158) {
                if(this.y == 33) {
                    this.changeDirection(this._zombieType, config.Direction.DOWN)
                }
                this.move(config.Direction.DOWN, 570, 158);
            }

            if(this.x > 415 && this.y == 158) {
                if(this.x == 570) {
                    this.changeDirection(this._zombieType, config.Direction.LEFT)
                }
                this.move(config.Direction.LEFT, 415, 158);
            }

            if(this.x == 415 && this.y < 362) {
                if(this.y == 158) {
                    this.changeDirection(this._zombieType, config.Direction.DOWN)
                }
                this.move(config.Direction.DOWN, 415, 362);
            }
        }

        public lvl3Map():void{
            if(this.x > 395 && this.y == 260) {
                this.move(config.Direction.LEFT, 395, 282);
                if(this.x == 640) {
                    this.changeDirection(this._zombieType,config.Direction.LEFT)
                } 
            }
            if(this.x == 395 && this.y > 204) {
                if(this.y == 260) {
                    this.changeDirection(this._zombieType, config.Direction.UP);
                }
                this.move(config.Direction.UP, 395, 204);
            }
            if(this.x < 445 && this.y == 204) {
                if(this.x == 395) {
                    this.changeDirection(this._zombieType, config.Direction.RIGHT)
                }
                this.move(config.Direction.RIGHT, 445, 204)
            }
            if(this.x == 445 && this.y > 154) {
                if(this.y == 204) {
                    this.changeDirection(this._zombieType, config.Direction.UP)
                }
                this.move(config.Direction.UP, 445, 154)
            }
            if(this.x > 170 && this.y == 154) {
                if(this.x == 445) {
                    this.changeDirection(this._zombieType, config.Direction.LEFT)
                }
                this.move(config.Direction.LEFT, 170, 154)
            }
            if(this.x == 170 && this.y < 310) {
                if(this.y == 154) {
                    this.changeDirection(this._zombieType, config.Direction.DOWN)
                }
                this.move(config.Direction.DOWN, 170, 310)
            }
            if(this.x < 540 && this.y == 310) {
                if(this.x == 170) {
                    this.changeDirection(this._zombieType, config.Direction.RIGHT)
                }
                this.move(config.Direction.RIGHT, 540, 310)
            }
            if(this.x == 540 && this.y > 55) {
                if(this.y == 310) {
                    this.changeDirection(this._zombieType, config.Direction.UP)
                }
                this.move(config.Direction.UP, 540, 55)
            }
            if(this.x > 70 && this.y == 55) {
                if(this.x == 540) {
                    this.changeDirection(this._zombieType, config.Direction.LEFT)
                }
                this.move(config.Direction.LEFT, 70, 55)
            }
            if(this.x == 70 && this.y < 362) {
                if(this.y == 55) {
                    this.changeDirection(this._zombieType, config.Direction.DOWN)
                }
                this.move(config.Direction.DOWN, 70, 362)
            }
        }

        // Event Handlers
        private _zombie_Click(event:MouseEvent) {
            gameScene.updateInfo(this._zombieType, this.health, this.rewardPoints);
        }
    }
} 