module Scenes {
    export class GameScene extends objects.Scene {
        // private instance variables 
        private _gameMap:createjs.Bitmap;
        private _settingsBtn:objects.Button;
        private _mainMenuBtn:objects.Button;
        private _background:createjs.Bitmap;

        constructor() {
            super();
        }

        public start():void {
            this._gameMap = new createjs.Bitmap(assets.getResult("mapOne"));
            this._mainMenuBtn = new objects.Button("mainMenuBtn", config.Screen.WIDTH - 135, config.Screen.HEIGHT - 30);
            this._background = new createjs.Bitmap(assets.getResult("instructionsBackground"));
            this.addChild(this._background,this._gameMap, this._mainMenuBtn);

            // event listener for home button
            this._mainMenuBtn.on("click", this._mainMenuBtn_Click, this);
            stage.addChild(this);
        }

        // event handlers for click events 
        private _mainMenuBtn_Click(event:MouseEvent) {
            scene = config.Scene.START_SCENE;
            changeScene();
        }
    }
}