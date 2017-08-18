module Scenes {
    export class WonScene extends objects.Scene {
        private _background:createjs.Bitmap;
        private _message:objects.Label;
        private _playAgainBtn:objects.Button;
        
        constructor() {
            super();
            this.start();
        }

        public start():void {
            // ############# Stop the level sound and play some sound once to indicate that game is over and  
            // then play game over background music infinetely
            
            this._background = new createjs.Bitmap(assets.getResult("instructionsBackground"));
            this._message = new objects.Label("GAME OVER", "60px Arial", "#c6bf9c", config.Screen.CENTER_X, config.Screen.CENTER_Y)
            this._playAgainBtn = new objects.Button("mainMenuBtn", 300, 300);
            
            // Event listeners
            this._playAgainBtn.on("click", this._playAgainBtn_Click, this);
            
            this.addChild(this._background, this._message, this._playAgainBtn);
            stage.addChild(this);
        }


        // event handlers
        private _playAgainBtn_Click(event:createjs.MouseEvent) {
            // ########### Play button click sound
            scene = config.Scene.START_SCENE;
            changeScene();
        }

    }
}