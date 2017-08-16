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

        // Constructor
        constructor() {
            super("mapOne", "levelOne_s");
            if(!this.onPause) {
                this.start();
            }
        }

        public start():void {
            this._zombies = new Array<objects.Zombie>();
            
            // adding turet areas to the map
            this._turretArea = new objects.TurretArea("turretArea", 185, 140)
            this._turretArea2 = new objects.TurretArea("turretArea", 465, 140)
            

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

            console.log("start");
            
            if(this.closestZombie.x >= 640) {
                if(this._zombies.length != 0) {
                    this.lifeCounterAmt = this.lifeCounterAmt--;
                    console.log(this.lifeCounterAmt);
                    this._zombies.shift();
                } else  {
                    scene = config.Scene.OVER_SCENE;
                    changeScene();
                }
                
                gameScene.updateScore();
            }
            console.log("finish");
            

            if(this._turretArea._turret != undefined && this.startGame) {
                for(var i:number = 0; i < this._zombies.length; i++) {
                    if(this._turretArea._turret.inRange(this._zombies[i])) {
                        this._turretArea._turret.zombieToFollow = this._zombies[i];
                        this._turretArea._turret.calculateAngle();
                        this._turretArea._turret.shoot(this._zombies[i].x, this._zombies[i].y)
                        this._turretArea._turret._bullet.update();
                        if(this._turretArea._turret.zombieToFollow.isDead) {
                            this._zombies.splice(this._zombies.indexOf(this._turretArea._turret.zombieToFollow), 1);
                            this.removeChild(this._turretArea._turret.zombieToFollow, this._turretArea._turret.zombieToFollow._healthBar)
                            this._deadZombies++;
                        }
                        break;
                    }
                }
            }

            if(this._turretArea2._turret != undefined && this.startGame) {
                for(var i:number = 0; i < this._zombies.length; i++) {
                    if(this._turretArea2._turret.inRange(this._zombies[i])) {
                        this._turretArea2._turret.zombieToFollow = this._zombies[i];
                        this._turretArea2._turret.calculateAngle();
                        this._turretArea2._turret.shoot(this._zombies[i].x, this._zombies[i].y)
                        this._turretArea2._turret._bullet.update();
                        if(this._turretArea2._turret.zombieToFollow.isDead) {
                            this._zombies.splice(this._zombies.indexOf(this._turretArea2._turret.zombieToFollow), 1);
                            this.removeChild(this._turretArea2._turret.zombieToFollow, this._turretArea2._turret.zombieToFollow._healthBar)
                            this._deadZombies++;
                        }
                        break;
                    }
                }
            }
    
            if(this.startGame) {
                this.addZombies(this._zombies);

                this._zombies.forEach(zombie => {
                    if(zombie.x > this.closestZombie.x && zombie.y > this.closestZombie.y) {
                        this.closestZombie = zombie;
                    }
                });
            }
        }

        // method to add zombies of any type to the stage and make them move in the desired direction
        public addZombies(arr:objects.Zombie[]) {
            arr.forEach(zombie => {
                if(this._zombiesAdded != arr.length && !zombie.added) {
                    if(createjs.Ticker.getTime() > this._currentTime + 1500) {
                        this.addChild(zombie);
                        this._currentTime = createjs.Ticker.getTime();
                        zombie.added = true;
                    } 
                }
                if(zombie.added) {
                    zombie.lvl1Map();
                    zombie.update();
                    this.addChild(zombie._healthBar)
                }
            });
        }
    }
}