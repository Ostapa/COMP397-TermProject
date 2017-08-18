module Scenes {
    export abstract class GameScene extends objects.Scene {
        // private instance variables 
        private _backImg:string;
        private _backSoundSrc:string;
        private _settingsBtn:objects.Button;
        private _mainMenuBtn:objects.Button;
        private _startBtn:objects.Button;
        private _background:createjs.Bitmap;
        public backSound:createjs.AbstractSoundInstance;
        private _mapImg:createjs.Bitmap;
        private _heartLives:createjs.Bitmap;
        private _cashAvail:createjs.Bitmap;
        private _settingBtn:createjs.Bitmap;
        private _lifeCounter:createjs.Text;
        private _cashCounter:createjs.Text;
        private _warning:createjs.Shape;
       
        public objectType:objects.Label;
        public objectHP:objects.Label;
        public objectDamage:objects.Label;
        public lifeCounterAmt:number = 10;
        public cashCounterAmt:number;
        public startGame:boolean = false;
        public waveStart:number;
        public onPause:boolean = false;
        public waveStartSound:createjs.AbstractSoundInstance;


        

        constructor(backImg:string, backSoundSrc:string) {
            super();
            this._backImg = backImg;
            this._backSoundSrc = backSoundSrc;
            this._lifeCounter = new createjs.Text(this.lifeCounterAmt.toString(), "25px Arial", "#c6bf9c" )
            this.cashCounterAmt = this.cashCounterAmt == undefined ? 30 : this.cashCounterAmt;
            this._cashCounter = new createjs.Text(this.cashCounterAmt.toString(), "25px Arial", "#c6bf9c" )
            this._mapImg = new createjs.Bitmap(assets.getResult(this._backImg));
            this._mainMenuBtn = new objects.Button("mainMenuBtn", config.Screen.WIDTH - 135, config.Screen.HEIGHT - 30);
            this._startBtn = new objects.Button("runWave", config.Screen.WIDTH - 545, config.Screen.HEIGHT - 30);
            this._background = new createjs.Bitmap(assets.getResult("instructionsBackground"));
            this._warning = new createjs.Shape();
            this._warning.graphics.beginFill("#ff0000").rr(0, 0, config.Screen.WIDTH, this._mapImg.getBounds().width, 10);
            this._warning.alpha = 0;
            
            // event listeners
            this._mainMenuBtn.on("click", this._mainMenuBtn_Click, this);
            this._startBtn.on("click", this._startBtn_Click, this);
            
            //Counter for lives 
            this._lifeCounter.x = 5;
            this._lifeCounter.y = 0;
            
            //Counter for cash
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

            // labels to show general info about the object that is clicked(zombie, turret)
            this.objectType = new objects.Label("Type: Walker", "20px Arial", "#c6bf9c", 120, config.Screen.HEIGHT - 90);
            this.objectHP = new objects.Label("HP: 20/20", "20px Arial", "#c6bf9c", 320, config.Screen.HEIGHT - 90);
            this.objectDamage = new objects.Label("Damage: 1 Life", "20px Arial", "#c6bf9c", 520, config.Screen.HEIGHT - 90);
            this.objectType.visible = false;
            this.objectHP.visible = false;
            this.objectDamage.visible = false;

            this.addChild(this._background,this._mainMenuBtn, this._mapImg, this._heartLives, 
                this._cashAvail, this._settingBtn, this._lifeCounter, this._cashCounter, this._startBtn,
                this.objectDamage, this.objectHP, this.objectType, this._warning);
            stage.addChild(this);
            this._settingBtn.on("click", this._settingBtn_Click, this)
        }

        public start():void {}

        private _settingBtn_Click(event:createjs.MouseEvent) {
            // ############ Pause game background and play start scene background sound
            createjs.Sound.stop();
            backgroundSound.play()
            backgroundSound.loop = -1;
            createjs.Ticker.setPaused(true)
            this.addChild(new Scenes.SettingsScene());
            this.onPause = true;
        }

        // event handlers for click events 
        private _mainMenuBtn_Click(event:MouseEvent) {
            createjs.Sound.stop();
            backgroundSound.play()
            backgroundSound.loop = -1;
            scene = config.Scene.START_SCENE;
            changeScene();
        }

        private _startBtn_Click(event:MouseEvent) {
            this.startGame = true;
            this.waveStart = createjs.Ticker.getTime();
            // ######## Play some sound here to start the wave ######
            this.waveStartSound = createjs.Sound.play("siren");
            createjs.Tween.get(this._warning)
                    .to({alpha:.5}, 1500)
                    .to({alpha:.1}, 1500)
                    .to({alpha:.5}, 1500)
                    .to({alpha: 0}, 1500)
                    .to({alpha:.5}, 1500)
                    .to({alpha: 0}, 1500);
            this.removeChild(this._startBtn);
        }

        public update():void {
            if(this.lifeCounterAmt <= 0) {
                scene = config.Scene.OVER_SCENE;
                changeScene();
            }

        }
        public updateScore():void {
            this._lifeCounter.text = this.lifeCounterAmt.toString();
            this._cashCounter.text = this.cashCounterAmt.toString();
        }

        public updateInfo(type:string, hpOrLvl:number, damage:number):void {
            this.objectType.text = "Type: " + type;;
            this.objectHP.text = "HP: " + hpOrLvl.toString();
            this.objectDamage.text = "Damage: " + damage.toString();
            this.objectType.visible = true;
            this.objectHP.visible = true;
            this.objectDamage.visible = true;
        }

        public clearInfo():void {
            this.objectType.visible = false;
            this.objectHP.visible = false;
            this.objectDamage.visible = false;
        }

    }
}