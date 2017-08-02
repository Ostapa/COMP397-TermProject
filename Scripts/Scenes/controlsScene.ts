module Scenes {
    export class ControlsScene extends objects.Scene {
        
        // private instance variables
        private _closeBtn:objects.Button;
        private _background:createjs.Bitmap;
        
        constructor() {
            super();
        }

        public start():void {

            this._background = new createjs.Bitmap(assets.getResult("initBackground"));
            this._closeBtn = new objects.Button("playBtn", 500, 10);

            this.addChild(this._background, this._closeBtn);
            stage.addChild(this);

            // event listeners for close button click
            this._closeBtn.on("click", this._closeBtn_Click, this);
        }

        // Event handlers
        private _closeBtn_Click(event:MouseEvent) {
            scene = config.Scene.START_SCENE;
            changeScene();
        }

        
    }
}