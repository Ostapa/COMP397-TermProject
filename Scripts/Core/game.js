/// <reference path = "_references.ts"/>
// GLOBAL GAME FRAMEWORK VARIABLES
var canvas;
var stage;
var stateFunction; // alias for our current state
var assets;
// Game Variables
var currentScene; // alias for our current state
var scene;
var preloader;
var backgroundSound;
var textureSprite;
var turretTexture;
//Game Bullets
// var bullet:createjs.Bitmap;
// Game Scenes
var startScene;
var controlsScene;
var gameScene;
var overScene;
var turretSprite = {
    "images": [
        "../../Assets/Images/turretsSprite.png"
    ],
    "frames": [
        [1, 1, 80, 80, 0, 0, 0],
        [83, 1, 24, 50, 0, 0, 0],
        [1, 83, 80, 80, 0, 0, 0],
        [1, 165, 50, 50, 0, 0, 0],
        [53, 165, 50, 50, 0, 0, 0],
        [1, 217, 50, 50, 0, 0, 0],
        [53, 217, 50, 50, 0, 0, 0]
    ],
    "animations": {
        "turretArea": { "frames": [0] },
        "gun": { "frames": [1] },
        "turretBase": { "frames": [2] },
        "electro": { "frames": [3] },
        "fire": { "frames": [4] },
        "gunIcon": { "frames": [5] },
        "rocket": { "frames": [6] }
    }
};
var zombieSprite = {
    "images": [
        "../../Assets/Images/zombies.png"
    ],
    "frames": [
        [1, 1, 23, 31, 0, 0, 0],
        [26, 1, 23, 31, 0, 0, 0],
        [51, 1, 23, 31, 0, 0, 0],
        [76, 1, 20, 31, 0, 0, 0],
        [98, 1, 20, 31, 0, 0, 0],
        [120, 1, 20, 31, 0, 0, 0],
        [142, 1, 23, 31, 0, 0, 0],
        [167, 1, 23, 31, 0, 0, 0],
        [1, 34, 23, 31, 0, 0, 0],
        [26, 34, 23, 31, 0, 0, 0],
        [51, 34, 21, 31, 0, 0, 0],
        [74, 34, 22, 31, 0, 0, 0],
        [98, 34, 22, 31, 0, 0, 0],
        [122, 34, 21, 31, 0, 0, 0],
        [145, 34, 23, 31, 0, 0, 0],
        [170, 34, 20, 32, 0, 0, 0],
        [1, 67, 23, 31, 0, 0, 0],
        [26, 67, 20, 32, 0, 0, 0],
        [48, 67, 20, 32, 0, 0, 0],
        [70, 67, 23, 32, 0, 0, 0],
        [95, 67, 21, 32, 0, 0, 0],
        [118, 67, 21, 32, 0, 0, 0],
        [141, 67, 23, 32, 0, 0, 0],
        [166, 68, 23, 33, 0, 0, 0]
    ],
    "animations": {
        "mumblerDown": {
            "frames": [0, 1, 2],
            "speed": 0.07,
        },
        "mumblerLeft": { "frames": [3, 15, 4],
            "speed": 0.07 },
        "mumblerRight": { "frames": [5, 17, 18],
            "speed": 0.07 },
        "mumblerUp": { "frames": [6, 23, 7],
            "speed": 0.07 },
        "walkerDown": { "frames": [8, 19, 9],
            "speed": 0.07 },
        "walkerLeft": { "frames": [10, 20, 11],
            "speed": 0.07 },
        "walkerRight": { "frames": [12, 21, 13],
            "speed": 0.07 },
        "walkerUp": { "frames": [14, 22, 16],
            "speed": 0.07 }
    }
};
var assetData = [
    { id: "playBtn", src: "../../Assets/Buttons/playBtn.png" },
    { id: "instructionsBtn", src: "../../Assets/Buttons/instructionsBtn.png" },
    { id: "mouseIconLeft", src: "../../Assets/Images/mouseIconLeft.png" },
    { id: "backBtn", src: "../../Assets/Buttons/backBtn.png" },
    { id: "continueBtn", src: "../../Assets/Buttons/continueBtn.png" },
    { id: "muteBtn", src: "../../Assets/Buttons/muteBtn.png" },
    { id: "restartBtn", src: "../../Assets/Buttons/restartBtn.png" },
    { id: "exitBtn", src: "../../Assets/Buttons/exitBtn.png" },
    { id: "mainMenuBtn", src: "../../Assets/Buttons/mainMenuBtn.png" },
    { id: "runWave", src: "../../Assets/Buttons/runWave.png" },
    { id: "gameTitle", src: "../../Assets/Images/Title.png" },
    { id: "logo", src: "../../Assets/Images/logo.png" },
    { id: "cash", src: "../../Assets/Images/cash.png" },
    { id: "heart", src: "../../Assets/Images/heart.png" },
    { id: "marker", src: "../../Assets/Images/marker.png" },
    { id: "settings", src: "../../Assets/Images/Settings.png" },
    { id: "initBackground", src: "../../Assets/Images/gameBackground.png" },
    { id: "instructionsBackground", src: "../../Assets/Images/instructionsBackground.png" },
    { id: "settingsBackground", src: "../../Assets/Images/settingsBackground.png" },
    { id: "bullet", src: "../../Assets/Images/oneBullet.png" },
    { id: "mapOne", src: "../../Assets/Maps/map_level_1.jpeg" },
    { id: "mapTwo", src: "../../Assets/Maps/2.jpg" },
    { id: "backSound", src: "../../Assets/Sounds/background.ogg" }
];
// function to preload assets
function init() {
    textureSprite = new createjs.SpriteSheet(zombieSprite);
    turretTexture = new createjs.SpriteSheet(turretSprite);
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(config.Game.FPS); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    scene = config.Scene.START_SCENE;
    changeScene();
    this.backgroundSound = createjs.Sound.play("backSound");
    this.backgroundSound.loop = -1;
}
function preload() {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    preloader = new objects.Preloader("#4c6051", "#000");
    preloader.x = (config.Screen.WIDTH / 2) - (preloader.width / 2);
    preloader.y = (config.Screen.HEIGHT / 2) - (preloader.height / 2);
    assets.on("progress", updatePreload, this);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
    stage.addChild(preloader);
}
function updatePreload() {
    preloader.update(assets.progress);
    stage.update();
}
// Main Game Loop
function gameLoop(event) {
    if (!this.onPause) {
        currentScene.update();
        stage.update(); // redraw/refresh stage every frame
    }
}
// state machine prep
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.START_SCENE:
            stage.removeAllChildren();
            startScene = new Scenes.StartScene();
            currentScene = startScene;
            break;
        case config.Scene.CONTROLS_SCENE:
            stage.removeAllChildren();
            controlsScene = new Scenes.ControlsScene();
            currentScene = controlsScene;
            break;
        case config.Scene.LEVEL_1:
            stage.removeAllChildren();
            gameScene = new Scenes.Level1();
            currentScene = gameScene;
            break;
        case config.Scene.LEVEL_2:
            stage.removeAllChildren();
            gameScene = new Scenes.Level2();
            currentScene = gameScene;
            break;
        case config.Scene.OVER_SCENE:
            stage.removeAllChildren();
            overScene = new Scenes.OverScene();
            currentScene = overScene;
            break;
    }
}
//# sourceMappingURL=game.js.map