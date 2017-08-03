module Scenes {
    export class StartScene extends objects.Scene {

        // private instance variables
        private _background:createjs.Bitmap;
        private _playBtn:objects.Button;
        private _instructionsBtn:objects.Button;

        constructor() {
            super();
        }

        public start(): void {
            this._background = new createjs.Bitmap(assets.getResult("initBackground"));
            this._playBtn = new objects.Button("playBtn", 95, 300);
            this._instructionsBtn = new objects.Button("instructionsBtn", 95, 365);

            this.addChild(this._background, this._instructionsBtn, this._playBtn);
            stage.addChild(this);

            // Event listeners
            this._instructionsBtn.on("click", this._instructionsBtn_Click, this);
            this._playBtn.on("click", this._playBtn_Click, this);
        }
        

        // Event handlers
        private _instructionsBtn_Click(event:createjs.MouseEvent) {
            // change scene to controls scene
            scene = config.Scene.CONTROLS_SCENE;
            changeScene();
        }

        private _playBtn_Click(event:createjs.MouseEvent) {
            scene = config.Scene.GAME_SCENE;
            changeScene();
        }
    }
}
