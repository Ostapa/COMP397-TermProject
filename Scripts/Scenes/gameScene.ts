module Scenes {
    export class GameScene extends objects.Scene {
        // private instance variables 
        private _gameMap:createjs.Bitmap;
        private _settingsBtn:objects.Button;
        private _mainMenuBtn:objects.Button;
        private _background:createjs.Bitmap;
        private _zombie1:objects.Zombie;
        private _zombie2:objects.Zombie;
        private _walkers:objects.Zombie[];
        private _mumblers:objects.Zombie[];
        private _currentTime:number = createjs.Ticker.getTime();
        private _zombiesAdded:number = 0;

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


        constructor() {
            super();
        }

        public start():void {
            this._gameMap = new createjs.Bitmap(assets.getResult("mapOne"));
            this._mainMenuBtn = new objects.Button("mainMenuBtn", config.Screen.WIDTH - 135, config.Screen.HEIGHT - 30);
            this._background = new createjs.Bitmap(assets.getResult("instructionsBackground"));
            this.addChild(this._background, this._gameMap);
            
            this._walkers = new Array<objects.Zombie>();
            for(var i:number = 0; i < 10; i++) {
                this._walkers.push(new objects.Zombie("walkerRight","walker", 0, 260));
            }

            this._mumblers = new Array<objects.Zombie>();
            for(var i:number = 0; i < 10; i++) {
                this._mumblers.push(new objects.Zombie("mumblerRight", "mumbler", 0, 260));
            }
            

            this.addChild(this._mainMenuBtn);

            // event listener for home button
            this._mainMenuBtn.on("click", this._mainMenuBtn_Click, this);
            stage.addChild(this);
        }

        // event handlers for click events 
        private _mainMenuBtn_Click(event:MouseEvent) {
            scene = config.Scene.START_SCENE;
            changeScene();
        }

        public update():void {
            this.addZombies(this._walkers);
            this.addZombies(this._mumblers);


        }

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