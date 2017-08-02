module Scenes {
    export class GameScene extends objects.Scene {
        // private instance variables 
        private _gameMap:createjs.Bitmap;
        private _settingsBtn:objects.Button;
        private _homeBtn:objects.Button;

        constructor() {
            super();
        }

        public start():void {
            this._gameMap = new createjs.Bitmap(assets.getResult("initBackground"));
            this._homeBtn = new objects.Button("playBtn", config.Screen.WIDTH - 150, config.Screen.HEIGHT - 75);

            this.addChild(this._gameMap, this._homeBtn);

            // event listener for home button
            this._homeBtn.on("click", this._homeBtn_Click, this);
            stage.addChild(this);
        }

        // event handlers for click events 
        private _homeBtn_Click(event:MouseEvent) {
            scene = config.Scene.START_SCENE;
            changeScene();
        }
    }
}