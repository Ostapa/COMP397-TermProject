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
    var ControlsScene = (function (_super) {
        __extends(ControlsScene, _super);
        function ControlsScene() {
            return _super.call(this) || this;
        }
        ControlsScene.prototype.start = function () {
            this._background = new createjs.Bitmap(assets.getResult("instructionsBackground"));
            this._backBtn = new objects.Button("backBtn", 95, 450);
            this._turretArea = new objects.TurretArea("turretArea", 100, 200);
            this._turretArea.removeAllEventListeners();
            this._options1 = new objects.TurretIcon("gunIcon", this._turretArea.x + 30, this._turretArea.y + 30);
            this._options1.removeAllEventListeners();
            this._options2 = new objects.TurretIcon("fire", this._turretArea.x + 30, this._turretArea.y - 30);
            this._options2.removeAllEventListeners();
            this._options3 = new objects.TurretIcon("electro", this._turretArea.x - 30, this._turretArea.y - 30);
            this._options3.removeAllEventListeners();
            this._options4 = new objects.TurretIcon("rocket", this._turretArea.x - 30, this._turretArea.y + 30);
            this._options4.removeAllEventListeners();
            this._sellBtn = new objects.Button("sellBtn", 180, 310);
            this._sellBtn.removeAllEventListeners();
            this._upgradeBtn = new objects.Button("upgradeBtn", 180, 365);
            this._upgradeBtn.removeAllEventListeners();
            this._noUpgradeBtn = new objects.Button("noUpgradeBtn", 180, 420);
            this._noUpgradeBtn.removeAllEventListeners();
            this._instructTitle = new createjs.Text("Instructions", "60px Arial", "#c6bf9c");
            this._instructTitle.x = 180;
            this._instructTitle.y = 75;
            this._instructMessage = new createjs.Text("Click on the turret area to select one of \nfour types of turrets \n\n\n\n" +
                "Click on the turret and then, sell button \nto remove the turret and get cash\n\n" +
                "If the upgrade button is green, you can upgrade\nthe turret\n\n" +
                "If the upgrade button is grey, kill some zombies\nto improve your turret", "20px Arial", "#c6bf9c");
            this._instructMessage.x = 175;
            this._instructMessage.y = 175;
            this.addChild(this._background, this._backBtn, this._instructTitle, this._instructMessage, this._turretArea, this._options1, this._options2, this._options3, this._options4, this._upgradeBtn, this._sellBtn, this._noUpgradeBtn);
            stage.addChild(this);
            // event listeners for close button click
            this._backBtn.on("click", this._backBtn_Click, this);
        };
        // Event handlers
        ControlsScene.prototype._backBtn_Click = function (event) {
            // ########## Play button click sound
            scene = config.Scene.START_SCENE;
            changeScene();
        };
        return ControlsScene;
    }(objects.Scene));
    Scenes.ControlsScene = ControlsScene;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=controlsScene.js.map