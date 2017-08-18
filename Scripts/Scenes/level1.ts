/**
 * @file level1.ts
 * @author Ostap Hamarnyk
 * @date August 16 2017
 * @version 0.4
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
        public _turretArea:objects.TurretArea;
        private _turretArea2:objects.TurretArea;
        public _bullet:objects.Bullet;
        private _collision:Managers.Collision;
        private _bTime:number = createjs.Ticker.getTime();
        private _shootingRange:number = 100;
        private _deadZombies:number = 0;
        private _wave2:boolean = false;
        private _zombies2:objects.Zombie[];

        // Sounds
        public level_bgSound:createjs.AbstractSoundInstance;


        // Constructor
        constructor() {
            super("mapOne", "backSound1");
            if(!this.onPause) {
                this.start();
            }
        }

        public start():void {

            backgroundSound.stop();
            this.level_bgSound = createjs.Sound.play("backSound1");
            this.level_bgSound.loop = -1;
            this.level_bgSound.volume = .2;
            this._zombies = new Array<objects.Zombie>();
            this._zombies2 = new Array<objects.Zombie>();
            
            
            // adding turet areas to the map
            this._turretArea = new objects.TurretArea("turretArea", 180, 135)
            this._turretArea2 = new objects.TurretArea("turretArea", 465, 140)
            

            for(var i:number = 0; i < 10; i++) {
                if(i < 5) {
                    this._zombies.push(new objects.Zombie("walkerRight","walker", 0, 260));
                } else {
                    this._zombies.push(new objects.Zombie("mumblerRight", "mumbler", 0, 260));
                }
            }

            for(var i:number = 0; i < 15; i++) {
                if(i < 5) {
                    this._zombies.push(new objects.Zombie("walkerRight","walker", 0, 260));
                } else {
                    this._zombies.push(new objects.Zombie("mumblerRight", "mumbler", 0, 260));
                }
            }
            this.closestZombie = this._zombies[0];

            this.addChild(this._turretArea, this._turretArea2);
            
            stage.addChild(this);
           
        }

        public update():void {
            
            if(this._deadZombies >= 10 || (this._zombies.length == 0 && this.lifeCounterAmt > 0)) {
                this.level_bgSound.stop();
                scene = config.Scene.LEVEL_2;
                changeScene()
            }

            
            if(this.closestZombie.x >= 640 && this._zombies.length != 0) {
                this.lifeCounterAmt--;
                console.log(this.lifeCounterAmt);
                this._zombies.shift();
                this.closestZombie = this._zombies[0];
            } 
            if(this.lifeCounterAmt == 0) {
                scene = config.Scene.OVER_SCENE;
                changeScene();
            }
            gameScene.updateScore();

            if(this._turretArea._turret != undefined && this.startGame) {
                for(var i:number = 0; i < this._zombies.length; i++) {
                    if(this._turretArea._turret.inRange(this._zombies[i])) {
                        this._turretArea._turret.zombieToFollow = this._zombies[i];
                        this._turretArea._turret.calculateAngle();
                        this._turretArea._turret.shoot(this._zombies[i].x, this._zombies[i].y)
                        this._turretArea._turret.checkCollision();
                        this._turretArea._turret._bullet.update();
                        if(this._turretArea._turret.zombieToFollow.isDead) {
                            this._zombies.splice(this._zombies.indexOf(this._turretArea._turret.zombieToFollow), 1);
                            this.removeChild(this._turretArea._turret.zombieToFollow, this._turretArea._turret.zombieToFollow.actualHealth, this._turretArea._turret.zombieToFollow.healthBar)
                            this._deadZombies++;
                            this.cashCounterAmt += this._turretArea._turret.zombieToFollow.rewardPoints;
                            this.updateScore();
                        }
                        break;
                    }
                }
            }
            if(this._turretArea._turret != undefined) {
                if(this._turretArea._turret.sold) {
                    this.removeChild(this._turretArea._turret);
                    this._turretArea = new objects.TurretArea("turretArea", 185, 140)
                    this.addChild(this._turretArea);
                }
            }

            if(this._turretArea2._turret != undefined && this.startGame) {
                for(var i:number = 0; i < this._zombies.length; i++) {
                    if(this._turretArea2._turret.inRange(this._zombies[i])) {
                        this._turretArea2._turret.zombieToFollow = this._zombies[i];
                        this._turretArea2._turret.calculateAngle();
                        this._turretArea2._turret.shoot(this._zombies[i].x, this._zombies[i].y)
                        this._turretArea2._turret.checkCollision();
                        this._turretArea2._turret._bullet.update();
                        if(this._turretArea2._turret.zombieToFollow.isDead) {
                            this._zombies.splice(this._zombies.indexOf(this._turretArea2._turret.zombieToFollow), 1);
                            this.removeChild(this._turretArea2._turret.zombieToFollow, 
                                            this._turretArea2._turret.zombieToFollow.actualHealth,
                                            this._turretArea2._turret.zombieToFollow.healthBar)
                                            
                            this._deadZombies++;
                            this.cashCounterAmt += this._turretArea._turret.zombieToFollow.rewardPoints;
                            this.updateScore();
                        }
                        break;
                    }
                }
            }

            if(this._turretArea2._turret != undefined) {
                if(this._turretArea2._turret.sold) {
                    this.removeChild(this._turretArea2._turret);
                    this._turretArea2 = new objects.TurretArea("turretArea", 185, 140)
                    this.addChild(this._turretArea2);
                }
            }
            if(this.startGame && createjs.Ticker.getTime() > this.waveStart + 3000) {
                this.addZombies(this._zombies);
                this._zombies.forEach(zombie => {
                    if(zombie.x > this.closestZombie.x && zombie.y > this.closestZombie.y) {
                        this.closestZombie = zombie;
                    }
                });
            }

            if(this._wave2) {
                this.addZombies(this._zombies2)
                this._zombies2.forEach(zombie => {
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
                    this.addChild(zombie.healthBar, zombie.actualHealth)
                }
            });
        }
    }
}