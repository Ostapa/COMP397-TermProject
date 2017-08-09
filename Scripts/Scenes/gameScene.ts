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
        private _currentTime:number = createjs.Ticker.getTime();
        private _zombiesAdded:number = 0;


        constructor() {
            super();
        }

        public start():void {
            this._gameMap = new createjs.Bitmap(assets.getResult("mapOne"));
            this._mainMenuBtn = new objects.Button("mainMenuBtn", config.Screen.WIDTH - 135, config.Screen.HEIGHT - 30);
            this._background = new createjs.Bitmap(assets.getResult("instructionsBackground"));
            this.addChild(this._background, this._gameMap);
            
            // this._zombie1 = new objects.Zombie("walkerUp", 100, 300);
            // this._zombie2 = new objects.Zombie("mumblerTop", 100, 330);
            this._walkers = [];
            for(var i:number = 0; i < 3; i++) {
                this._walkers.push(new objects.Zombie("walkerRight", 0, 80, i));
                console.log(this._walkers[i].name)
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
            this._walkers.forEach(zombie => {
                if(this._zombiesAdded != this._walkers.length && !zombie.added) {
                    if(createjs.Ticker.getTime() > this._currentTime + 1000) {
                        this.addChild(zombie)
                        this._currentTime = createjs.Ticker.getTime();
                        this._zombiesAdded++
                        console.log(zombie.aName + " zombie added");
                        zombie.added=true
                    }
                }
                if(zombie.added)
                zombie.update()
            });
        }
    }
}