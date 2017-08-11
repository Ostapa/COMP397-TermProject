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
        private _walkers:objects.Zombie[];
        private _mumblers:objects.Zombie[];
        private _currentTime:number = createjs.Ticker.getTime();
        private _zombiesAdded:number = 0;
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

        // Constructor
        constructor() {
            super("mapOne", "levelOne_s");
            this.start();
        }

        public start():void {
            this._walkers = new Array<objects.Zombie>();
            this._mumblers = new Array<objects.Zombie>();

            // testing turrets with simple shapes [images to be added later]
            this._turret = new createjs.Bitmap(assets.getResult("turret"));
            this._turret.x = 70;
            this._turret.y = 230;
            this._turret.regX = this._turret.getBounds().width / 2;
            this._turret.regY = this._turret.getBounds().height /2 ;
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

            // testing gunsshot
            this._bullet = new createjs.Bitmap(assets.getResult("bullet"));
            this._bullet.x = 60;
            this._bullet.y = 175;
            this._bullet.visible = false;



            this._closestZombie = new objects.Zombie("walkerTop", "walker", 0, 0);

            this.addChild(this._range, this._turret, this._gun, this._bullet);
            for(var i:number = 0; i < 10; i++) {
                this._walkers.push(new objects.Zombie("walkerRight","walker", 0, 260));
            }

            for(var i:number = 0; i < 10; i++) {
                this._mumblers.push(new objects.Zombie("mumblerRight", "mumbler", 0, 260));
            }
            stage.addChild(this);

            // event listeners
            this._gun.on("click", this._gun_Click, this);

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
            }

            // this if statement is to set angle to (0 - 360) instead of (-180 - 180)
            
            this.addZombies(this._walkers);
            this.addZombies(this._mumblers);
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
                    if(zombie.x > this._closestZombie.x && zombie.y > this._closestZombie.y) {
                        this._closestZombie = zombie;
                    }
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
        }
    }
}