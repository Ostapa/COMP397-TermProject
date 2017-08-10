module Scenes {
    export class ControlsScene extends objects.Scene {
        
        // private instance variables
        private _backBtn:objects.Button;
        private _mouseIconRight:createjs.Bitmap;
        private _mouseIconLeft:createjs.Bitmap;
        private _background:createjs.Bitmap;
        private _instructTitle:createjs.Text;
        private _instructMessage:createjs.Text;
        
        constructor() {
            super();
        }

        public start():void {

            this._background = new createjs.Bitmap(assets.getResult("instructionsBackground"));
            this._backBtn = new objects.Button("backBtn", 95, 450);

            this._mouseIconLeft = new createjs.Bitmap(assets.getResult("mouseIconLeft"))
            this._mouseIconLeft.x = 425;
            this._mouseIconLeft.y = 325;

            this._instructTitle = new createjs.Text("Instructions", "60px Arial", "#c6bf9c" )
            this._instructTitle.x = 150;
            this._instructTitle.y = 75;

            this._instructMessage = new createjs.Text("1. Click on a hole on the map to enable the weapon menu \n" + "\n" +
                                                      "2. Select the weapon of your" + "\n" + 
                                                      "   choosing at the desired location \n" + "\n" +
                                                      "3. click to confirm the weapon in the\n" + 
                                                      "    area", "20px Arial", "#c6bf9c" )
            this._instructMessage.x = 75;
            this._instructMessage.y = 175;
            
            this.addChild(this._background, this._backBtn, this._instructTitle, this._instructMessage, this._mouseIconLeft);
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