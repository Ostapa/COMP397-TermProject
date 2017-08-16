module Scenes {
    export class Level2 extends Scenes.GameScene {

        // private instance variables
        private _zombies:objects.Zombie[];
        private _currentTime:number = createjs.Ticker.getTime();
        private _zombiesAdded:number = 0;
        private _closestZombie:objects.Zombie;

        // Constructor
        private _label:objects.Label;
        constructor() {
            super("mapTwo", "levelOne_s");
            if(!this.onPause) {
                this.start();
            }


            
        }
        public start():void {
            
            this._label = new objects.Label("LEVEL 2", "60px Arial", "#c6bf9c", 0, config.Screen.CENTER_Y)
            this.addChild(this._label);
            createjs.Tween.get(this._label).to({x:config.Screen.WIDTH + this._label.getBounds().width}, 3000, createjs.Ease.linear)
            
            this._zombies = new Array<objects.Zombie>();
            // creating an array of zombies for lvl 2
            for(var i:number = 0; i < 10; i++) {
                if(i < 5) {
                    this._zombies.push(new objects.Zombie("walkerRight","walker", 0, 115));
                } else {
                    this._zombies.push(new objects.Zombie("mumblerRight", "mumbler", 0, 115));
                }
            }

            this._closestZombie = this._zombies[0]

            stage.addChild(this)

        }

        public update():void {
            if(this.startGame) {
                this.addZombies(this._zombies);

                this._zombies.forEach(zombie => {
                    if(zombie.x > this._closestZombie.x && zombie.y > this._closestZombie.y) {
                        this._closestZombie = zombie;
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
                    this.addChild(zombie._healthBar)
                }
            });
        }
    }
}