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
<<<<<<< HEAD
        //private _turret:objects.Turret;
        private _turret:createjs.Bitmap;
        private _gun:createjs.Bitmap;
        private _bullet:createjs.Bitmap;
        private _range:createjs.Shape;
        private _angle:number;
        private _closestZombie:objects.Zombie;
        private _heartLives:createjs.Bitmap;
        private _cashAvail:createjs.Bitmap;
        private _settingBtn:createjs.Bitmap;
        private _lvlOneGrass:createjs.Bitmap;
        private _markerForHole:createjs.Bitmap;

        // create an array of map points
        private _mapPoints:number[][] = [ 
            //[x, y]
            [ 0, 260, config.Direction.RIGHT],
            [160, 260, config.Direction.UP],
            [160, 60, config.Direction.RIGHT],
            [540, 60, config.Direction.DOWN],
            [540, 90, config.Direction.RIGHT],
            [640, 90, config.Direction.RIGHT]
        ];
=======
        public _turret:objects.Turret;
        private _turretArea:objects.TurretArea;
        private _turretArea2:objects.TurretArea;
>>>>>>> 5362c72049678926fa0982b7ee21ff23f3d0bbbb

        // Constructor
        constructor() {
            super("mapOne", "levelOne_s");
            this.start();
        }

        public start():void {
            this._zombies = new Array<objects.Zombie>();

            // testing gunsshot
            this._bullet = new createjs.Bitmap(assets.getResult("bullet"));
            this._bullet.x = 60;
            this._bullet.y = 175;
            this._bullet.visible = false;



            this._closestZombie = new objects.Zombie("walkerTop", "walker", 0, 0);

            this.addChild(this._range, this._turret, this._gun, this._bullet);
            for(var i:number = 0; i < 10; i++) {
                this._walkers.push(new objects.Zombie("walkerRight","walker", 0, 260));
            // testing turet area
            this._turretArea = new objects.TurretArea("turretArea", 195, 150);
            this._turretArea2 = new objects.TurretArea("turretArea", 455, 150)

            for(var i:number = 0; i < 6; i++) {
                if(i < 3) {
                    this._zombies.push(new objects.Zombie("walkerRight","walker", 0, 260));
                } else {
                    this._zombies.push(new objects.Zombie("mumblerRight", "mumbler", 0, 260));
                }
                this._zombies[i].on("click", this._zombie_Click, this);
            }
            this.closestZombie = this._zombies[0];

            this.addChild(this._turretArea, this._turretArea2);
            
            stage.addChild(this);


            this.on("click", this._stage_Click, this);


        }

        public update():void {

            //if there is a bullet, if so move upward
            if(this._bullet.isVisible() == true){

                this._bullet.y -= 4;
            }


            // calculate the angle for the gun to follow the zombie

            //if(this._gun.inRange(this._closestZombie)) {
            if(10>3) {
                this._angle = Math.atan2(this._closestZombie.y - this._gun.y, this._closestZombie.x - this._gun.x)
                this._angle = this._angle * (180/Math.PI);
                if(this._angle < 0)  {
                    this._angle = 360 - ( - this._angle);
                }
                this._gun.rotation = this._angle + 90;
                this._bullet.rotation = this._angle + 90;

            if(this._turretArea.notNull) {
                this._turretArea.update().calculateAngle(this.closestZombie);
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
                        this.lifeCounterAmt--;
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

        // Event handlers
        private _gun_Click(event:createjs.MouseEvent) {

            this._bullet.visible = true;

            this._range.visible = true;
        }

        private _stage_Click(event:createjs.MouseEvent) {
            if(event.target != this._gun) {
                this._range.visible = false;
            }
        private _zombie_Click(event:createjs.MouseEvent) {
            this._zombies.shift()
            this.removeChild(this.closestZombie);
            // this.removeChild(event.target);
            if(this._zombies.length !== 0) {
                this.closestZombie = this._zombies[0];
            } else {
                this.closestZombie.x = 0;
                this.closestZombie.y = 0;
            }
        }
    }
}