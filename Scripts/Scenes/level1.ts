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
        private _turretArea:objects.TurretArea;
        private _turretArea2:objects.TurretArea;
        private _bullet:objects.Bullet;
        private _collision:Managers.Collision;
        private _bTime:number;
        private _shootingRange:number = 100;
        private _deadZombies:number = 0;
        private turretIsBuild:boolean = false;

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
            this._bullet = new objects.Bullet("settings", this._turretArea.x, this._turretArea.y)

            for(var i:number = 0; i < 10; i++) {
                if(i < 5) {
                    this._zombies.push(new objects.Zombie("walkerRight","walker", 0, 260));
                } else {
                    this._zombies.push(new objects.Zombie("mumblerRight", "mumbler", 0, 260));
                }
            }
            this.closestZombie = this._zombies[0];

            this.addChild(this._turretArea, this._turretArea2, this._turret, this._bullet);
            
            stage.addChild(this);
           
        }

        public update():void {
            
            if(this._deadZombies >= 10) {
                scene = config.Scene.LEVEL_2;
                changeScene()
            }

            if(this.turretIsBuild && this._zombies.length != 0) {
                    
                    if(this._turret.inRange(this._turret, this.closestZombie, this._turret.shootingRange)) {
                        this._turret.shoot(this._bullet, this.closestZombie.x, this.closestZombie.y);
                        this._bullet.update();
                        if(this._collision.check(this.closestZombie, this._bullet)) {
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
                console.log(this._deadZombies);
                
            }

            // check if the zombie is hitted with zombie
            
    
            // calculate the angle for the gun to follow the zombie
            if(this._turretArea.notNull) {
                this._turret = this._turretArea.update();
                this._turret.calculateAngle(this.closestZombie);
                this.addChild(this._turret)
                this._turret.update();
                this.turretIsBuild = true;
                
            }
            if(this._turretArea2.notNull) {
                this._turretArea2.update().calculateAngle(this.closestZombie);
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
    }
}
