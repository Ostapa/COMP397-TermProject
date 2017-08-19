module Scenes {
    export class Level2 extends Scenes.GameScene {

        // private instance variables
        private _zombies:objects.Zombie[];
        private _zombies2:objects.Zombie[];
        private _currentTime:number = createjs.Ticker.getTime();
        private _zombiesAdded:number = 0;
        private _turretArea1:objects.TurretArea;
        private _turretArea2:objects.TurretArea;
        private _turretArea3:objects.TurretArea;
        private _deadZombies:number = 0;
        public level_bgSound:createjs.AbstractSoundInstance;
        public closestZombie:objects.Zombie;
        private _wave2:boolean = false;

        // Constructor
        private _label:objects.Label;
        constructor() {
            super("mapTwo", "backSound2");
            if(!this.onPause) {
                this.start();
            }
        }
        public start():void {
            createjs.Sound.stop();
            this.level_bgSound = createjs.Sound.play("backSound2");
            this.level_bgSound.loop = -1;
            this._label = new objects.Label("LEVEL 2", "60px Arial", "#c6bf9c", 0, config.Screen.CENTER_Y)
            createjs.Tween.get(this._label).to({x:config.Screen.WIDTH + this._label.getBounds().width}, 5000, createjs.Ease.linear)
            
            // adding turet areas to the map
            this._turretArea1 = new objects.TurretArea("turretArea", 190, 250)
            this._turretArea2 = new objects.TurretArea("turretArea", 300, 105)
            this._turretArea3 = new objects.TurretArea("turretArea", 510, 115)
            
            this._zombies = new Array<objects.Zombie>();
            this._zombies2 = new Array<objects.Zombie>();
            
            // creating an array of zombies for lvl 2
            for(var i:number = 0; i < 20; i++) {
                if(i < 5) {
                    this._zombies.push(new objects.Zombie("walkerRight","walker", 0, 115));
                } else {
                    this._zombies.push(new objects.Zombie("mumblerRight", "mumbler", 0, 115));
                }
            }

            // creating an array of zombies for lvl 2
            for(var i:number = 0; i < 20; i++) {
                if(i < 5) {
                    this._zombies2.push(new objects.Zombie("grunterRight","grunter", 0, 115));
                } else {
                    this._zombies2.push(new objects.Zombie("hurlerRight", "hurler", 0, 115));
                }
            }

            this.closestZombie = this._zombies[0]
            

            this.addChild(this._turretArea1, this._turretArea2, this._turretArea3, this._label)

            stage.addChild(this)

        }

        public update():void {

            if(this._deadZombies >= 30 || (this._zombies.length == 0 && this.lifeCounterAmt > 0)) {
                this.level_bgSound.stop();
                scene = config.Scene.LEVEL_3;
                changeScene()
            }

            if(this.closestZombie.y >= 350 && this._zombies.length != 0) {
                this.lifeCounterAmt--;
                this.removeChild(this._zombies[0], this._zombies[0].healthBar, this._zombies[0].actualHealth)
                this._zombies.shift();
                this.closestZombie = this._zombies[0];
            } 

            if(this.lifeCounterAmt == 0) {
                createjs.Sound.stop();
                scene = config.Scene.OVER_SCENE;
                changeScene();
            }
            gameScene.updateScore();

            if(this._turretArea1._turret != undefined && this.startGame) {
                for(var i:number = 0; i < this._zombies.length; i++) {
                    if(this._turretArea1._turret.inRange(this._zombies[i])) {
                        this._turretArea1._turret.zombieToFollow = this._zombies[i];
                        this._turretArea1._turret.calculateAngle();
                        this._turretArea1._turret.shoot(this._zombies[i].x, this._zombies[i].y)
                        this._turretArea1._turret.checkCollision();
                        this._turretArea1._turret._bullet.update();
                        if(this._turretArea1._turret.zombieToFollow.isDead) {
                            this.zombieDeath = createjs.Sound.play("zombieShort");
                            this._zombies.splice(this._zombies.indexOf(this._turretArea1._turret.zombieToFollow), 1);
                            this.removeChild(this._turretArea1._turret.zombieToFollow, 
                                this._turretArea1._turret.zombieToFollow.actualHealth,
                                this._turretArea1._turret.zombieToFollow.healthBar)
                            this._deadZombies++;
                            this.cashCounterAmt += this._turretArea1._turret.zombieToFollow.rewardPoints;
                            this.updateScore();
                        }
                        break;
                    }
                }
            }

            if(this._turretArea1._turret != undefined) {
                if(this._turretArea1._turret.sold) {
                    this.removeChild(this._turretArea1._turret);
                    this._turretArea1 = new objects.TurretArea("turretArea", 180, 140)
                    this.addChild(this._turretArea1);
                }
            }

            // turret 2 rotation and shooting
            if(this._turretArea2._turret != undefined && this.startGame) {
                for(var i:number = 0; i < this._zombies.length; i++) {
                    if(this._turretArea2._turret.inRange(this._zombies[i])) {
                        this._turretArea2._turret.zombieToFollow = this._zombies[i];
                        this._turretArea2._turret.calculateAngle();
                        this._turretArea2._turret.shoot(this._zombies[i].x, this._zombies[i].y)
                        this._turretArea2._turret.checkCollision();
                        this._turretArea2._turret._bullet.update();
                        if(this._turretArea2._turret.zombieToFollow.isDead) {
                            this.zombieDeath = createjs.Sound.play("zombieShort");
                            this._zombies.splice(this._zombies.indexOf(this._turretArea2._turret.zombieToFollow), 1);
                            this.removeChild(this._turretArea2._turret.zombieToFollow, 
                                this._turretArea2._turret.zombieToFollow.actualHealth,
                                this._turretArea2._turret.zombieToFollow.healthBar)
                            this._deadZombies++;
                            this.cashCounterAmt += this._turretArea2._turret.zombieToFollow.rewardPoints;
                            this.updateScore();
                        }
                        break;
                    }
                }
            }

            if(this._turretArea2._turret != undefined) {
                if(this._turretArea2._turret.sold) {
                    this.removeChild(this._turretArea2._turret);
                    this._turretArea2 = new objects.TurretArea("turretArea", 180, 140)
                    this.addChild(this._turretArea2);
                }
            }

            // turret 3 rotation and shooting
            if(this._turretArea3._turret != undefined && this.startGame) {
                for(var i:number = 0; i < this._zombies.length; i++) {
                    if(this._turretArea3._turret.inRange(this._zombies[i])) {
                        this._turretArea3._turret.zombieToFollow = this._zombies[i];
                        this._turretArea3._turret.calculateAngle();
                        this._turretArea3._turret.shoot(this._zombies[i].x, this._zombies[i].y)
                        this._turretArea3._turret.checkCollision();
                        this._turretArea3._turret._bullet.update();
                        if(this._turretArea3._turret.zombieToFollow.isDead) {
                            this.zombieDeath = createjs.Sound.play("zombieShort");
                            this._zombies.splice(this._zombies.indexOf(this._turretArea3._turret.zombieToFollow), 1);
                            this.removeChild(this._turretArea3._turret.zombieToFollow, 
                                this._turretArea3._turret.zombieToFollow.actualHealth,
                                this._turretArea3._turret.zombieToFollow.healthBar)
                            this._deadZombies++;
                            this.cashCounterAmt += this._turretArea3._turret.zombieToFollow.rewardPoints;
                            this.updateScore();
                        }
                        break;
                    }
                }
            }
            if(this._turretArea3._turret != undefined) {
                if(this._turretArea3._turret.sold) {
                    this.removeChild(this._turretArea3._turret);
                    this._turretArea3 = new objects.TurretArea("turretArea", 180, 140)
                    this.addChild(this._turretArea3);
                }
            }

            if(this.startGame && createjs.Ticker.getTime() > this.waveStart + 7000) {
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
                    zombie.lvl2Map();
                    zombie.update();
                    this.addChild(zombie.healthBar, zombie.actualHealth)
                }
            });
        }
    }
}