module Scenes {
    export abstract class GameScene extends objects.Scene {
        // private instance variables 
        private _backImg:string;
        private _backSound:string;
        private _settingsBtn:objects.Button;
        private _mainMenuBtn:objects.Button;
        private _startBtn:objects.Button;
        private _background:createjs.Bitmap;
        private _mapImg:createjs.Bitmap;
        private _heartLives:createjs.Bitmap;
        private _cashAvail:createjs.Bitmap;
        private _settingBtn:createjs.Bitmap;
        private _lifeCounter:createjs.Text;
        private _cashCounter:createjs.Text;
        public lifeCounterAmt:number = 10;
        public cashCounterAmt:number = 30;
        public startGame:boolean = false;
        

        constructor(backImg:string, backSound:string) {
            super();
            this._backImg = backImg;
            this._backSound = backSound;
            this._mapImg = new createjs.Bitmap(assets.getResult(this._backImg));
            this._mainMenuBtn = new objects.Button("mainMenuBtn", config.Screen.WIDTH - 135, config.Screen.HEIGHT - 30);
            this._startBtn = new objects.Button("runWave", config.Screen.WIDTH - 545, config.Screen.HEIGHT - 30);
            this._background = new createjs.Bitmap(assets.getResult("instructionsBackground"));
            
            // event listeners
            this._mainMenuBtn.on("click", this._mainMenuBtn_Click, this);
            this._startBtn.on("click", this._startBtn_Click, this);
            
            //Counter for lives 
            this._lifeCounter = new createjs.Text(this.lifeCounterAmt.toString(), "25px Arial", "#c6bf9c" )
            this._lifeCounter.x = 5;
            this._lifeCounter.y = 0;
            
            //Counter for cash
            this._cashCounter = new createjs.Text(this.cashCounterAmt.toString(), "25px Arial", "#c6bf9c" )
            this._cashCounter.x = 75;
            this._cashCounter.y = 0;


            //Add the lives Icon
            this._heartLives = new createjs.Bitmap(assets.getResult("heart"))
            this._heartLives.x = 35;
            this._heartLives.y = 2;

            //Add Cash amount Icon
            this._cashAvail = new createjs.Bitmap(assets.getResult("cash"))
            this._cashAvail.x = 105;
            this._cashAvail.y = 2;

            //Add Settings Icon
            this._settingBtn = new createjs.Bitmap(assets.getResult("settings"))
            this._settingBtn.x = 600;
            this._settingBtn.y = 2;

            
           
            this.addChild(this._background,this._mainMenuBtn, this._mapImg, this._heartLives, 
                this._cashAvail, this._settingBtn, this._lifeCounter, this._cashCounter, this._startBtn);
            stage.addChild(this);
            this._settingBtn.on("click", this._settingBtn_Click, this)
        }

        public start():void {
            
        }

        private _settingBtn_Click(event:createjs.MouseEvent) {
            createjs.Ticker.setPaused(true)
        }

        // event handlers for click events 
        private _mainMenuBtn_Click(event:MouseEvent) {
            scene = config.Scene.START_SCENE;
            changeScene();
        }

        private _startBtn_Click(event:MouseEvent) {
            this.startGame = true;
        }
        public update():void {

        }
        public updateScore():void {
            this._lifeCounter.text = this.lifeCounterAmt.toString();
            this._cashCounter.text = this.cashCounterAmt.toString();
        }

    }
}