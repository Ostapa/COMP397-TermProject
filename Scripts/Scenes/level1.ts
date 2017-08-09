/**
 * @file level1.ts
 * @author Ostap Hamarnyk
 * @date August 9 2017
 * @version 0.1
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
        private _turret:createjs.Shape;
        private _gun:createjs.Shape;

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
            this._turret = new createjs.Shape();
            this._turret.graphics.beginFill("#000");
            this._turret.graphics.drawCircle(70, 210, 30);
            // this._turret.regX = 70 - 30;
            // this._turret.regY = 210 + 30;
            // testing turrets' guns with simple shapes [images to be added later]
            this._gun = new createjs.Shape();
            this._gun.graphics.beginFill("#fff");
            this._gun.graphics.drawRect(65, 210, 5, 30);

            this.addChild(this._turret, this._gun)
            for(var i:number = 0; i < 10; i++) {
                this._walkers.push(new objects.Zombie("walkerRight","walker", 0, 260));
            }

            for(var i:number = 0; i < 10; i++) {
                this._mumblers.push(new objects.Zombie("mumblerRight", "mumbler", 0, 260));
            }
            stage.addChild(this);
        }

        public update():void {

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
                }
            });
        }
    }
}