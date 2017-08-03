module Scenes {
    export class ControlsScene extends objects.Scene {
        
        // private instance variables
        private _backBtn:objects.Button;
        private _background:createjs.Bitmap;
        
        constructor() {
            super();
        }

        public start():void {

            this._background = new createjs.Bitmap(assets.getResult("instructionsBackground"));
            this._backBtn = new objects.Button("backBtn", 95, 450);

            this.addChild(this._background, this._backBtn);
            stage.addChild(this);

            // event listeners for close button click
            this._backBtn.on("click", this._backBtn_Click, this);
        }

        // Event handlers
        private _backBtn_Click(event:MouseEvent) {
            scene = config.Scene.START_SCENE;
            changeScene();
        }

        
    }
}