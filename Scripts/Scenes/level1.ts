/**
 * @file level1.ts
 * @author Ostap Hamarnyk
 * @date August 9 2017
 * @version 0.3
 * @description The first level of the game. Difficulty: easy. 
 */
module Scenes {
    export class Level1 extends Scenes.GameScene {
        
        // private instance variables
        private _zombies:objects.Zombie[];
        private _currentTime:number = createjs.Ticker.getTime();
        private _zombiesAdded:number = 0;
        //private _turret:objects.Turret;
        private _turret:objects.Turret;
        private _gun:createjs.Bitmap;
        private _range:createjs.Shape;
        private _angle:number;
        private _closestZombie:objects.Zombie;
        private _turretArea:objects.TurretArea;

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

        // Constructor
        constructor() {
            super("mapOne", "levelOne_s");
            this.start();
        }

        public start():void {
            this._zombies = new Array<objects.Zombie>();

            // testing turet area
            this._turretArea = new objects.TurretArea("turretArea", 240, 230);
            // testing turrets with simple shapes [images to be added later]
            this._turret = new objects.Turret("turret", 70, 230);
            this._range = new createjs.Shape();
            this._range.graphics.beginFill("#98FB98");
            this._range.alpha = .4;
            this._range.graphics.beginStroke("#1db81d");
            this._range.graphics.drawCircle(70, 230, 60);
            this._range.visible = false;
            // testing turrets' guns with simple shapes [images to be added later]
            this._gun = new createjs.Bitmap(assets.getResult("gunOne"));
            this._gun.x = 70;
            this._gun.y = 230;
            this._gun.regX = this._gun.getBounds().width / 2; // width / 2
            this._gun.regY = this._gun.getBounds().height / 2; // height / 2


            for(var i:number = 0; i < 6; i++) {
                if(i < 3) {
                    this._zombies.push(new objects.Zombie("walkerRight","walker", 0, 260));
                } else {
                    this._zombies.push(new objects.Zombie("mumblerRight", "mumbler", 0, 260));
                }
                this._zombies[i].on("click", this._zombie_Click, this);
            }
            this._closestZombie = this._zombies[0];

            this.addChild(this._range, this._turret, this._gun, this._turretArea);
            
            stage.addChild(this);

            // event listeners
            this._gun.on("click", this._gun_Click, this);
            

            this.on("click", this._stage_Click, this);

            
        }

        public update():void {
            // calculate the angle for the gun to follow the zombie
            if(this._turret.inRange(this._closestZombie)) {
                this._angle = Math.atan2(this._closestZombie.y - this._gun.y, this._closestZombie.x - this._gun.x)
                this._angle = this._angle * (180/Math.PI);
    
                // this if statement is to set angle to (0 - 360) instead of (-180 - 180)
                if(this._angle < 0)  {
                    this._angle = 360 - ( - this._angle);
                }
                this._gun.rotation = this._angle + 90;
            } 

            
            this.addZombies(this._zombies);

            this._zombies.forEach(zombie => {
                if(zombie.x > this._closestZombie.x && zombie.y > this._closestZombie.y) {
                    this._closestZombie = zombie;
                }
            });
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
            this._range.visible = true;
        }

        private _zombie_Click(event:createjs.MouseEvent) {
            console.log("clicked on zombie" + event.target.x);
            
            this._zombies.shift()
            this.removeChild(this._closestZombie);
            // this.removeChild(event.target);
            if(this._zombies.length !== 0) {
                this._closestZombie = this._zombies[0];
            } else {
                this._closestZombie.x = 0;
                this._closestZombie.y = 0;
            } 
            
        }

        private _stage_Click(event:createjs.MouseEvent) {
            if(event.target != this._gun) {
                this._range.visible = false;
                console.log("stage event");
            } 
        }

        

        
    }
}