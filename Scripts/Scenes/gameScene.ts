module Scenes {
    export abstract class GameScene extends objects.Scene {
        // private instance variables 
        private _backImg:string;
        private _backSound:string;
        private _settingsBtn:objects.Button;
        private _mainMenuBtn:objects.Button;
        private _background:createjs.Bitmap;
        private _mapImg:createjs.Bitmap;
        private _heartLives:createjs.Bitmap;
        private _cashAvail:createjs.Bitmap;
        private _settingBtn:createjs.Bitmap;
        private _lvlGrass:createjs.Bitmap;
        private _markerForHole:createjs.Bitmap;

        constructor(backImg:string, backSound:string) {
            super();
            this._backImg = backImg;
            this._backSound = backSound;
            this._mapImg = new createjs.Bitmap(assets.getResult(this._backImg));
            this._mainMenuBtn = new objects.Button("mainMenuBtn", config.Screen.WIDTH - 135, config.Screen.HEIGHT - 30);
            this._background = new createjs.Bitmap(assets.getResult("instructionsBackground"));

            // event listener for home button
            this._mainMenuBtn.on("click", this._mainMenuBtn_Click, this);

            //Add the lives Icon
            this._heartLives = new createjs.Bitmap(assets.getResult("heart"))
            this._heartLives.x = 25;
            this._heartLives.y = 2;

            //Add Cash amount Icon
            this._cashAvail = new createjs.Bitmap(assets.getResult("cash"))
            this._cashAvail.x = 75;
            this._cashAvail.y = 2;

            //Add Settings Icon
            this._settingBtn = new createjs.Bitmap(assets.getResult("settings"))
            this._settingBtn.x = 600;
            this._settingBtn.y = 2;

           
            this.addChild(this._background,this._mainMenuBtn, this._mapImg, this._heartLives, this._cashAvail, this._settingBtn);
            stage.addChild(this);
            this._settingBtn.on("click", this._settingBtn_Click, this)
        }

        public start():void {
            
        }

        private _settingBtn_Click(event:createjs.MouseEvent) {
            //this._range.visible = true;
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