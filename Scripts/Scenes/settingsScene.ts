module Scenes {
    export class SettingsScene extends createjs.Container {
        
        // private instance variables
        private _continueBtn:objects.Button;
        private _muteBtn:objects.Button;
        private _restartBtn:objects.Button;
        private _exitBtn:objects.Button;
        private _background:createjs.Bitmap;

        constructor() {
            super();
            this.x = 0;
            this.y = 0;
            this.start();
        }

        public start():void {
            this._continueBtn = new objects.Button("continueBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y - 100)
            this._muteBtn = new objects.Button("muteBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y - 35)
            this._restartBtn = new objects.Button("restartBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 30)
            this._exitBtn = new objects.Button("exitBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 95)
            this._background = new createjs.Bitmap(assets.getResult("instructionsBackground"));

            this._continueBtn.on("click", this._continueBtn_Click, this)
            this._muteBtn.on("click", this._muteBtn_Click, this)
            this._restartBtn.on("click", this._restartBtn_Click, this)
            this._exitBtn.on("click", this._exitBtn_Click, this)


            this.addChild(this._background,this._continueBtn, this._exitBtn, this._muteBtn, this._restartBtn);
            stage.addChild(this);
        }

        // Event handlers
        private _continueBtn_Click(event:createjs.MouseEvent) {
            createjs.Ticker.setPaused(false);
            this.removeAllChildren();
            gameScene.onPause = false;
        }

        private _muteBtn_Click(event:createjs.MouseEvent) {
            createjs.Sound.muted = true;
        }

        private _restartBtn_Click(event:createjs.MouseEvent) {
            scene = config.Scene.LEVEL_1;
            changeScene();
            gameScene.onPause = false;
        }

        private _exitBtn_Click(event:createjs.MouseEvent) {
            scene = config.Scene.START_SCENE;
            changeScene();
            gameScene.onPause = false;
        }


    }
}