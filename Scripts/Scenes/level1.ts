/**
 * @file level1.ts
 * @author Ostap Hamarnyk
 * @date August 9 2017
 * @version 0.3
 * @description The first level of the game. Difficulty: easy. 
 */
module Scenes {
    export class Level1 extends Scenes.GameScene {
        // public instance variables
        public closestZombie:objects.Zombie;
        // private instance variables
        private _zombies:objects.Zombie[];
        private _currentTime:number = createjs.Ticker.getTime();
        private _zombiesAdded:number = 0;
        public _turret:objects.Turret;
        public _turret2:objects.Turret;
        private _turretArea:objects.TurretArea;
        private _turretArea2:objects.TurretArea;
        public _bullet:objects.Bullet;
        public _bullet2:objects.Bullet;
        private _collision:Managers.Collision;
        private _bTime:number = createjs.Ticker.getTime();
        private _shootingRange:number = 100;
        private _deadZombies:number = 0;
        private turretIsBuild1:boolean = false;
        private turretIsBuild2:boolean = false;

        public counter:number = 0;
        public counter2:number = 0;

        // Constructor
        constructor() {
            super("mapOne", "levelOne_s");
            if(!this.onPause) {
                this.start();
            }
        }

        public start():void {
            this._zombies = new Array<objects.Zombie>();
            this._collision = new Managers.Collision();

            
            // testing turet area
            this._turretArea = new objects.TurretArea("turretArea", 195, 150);
            this._turretArea2 = new objects.TurretArea("turretArea", 455, 150)
            

            for(var i:number = 0; i < 10; i++) {
                if(i < 5) {
                    this._zombies.push(new objects.Zombie("walkerRight","walker", 0, 260));
                } else {
                    this._zombies.push(new objects.Zombie("mumblerRight", "mumbler", 0, 260));
                }
            }
            this.closestZombie = this._zombies[0];

            this.addChild(this._turretArea, this._turretArea2, this._turret, this._turret2);
            
            stage.addChild(this);
           
        }

        public update():void {
            
            if(this._deadZombies >= 10) {
                scene = config.Scene.LEVEL_2;
                changeScene()
            }

            if(this.turretIsBuild1 && this._zombies.length != 0) {
                if(this._turret.inRange(this._turret, this.closestZombie, this._turret.shootingRange)) {
                    this._bullet.update();
                    this.shoot1(this.closestZombie.x + this.closestZombie.width/2, this.closestZombie.y);
                    console.log(this._bullet.x)
                    if(this._collision.check(this.closestZombie, this._bullet)) {
                        this.removeChild(this._bullet)
                        this.reduceHealth();
                        if(this.closestZombie.health <= 0) {
                            this.removeChild(this.closestZombie);
                            if(this._zombies.length !== 0) {
                                this._zombies.shift()
                                this.closestZombie = this._zombies[0];
                                this._deadZombies++;
                            } else {
                                this.closestZombie.x = 0;
                                this.closestZombie.y = 0;
                            } 
                        }
                    }
                }
            }
            if(this.turretIsBuild2 && this._zombies.length != 0) {
                if(this._turret2.inRange(this._turret2, this.closestZombie, this._turret2.shootingRange)) {
                    this._bullet2.update();
                    this.shoot2(this.closestZombie.x + this.closestZombie.width/2, this.closestZombie.y + this.closestZombie.height / 2);
                    console.log(this._bullet2.x)
                    if(this._collision.check(this.closestZombie, this._bullet2)) {
                        this.removeChild(this._bullet2)
                        this.reduceHealth();
                        if(this.closestZombie.health <= 0) {
                            this.removeChild(this.closestZombie);
                            if(this._zombies.length !== 0) {
                                this._zombies.shift()
                                this.closestZombie = this._zombies[0];
                                this._deadZombies++;
                            } else {
                                this.closestZombie.x = 0;
                                this.closestZombie.y = 0;
                            } 
                        }
                    }
                }
            }      
    
            // calculate the angle for the gun to follow the zombie
            if(this._turretArea.notNull) {
                this._turret = this._turretArea.update();
                this._turret.calculateAngle(this.closestZombie);
                this.addChild(this._turret)
                this._turret.update();
                this.turretIsBuild1 = true;
                if(this._turret.isBuild && this.counter < 1) {
                    this._bullet = new objects.Bullet(this.chooseBullet(this._turret), this._turret.x, this._turret.y);
                    this.counter++
                }
            }
            if(this._turretArea2.notNull) {
                this._turret2 = this._turretArea2.update()
                this._turret2.calculateAngle(this.closestZombie);
                this.addChild(this._turret2)
                this._turret2.update();
                this.turretIsBuild2 = true;
                if(this._turret2.isBuild && this.counter2 < 1) {
                    this._bullet2 = new objects.Bullet(this.chooseBullet(this._turret2), this._turret2.x, this._turret2.y);
                    this.counter2++;
                }
            }
            if(this.startGame) {
                this.addZombies(this._zombies);

                this._zombies.forEach(zombie => {
                    if(zombie.x > this.closestZombie.x && zombie.y > this.closestZombie.y) {
                        this.closestZombie = zombie;
                    }
                });

                if(this.closestZombie.x >= 640) {
                    if(this._zombies.length != 0) {
                        this.lifeCounterAmt = this.lifeCounterAmt - 1;
                        this._zombies.shift();
                    } else  {
                        scene = config.Scene.OVER_SCENE;
                        changeScene();
                    }
                    
                    gameScene.updateScore();
                }
            }

            
            
        }

        // method to add zombies of any type to the stage and make them move in the desired direction
        public addZombies(arr:objects.Zombie[]) {
            arr.forEach(zombie => {
                if(this._zombiesAdded != arr.length && !zombie.added) {
                    if(createjs.Ticker.getTime() > this._currentTime + 1000) {
                        this.addChild(zombie);
                        this._currentTime = createjs.Ticker.getTime();
                        zombie.added = true;
                    } 
                }
                if(zombie.added) {
                    zombie.update();
                }
            });
        }

        public reduceHealth():void {
            this.closestZombie.health -= 3;
        }

        // method to shoot 
        public shoot1(targetX:number, targetY:number):void {
            if(createjs.Ticker.getTime() > this._bTime + 500) {
                this.removeChild(this._bullet)
                this._bullet = new objects.Bullet(this.chooseBullet(this._turret), this._turret.x, this._turret.y )
                this.addChild(this._bullet);
                this._bullet.update();
                createjs.Tween.get(this._bullet).to({x:targetX, y:targetY}, 500, createjs.Ease.linear);
                this._bTime = createjs.Ticker.getTime();
            }
        }

        public shoot2(targetX:number, targetY:number):void {
            if(createjs.Ticker.getTime() > this._bTime + 500) {
                this.removeChild(this._bullet2)
                this._bullet2 = new objects.Bullet(this.chooseBullet(this._turret2), this._turret2.x, this._turret2.y )
                this.addChild(this._bullet2);
                this._bullet2.update();
                createjs.Tween.get(this._bullet2).to({x:targetX, y:targetY}, 500, createjs.Ease.linear);
                this._bTime = createjs.Ticker.getTime();
            }
        }

        public chooseBullet(turret:objects.Turret):string {
            switch(turret.turretType) {
                case "Electro":
                    return "electroBullet1"
                case "Fire":
                    return "electroBullet3"
                case "Gun":
                    return "gunBullet3"
                case "Rocket":
                    return "gunBullet1"
            }
        }
    }
}