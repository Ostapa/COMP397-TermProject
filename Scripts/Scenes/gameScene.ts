module Scenes {
    export abstract class GameScene extends objects.Scene {
        // private instance variables 
        private _backImg:string;
        private _backSound:string;
        private _settingsBtn:objects.Button;
        private _mainMenuBtn:objects.Button;
        private _background:createjs.Bitmap;
        private _mapImg:createjs.Bitmap;

        constructor(backImg:string, backSound:string) {
            super();
            this._backImg = backImg;
            this._backSound = backSound;
            this._mapImg = new createjs.Bitmap(assets.getResult(this._backImg));
            this._mainMenuBtn = new objects.Button("mainMenuBtn", config.Screen.WIDTH - 135, config.Screen.HEIGHT - 30);
            this._background = new createjs.Bitmap(assets.getResult("instructionsBackground"));

            // event listener for home button
            this._mainMenuBtn.on("click", this._mainMenuBtn_Click, this);
           
            this.addChild(this._background,this._mainMenuBtn, this._mapImg);
            stage.addChild(this);
        }

        public start():void {
            
        }

        // event handlers for click events 
        private _mainMenuBtn_Click(event:MouseEvent) {
            scene = config.Scene.START_SCENE;
            changeScene();
        }
        public update():void {
        }
    }
}