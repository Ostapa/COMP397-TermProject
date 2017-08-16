var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scenes;
(function (Scenes) {
    var GameScene = (function (_super) {
        __extends(GameScene, _super);
        function GameScene(backImg, backSound) {
            var _this = _super.call(this) || this;
            _this.lifeCounterAmt = 10;
            _this.cashCounterAmt = 30;
            _this.startGame = false;
            _this.onPause = false;
            _this._backImg = backImg;
            _this._backSound = backSound;
            _this._mapImg = new createjs.Bitmap(assets.getResult(_this._backImg));
            _this._mainMenuBtn = new objects.Button("mainMenuBtn", config.Screen.WIDTH - 135, config.Screen.HEIGHT - 30);
            _this._startBtn = new objects.Button("runWave", config.Screen.WIDTH - 545, config.Screen.HEIGHT - 30);
            _this._background = new createjs.Bitmap(assets.getResult("instructionsBackground"));
            // event listeners
            _this._mainMenuBtn.on("click", _this._mainMenuBtn_Click, _this);
            _this._startBtn.on("click", _this._startBtn_Click, _this);
            //Counter for lives 
            _this._lifeCounter = new createjs.Text(_this.lifeCounterAmt.toString(), "25px Arial", "#c6bf9c");
            _this._lifeCounter.x = 5;
            _this._lifeCounter.y = 0;
            //Counter for cash
            _this._cashCounter = new createjs.Text(_this.cashCounterAmt.toString(), "25px Arial", "#c6bf9c");
            _this._cashCounter.x = 75;
            _this._cashCounter.y = 0;
            //Add the lives Icon
            _this._heartLives = new createjs.Bitmap(assets.getResult("heart"));
            _this._heartLives.x = 35;
            _this._heartLives.y = 2;
            //Add Cash amount Icon
            _this._cashAvail = new createjs.Bitmap(assets.getResult("cash"));
            _this._cashAvail.x = 105;
            _this._cashAvail.y = 2;
            //Add Settings Icon
            _this._settingBtn = new createjs.Bitmap(assets.getResult("settings"));
            _this._settingBtn.x = 600;
            _this._settingBtn.y = 2;
            // labels to show general info about the object that is clicked(zombie, turret)
            _this.objectType = new objects.Label("Type: Walker", "20px Arial", "#c6bf9c", 120, config.Screen.HEIGHT - 90);
            _this.objectHP = new objects.Label("HP: 20/20", "20px Arial", "#c6bf9c", 320, config.Screen.HEIGHT - 90);
            _this.objectDamage = new objects.Label("Damage: 1 Life", "20px Arial", "#c6bf9c", 520, config.Screen.HEIGHT - 90);
            _this.objectType.visible = false;
            _this.objectHP.visible = false;
            _this.objectDamage.visible = false;
            _this.addChild(_this._background, _this._mainMenuBtn, _this._mapImg, _this._heartLives, _this._cashAvail, _this._settingBtn, _this._lifeCounter, _this._cashCounter, _this._startBtn, _this.objectDamage, _this.objectHP, _this.objectType);
            stage.addChild(_this);
            _this._settingBtn.on("click", _this._settingBtn_Click, _this);
            return _this;
        }
        GameScene.prototype.start = function () {
        };
        GameScene.prototype._settingBtn_Click = function (event) {
            // ############ Pause game background and play start scene background sound
            createjs.Ticker.setPaused(true);
            this.addChild(new Scenes.SettingsScene());
            this.onPause = true;
        };
        // event handlers for click events 
        GameScene.prototype._mainMenuBtn_Click = function (event) {
            // ######## Play button click sound #######
            scene = config.Scene.START_SCENE;
            changeScene();
        };
        GameScene.prototype._startBtn_Click = function (event) {
            this.startGame = true;
            // ######## Play button click sound #######
            // ######## Play some sound here to start the wave ######
            // after that play game 1st, 2nd or 3rd level background
        };
        GameScene.prototype.update = function () {
            if (this.lifeCounterAmt <= 0) {
                scene = config.Scene.OVER_SCENE;
                changeScene();
            }
        };
        GameScene.prototype.updateScore = function () {
            this._lifeCounter.text = this.lifeCounterAmt.toString();
            this._cashCounter.text = this.cashCounterAmt.toString();
        };
        GameScene.prototype.updateInfo = function (type, hpOrLvl, damage) {
            this.objectType.text = "Type: " + type;
            ;
            this.objectHP.text = "HP: " + hpOrLvl.toString();
            this.objectDamage.text = "Damage: " + damage.toString();
            this.objectType.visible = true;
            this.objectHP.visible = true;
            this.objectDamage.visible = true;
        };
        return GameScene;
    }(objects.Scene));
    Scenes.GameScene = GameScene;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=gameScene.js.map